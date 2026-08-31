# Sweep line

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3742470/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3742470/)

---

# Code
```
class Solution {
  bool checkArray(List<int> nums, int k) {
    final sweep = List.filled(nums.length, 0);
    int prev_sweep_sum = 0;
    for (int i = 0; i < nums.length; i++) {
      sweep[i] += prev_sweep_sum;

      if (nums[i] + sweep[i] != 0) {
        if (nums.length - i < k) return false;

        if (nums[i] + sweep[i] < 0) return false;
        final int change = nums[i] + sweep[i];
        sweep[i] -= change;
        if (i + k < nums.length)
          sweep[i + k] += change;
      }

      prev_sweep_sum = sweep[i];
    }
    return true;
  }
}
```