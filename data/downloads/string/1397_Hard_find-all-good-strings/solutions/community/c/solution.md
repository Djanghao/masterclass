# [C++] DP & KMP

**Author:** ajinkyagore
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/738929/](https://leetcode.com/problems/find-all-good-strings/solutions/738929/)

---

```
class Solution {
public:
    long long mod  = 1000000007;
    long long dp[505][2][55];
    int kmp[55] = {};
    
    long long solve(string &s, string &evil, int ind, int tight, int pre)
    {
        int n = s.size(), m = evil.size();
        if(pre == m) return 0;
        if(ind == n) return 1;
        if(dp[ind][tight][pre] != -1) return dp[ind][tight][pre];
        int k = 25;
        if(tight) k = s[ind] - 'a';
        
        long long ans = 0;
        
        for(int i=0; i<=k; i++)
        {
            int newtight = 0;
            if(tight && k==i) newtight = 1;
            int newpre = pre;
            while(newpre>0 && i!=evil[newpre]-'a') newpre = kmp[newpre - 1];
            if(i==evil[newpre]-'a') newpre++;
            ans = (ans + solve(s, evil, ind+1, newtight, newpre))%mod;
        }
        return dp[ind][tight][pre] = ans;
    }
    
    
  
    
    int findGoodStrings(int n, string s1, string s2, string evil) {
        int m = evil.length();
        for(int i=1; i<m; i++)
        {
            int j = kmp[i-1];
            while(j>0 && evil[j]!=evil[i]) j = kmp[j-1];
            if(evil[i]==evil[j]) j++;
            kmp[i] = j;
        }
        memset(dp,-1,sizeof dp);
        long long ans1 = solve(s1, evil, 0, 1, 0);
         memset(dp,-1,sizeof dp);
        long long ans2 = solve(s2, evil, 0, 1, 0);
        long long ans = (ans2 - ans1 + mod)%mod;
        int j = 0;
        
        //check if s1 is a good string
        bool flag = true;
        for(int i=0; i<n; i++)
        {
            while(j>0 && s1[i]!=evil[j]) j=kmp[j-1];
            if(s1[i]==evil[j]) j++;
            if(j==m) 
            {
                flag = false;
                break;
            }
        }
        if(flag) ans = (ans + 1)%mod;
        return ans;
    }
};
```