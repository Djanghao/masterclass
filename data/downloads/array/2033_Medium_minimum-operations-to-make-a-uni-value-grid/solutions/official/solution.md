# Official Solution

**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solution/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a 2D integer array `grid`, a number `x`, and the ability to add or subtract `x` from any element in the grid any number of times. Our goal is to determine the smallest number of such operations needed to make all elements in the grid equal. If it is impossible to achieve this, we return `-1`. 

We can see that if it is possible to make all elements equal, the optimal final value must be one of the original numbers in the grid, as any other value may require unnecessary extra steps. 

For example, given `grid = [[2, 4], [6, 8]]` and `x = 2`, we can make all elements equal to `10` in `4 + 3 + 2 + 1 = 10` operations. However, this is not optimal because, along the way, we reached a state where all elements were equal to `8` in just `3 + 2 + 1 = 6` operations (not the best, but still better). From that point, increasing all numbers by `2` again is unnecessary.

---

### Approach 1: Sorting and Median

#### Intuition

First, let's think about when it's possible to make all grid elements equal.

Consider any two numbers in the grid, `a` and `b`, and a number `x`. Suppose we want to make both `a` and `b` equal to some value `v. The only operation allowed is adding or subtracting `x` some number of times. This means we must be able to reach `v` from both `a` and `b` using `x`.  

For this to be possible, the differences `v - a` and `v - b` must both be multiples of `x`, or equivalently:  

$(v - a) \% x = 0 \quad \text{and} \quad (v - b) \% x = 0$  

Rearranging this, we get:  

$a \% x = b \% x = v \% x$  

This tells us that all numbers in the grid must have the same remainder when divided by `x`. Otherwise, it is impossible to transform them into a single value using only `x`-sized steps.  

For example, if `grid = [[1, 8], [3, 5]]` and `x = 2`, we cannot make all elements equal to any odd value because `8` is even, and adding `2` any number of times will always result in an even number. Similarly, we cannot make all elements equal to any even value because `1`, `3`, and `5` are odd, and adding `2` will always keep them odd. Since we cannot make all numbers have the same parity, it is impossible to make the grid uni-value.  

Thus, our first step is to check if all numbers in the grid have the same remainder when divided by `x`. If they don't, we immediately return `-1`. Otherwise, our goal is to find the smallest number of operations required.

To make things easier, note that the arrangement of numbers in the grid doesn’t affect our task at all, since we can apply operations to any number, no matter its position. So, we can simplify the problem by flattening the grid into a one-dimensional array.

Now, which value should we aim to make all numbers equal to?  

- If we pick a value too large, then the smaller numbers will need many additions of `x` to reach it.  
- If we pick a value too small, then the larger numbers will need many subtractions of `x`.  

A natural choice is the **median** of the numbers.  

Why? The median is the balancing point that minimizes the total distance numbers need to move. By choosing the median, we ensure that half of the numbers shift up and the other half shift down, naturally minimizing the total number of operations.
For example, consider `grid = [[2, 4], [6, 8]]` with `x = 2`:  
- If we make all values `8`, we need `3 + 2 + 1 + 0 = 6` operations.  
- If we choose `4` (the median), the operations reduce to `1 + 0 + 1 + 2 = 4`.  

In fact, selecting the median of the numbers always results in the smallest number of operations.

>    The **median** value of a set of numbers is the value at which half of the numbers in the set are below it, and the other half are above it. 

<details>
<summary>Click here for a formal proof</summary>
<br>

Let's assume that $x = 1$ for simplicity. Define $f(i)$ as the number of operations required to make all elements equal to $a_i$, where $a$ is the flattened, sorted array containing all elements of the grid. Then:
$$
f(i) = (a_i - a_0) + (a_i - a_1) + ... + (a_i - a_{i - 1}) + (a_{i + 1} - a_i) + ... + (a_{mn} - a_i)
$$
Similarly, for $f(i - 1)$:
$$
f(i - 1) = (a_{i - 1} - a_0) + (a_{i - 1} - a_1) + ... + (a_{i - 1} - a_{i - 2}) + (a_{i} - a_{i - 1}) + ... + (a_{mn} - a_{i - 1})
$$
Subtracting these expressions gives:
$$
f(i) - f(i - 1) = i \cdot (a_i - a_{i - 1}) + (mn-i) \cdot (a_{i - 1} -a_i)=(2i - mn)(a_i - a_{i - 1})
$$
Since $a_i > a_{i - 1}$, the sign of $f(i) - f(i - 1)$ depends on $2i - mn$:

-   If $2 \cdot i < mn$, then $f(i) < f(i-1)$, meaning that $f$ is decreasing.
-   If $2 \cdot i > mn$, $f(i) > f(i-1)$, meaning that $f$ is increasing.

Thus, the minimum value occurs at $f(\frac{mn}{2})$ or $f(\frac{mn - 1}{2})$.

</details>
<br>

To find the median, we first sort the array in non-decreasing order and then pick the middle value. Next, we iterate through the array again to calculate how many operations are needed for each number to reach the median, and then we sum these operations.

> In C++, we can avoid fully sorting the array by using the `nth_element` function. This operation runs in linear time and ensures that the desired element is placed at the index it would occupy in a fully sorted array. For the median, this means the element will be placed at the middle index. 

#### Algorithm

-   Initialize:
    -   an empty array, called `numsArray` to store all numbers.
    -   a variable `result = 0` to store the total number of operations.
-   Flatten the `grid` into `numsArray`, by iterating over its elements and pushing them into it.
-   Sort `numsArray` in non-decreasing order.
-   Initialize `length` to the size of `numsArray`.
-   Store the median of the array (`numsArray[length / 2]`) in `finalCommonNumber`.
-   For each `number` in `numsArray`:
    -   If `number % x != finalCommonNumber % x`, return `-1`, as we found two elements in the array with different remainders when divided by `x`.
    -   Otherwise, increment `result` by the number of operations needed for this element to become equal to `finalCommonNumber`, i.e. `abs(finalCommonNumber - number) / x`.
-   Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/9k3csGTs/shared" frameBorder="0" width="100%" height="500" name="9k3csGTs"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ the number of columns in the `grid`.

-   Time complexity: $O(mn \times \log{mn})$

    First, we loop through the grid’s elements to flatten it into a one-dimensional array, which takes $O(mn)$ time. Then, we sort the `numsArray` in $O(mn \times \log{mn})$, since it contains $m \cdot n$ elements. Finally, we go through the array, performing constant-time operations (arithmetic and checks) in each step, which takes another $O(mn)$ time. Therefore, the overall time complexity is dominated by the sorting step and is equal to $O(mn \times \log{mn})$.

    > In C++, we replace sorting with the `nth_element` function, which runs in $O(\frac{mn}{2}) = O(mn)$ time. Therefore, the total time complexity for this implementation is equal to $O(mn)$.

-   Space complexity: $O(mn)$

    We create an array to store all numbers in the grid, which requires $O(mn)$ space. Apart from that, we only use a fixed number of variables (`finalCommonValue`, `result`, etc.) that take up constant space. 

    Lastly, we must account for the space that is required for sorting ($S$), which depends on the language of implementation:

    -   In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log mn)$.
    -   In C++, the `nth_element()` function has a constant space complexity of $O(1)$, as it performs the rearrangement in-place without requiring additional memory proportional to the size of the input.
    -   In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(mn)$.
    
    As a result, the space complexity of the algorithm is determined by the size of the `numsArray` and is equal to $O(mn)$.

---

### Approach 2: Prefix and Suffix Sums

#### Intuition

In this approach, we discuss an alternative to the greedy solution mentioned earlier. Instead of assuming that the median will always minimize the number of operations, we will check each element to see if it can be the final common value for the grid. 

A simple way to do this is to iterate over the elements of the flattened array and consider each one as the potential final value for the grid. For each value, we would loop through the array again to calculate how many operations are needed to make each number equal to this value. Then, we would update the result with the total number of operations. However, this approach uses two nested loops, resulting in quadratic time complexity which is inefficient for the given constraints.

How can we optimize it then? 

First, let’s break down the number of operations needed to make all elements equal to $a_i$. For simplicity, we’ll assume the array is sorted. To calculate the operations required for the smaller elements, we get:
$$
\frac{a_i - a_0}{x} + \frac{a_i - a_1}{x} + ... \frac{a_i - a_{i - 1}}{x}
$$

As mentioned earlier, if a solution exists, all elements have the same remainder when divided by $x$, so each fraction is an integer. In that case, the sum can be simplified as:

$$
\frac{i \cdot a_i - (a_0 + a_1 + ... + a_{i - 1})}{x}
$$

Notice that $a_0 + a_1 + ... + a_{i - 1}$ is a fixed value — the sum of the array up to index $i$, also known as the prefix sum.
Similarly, for the greater elements, the operations can be expressed as:

$$
\frac{(a_{i + 1} + a_{i + 2} + ... + a_{\text{length} - 1}) - (\text{length} - i - 1) \cdot a_i}{x}
$$

This is related to the suffix sum from index $i$ onward.

With the prefix and suffix sums precomputed, we can quickly calculate the number of operations needed for each potential final value in constant time. 

As in the previous approach, we begin by flattening the grid into a one-dimensional array and checking if all elements have the same remainder when divided by `x`. If they do, we calculate the prefix and suffix sum arrays and iterate over the array again to compute the number of operations for each potential common value, updating the result with the smallest number of operations.

#### Algorithm

-   Initialize:
    -   an empty array, called `numsArray` to store all numbers.
    -   a variable `result = INF` to store the smallest number of required operations.
-   For each element `grid[row][col]`:
    -   If `grid[row][col] % x != grid[0][0] % x`, return `-1`, since we found two elements with different remainders when divided by `x`.
    -   Otherwise, push `grid[row][col]` into `numsArray`.
-   Sort `numsArray` in non-decreasing order.
-   Initialize `length` to the size of `numsArray`.
-   Create two arrays, called `prefixSum` and `suffixSum`, of size `length` with all elements initially set to `0`.
-   Loop over `numsArray` with `index` from `1` to `length - 1`:
    -   Calculate the prefix sum up to `index`, excluding `numsArray[index]`, as `prefixSum[index] = prefixSum[index - 1] + numsArray[index - 1]`.
-   Loop over `numsArray` in reverse with `index` from `length - 2` to `0`:
    -   Calculate the suffix sum from `index`, excluding `numsArray[index]`, as `suffixSum[index] = suffixSum[index + 1] + numsArray[index + 1]`.
-   Loop over `numsArray` one more time to calculate the number of operations required for each potential final value:
    -   Calculate `leftOperations` as `(numsArray[index] * index - prefixSum[index]) / x`.
    -   Calculate `rightOperations` as `(suffixSum[index] - numsArray[index] * (length - index - 1)) / x`.
    -   Update the result with the minimum of its current value and `leftOperations + rightOperations`.
-   Return `result`.
 
#### Implementation

<iframe src="https://leetcode.com/playground/RqtDUKLk/shared" frameBorder="0" width="100%" height="500" name="RqtDUKLk"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ the number of columns in the `grid`.

-   Time complexity: $O(mn \times \log{mn})$

    As in the previous approach, we first flatten the grid into a one-dimensional array, which takes $O(mn)$ time. We then sort the array in $O(mn \times \log{mn})$ time. After that, we perform three separate loops, each running exactly $mn$ times and performing constant-time operations in each iteration. These loops calculate the prefix and suffix sum arrays and, ultimately, the smallest number of operations required. As a result, the overall time complexity is again dominated by the sorting step, making it $O(mn \times \log{mn})$.

-   Space complexity: $O(mn)$

    We create three arrays, `numsArray`, `prefixSum`, and `suffixSum`, each of size $mn$. Sorting `numsArray` may require additional space: $O(\log {mn})$ in C++ and Java (for in-place sorting algorithms like Quicksort) and $O(mn)$ in Python (for Timsort, which uses extra space for merges). However, the dominant factor in space complexity is the auxiliary arrays, leading to an overall space complexity of $O(mn)$.

---

### Approach 3: Two Pointers

#### Intuition

In this approach, we don’t start by fixing the final common value of the grid. Instead, we take a gradual approach. We progressively make all elements equal by extending the prefix and suffix of the flattened array that already contain equal elements.

We initialize two pointers, `prefixIndex` and `suffixIndex`, which start at the first and last elements of the sorted, flattened array, respectively. Our goal is to move these pointers toward the middle until they meet.

To move `prefixIndex`, we need to ensure that all elements up to `prefixIndex + 1` are equal. The number of operations required to achieve this can be calculated inductively. Suppose the first `prefixIndex` elements are already equal. To make them equal to `a[prefixIndex + 1]`, we need `prefixIndex * (a[prefixIndex + 1] - a[prefixIndex]) / x` operations.

Similarly, we determine the number of operations needed to move `suffixIndex` closer to the middle by making all elements in the corresponding suffix equal. In each step, we extend either the prefix or the suffix, choosing the one with fewer elements at that point.

By following this process, we gradually make all elements equal to the median of the array, which matches our original strategy.

#### Algorithm

-   Initialize:
    -   an empty array, called `numsArray` to store all numbers.
    -   a variable `result = 0` to count the smallest number of required operations.
-   For each element `grid[row][col]`:
    -   If `grid[row][col] % x != grid[0][0] % x`, return `-1`, since we found two elements with different remainders when divided by `x`.
    -   Otherwise, push `grid[row][col]` into `numsArray`.
-   Sort `numsArray` in non-decreasing order.
-   Initialize:
    -  `length` to the size of `numsArray`.
    -  `prefixIndex` to `0`.
    -  `suffixIndex` to `length - 1`.
-   While `prefixIndex < suffixIndex`, meaning that we have more elements to process:
    -   If the prefix of equal elements is currently shorter than the suffix, i.e., `prefixIndex < length - suffixIndex + 1`:
        -   Calculate `prefixOperations` as `(prefixIndex + 1) * (numsArray[prefixIndex + 1] - numsArray[prefixIndex]) / x`.
        -   Increment `result` by `prefixOperations`, i.e., the number of operations needed to make the first `prefixIndex + 1` elements equal.
        -   Increment `prefixIndex` by `1`.
    -   Otherwise:
        -   Calculate `suffixOperations` as `(length - suffixIndex) * (numsArray[suffixIndex] - numsArray[suffixIndex - 1]) / x`.
        -   Increment `result` by `suffixOperations`, i.e., the number of operations required to make the last `length - suffixIndex` elements of the array equal.
        -   Decrement `suffixIndex` by `1`.
-   Return `result`.
 
#### Implementation

<iframe src="https://leetcode.com/playground/PKKUmw66/shared" frameBorder="0" width="100%" height="500" name="PKKUmw66"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ the number of columns in the `grid`.

-   Time complexity: $O(mn \times \log{mn})$

    Like in the previous approaches, we first flatten the grid in $O(mn)$ time and sort it in $O(mn \times \log{mn})$ time. Then, we make a final pass over its elements using the two pointers, which requires another $O(mn)$ time. Therefore, the overall time complexity, dominated by the sorting step, is equal to $O(mn \log {mn})$.

-   Space complexity: $O(mn)$

    The algorithm uses only the `numsArray` that contains exactly $mn$ elements along with a fixed number of variables (`result`, `prefixIndex`, `suffixIndex`, etc.). Sorting the array requires extra space $S$, which depends on the language of implementation:

    -   In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log mn)$.
    -   In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log mn)$.
    -   In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(mn)$.
    
    Overall, the space complexity is bounded by the size of the `numsArray`, and therefore it remains equal to $O(mn)$.

---