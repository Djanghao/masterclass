# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/4074982/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/4074982/)

---

# Code
```
class Solution {
  int numberOfGoodSubarraySplits(List<int> nums) {
    const MOD = 1000000007;
    int prev = -1;
    var res = 1;
    var has = false;
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] == 0) continue;
      has = true;
      if (prev != -1)
        res = (res * (i - prev)) % MOD;
      prev = i;
    }
    return has ? res : 0;
  }
}
```