# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/4393491/](https://leetcode.com/problems/uncrossed-lines/solutions/4393491/)

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
  int maxUncrossedLines(List<int> nums1, List<int> nums2) {
    int solve(List<int> nums1, List<int> nums2, int m, int n) {
            final List<List<int>> dp = List.generate(m + 1, (i) => List.filled(n + 1, 0));
            for (int i = 0; i <= m; i++) {
                for (int j = 0; j <= n; j++) {
                    if (i == 0 || j == 0) {
                        dp[i][j] = 0;
                    } else if (nums1[i - 1] == nums2[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                    } else {
                        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                    }
                }
            }

            return dp[m][n];
        }
    return solve(nums1, nums2, nums1.length, nums2.length);
  }
}
```