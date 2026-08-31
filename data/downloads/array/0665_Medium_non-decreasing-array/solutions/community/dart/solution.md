# Dart solution

**Author:** KhizhniakovM
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/4961443/](https://leetcode.com/problems/non-decreasing-array/solutions/4961443/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
  bool checkPossibility(List<int> nums) {
    bool changed = false;

    for (int i = 0; i < nums.length - 1; i++) {
      if (nums[i] <= nums[i + 1]) continue;
      if (changed) return false;

      if (i == 0 || nums[i + 1] >= nums[i - 1]) {
        nums[i] = nums[i + 1];
      } else {
        nums[i + 1] = nums[i];
      }
      changed = true;
    }

    return true;
  }
}
```