# Official Solution

**Link:** [https://leetcode.com/problems/largest-number/solution/](https://leetcode.com/problems/largest-number/solution/)

---

[TOC]

## Solution

---

### Overview 

We need to arrange a list of non-negative integers such that their concatenation results in the largest possible number. Return this largest number as a string.

To solve this, we use a custom comparator—a function or object that defines how two elements are compared for sorting. It’s used when the default comparison operations (like `<` or `>`) do not fit the requirements of a particular task. In this case, we want to compare numbers based on the result of their concatenation in two different orders.

First, we convert each integer to a string. Then, we sort the array of strings.

Sorting the numbers in descending order might seem like a good idea, but it leads to issues when numbers share the same leading digit. For example, sorting `[9, 5, 34, 3, 30]` in descending order gives `"9534303"`, but the correct answer is `"9534330"`. The problem arises because `"3"` and `"30"` share the same leading digit. 

To fix this, we compare the concatenated results of pairs of numbers. For example, given two numbers `a` and `b`, we compare `a + b` and `b + a` (where `+` denotes string concatenation). If `a + b` is larger, we place `a` before `b`. This ensures that the numbers are ordered correctly for the largest possible result.

The key is that this comparison ensures that the greedy approach of comparing pairs of numbers leads to the correct result. The difficult part is proving that this greedy logic always gives the correct answer.

##### Proof of Correctness

Objective: To ensure that our custom comparator for sorting numbers produces the largest possible concatenated number.

1. Transitivity of the Comparator:

    To verify the validity of the comparator, we need to prove that it is transitive. In other words, if number `A` should come before `B`, and `B` should come before `C`, then `A` must come before `C` in the final order.

    We define the function:

    $$
    \begin{aligned}
        f(X) &= 10^{\text{lg}(X) + 1}
    \end{aligned}
    $$

    where $\text{lg}(X)$ denotes the logarithm base 10 of $X$. This function helps in determining the power of 10 needed to position `X` correctly when concatenating.

2. Comparator Verification:

    If concatenating `A` and `B` as `AB` is less than or equal to `BA`, we need to verify that:

    $$
    \begin{aligned}
        f(B)A + B &\leq f(A)B + A \\
        (f(B) - 1)A &\leq (f(A) - 1)B \\
        A &\leq \frac{B \cdot (f(A) - 1)}{f(B) - 1}
    \end{aligned}
    $$

    Similarly, if `B` and `C` satisfy:

    $$
    \begin{aligned}
        BC &\leq CB \\
        (f(C) - 1)B &\leq (f(B) - 1)C \\
        B &\leq \frac{C \cdot (f(B) - 1)}{f(C) - 1}
    \end{aligned}
    $$

3. By Combining These Inequalities:

    $$
    \begin{aligned}
        A &\leq \frac{C \cdot (f(A) - 1)}{f(C) - 1} \\
        (f(C) - 1)A &\leq (f(A) - 1)C \\
        f(C)A + C &\leq f(A)C + A \\
        AC &\leq CA
    \end{aligned}
    $$

    This demonstrates that if `A` is before `B` and `B` is before `C`, then `A` must come before `C`, maintaining a consistent ordering.

4. By Establishing the Consistency of the Comparator:

    We confirm that sorting numbers with this comparator yields the largest concatenated number. For example, sorting `[3, 30, 34, 5, 9]` yields `[9, 5, 34, 3, 30]`, which concatenates to `"9534330"`, the largest possible number.

---

### Approach 1: Using Built-in Function  

#### Intuition

To begin with, we need to determine the best order for the numbers to form the largest possible number when concatenated. We first convert each integer in the list to a string. This conversion allows us to compare different concatenated results. For instance, if we have the numbers `56` and `9`, converting them to strings allows us to compare `"569"` and `"956"`.

Next, we use a custom sorting function to order these strings. This function compares two strings, `a` and `b`, by evaluating `a + b` against `b + a`. If `a + b` is greater, then `a` should come before `b` in the sorted list to maximize the final result.

Once sorted, we concatenate all the strings. If the first element in this sorted list is "0", it indicates that all numbers were zeros, so the largest number possible is "0". In this case, we return "0". If not, we return the concatenated result. 

#### Algorithm

- Initialize `numStrings` as an array of strings to hold string representations of numbers.

- Convert each integer in `nums` to a string and store it in `numStrings`.

- Sort `numStrings` based on concatenated values:
  - Use a lambda function to compare concatenated results (`a + b` and `b + a`).
  - Ensure that the concatenation which forms a larger number determines the order.

- Check if the largest number formed is "0":
  - If the first element in `numStrings` is "0", return "0" (handles cases where all numbers are zero).

- Concatenate all strings in `numStrings` to form the largest number.

- Return the concatenated result as the largest number.

#### Implementation

<iframe src="https://leetcode.com/playground/me8hcMir/shared" frameBorder="0" width="100%" height="497" name="me8hcMir"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time Complexity: $O(n \log n)$

    The most time-consuming operation is the sorting step, which uses a custom comparator. The sorting algorithm has a time complexity of $O(n \log n)$. The conversion of numbers to strings and concatenation operations are linear with respect to the number of elements.

- Space Complexity: $O(n + S)$

    Additional space is used for storing the string representations of the numbers and the final concatenated result, which scales linearly with the size of the input array.

    Some extra space is used when we sort an array of size $n$ in place. The space complexity of the sorting algorithm ($S$) depends on the programming language. The value of $S$ depends on the programming language and the sorting algorithm being used:
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O( \log n )$
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$

    Thus, the total space complexity of the algorithm is $O(n + S)$.

---

### Approach 2: Quick Sort

#### Intuition

Quick Sort uses a divide-and-conquer method to sort the numbers. We start by selecting a pivot and partitioning the list into two parts based on how each number compares with the pivot. Specifically, we compare concatenated results like `a + pivot` with `pivot + a`.

We recursively sort the two partitions and then combine them. This recursive sorting ensures that the entire list is ordered such that concatenating all numbers results in the largest possible number.

After sorting, we concatenate the numbers. If the final string starts with '0', it means all numbers were zeros, so we return "0". Otherwise, we return the concatenated result. This approach efficiently sorts and merges numbers to achieve the desired outcome.

Each of these approaches aims to sort the numbers in such a way that their concatenation produces the largest possible number. By using different sorting techniques and comparison methods, we can achieve the correct order efficiently.

</br>
 
Let’s take the list `[3, 30, 34, 5, 9]`. To apply quick sort, we first select a pivot, such as `34`. We then partition the list so that numbers that produce a larger concatenated result with the pivot come before it, and those that produce a smaller result come after it.

For each number compared to `34`:
- Compare `"3"` with `"34"`. Concatenate as `"34" + "3" = "343"` and `"3" + "34" = "334"`. Since `"343"` is greater, `"3"` is placed after `"34"`.
- Compare `"30"` with `"34"`. Concatenate as `"34" + "30" = "3430"` and `"30" + "34" = "3034"`. Since `"3430"` is greater, `"30"` is placed after `"34"`.

The same process applies to `"5"` and `"9"`. The result of the partitioning places `"9"`, `"5"`, and `"34"` correctly relative to each other, but in the final list, we sort based on which numbers yield larger concatenated results when placed in various orders.

After applying quick sort recursively to each partition, the list gets sorted to `[9, 5, 34, 3, 30]`. Concatenating these numbers results in `"9534330"`, which is the largest number possible.

#### Algorithm

- Call `quickSort(nums, 0, nums.size() - 1)` to sort the numbers in descending order based on their concatenated values.

- `quickSort` function:
  - If `left` is greater than or equal to `right`, return (base case: the array or sub-array is already sorted).
  - Call `partition(nums, left, right)` to partition the array around a pivot and get the pivot index.
  - Recursively call `quickSort` on the left sub-array (`left` to `pivotIndex - 1`).
  - Recursively call `quickSort` on the right sub-array (`pivotIndex + 1` to `right`).

- `partition` function:
  - Choose the rightmost element as the pivot.
  - Rearrange elements so that elements that, when concatenated with the pivot, form a larger number are moved to the left.
  - Swap elements to place the pivot in its correct position.
  - Return the pivot index.

- `compare` function:
  - Compare the concatenated strings of `firstNum` and `secondNum` to determine their order.

- Concatenate the sorted numbers into a string to form the largest number.

- Handle the edge case where the largest number is zero:
  - Return "0" if the first character of the concatenated string is '0'.
  - Otherwise, return the concatenated string.

#### Implementation

<iframe src="https://leetcode.com/playground/M4JEvsXx/shared" frameBorder="0" width="100%" height="500" name="M4JEvsXx"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time Complexity: $O(n \log n)$ on average, $O(n^2)$ in the worst case

    Quick sort generally has an average time complexity of $O(n \log n)$, though its worst-case time complexity is $O(n^2)$ if the pivot selection consistently results in unbalanced partitions. The average case is efficient due to its partitioning strategy.

- Space Complexity: $O(\log n)$ on average, $O(n)$ in the worst case

    The space complexity for quick sort is $O(\log n)$ due to the depth of the recursion stack in the average case. In the worst case, it can be $O(n)$ if the recursion depth is not balanced.

---

### Approach 3: Merge Sort

#### Intuition

Merge sort involves recursively dividing the list into smaller parts until each part contains a single number. Sorting single-number parts is straightforward, so we focus on merging these parts in the correct order.

During the merging process, we compare numbers by concatenating their string representations. We ensure that larger concatenated results come first in the merged list. This is done by comparing combinations like `a + b` and `b + a` and placing the larger result first.

After merging all parts, we obtain a sorted list where concatenating all numbers forms the largest number. If this result starts with '0', all numbers are zero, so we return "0". Otherwise, we return the concatenated result.

For example, with the list `[3, 30, 34, 5, 9]`, we first split it into `[3, 30]` and `[34, 5, 9]`.

We recursively divide these segments further until each segment contains a single number. We then merge these single-number segments, comparing concatenated results to determine the order. For example, merging `[3]` and `[30]`, we find `"330"` is greater than `"303"`, so `"30"` should precede `"3"`.

Merging all segments with similar comparisons results in the list `[9, 5, 34, 3, 30]`. Concatenating these numbers gives `"9534330"`, the largest possible number.

#### Algorithm

- Sort the `nums` array using a custom merge sort to arrange numbers in a way that forms the largest possible concatenated number.

- `mergeSort` function:
  - If the range of elements to be sorted (`left` to `right`) is a single element, return it as it is already sorted.
  - Divide the array into two halves (`left` and `right`) by finding the middle index.
  - Recursively sort the left and right halves.
  - Merge the sorted halves using the `merge` function.

- `merge` function:
  - Initialize two indices to iterate over the left and right halves of the array.
  - Compare elements from the left and right halves based on custom concatenation order (using the `compare` function).
  - Append the larger element to the sorted array and move the corresponding index.
  - After processing all elements from one half, append the remaining elements from the other half.

- `compare` function:
  - Concatenate `firstNum` and `secondNum` in both possible orders and compare them.
  - Return `true` if `firstNum` should appear before `secondNum` in the final sorted order based on the concatenated result.

- After sorting, concatenate the sorted numbers to form the largest number.
  - Return "0" if the largest number starts with '0' (handles cases where all numbers are zero); otherwise, return the concatenated result.

#### Implementation

<iframe src="https://leetcode.com/playground/4f5VffNf/shared" frameBorder="0" width="100%" height="500" name="4f5VffNf"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time Complexity: $O(n \log n)$

    Merge sort divides the array into halves and merges them in $O(n \log n)$ time. Each merge operation is linear in the size of the array being merged, and the recursive divide-and-conquer approach ensures a logarithmic depth of recursion.

- Space Complexity: $O(n)$

    Merge sort requires additional space for the temporary arrays used during merging. For each recursive call, we use extra space proportional to the size of the array being merged.
   
    The depth of the recursion stack is $O(\log n)$, and the space used per level of recursion for merging is $O(n)$. So, the total space complexity is $O(n)$.

    Creating the final string involves space proportional to the size of the final string, which is $O(n)$.

---

### Approach 4: HeapSort

#### Intuition


Heapsort helps us find the largest concatenated number by using a priority queue, which we often call a max heap.

First, we need to turn each number into a string. This way, we can compare different concatenations of these strings. We then insert these string representations into a max heap. The max heap will arrange these strings based on our custom comparison function and The heap uses this comparison to decide which string should come first.

Say we have the numbers `[3, 30, 34, 5, 9]`. We start by converting each number to a string, resulting in `["3", "30", "34", "5", "9"]`. We insert these strings into the heap. The heap sorts these strings based on which concatenation yields a larger number. 

For instance, comparing `"30"` and `"3"` involves checking if `"303"` is larger than `"330"`. Since `"330"` is larger, `"3"` will be prioritized over `"30"` in the heap. After inserting all strings, the heap will arrange them in a way that ensures the largest number comes out first.

Next, we remove elements from the heap one by one and build our result string. By concatenating these strings in the order they come out of the heap, we get the largest possible number. Finally, if the result starts with '0', we return "0" because this means all numbers were zeros.

</br>

The algorithm is visualized below:

!?!../Documents/179/heapsort.json:925,695!?!

#### Algorithm

- Initialize a max heap to store numbers as strings in a custom sorted order, using the `compare` function.

- Initialize a variable `totalLength` to track the total length of all numbers converted to strings.

- Iterate over each number `num` in `nums`:
  - Convert the integer `num` to a string `strNum`.
  - Add the length of `strNum` to `totalLength`.
  - Push `strNum` into the max heap using the custom comparison function to maintain the order.

- Initialize an empty string `result` and reserve space based on `totalLength` for efficiency.

- While the max heap is not empty:
  - Append the top element (largest string based on custom comparison) from the max heap to `result`.
  - Pop the top element from the max heap.

- Check if the resulting string is empty or starts with `'0'`:
  - If true, return `"0"` to handle the edge case where the result might be a string of zeros.

- Otherwise, return the final `result` string, which represents the largest possible number.

- `compare` function:
  - Given two strings `first` and `second`, compare them by concatenating them in two different orders (`first + second` and `second + first`).
  - Return `true` if `(first + second)` is less than `(second + first)`, ensuring the correct order for the largest number construction.\

#### Implementation

<iframe src="https://leetcode.com/playground/VUHJjLZT/shared" frameBorder="0" width="100%" height="500" name="VUHJjLZT"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time Complexity: $O(n \log n)$

    Converting each integer to a string takes $O(\log k)$ time per integer, where $k$ is the integer value. If there are $n$ integers, the total time for conversion is $O(n \log k)$.
    
    Inserting each string into the priority queue takes $O(\log n)$ time per insertion. Since there are $n$ strings, this step contributes $O(n \log n)$.
    
    Extracting elements from the priority queue and concatenating them into the result string takes $O(n \log n)$ time due to the heap operations and string concatenations.

    Combining these steps, the overall time complexity is dominated by the heap operations, so:
    
    Converting integers to strings takes $O(n \log k)$ time, and inserting each string into the priority queue takes $O(n \log n)$. Building the result string takes $O(n \log n)$. Thus, the overall time complexity is $O(n \log n)$.

- Space Complexity: $O(n)$

    The priority queue stores $n$ strings, each of which can be up to $O(\log k)$ in length. Hence, the space required for the priority queue is $O(n \log k)$.

    The result string stores all $n$ integers, so its space complexity is $O(n \log k)$. Since these are the main contributors to space complexity, the overall space complexity is $O(n \log k) = O(n)$.

---

### Approach 5: TimSort 

#### Intuition

TimSort is a sorting algorithm that combines insertion sort and merge sort.

We start by dividing the list into small segments called runs. Each run is a segment of the list that is sorted independently using insertion sort. Insertion sort is well-suited for this task because it efficiently handles small or already partially sorted segments. For instance, in our example list `[3, 30, 34, 5, 9]`, TimSort first breaks it into runs. Since the list is small, it might treat the entire list as a single run or split it into smaller manageable runs like `[3, 30]` and `[34, 5, 9]` [Usually runs are not this small but for the sake of this example lets say its 2].

> Minrun is chosen from the range 32 to 64 inclusive, such that the size of the data, divided by minrun, is equal to, or slightly less than, a power of two.

Next, we merge these sorted runs into larger, sorted segments. During the merging phase, we use a custom comparison function to determine the order of numbers based on which concatenated result is larger.

After all runs are merged, we get a fully sorted list arranged to form the largest possible number. Finally, we check if the result starts with '0'. If it does, this indicates that all numbers are zeros, so we return "0".

Consider the list `[3, 30, 34, 5, 9]`. TimSort starts by sorting small runs like `[3, 30]` and `[34, 5, 9]` using insertion sort. It then merges these runs, comparing concatenated results to determine the correct order. For instance, it would compare `"330"` with `"303"` and place `"3"` before `"30"` because `"330"` is larger. The final merge step sorts the list to `[9, 5, 34, 3, 30]`. Concatenating these gives us the largest number, `"9534330"`.

Timsort aims to optimize the merging process by ensuring that the number of runs is close to a power of two. Merging is most effective when the number of runs is equal to or just under a power of two, while it becomes less efficient when the number of runs exceeds a power of two. To achieve this, Timsort selects the value of `RUN` so that the total number of runs is close to a power of two.

`RUN` is chosen within the range of 32 to 64. It is set so that the total size of the data divided by `RUN` is either equal to or slightly less than a power of two. The method for determining `RUN` involves taking the six most significant bits of the array size, adding one if any of the remaining bits are set, and using this result for `RUN`. This approach accommodates all array sizes, including those smaller than 64. For arrays with 63 or fewer elements, `RUN` is set equal to the array size, effectively reducing Timsort to insertion sort for those smaller arrays.

> Fun fact: Timsort is highly regarded for its efficiency and stability. It is more advanced compared to older algorithms like bubble sort or insertion sort. Invented by Tim Peters in 2002, it was named after him. Timsort is used in Python sort.

#### Algorithm

- Sort the `nums` array using the custom `timSort` algorithm.
  
- `timSort` function:
  - For each small run of size `RUN` (32 elements), call `insertionSort` to sort the subarrays.
  - After sorting small runs, iteratively merge them using the `merge` function until the entire array is sorted.

- `insertionSort` function:
  - Iterate through the subarray from `left + 1` to `right`.
  - For each element, store it in a temporary variable `temp`.
  - Compare `temp` with its previous elements (from right to left) using the `compare` function:
    - If the comparison returns `true` (i.e., `temp` should precede the compared element), shift the previous element to the right.
  - Insert `temp` in its correct position once all comparisons are done.

- `merge` function:
  - Split the array into two subarrays: `leftArr` (from `left` to `mid`) and `rightArr` (from `mid + 1` to `right`).
  - Merge the two subarrays back into the original array:
    - Compare the elements from both subarrays using the `compare` function.
    - Insert the smaller element into the original array and proceed until both subarrays are fully merged.

- `compare` function:
  - Convert the two numbers `firstNum` and `secondNum` into strings.
  - Concatenate them in both possible orders and return `true` if the first concatenation results in a larger number.

- Once `nums` is sorted, concatenate all elements in `nums` to form the `largestNum` string.

- If the first character of `largestNum` is `'0'`, return `"0"` to handle the case where all numbers are zero.

- Otherwise, return `largestNum` as the final result.

#### Implementation

<iframe src="https://leetcode.com/playground/2SDuwQiU/shared" frameBorder="0" width="100%" height="500" name="2SDuwQiU"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n \log n)$

    The main time-consuming operation here is the sorting step using TimSort. Its time complexity is $O(n \log n)$ in the average and worst cases. 

    Specifically:
    - The insertion sort runs in $O(n^2)$ time on small segments (runs), but since it operates on a limited size of $RUN$, the total cost for insertion sorting all runs is $O(n)$ in practice.
    - The merge step involves merging pairs of runs and is performed $\log n$ times, leading to the overall time complexity of $O(n \log n)$ for TimSort.

    Concatenating the numbers to form the final string has a linear time complexity $O(n)$, but it doesn't affect the overall complexity since $O(n \log n)$ dominates.

