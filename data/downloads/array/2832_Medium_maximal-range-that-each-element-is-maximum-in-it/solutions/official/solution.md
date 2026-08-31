# Official Solution

**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solution/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a 0-indexed array `nums` of distinct integers. We need to construct an array `ans` so that, for each index `i`, `ans[i]` represents the maximum length of a subarray in which nums[i] is the largest element.

Since `nums` contains distinct elements, it is guaranteed that each element will be the maximum in at least one subarray.

If you aren't experienced with monotonic stacks, consider starting with a similar problem available here: [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/).

---

### Approach: Monotonic Stack

#### Intuition   

What’s the smallest possible size of a subarray where the current element is the maximum? The answer is 1, because the element itself is a subarray of size 1. Since we want to find the longest subarray that contains the current element, we can start adding elements from the left or the right side of the current element. Now, let's consider the elements to the left of the current element:

- If these elements are smaller than the current element, they can be included in the subarray.
- However, as soon as we encounter an element larger than the current one, we must stop, as the current element can no longer be the maximum in the subarray.

The same logic applies to the elements on the right side: we expand the subarray until we encounter a larger element. Therefore, the largest subarray for which the current element is the maximum includes all valid elements to the left and right, plus the current element itself.

While this idea is intuitive, applying it to every element in the array is computationally expensive, leading to a "Time Limit Exceeded" (TLE) error. To optimize this, we can leverage a [stack](https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/), which allows for efficient last-in, first-out (LIFO) processing with constant-time push and pop operations.

To implement this concept in a stack, we can divide our steps into two parts:
1. Stack Processing
2. Storing Indices

In step 1, we check if the stack is empty. If the stack is not empty and the top element is not greater than the current element, we pop elements from the stack. This ensures that we discard elements that cannot be the next greater element.

Once we find a greater element at the top of the stack, this element is the nearest greater element to the left of the current element, due to the LIFO property. All other elements in the stack were added before the current element, making the top stack element the closest greater element. If the stack is empty, it means there is no greater element to the left.

In step 2, after processing the current element, we push its index onto the stack in the hope that it might be the next greater element for upcoming elements. Since we are interested in the positions of the elements rather than their values, we store their indices in the stack instead of the actual values. For example, `left[currentIndex]` would denote the index of the next greater element to the left of `nums[currentIndex]`.

We repeat these steps while iterating `nums` from right to left and store the index values in an array `right`.

Once we have the indices of the next greater element to the right and the next greater element to the left for each element, we can calculate the size of the largest subarray where the current element is the maximum. The size is determined by subtracting the left index from the right index and subtracting one from the result (`right[currentIndex] - left[currentIndex] - 1`).

#### Algorithm

1. Create two arrays `left` and `right` to store the nearest greater elements for each element in `nums`.
   - `left[currIdx]` will store the index of the nearest greater element to the left of `nums[currIdx]`.
   - `right[currIdx]` will store the index of the nearest greater element to the right of `nums[currIdx]`.
2. Initialize a stack `idxStack` to store the indices of the next/previous greater elements.
3. Iterate over the array `nums` using a loop to compute the left boundaries of subarrays:
   - For each index `currIdx` from 0 to `n-1`:
     - While `idxStack` is not empty and `nums[idxStack.top()] < nums[currIdx]`, pop the `idxStack`.
     - If `idxStack` is empty, set `left[currIdx] = -1`, indicating no greater element exists to the left.
     - Otherwise, set `left[currIdx] = idxStack.top()`, the index of the nearest greater element to the left.
     - Push the current index `currIdx` onto the stack.
3. Clear the stack for reuse.
4. Iterate over the array `nums` using another loop to compute the right boundaries of subarrays:
   - Iterate through the indices from `n-1` to `0`:
     - While `idxStack` is not empty and `nums[idxStack.top()] < nums[currIdx]`, pop the stack.
     - If `idxStack` is empty, set `right[currIdx] = n`, indicating no greater element exists to the right.
     - Otherwise, set `right[currIdx] = idxStack.top()`, the index of the nearest greater element to the right.
     - Push the current index `currIdx` onto the stack.
5. Compute the maximal range for each element:
   - Initialize an array `ans` of size `n`.
   - For each index `currIdx` from 0 to `n-1`, calculate `ans[currIdx] = right[currIdx] - left[currIdx] - 1`, representing the size of the largest subarray where `nums[currIdx]` is the maximum.
6. Return the array `ans` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/LvKtyhsp/shared" frameBorder="0" width="100%" height="500" name="LvKtyhsp"></iframe>

#### Complexity Analysis

Let `n` be the size of the input array `nums`.

- Time Complexity: $O(n)$

    The algorithm processes each element of the array exactly twice (once for finding the nearest greater element to the left and once for the right). Using a stack ensures that each push and pop operation is $O(1)$, making the overall complexity for both left and right boundary calculations $O(n)$. Calculating the maximal range for each element also takes $O(n)$. Hence, the total time complexity is $O(n)$.

- Space complexity: $O(n)$

    The algorithm uses two arrays, `left` and `right`, each of size `n`, contributing $O(n)$ space. Additionally, a stack is used, which in the worst case can hold up to `n` elements, adding another $O(n)$. Therefore, the total space complexity is $O(n)$.

---