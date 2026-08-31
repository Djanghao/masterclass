# 3 Solutions | Brute Force (DFS/Recursion) -> Memoization -> Tabulation

**Author:** shahsb
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5287707/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5287707/)

---

# Solution-1: Brute Force (DFS/Recusrion) -- TLE -- 515 / 670 (76.86%) test cases passed.
+ The important/key thing is -- `every subarray whose size is greater than limit must contain both 0 and 1`.
+ So this means that, at each index if we are placing zero (0), then we know that there should exist atleast one `ONE` in next `limit-1` elements and vice versa.
+ Hence, we're trying all possible combinations and whenever we see that combination creates a valid array we're incrementing result by 1 (i.e returning 1).
# CODE:
```
class Solution 
{
private:
    int m_limit;
    const int MOD = 1e9 + 7;
public:
    int numberOfStableArrays(int zero, int one, int limit) 
    {
        m_limit = limit;
        
        // SOL-1: RECUSRION
        return dfs(zero, one, -1) % MOD;
    }

private:
    // SOL-1: RECURSION -- TC: exp -- TLE -- 515 / 670 test cases passed. -- 76.86%
    int dfs(int zero, int one, int prev)
    {
        if ( zero == 0 && one == 0 )
            return 1;
        
        if ( zero < 0 || one < 0 )
            return 0;
        
        int ans = 0;
        for ( int i=1; i<=m_limit; i++ )
        {
            if ( prev == -1 || prev == 0 )
                ans += dfs(zero, one-i, 1);
            if ( prev == -1 || prev == 1 )
                ans += dfs(zero-i, one, 0);
        }
        return ans % MOD;
    }
};
```
# Solution-2: Memoization (Top-Down DP)
+ Exaplanaton is same as solution-1. 
+ The only difference is that we're storing/memoizing the result instead of calculating/solving the same sub-problems again and again.
+ We can call this a 3D-DP as 3 states are chaning.
# CODE:
```
class Solution 
{
private:
    int m_limit;
    const int MOD = 1e9 + 7;
    vector<vector<vector<int>>> dp;
public:
    int numberOfStableArrays(int zero, int one, int limit) 
    {
        m_limit = limit;
       
        // SOL-2: MEMOIZATION DP -- TOP DOWN DP.
        dp = vector<vector<vector<int>>>(zero+1, vector<vector<int>>(one+1, vector<int>(3, -1)));
        return memo(zero, one, -1) % MOD;        
    }

private:
    // SOL-2: MEMOIZATION -- TOP DOWN DP
    int memo(int zero, int one, int prev)
    {
        if ( zero == 0 && one == 0 )
            return 1;
        
        if ( zero < 0 || one < 0 )
            return 0;
        
        if ( dp[zero][one][prev+1] != -1 )
            return dp[zero][one][prev+1];

        int ans = 0;
        for ( int i=1; i<=m_limit; i++ )
        {
            if ( prev == -1 || prev == 0 )
                ans = (ans + memo(zero, one-i, 1)) % MOD;
            if ( prev == -1 || prev == 1 )
                ans = (ans + memo(zero-i, one, 0)) % MOD;
        }
        return dp[zero][one][prev+1] = ans % MOD;
    }
};
```
# Solution-3: Tabulation (Bottom-up DP)
+ Explanation is almost same as above. The only diffences is that we're solving the problem bottom-up. we know from the base case of recursive solution that whenver the count of zero and one becomes zero there is one possibility of result.
# CODE:
```
class Solution 
{
private:
    int m_limit;
    const int MOD = 1e9 + 7;
    vector<vector<vector<int>>> dp;
public:
    int numberOfStableArrays(int zero, int one, int limit) 
    {
        m_limit = limit;
       
        // SOL-3: TABULATION -- BOTTOM UP DP.
        return tab(zero, one);
    }

private:
    // SOL-3: TABULATION -- BOTTOM UP DP.
    int tab(int zero, int one)
    {
        dp = vector<vector<vector<int>>>(zero+1, vector<vector<int>>(one+1, vector<int>(2, 0)));
        dp[0][0][1] = dp[0][0][0] = 1;
        
        for ( int z=0; z<=zero; z++ )
        {
            for ( int o=0; o<=one; o++ )
            {
                int ans = 0;
                for ( int i=1; i<=m_limit; i++ )
                {
                    if ( o-i >= 0 ) dp[z][o][0] = (dp[z][o][0] + dp[z][o-i][1]) % MOD;
                    if ( z-i >= 0 ) dp[z][o][1] = (dp[z][o][1] + dp[z-i][o][0]) % MOD;
                }
            }
        }
        return ( dp[zero][one][1] + dp[zero][one][0]) % MOD;
    }
};
```