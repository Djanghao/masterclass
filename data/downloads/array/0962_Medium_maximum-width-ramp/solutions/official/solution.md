# Official Solution

**Link:** [https://leetcode.com/problems/maximum-width-ramp/solution/](https://leetcode.com/problems/maximum-width-ramp/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force (Time Limit Exceeded)

#### Intuition

For this problem, we need to efficiently find two indices `i` and `j` such that `i < j` and $\text{nums}[i] \leq \text{nums}[j]$. 

The brute force approach is to check every possible pair `(i, j)` where `i < j` and $\text{nums}[i] \leq \text{nums}[j]$, and compute the maximum ramp width.

For each valid pair, compute the width `j - i` and update the maximum width if necessary.

However, this brute force approach will not work due to the constraints below:

- $2 \leq \text{nums.length} \leq 5 \times 10^4$
- $0 \leq \text{nums}[i] \leq 5 \times 10^4$

#### Algorithm

- Initialize `n` to the size of the `nums` array and `maxWidth` to 0.
- Use a nested loop to iterate through all pairs `(i, j)` where:
  - The outer loop variable `i` goes from `0` to `n - 1`.
  - The inner loop variable `j` goes from `i + 1` to `n - 1`.
- For each pair `(i, j)`:
  - Check if `nums[i]` is less than or equal to `nums[j]`.
    - If true, calculate the width as `j - i`.
    - Update `maxWidth` with the maximum value between the current `maxWidth` and the calculated width.
- After checking all pairs, return `maxWidth` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/E2gfxGiq/shared" frameBorder="0" width="100%" height="310" name="E2gfxGiq"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n^2)$

    The algorithm uses a nested loop where the outer loop iterates $n$ times and the inner loop can iterate up to $n - 1$ times for each iteration of the outer loop. This results in a total of $\frac{n(n-1)}{2}$ iterations, leading to a quadratic time complexity of $O(n^2)$.

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space, as it only requires a few integer variables (`n` and `maxWidth`) regardless of the size of the input array `nums`. There are no data structures used that would grow with the size of the input. Hence, the space complexity is $O(1)$.

---

### Approach 2: Sorting

#### Intuition

In Approach 1, comparing `nums[i]` with `nums[j]` needed to be done for all pairs since `nums` is not sorted in order. This leads to an inefficient solution. 

To make our solution more efficient, we can sort the indices of the array based on the values of `nums`. This way, when processing indices in the sorted order, each value is guaranteed to be greater than or equal to the values of previously processed indices.

Once the indices are sorted, we track the smallest index we've seen so far as we move through the sorted list. For each index we encounter, we calculate the difference between the current index and the smallest one. This difference represents a potential ramp width, and we update our maximum width as we go.

#### Algorithm

- Find the size of the input array `nums` and initialize a array `indices` of the same size to hold the indices.
- Initialize the `indices` array and fill it with values from `0` to `n-1` (each index corresponding to its position in `nums`).
- Sort the `indices` based on the values in `nums`:
  - Use a custom comparator to ensure stability while sorting:
    - Compare values in `nums` for the corresponding indices.
    - If the values are equal, maintain the original order of the indices.
- Initialize `minIndex` to `n` (a value larger than any possible index) to track the minimum index encountered so far.
- Initialize `maxWidth` to `0` to store the maximum width ramp found.
- Iterate over the sorted `indices`:
  - Update `maxWidth` to be the maximum of its current value and the difference between the current index (`indices[i]`) and `minIndex`.
  - Update `minIndex` to be the minimum of its current value and the current index (`indices[i]`).
- Return `maxWidth` as the result (the maximum width found).

#### Implementation

<iframe src="https://leetcode.com/playground/DqjkzxEw/shared" frameBorder="0" width="100%" height="500" name="DqjkzxEw"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n \log n)$

    The most significant factor in the time complexity comes from the sorting operation on the `indices` array. Sorting takes $O(n \log n)$ time. The subsequent loop that calculates the maximum width ramp runs in $O(n)$ time. Thus, the overall time complexity is dominated by the sorting step, resulting in $O(n \log n)$.

- Space complexity: $O(n + S) = O(n)$

    The space complexity is primarily determined by the additional `indices` array that stores the indices of the `nums` array, which requires $O(n)$ space. Other variables used in the algorithm are of constant space, leading to an overall space complexity of $O(n)$.

    The other additional space used is for the sorting algorithm. The space taken by the sorting algorithm ($S$) depends on the language of implementation:
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
    - In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.

---

### Approach 3: Two Pointers

#### Intuition

Another way to approach the problem is to recognize that if we could process the indices in such a way that we can easily compare their relative positions, it might help us avoid unnecessary comparisons. 

We can notice that it would be helpful to know the maximum value from each index to the end of the array.  Given this information, we can easily check if the ramp condition is satisfied for any left index while iterating from the start of the array. Thus, we initialize `rightMax` where each element at index `i` stores the maximum value from index `i` to the last index. We populate this array in reverse order. Starting from the end of the `nums` array, we set the last element of `rightMax` to be equal to the last element of `nums`. For all previous indices, we store the maximum of the current value in `nums[i]` and the value at `rightMax[i + 1]`. This ensures that each index in `rightMax` contains the highest value from that index to the end of the original array.

