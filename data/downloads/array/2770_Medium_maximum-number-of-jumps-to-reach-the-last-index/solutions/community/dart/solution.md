# Memoized Solution

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3742393/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3742393/)

---

# Code

```dart
import 'dart:math';

const MAX = 1 << 30, MIN = -MAX;
class Solution {
  int maximumJumps(List<int> nums, int target) {
    final dp = List.filled(nums.length, -1);
    dp[nums.length - 1] = 0;
    
    int dfs(int idx) {
      if (dp[idx] != -1) return dp[idx];
      var tmp = MIN;
      for (int j = idx + 1; j < nums.length; j++)
        if ((nums[idx] - nums[j]).abs() <= target)
          tmp = max(tmp, 1 + dfs(j));
      return dp[idx] = tmp;
    }
    return max(-1, dfs(0));
  }
}
```
