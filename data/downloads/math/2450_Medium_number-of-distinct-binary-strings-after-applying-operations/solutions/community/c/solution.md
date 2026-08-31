# [C++] Simple Top-down approach

**Author:** SaMore65
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2864223/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2864223/)

---

This is a normal Top-down approach. It involves more time complexity and consumes more memory than the mathematical approaches. Trying to show that this can still be done the traditional top-down way.

```cpp
class Solution {
    #define ll long long
    const int MOD7 = 1e9+7;
    ll dfs(string& s, int idx, int k, vector<ll>& memo)
    {
        int n = s.size();
        if (idx >= (n-k)) return 1;
        if (memo[idx] != -1) return memo[idx];
        
        ll res = dfs(s, idx+1, k, memo) % MOD7;
        res = (res + dfs(s, idx+1, k, memo)+1) % MOD7;
        
        memo[idx] = res;
        return res;
    }
public:
    int countDistinctStrings(string s, int k) {
        int n = s.size();
        
        vector<ll> memo(n+1, -1);
        return dfs(s, 0, k, memo) + 1;
    }
};
```