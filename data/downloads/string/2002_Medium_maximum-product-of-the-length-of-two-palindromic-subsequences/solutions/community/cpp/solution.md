# c++ solution (lcs)

**Author:** dilipsuthar60
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/1458418/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/1458418/)

---

[https://leetcode.com/problems/longest-palindromic-subsequence/](http://)
```
class Solution {
public:
    int lps(string &s)
    {
        int n=s.size();
        string s1=s;
        string s2=s;
        reverse(s2.begin(),s2.end());
        int dp[s.size()+1][s.size()+1];
        memset(dp,0,sizeof(dp));
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n;j++)
            {
                dp[i][j]=(s1[i-1]==s2[j-1])?1+dp[i-1][j-1]:max(dp[i][j-1],dp[i-1][j]);
            }
        }
        return dp[n][n];
    }
    int maxProduct(string s) 
    {
        int ans=0;
        int n=s.size();
        for(int i=1;i<(1<<n)-1;i++)
        {
            string s1="",s2="";
            for(int j=0;j<n;j++)
            {
                if(i&(1<<j))
                {
                    s1.push_back(s[j]);
                }
                else
                {
                    s2.push_back(s[j]);
                }
            }
            ans=max(ans,lps(s1)*lps(s2));
        }
        return ans;
    }
    
};
```