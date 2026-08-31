# Easy solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/6097350/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/6097350/)

---

# Intuition

# Approach

# Complexity
- Time complexity:

- Space complexity:

# Code
```dart []
class Solution {
  int minimumOperations(List<int> nums) {
    Set<int> numbers = {};

    for (int i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        numbers.add(nums[i]);
      }
    }
    return numbers.length;
  }
}

```