# C++ Solution || DP || With Explanation

**Author:** kannu_priya
**Votes:** 27
**Link:** [https://leetcode.com/problems/stone-game/solutions/1384896/](https://leetcode.com/problems/stone-game/solutions/1384896/)

---

**This will work on the statement that :-
When you have to do something, do your best. But when things happen to you, prepare for worst ( HAPPY LIFE MANTRA :))**
*Case 1:
Alex takes (i)th pile than array became (i+1, j)
now if Lee will take the (i+1)th pile then array became (i+2, j)
and if Lee will take the (j)th pile then array became (i+1, j-1)
=> Lee is supposed to take the maxi among 2 choices then Alex will reamin with min of these 2 choices
                    
Case 2:
Alex takes (j)th pile than array became (i, j-1)
now if Lee will take the (i)th pile then array became (i+1, j-1)
and if Lee will take the (j-1)th pile then array became (i, j-2)
=> Lee is supposed to take the maxi among 2 choices then Alex will reamin with min of these 2 choices*

```
class Solution {
public:
    bool stoneGame(vector<int>& piles) {
        int n = piles.size();
        vector<vector<int>>dp(n, vector<int>(n));
        
        for(int gap = 0; gap < n; gap++)
            for(int i = 0, j = gap; j < n; i++, j++){
                if(gap == 0) dp[i][j] = piles[i];
                else if(gap == 1) dp[i][j] = max(piles[i], piles[j]);
                else{
                    int case1 = piles[i] + min(dp[i+2][j], dp[i+1][j-1]);
                    int case2 = piles[j] + min(dp[i+1][j-1], dp[i][j-2]);
                    dp[i][j] = max(case1, case2); // maximum of these 2 cases
                }
            }
        return dp[0][n-1];
    }
};
```