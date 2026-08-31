# Java Top Down Memoization/DP

**Author:** RobertSkonieczny
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/solutions/5314408/](https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/solutions/5314408/)

---

```
class Solution {
    private int[][] memo;
    private int[] nums = new int[]{1,2,6};
    public int numberOfWays(int n) {
        this.memo = new int[3][n+1];
        for (int[] row : memo) Arrays.fill(row, -1);
        return dp(n, 0, 0);
    }

    private int dp(int n, int curr, int i) {
        if (curr > n) {
            return 0;
        }

        if (curr == n) {
            return 1;
        }

        if (i >= 3) {
            return curr == n - 4 || curr == n - 8 ? 1 : 0;
        }

        if (memo[i][curr] != -1) {
            return memo[i][curr];
        }

        int ways = dp(n, curr, i+1);
        ways %= 1000000007;
        ways += dp(n, curr + nums[i], i);
        ways %= 1000000007;

        
        return memo[i][curr] = ways;
    }
}
```