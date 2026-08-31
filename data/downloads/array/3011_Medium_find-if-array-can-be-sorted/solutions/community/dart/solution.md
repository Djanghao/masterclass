# Dart simple solution

**Author:** _abhiramks
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013579/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013579/)

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
  int countSetBits(int num) {
    int setBits = 0;
    while (num > 0) {
      setBits += num & 1;
      num = num >> 1;
    }
    return setBits;
  }
  bool isSorted(List<int> nums) {
    for (int i = 1; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) return false;
    }
    return true;
  }
  bool canSortArray(List<int> nums) {
    int n = nums.length;
    for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - i - 1; j++) {
        if (countSetBits(nums[j]) == countSetBits(nums[j + 1]) &&
            nums[j] > nums[j + 1]) {
          int temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
      }
    }
    return isSorted(nums);
  }
}

```