# SUPER EASY, 🔥EK DUM LALLU 💪

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/5496536/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/5496536/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given that the array is sorted, my initial thought was to use the two-pointer technique, which is a common and efficient approach for solving problems involving sorted arrays. By placing one pointer at the beginning and another at the end of the array, we can leverage the sorted property to find the two numbers that add up to the target.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two pointers: `left` starting at the beginning (index 0) and `right` starting at the end (index `numbers.length - 1`) of the array.
2. Calculate the sum of the elements at the `left` and `right` pointers.
3. If the sum equals the target, return the 1-indexed positions `[left + 1, right + 1]`.
4. If the sum is less than the target, increment the `left` pointer to move it to the right, increasing the sum.
5. If the sum is greater than the target, decrement the `right` pointer to move it to the left, decreasing the sum.
6. Repeat steps 2-5 until the correct indices are found.

This method ensures that the solution is found in linear time and uses constant space.

# Complexity
- Time complexity: $$O(n)$$
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->
  We only traverse the array once using two pointers, making the time complexity linear.

- Space complexity: $$O(1)$$
  <!-- Add your space complexity here, e.g. $$O(n)$$ -->
  We do not use any extra space except for a few variables, so the space complexity is constant.

# Code
```dart
class Solution {
  List<int> twoSum(List<int> numbers, int target) {
    int left = 0;
    int right = numbers.length - 1;

    while (left < right) {
      int sum = numbers[left] + numbers[right];

      if (sum == target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    
    // Since the problem guarantees exactly one solution, we shouldn't reach here.
    return [];
  }
}
```