# Easy C# solution using DP

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3848162/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3848162/)

---

```
public class Solution {
    public int WaysToReachTarget(int target, int[][] types) {
        int n = types.Length, mod = ((int)1e9) + 7;
        int[][] dp = new int[n][];
        for(int i = 0; i < n;i++){
            dp[i] = new int[target + 1];
            Array.Fill(dp[i],-1);
        }
        int solve(int idx,int remain){
            if(remain == 0) return 1;
            if(idx >= n) return 0;
            if(dp[idx][remain] != -1) return dp[idx][remain];
            int res = 0;
            for(int i = 0; i <= types[idx][0];i++){
                int cost = i * types[idx][1];
                if(cost > remain) break;
                res = (res % mod + solve(idx + 1,remain - cost) % mod ) % mod; 
            }
            return dp[idx][remain] = res;
        }
        return solve(0,target);
    }
}
```