# simple and easy understand solution || basic lcs

**Author:** shishirRsiam
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/5047411/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/5047411/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    int lcs(string a, string b)
    {
        int n = a.size()+1, m = b.size()+1;
        vector<vector<int>>dp(n, vector<int>(m));
        
        for(int i=1;i<n;i++)
        {
            for(int j=1;j<m;j++)
            {
                if(a[i-1] == b[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
                else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[n-1][m-1];
    }
    int minDistance(string word1, string word2) 
    {
        int longestCount = lcs(word1, word2);
        return (word1.size() - longestCount) + (word2.size() - longestCount);
    }
};
```