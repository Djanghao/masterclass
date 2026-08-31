# Official Solution

**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solution/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solution/)

---

[TOC]

## Solution
    
---

### Approach 1: Binary Search

#### Intuition

Consider an element $x$. Using the given operation, $x$ can be transformed into any integer within the range $[x - k, x + k]$. To find the longest subsequence where all elements are identical, our objective is to apply the operation to each element in a manner that maximizes the number of equal elements.

Let's consider each number in the array as a range of possible values it can become. We'll illustrate this concept using Example 1 from the problem description.

![](../Figures/2779/ranges.png)

Notice that we can make two elements equal if their possible value ranges overlap. For instance, when `k = 2` and we have the numbers 1 and 4, we can change them both to 3. This is possible because 1 can become any number from -1 to 3, and 4 can become any number from 2 to 6. Since these ranges overlap, we can select a number from that overlapping section.

Thus, we can conclude that in our collection of ranges, all those that overlap can be changed to have equal values. Therefore, the highest number of equal values will be equal to the largest collection of overlapping ranges.

To efficiently count overlapping ranges, consider two numbers $x$ and $y$, where $x \leq y$. Now, $x$ and $y$ can be converted to the same number as long as the maximum possible value of the changed $x$ is greater than or equal to the minimum possible value of the changed $y$, i.e.:

$$
\begin{aligned}
 &x + k \geq y - k  \\ 
\implies& y - x \leq 2 \cdot k \\
\implies& y \leq x + 2 \cdot k 
\end{aligned}
$$

In simpler terms, for any number $x$, it can form a subsequence with all numbers that fall within the range from $x$ to $x + 2k$. To efficiently find these numbers, we can use [Binary Search 🔗](https://leetcode.com/explore/learn/card/binary-search/), but first, we need to sort the array.

After sorting, we use binary search for each number in the array to identify the largest value that does not exceed $x + 2k$. If we find such a value at index $j$, and our current number is at index $i$, then $j - i + 1$ represents the length of the possible subsequence. The maximum length found among all numbers in the array is our answer.

#### Algorithm

> Note: While most programming languages provide built-in methods for finding the upper bound in a sorted list, we have implemented our own method here for clarity and completeness.

- Initialize a variable `maxBeauty` to `0` to track the maximum beauty possible.
- Sort the input array `nums` in ascending order to enable efficient range-based searching.
- For each index `i` from 0 to the length of `nums`:
  - Calculate the target value as `nums[i] + 2*k`, which represents the maximum possible equal value achievable for any element in the range.
  - Find the `upperBound` index where `nums[upperBound]` is the largest element less than or equal to the target value.
  - Update `maxBeauty` to be the maximum of current `maxBeauty` and `(upperBound - i + 1)`.
- Return `maxBeauty` as the final answer.

In the `findUpperBound(arr, val)` helper function:
- Initialize variables `low` to 0 and `high` to the length of the array minus 1.
- Initialize a `result` variable to 0 to store the latest valid index.
- While `low` is less than or equal to `high`:
  - Calculate `mid` as the average of `low` and `high`.
  - If the element at the `mid` index is less than or equal to the target `val`:
    - Update `result` to `mid`.
    - Update `low` to `mid + 1` to search in the right half.
  - Else:
    - Update `high` to `mid - 1` to search in the left half.
- Return the final `result` index.

#### Implementation

<iframe src="https://leetcode.com/playground/SxYkPenx/shared" frameBorder="0" width="100%" height="500" name="SxYkPenx"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.

- Time complexity: $O(n \cdot \log n)$

    The time complexity is dominated by two major operations. First, sorting the input array takes $O(n \cdot \log n)$ time. Second, for each element in the array, we perform a binary search, which takes $O(\log n)$ time. Since this binary search is performed $n$ times, the total time complexity is $O(n \cdot \log n)$.

    Therefore, the overall time complexity is $2 \cdot O(n \cdot \log n) = O(n \cdot \log n)$.

- Space complexity: $O(S)$

    The space taken by the sorting algorithm ($S$) depends on the language of implementation:
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n)$.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
    - In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.

    All other variables used by the algorithm take constant space. Thus, the space complexity is $O(S)$.

---

### Approach 2: Sliding Window

#### Intuition

When we look for the longest subsequence each number can form, we're essentially looking for a window of consecutive numbers. Instead of repeatedly searching for where each window ends, we can be more efficient by using a technique called the sliding window approach.

This involves maintaining a range with a left and a right boundary that dynamically adjusts as we move through the sorted array. Starting with both boundaries at the beginning of the array, we extend the right boundary to include as many numbers as possible while ensuring the condition holds — specifically, that the difference between the largest and smallest numbers in the range does not exceed $2 \cdot k$. If the condition is violated, we adjust the left boundary to restore the range. The maximum length of this range across all positions gives us the desired result. 

