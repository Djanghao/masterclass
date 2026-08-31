# DP | Recursion | Memoization | Tabulation

**Author:** joyful_bytes
**Votes:** 44
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2199005/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2199005/)

---

For every cell we have 2 options:
1. fill it (house present)
2. leave it empty (house absent)

So, if the cell is filled - its adjacent cell is bound to be kept empty.
But if the cell is empty - its adjacent cell can be either filled or left empty.

**Recursion:**
```
class Solution {
    long long MOD = 1000000007;
public:
    int countHousePlacements(int n) {
        long long ways_for_one_side = (Recursion(n, 0) + Recursion(n, 1)) % MOD; // 0 == empty, 1 == filled
        
        return (ways_for_one_side * ways_for_one_side) % MOD;
    }
    
    long long Recursion(int n, bool is_filled)
    {
        if (n == 1)
            return 1;
        
        if (is_filled)
            return Recursion(n - 1, !is_filled);
        else
            return (Recursion(n - 1, !is_filled) + Recursion(n - 1, is_filled)) % MOD;
    }
};
```

**Memoization:**
```
class Solution {
    long long MOD = 1000000007;
    vector<vector<int>> dp;
public:
    int countHousePlacements(int n) {
        dp.resize(n + 1, vector<int> (2, -1));
        long long ways_for_one_side = (Memoization(n, 0) + Memoization(n, 1)) % MOD;
        
        return (ways_for_one_side * ways_for_one_side) % MOD;
    }
    
    long long Memoization(int n, bool is_filled)
    {
        if (n == 1)
            return 1;
        
        if (dp[n][is_filled] != -1)
            return dp[n][is_filled];
        
        if (is_filled)
            return dp[n][1] = Memoization(n - 1, !is_filled);
        else
            return dp[n][0] = (Memoization(n - 1, !is_filled) + Memoization(n - 1, is_filled)) % MOD;
    }
};
```

**Tabulation:**
```
class Solution{
    long long MOD = 1000000007;
public:
    int countHousePlacements(int n)
    {
        vector<int> filled(n + 1);
        vector<int> space(n + 1);
        
        filled[1] = 1;
        space[1] = 1;
        
        for (int i = 2; i <= n; i++)
        {
            filled[i] = space[i - 1];
            space[i] = (filled[i - 1] + space[i - 1]) % MOD;
        }  

        long long total = (filled[n] + space[n]) % MOD;
        long long res = (total * total) % MOD;
       
        return res;
    }
};
```

Hope this helps! :)


