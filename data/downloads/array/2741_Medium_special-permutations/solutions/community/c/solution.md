# easy short efficient clean code

**Author:** maverick09
**Votes:** 4
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3650439/](https://leetcode.com/problems/special-permutations/solutions/3650439/)

---

```
class Solution {
const int mod = 1e9 + 7;
public:
    int n;
    vector<vector<int>>dp;
    int func(const vector<int>&v, int bm, int pre){ // pre is the ind of the last taken element
        int rem = n - __builtin_popcount(bm);
        if(!rem){
            return 1;
        }
        if(dp[bm][pre]!=-1){
            return dp[bm][pre];
        }
        int ans=0;
        for(int i=0; i<n; ++i){
            if((bm>>i)&1){ // taken
                continue;
            }
            if(pre!=n && v[i]%v[pre] && v[pre]%v[i]){ // ineligible
                continue;
            }
            ans = (ans + func(v, bm|(1<<i), i))%mod;
        }
        return dp[bm][pre]=ans;
    }
    int specialPerm(const vector<int>&v) {
        n = v.size();
        dp.assign(1+(1<<n), vector<int>(n+1, -1));
        return func(v, 0, n);
    }
};
```