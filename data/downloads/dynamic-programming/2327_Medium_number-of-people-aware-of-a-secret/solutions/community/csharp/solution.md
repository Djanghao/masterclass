# C# Solution using Dynamic Programming

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/3711954/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/3711954/)

---

# Code
```
public class Solution {
    public int PeopleAwareOfSecret(int n, int delay, int forget) {
        int mod = ((int)1e9) + 7;
        int[] dp = new int[n + 1];
        dp[1] = 1; // day 1
        for(int i = 1;i < n;i++){  // fill array untill day n
            for(int j = i + delay;j < Math.Min(i + forget,n + 1);j++){
                dp[j] = (dp[i] + dp[j]) % mod;
            }
        }
        int res = 0;
        for(int i = n; i > n - forget;i--)
            res = (res + dp[i]) % mod;
        return res;
    }
}
```