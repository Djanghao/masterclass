# Java clean DP O(N^2) space and time, no tricks

**Author:** canadianczar
**Votes:** 5
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/746147/](https://leetcode.com/problems/toss-strange-coins/solutions/746147/)

---

Base case is tossing 1 coin, with 1-p for tail, p for head.
```
class Solution {
    public double probabilityOfHeads(double[] prob, int target) {
        double[][] dp = new double[prob.length][prob.length+1];
        dp[0][0] = 1 - prob[0];
        dp[0][1] = prob[0];
        for (int i = 1; i < dp.length; i++) {
            for (int j = 0; j <= i+1; j++) {
                if (j == 0) {
                    dp[i][j] += dp[i-1][j] * (1-prob[i]);//toss tail
                } else if (j == i + 1) {
                    dp[i][j] += dp[i-1][j-1] * (prob[i]);//toss head
                } else {
                    dp[i][j] += dp[i-1][j] * (1-prob[i]);//toss tail
                    dp[i][j] += dp[i-1][j-1] * (prob[i]);//toss head
                }
            }
        }
        return dp[dp.length-1][target];
    }
}