- Space complexity: $O(n)$

    The space complexity is dominated by the space used for temporary storage during merging:
    - The `leftArr` and `rightArr` vectors in the merge function require $O(n)$ space in total.
    - The extra space used for the `largestNum` string is $O(n)$.

    Other auxiliary space used in the algorithm, such as variables and function call stacks, is minimal compared to the space required for arrays.

    Thus, the overall space complexity is $O(n)$.

---

</br>

</br>

### Further Thoughts:

You might be wondering why merging is most effective when the number of runs is equal to or just below a power of two, and why it becomes less efficient when the number of runs exceeds this number.

The main reason for this is that merging is most balanced when the number of runs is a power of two. In general, if the data is randomly ordered, each run will typically be about the size of `minrun`. When the number of runs matches a power of two, merging operations can proceed in a perfectly balanced manner throughout the process. This balance minimizes the number of comparisons and data movements needed.

If the number of runs is slightly more than a power of two, the merging process becomes less balanced. This imbalance results in inefficient merges, as you end up with uneven merge sizes, leading to increased comparisons and data movement.

Conversely, if the number of runs is slightly fewer than a power of two, the merges remain relatively balanced, although not perfectly. This slight imbalance causes only a minor increase in inefficiency compared to the ideal scenario.

For example, if you have nine natural runs with lengths of 800, 100, 100, 100, 100, 100, 100, 100, and 100 elements, the merges will still be well-balanced, even though the number of runs is slightly above a power of two.

