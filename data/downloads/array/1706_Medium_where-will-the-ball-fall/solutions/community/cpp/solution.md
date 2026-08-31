# C++ || Explained the intuition || Easy to understand

**Author:** MohakHarjani
**Votes:** 34
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/2764965/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/2764965/)

---

Just think in a recursive way

#Forget about the final target
#Make smaller targets for each cell
#If ball is in any cell in the grid then we only have to solve a **SUBPROBLEM**

**SUBPROBLEM**=>
**==========**
#Smaller target for ball is **to reach the next row**
#We just want to somehow figure out solution to reach the next row for any current cell
#For any cell we have two scenarios
			1. If board in currCell [grid[i][j]] is "RIGHT" :
			       =>We can move to next row if board in the rightCell of currCell [grid[i][j + 1]] is also "RIGHT" 
           2.If board in currCell [grid[i][j]] is "LEFT" :
			    =>We can move to next row if board in the leftCell of currCell [grid[i][j - 1]] is also "LEFT"
	  
#If we **cannot reach the next row** after evaluating the above conditions
    =>ANSWER TO SUBPROBLEM ==> -1 :(
	
#If ball is **able to get into the next row**
    =>Now we are closer to out goal to reach bottom row
    =>We are in some cell of nextRow depending on above scenarios
    =>Now it's again a same "SUBPROBLEM" [RECURSION AT IT'S BEST :)] but with reduced size
    =>ANSWER TO CURRENT SUBPROBLEM => Answer of next subproblem (for a grid cell of next row) 
#Answer to any subproblem will be the column by which it get's into the next row



**#If you can't find a solution to the bigger problem 
#Just figure out what all you can do at current steps
#The next step will be ultimately solved using "RECURSION" :) [LIFE PHILOSOPHY]**


```
class Solution {
public:
    vector<int> findBall(vector<vector<int>>& grid) 
    {
        int m = grid.size(), n = grid[0].size();
        vector<vector<int>>dp(m + 1, vector<int>(n, -1));
        for (int j = 0; j < n; j++) dp[m][j] = j; //Initializing the answer to the bottom case subproblem
        //===================================================
        for (int i = m - 1; i >= 0; i--) //Move from bottom to top,                        
        {                               //as subproblems of next row should be solved before current row
            for (int j = 0; j < n; j++)
            {
                if (grid[i][j] == 1) //if board is right
                {
                    bool isRightCellRight = (j + 1 == n)? false : (grid[i][j + 1] == 1);
                    if (isRightCellRight) dp[i][j] = dp[i + 1][j + 1]; 
                    //if we can reach next row, take the answer from the next row subproblem
                }
                else if (grid[i][j] == -1) //if board is left
                {
                    bool isLeftCellLeft = (j - 1 < 0)? false : (grid[i][j - 1] == -1);
                    if (isLeftCellLeft) dp[i][j] = dp[i + 1][j - 1];
                }
            }
        }
        //=============================================================
        return dp[0];
        
    }
};
```