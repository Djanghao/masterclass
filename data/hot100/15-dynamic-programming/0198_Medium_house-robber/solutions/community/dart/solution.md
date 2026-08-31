# dart solution

**Author:** arshad_kk
**Votes:** 1
**Link:** [https://leetcode.com/problems/house-robber/solutions/4602593/](https://leetcode.com/problems/house-robber/solutions/4602593/)

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
```
class Solution {
  int rob(List<int> nums) {
    int n = nums.length;
    if (n == 1) {
      return nums[0];
    }
    List<int> dp = List.filled(n, 0);
    dp[0] = nums[0];
    dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];

    for (int i = 2; i < n; i++) {
      if (dp[i - 1] > dp[i - 2] + nums[i]) {
        dp[i] = dp[i - 1];
      } else {
        dp[i] = dp[i - 2] + nums[i];
      }
    }
    return dp[n - 1];
  }
}
```