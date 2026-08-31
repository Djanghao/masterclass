# Easy Dart solution | Beats 100% | O(n)

**Author:** cgsbUwUajM
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/6005789/](https://leetcode.com/problems/sliding-window-maximum/solutions/6005789/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initially, my thoughts on solving this problem revolved around understanding the requirements for efficiently finding the maximum values in each subarray of a given size k. A naive approach would be to iterate through each subarray, find the maximum value using a nested loop, and store the result. However, I quickly realized that this approach would have a time complexity of O(nk), which is not optimal for large arrays.

I considered that to improve efficiency, I would need a method that could track and update the maximum value as the window slides over the array, without recalculating the maximum from scratch each time. This led me to think about using data structures that support quick access and updates, such as a double-ended queue (deque), which could help maintain the maximum value efficiently.

# Approach
<!-- Describe your approach to solving the problem. -->
My approach involves using a deque to store indices of elements in the array, ensuring that the maximum element of each window is always at the front of the deque. This data structure allows us to efficiently add and remove elements from both ends.

Here\u2019s how the approach works:

1. Iterate over each element in the array.
2. Remove indices from the front of the deque if they fall outside the bounds of the current window (i - k).
3. Remove indices from the back of the deque while the element at the current index is greater than or equal to the element at those indices. This step ensures that only relevant elements (potential maximums) remain in the deque.
4. Add the current index to the deque.
5. Once the first window is complete (i.e., when i >= k - 1), append the element at the front of the deque to the result list, as it represents the maximum of the current window.

This approach results in a linear time complexity O(n), as each element is added to and removed from the deque at most once. The space complexity is O(k), where k is the size of the sliding window.

# Complexity
- Time complexity: $$O(n)$$, where n is nums length
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<int> maxSlidingWindow(List<int> nums, int k) {
    // If the input list is empty or the window size is 0, return an empty list
    if (nums.isEmpty || k == 0) return [];

    // If the window size is 1, each element is the maximum of its own window
    if (k == 1) return nums;

    // Initialize a list to store the maximums of each sliding window
    final List<int> maxWindows = [];

    // Initialize a deque (double-ended queue) to store indices of useful elements
    // The deque will store indices in decreasing order of their corresponding values in 'nums'
    final List<int> deque = [];

    // Iterate over each element in the list using its index
    for (int i = 0; i < nums.length; i++) {
      // Remove indices from the front of the deque if they are outside the current window
      while (deque.isNotEmpty && deque.first <= i - k) {
        deque.removeAt(0); // Remove the first element from the deque
      }

      // Remove indices from the back of the deque if the corresponding values are
      // less than or equal to the current element 'nums[i]'
      while (deque.isNotEmpty && nums[i] >= nums[deque.last]) {
        deque.removeLast(); // Remove the last element from the deque
      }

      // Add the current index to the back of the deque
      deque.add(i);

      // Once the first window is fully traversed (i >= k - 1),
      // add the maximum for the current window to 'maxWindows'
      // The maximum is always at the front of the deque
      if (i >= k - 1) {
        maxWindows.add(nums[deque.first]);
      }
    }

    // Return the list of maximums for all sliding windows
    return maxWindows;
  }
}
```