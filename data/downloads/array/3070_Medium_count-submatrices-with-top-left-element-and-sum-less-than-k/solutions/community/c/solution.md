# c++ solution

**Author:** dilipsuthar60
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4815174/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4815174/)

---

```
class Solution {
public:
    int countSubmatrices(vector<vector<int>>&mat, int k) {
        int n=mat.size();
        int m=mat[0].size();
        int count=0;
        vector<vector<int>>dp(n+1,vector<int>(m+1,0));
        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=m;j++)
            {
               dp[i][j]=mat[i-1][j-1]+dp[i-1][j]+dp[i][j-1]-dp[i-1][j-1]; 
                if(dp[i][j]<=k)
                {
                    count++;
                }
            }
        }
        return count;
    }
};
```