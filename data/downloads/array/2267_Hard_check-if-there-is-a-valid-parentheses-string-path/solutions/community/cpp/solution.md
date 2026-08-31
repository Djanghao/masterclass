# Same as Valid Parenthesis String but with MEMO | O(MN(M+N))

**Author:** spal1996
**Votes:** 10
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2017812/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2017812/)

---

**Intuition:** Same as checking valid parenthesis in a string. Need to maintain a counter "open" to mark the number of opening/closing braces encountered. If '(' is encountered incr. open by 1, else decrement open by 1. Now as there can be several paths possible from each cell in a grid, so there can be multiple repeated calculations done from each cell. To avoid that use DP/Memoisation.
DP array has 3 states: row, col, open count. Since open count can be maximum of 199(complete first row + complete last column), so taking 201.

```
Code: 
class Solution {
public:
    int dp[101][101][201];	
    bool hasValidPath(vector<vector<char>>& grid) {
        memset(dp, -1, sizeof(dp));
        return isPossible(grid, 0, 0, 0);
    }
    
    bool isPossible(vector<vector<char>>& grid, int i, int j, int open) {
        if(i == grid.size() || j == grid[0].size())
            return false;
        if(grid[i][j] == ')' && open == 0)
            return false;
        if(i == grid.size()-1 && j == grid[0].size()-1) 
            return open+(grid[i][j] == '(' ? 1 : -1) == 0;
        if(dp[i][j][open] != -1)
            return dp[i][j][open];
        return dp[i][j][open] = isPossible(grid, i+1, j, open+(grid[i][j] == '(' ? 1 : -1)) ||  // down
                                isPossible(grid, i, j+1, open+(grid[i][j] == '(' ? 1 : -1));	// right
    }
};
```

Kindly upvote if helpful to keep me motivated ^-^. Also comment down for any doubts.