Tim Peters talks about this in his [listsort.txt](https://github.com/python/cpython/blob/main/Objects/listsort.txt) file. He points out that using a `minrun` of 32 isn't always the best choice. For example, if you have 2,112 elements, splitting them into runs of 32 means it will take 7 steps to merge everything. The first 6 runs merge smoothly, but after reaching 2,048 elements, the final merge becomes less efficient. This leads to more comparisons and extra data movement.

Now, if the run size is 33, it will take 6 steps to merge everything: 33, 66(33 * 2), 132(66 * 2), 264(132 * 2), 528(264 * 2), 1,056(528 * 2) and then 2,112(1,056 * 2). But with a run size of 32, you'll need 7 steps: 32, 64, 128, 256, 512, 1,024, 2,048, and then 2,112.

</br>

You can view the full implementation of TimSort, including all the detailed aspects, in the file located at [https://svn.python.org/projects/python/trunk/Objects/listobject.c](https://svn.python.org/projects/python/trunk/Objects/listobject.c). This implementation was crafted by Tim Peters.

</br>

Here’s a snippet taken from `listobject.c` showing how to determine the minimum run size for a subarray in the Timsort algorithm based on the size of the initial array `n`.

```c
/* Compute a good value for the minimum run length; natural runs shorter
 * than this are boosted artificially via binary insertion.
 *
 * If n < 64, return n (it's too small to bother with fancy stuff).
 * Else if n is an exact power of 2, return 32.
 * Else return an int k, 32 <= k <= 64, such that n/k is close to, but
 * strictly less than, an exact power of 2.
 *
 * See listsort.txt for more info.
 */
static Py_ssize_t
merge_compute_minrun(Py_ssize_t n)
{
    Py_ssize_t r = 0;           /* becomes 1 if any 1 bits are shifted off */

    assert(n >= 0);
    while (n >= 64) {
        r |= n & 1;
        n >>= 1;
    }
    return n + r;
}
```

---