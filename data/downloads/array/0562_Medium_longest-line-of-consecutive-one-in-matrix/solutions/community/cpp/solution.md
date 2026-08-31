# C++ Super concise and simple solution

**Author:** Shashank_Hiremath
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2105140/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2105140/)

---

Use struct and make your interviewer happy
```
class Solution {
struct directions{
    int horizontal;
    int vertical;
    int diagonal;
    int anti_diagonal;
};

public:
    int longestLine(vector<vector<int>>& mat) {
        int m = mat.size(), n = mat[0].size(), i, j, ans = 0;
        vector<vector<directions>> dp(m, vector<directions>(n, {0,0,0,0}));
        for(i=0;i<m;i++)
            for(j=0;j<n;j++)
                if(mat[i][j] == 1)
                {
                    dp[i][j].horizontal = 1 + (j-1>=0 ? dp[i][j-1].horizontal : 0);
                    dp[i][j].vertical = 1 + (i-1 >=0 ? dp[i-1][j].vertical : 0);
                    dp[i][j].diagonal = 1 + (i-1 >=0 && j-1>=0 ? dp[i-1][j-1].diagonal : 0);
                    dp[i][j].anti_diagonal = 1 + (i-1>=0 && j+1 < n ? dp[i-1][j+1].anti_diagonal : 0);
                    ans = max({ans, dp[i][j].horizontal, dp[i][j].vertical, dp[i][j].diagonal, dp[i][j].anti_diagonal});
				}
        return ans;
    }
};
```