With `rightMax` constructed, we can proceed with our two-pointer approach. We initialize one pointer (`left`) at the start of the array and another pointer (`right`) that we will move through the array. As we iterate:
- We check if the condition $nums[left] \leq rightMax[right]$ holds. If true, we calculate the ramp width as `right - left` and update our maximum width if this is the largest we’ve seen.
- If the condition is not satisfied, it means the value at `nums[left]` is too large to form a ramp with `rightMax[right]`, so we increment the `left` pointer to try and find a smaller value.

#### Algorithm

- Initialize `n` as the size of the input vector `nums`.
- Create a `rightMax` array of the same size to store the maximum values from the right side of `nums`.
- Fill the `rightMax` array:
  - Set `rightMax[n - 1]` to `nums[n - 1]` (the last element).
  - Iterate backward from the second-to-last element to the first:
    - For each index `i`, set `rightMax[i]` to the maximum of `rightMax[i + 1]` and `nums[i]`.
- Initialize two pointers, `left` and `right`, both starting at 0, and a variable `maxWidth` initialized to 0.
- Traverse the array using `left` and `right` pointers:
  - While `right` is less than `n`:
    - Move the `left` pointer forward while the current value at `nums[left]` exceeds the corresponding value in `rightMax[right]`.
    - Calculate the current width as `right - left` and update `maxWidth` to the maximum of `maxWidth` and the current width.
    - Increment the `right` pointer.
- Return `maxWidth` as the result (the maximum width found).

#### Implementation

<iframe src="https://leetcode.com/playground/CFRwxcEm/shared" frameBorder="0" width="100%" height="500" name="CFRwxcEm"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n)$

    The algorithm consists of two main parts. The first loop fills the `rightMax` array, which takes $O(n)$ time since it iterates through the `nums` array once. The second part uses a two-pointer technique to traverse the `nums` array and the `rightMax` array, where both pointers traverse the array at most $n$ times. Thus, the total time taken is linear in terms of the size of the input array, leading to an overall time complexity of $O(n)$.

- Space complexity: $O(n)$

    The space complexity is determined by the additional storage used, which in this case is the `rightMax` array. This array also has a size of $n$, resulting in a space complexity of $O(n)$. Other variables used (like `left`, `right`, and `maxWidth`) take constant space, $O(1)$, but they do not contribute to the overall space complexity.

---

### Approach 4: Monotonic Stack

#### Intuition

We notice that for any element $nums[i]$, we'd like to consider the indices of all elements $nums[j]$ preceding $nums[i]$ such that $nums[j] < nums[i]$. We can efficiently find all these indices by maintaining a monotonic stack. The key observation is that this problem involves finding valid pairs where an earlier index has a smaller or equal value than a later index, making it a perfect candidate for a monotonic stack. This way, whenever we encounter a value in $nums$ that is greater than the element at the index in top of our stack, we can pop all the indices from the stack to find left indices that can form valid pairs.

As we iterate over the array, we push indices onto a stack only if the value at the current index is smaller than or equal to the value at the index on top of the stack. This ensures that the stack contains a list of potential starting points for ramps, in decreasing order of value. The key insight is that when we encounter a larger value, we begin popping indices from the stack. For each index popped, we calculate the ramp width formed with the current index and check if it exceeds the maximum width we have tracked. Since the values on the stack are always decreasing, popping an index means that we have found a ramp where the condition $nums[i] \leq nums[j]$ is satisfied. 

The algorithm is visualized below: 

!?!../Documents/962/monotonic.json:1025,535!?!

#### Algorithm

- Initialize `n` to the size of the `nums` array and create an empty stack `indicesStack`.
- Iterate through the array from index 0 to `n-1`.
    - If `indicesStack` is empty or the value at the top index of the stack is greater than the current value `nums[i]`, push `i` onto the stack.
    - This ensures the stack contains indices in increasing order of their corresponding values in `nums`.
- Initialize `maxWidth` to 0.
- Iterate through the array from index `n-1` down to 0.
    - While the stack is not empty and the value at the index on the top of the stack is less than or equal to `nums[j]`:
    - Update `maxWidth` to the maximum of its current value and the width calculated as `j - indicesStack.top()`.
    - Pop the index from the stack, as it has already been processed.
- Return `maxWidth` as the result (the maximum width found).

#### Implementation

<iframe src="https://leetcode.com/playground/bUmS9o8r/shared" frameBorder="0" width="100%" height="500" name="bUmS9o8r"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n)$

    The first loop iterates through the `nums` array once, pushing indices onto the stack. This operation takes $O(n)$ time in the worst case since each index is pushed at most once. The second loop also iterates through the `nums` array, but each index is popped from the stack at most once. Hence, both loops combined result in a total of $O(n)$ time complexity.

- Space complexity: $O(n)$

    The space complexity arises primarily from the stack that holds indices. In the worst case, where all elements are in strictly increasing order, all $n$ indices could be pushed onto the stack. Therefore, the space complexity is $O(n)$ in this scenario. 

---