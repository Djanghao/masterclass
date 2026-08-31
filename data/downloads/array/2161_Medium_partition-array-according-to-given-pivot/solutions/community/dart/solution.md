# Simple Solution ...

**Author:** AkobirTohirov
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5924814/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5924814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<int> pivotArray(List<int> nums, int pivot) {
    List<int> array1 = [], array2 = [], array3 = [];

    for (int i = 0; i < nums.length; i++) {
      (nums[i] < pivot)
          ? array1.add(nums[i])
          : (nums[i] > pivot)
              ? array3.add(nums[i])
              : array2.add(pivot);
    }

    return array1 + array2 + array3;
  }
}
```