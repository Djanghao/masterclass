# C# + DP + MEMO

**Author:** Mohamed_Mostafa_Hassan
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/4797118/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/4797118/)

---

# Approach
Dynamic Programming + Memoization

# Code
```
public class Solution {
    private const int MOD = 1_000_000_007;
    public int DistinctSequences(int n) {
        return DP(n, -2, -1, 0, new ());
    }

    private int DP(int n , int last2, int last1, int i, Dictionary<string,int> memo){
        if(i > n ) return 0;
        if(i == n) return 1;
        string key = $"{i},{last2},{last1}";
        if(memo.ContainsKey(key)) return memo[key];
        int res = 0;
        for(int j = 1; j <= 6; j++){
            if(j == last2 || j == last1) continue;
            if(last1 > 0 && GCD(j , last1) > 1) continue;
            res = ((res % MOD ) + (DP(n , last1, j, i + 1, memo) % MOD)) % MOD;
        }
        return memo[key] = res;
    }

    private int GCD(int a , int b){
        return b == 0 ? a : GCD(b , a % b);
    }
}
```