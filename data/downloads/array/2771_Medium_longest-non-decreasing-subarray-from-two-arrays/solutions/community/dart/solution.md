# Memoized Search

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3742531/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3742531/)

---

# Code
```
import 'dart:math';

class Solution {
  int maxNonDecreasingLength(List<int> nums1, List<int> nums2) {

    final nums = [nums1, nums2];
    final memo = List.generate(2, (_) => List.filled(nums1.length, -1));

    memo[0][nums1.length - 1] = memo[1][nums1.length - 1] = 1;

    int dfs(int row, int idx) {
      if (memo[row][idx] != -1) return memo[row][idx];

      var res = 1;
      if (nums[row][idx] <= nums[0][idx + 1])
        res = max(res, 1 + dfs(0, idx + 1));
      if (nums[row][idx] <= nums[1][idx + 1])
        res = max(res, 1 + dfs(1, idx + 1));
      return memo[row][idx] = res;
    }
    var res = 0;
    for (int i = nums1.length - 1; i >= 0; i--)
      res = max(res, max(dfs(0, i), dfs(1, i)));
    return res;
  }
}
```