> For a more comprehensive understanding of the sliding window technique, check out the [Sliding Window Explore Card 🔗](https://leetcode.com/explore/learn/card/array-and-string/204/sliding-window/). This resource provides an in-depth look at the sliding window approach, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize a variable `maxBeauty` to `0` to track the maximum beauty possible.
- Sort the input array `nums` in ascending order.
- Initialize a variable `right` to `0` to serve as the right pointer of our window.
- For each index `left` from `0` to length of `nums`:
  - While `right` is less than the length of `nums` and the difference between elements at `right` and `left` indices is $\leq$ `2*k`:
    - Increment `right` pointer by 1.
  - Update `maxBeauty` to be the maximum of current `maxBeauty` and `(right - left)`.
- Return `maxBeauty` as our answer.

#### Implementation

<iframe src="https://leetcode.com/playground/E8N6kKk9/shared" frameBorder="0" width="100%" height="412" name="E8N6kKk9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums`.

- Time complexity: $O(n \cdot \log n)$

    The time complexity is dominated by the initial sorting operation which takes $O(n \cdot \log n)$ time. The subsequent two-pointer traversal, while appearing to be nested loops, actually has linear complexity because the right pointer never resets - it only moves forward. This means each element is visited at most twice (once by the `left` pointer and once by the `right` pointer), contributing $O(n)$ to the time complexity. 
    
    Thus, the overall time complexity remains $O(n \cdot \log n)$.

- Space complexity: $O(S)$

    The space complexity of the sorting algorithm ($S$) depends on the language of implementation:
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n)$.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
    - In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.
    
    The algorithm does not use any additional space aside from that used by the sorting.

    Thus, the overall space complexity is $O(S)$.

---

### Approach 3: Line Sweep

#### Intuition

We need to find the maximum overlap across all ranges defined by the numbers. Visualize this as laying pieces of cloth on a number line to represent the range of values each number can span. When ranges overlap, the cloths stack on top of each other. Our objective is to identify the point with the most layers of cloth and count those layers.

To implement this concept, we'll create an array `count` to represent the entire possible range of values (our number line). This array will have a size of `maxValue + 1` to accommodate the maximum possible range. We'll then iterate over the `nums` array, marking the ranges in `count` by incrementing the indices within each range by 1. The highest value in `count` will indicate the point of maximum overlap, which is our answer.

![](../Figures/2779/count.png)

However, repeatedly looping over the ranges to populate `count` is inefficient. Instead, we'll mark the start and end positions of each range with `+1` and `-1`, respectively. This allows us to fill the ranges later by calculating the prefix sum of the array. When we encounter the start of a range, our running total increases by 1, and it remains elevated until we reach the end of that range, where it decreases by 1.

We'll maintain a variable `maxBeauty` to track the maximum value encountered while filling the `count` array. This value, stored in `maxBeauty`, will be returned as the maximum beauty of the array.

#### Algorithm

- Initialize a variable `maxBeauty` to `0` to track the maximum subsequence length.
- If array length is 1, return `1` as the answer since a single element forms a subsequence of length 1.
- Find the maximum element in the array and store it in a variable `maxValue`.
- Create a `count` array of size `maxValue + 1` initialized with zeros to track range overlaps.
- For each number `num` in the input array:
  - At index `max(num - k, 0)`, increment count by 1 to mark the start of the range.
  - At index `min(num + k + 1, maxValue)`, decrement count by 1 to mark the end of the range.
- Initialize `currentSum` to `0` to track the running sum of overlapping ranges.
- Iterate through the `count` array:
  - Add current `count` value to `currentSum`.
  - Update `maxBeauty` to the maximum of the current `maxBeauty` and `currentSum`.
- Return `maxBeauty` as the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/ZdVC9FDw/shared" frameBorder="0" width="100%" height="500" name="ZdVC9FDw"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `nums` and $\text{maxValue}$ be the maximum value in the array.

- Time complexity: $O(n + \text{maxValue})$

    The time complexity has multiple components. First, finding the maximum value requires one pass through `nums` taking $O(n)$ time. Then, we make another pass through the array to update the `count` array, taking $O(n)$ time. Finally, we iterate through the `count` array of size $(\text{maxValue}+1)$ taking $O(\text{maxValue})$ time. 
    
    Thus, the overall time complexity is $2 \cdot O(n) + O(\text{maxValue}) = O(n + \text{maxValue})$.

- Space complexity: $O(\text{maxValue})$

    The space complexity is dominated by the `count` array which has a size of $\text{maxValue}+1$. We only use a constant number of additional variables, so they don't affect the asymptotic space complexity. So, the overall space complexity is $O(\text{maxValue})$.

---