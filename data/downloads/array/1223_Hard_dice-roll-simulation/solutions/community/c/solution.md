# C++/Java two-dimensional DP with explanation

**Author:** pengwei001
**Votes:** 45
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/423808/](https://leetcode.com/problems/dice-roll-simulation/solutions/423808/)

---

`DP[i][j]` means the total number of combinations at round `i` we get a `j` at current round, considering the constraint.

**Explanation**
Let `J` be any integer in 1 to 6, and the maximum roll amount be `k`, then at round `i` we only allow:
`J^CJ`,
`J^CJJ`,
`...`,
`J^CJJ...J`, (`k` consecutive `J`)
where `J^C` represents a number that is not `J`, namely the complementary set of `J`.

**DP approach**
It is not difficult to see that `DP[i][j] = DP[i-k][j^C] + ... + DP[i-1][j^C].` Upon noticing that `DP[i][j^c] = sum[i] - DP[i][j]`, where `sum[i]` represents total number of combinations at round `i` considering the constraint, we end up with a two-dimensional DP, and an additional one-dimensional DP to quickly obtain `sum[i]`.

The code should be pretty self-explanatory.

**C++**
```
class Solution {
public:
    int dieSimulator(int n, vector<int>& rollMax) {
        long p = 1e9 + 7;
        vector<vector<long>> dp(n+1, vector<long>(6, 0));
        vector<long> sum(n+1, 0);
        sum[0] = 1;
        for (int i = 1; i <= n; ++i) {
            for (int j = 0; j < 6; ++j)  {
                for (int k = 1; k <= rollMax[j] && i - k >= 0; ++k)
                    dp[i][j] = (dp[i][j] + sum[i-k] - dp[i-k][j] + p) % p;
                sum[i] = (sum[i] + dp[i][j]) % p;
            }                
        }
        
        return sum[n];
    }
};
```
Time: `O(6n max(rollMax))` = `O(n max(rollMax))`,
Space: `O(6n) + O(n)` = `O(n)`.


**Java**
```
class Solution {
    public int dieSimulator(int n, int[] rollMax) {
        long p = 1_000_000_007;
        long[][] dp = new long[n + 1][6];
        long[] sum = new long[n+1];
        sum[0] = 1;
        for (int i = 1; i <= n; ++i) {
            for (int j = 0; j < 6; ++j)  {
                for (int k = 1; k <= rollMax[j] && i - k >= 0; ++k)
                    dp[i][j] = (dp[i][j] + sum[i-k] - dp[i-k][j] + p) % p;
                sum[i] = (sum[i] + dp[i][j]) % p;
            }                
        }
        
        return (int) sum[n];
    }
}
```