# [Python] Simple DP Solution

**Author:** 101leetcode
**Votes:** 8
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/699317/](https://leetcode.com/problems/bomb-enemy/solutions/699317/)

---

```
class Solution:
    def maxKilledEnemies(self, grid: List[List[str]]) -> int:
        ## RC ##
		## APPROACH : DP ##
        ## LOGIC ##
        ## 1. For every "O" position, store enemies left to it, right to it, below it, above it
		## TIME COMPLEXICITY : O(5N) ##
		## SPACE COMPLEXICITY : O(N) ##
        
        if( not grid ): return 0
        n = len(grid)
        m = len(grid[0])
        # [0,0,0,0] => Number of enemies to ( Left, Right, Top, Bottom )
        dp = [ [[0,0,0,0] for __ in range(m)] for _ in range(n) ]
        
        # left to right
        for i in range(n):
            runningSum = 0
            for j in range(m):
                if( grid[i][j] == "E" ):
                    runningSum += 1
                elif( grid[i][j] == "W" ):
                    runningSum = 0
                else:
                    dp[i][j][0] = runningSum
        
        # right to left
        for i in range(n):
            runningSum = 0
            for j in range(m-1, -1, -1):
                if( grid[i][j] == "E" ):
                    runningSum += 1
                elif( grid[i][j] == "W" ):
                    runningSum = 0
                else:
                    dp[i][j][1] = runningSum
        
        # top to bottom
        for j in range(m):
            runningSum = 0
            for i in range(n):
                if( grid[i][j] == "E" ):
                    runningSum += 1
                elif( grid[i][j] == "W" ):
                    runningSum = 0
                else:
                    dp[i][j][2] = runningSum
        
        # bottom to top
        for j in range(m):
            runningSum = 0
            for i in range(n-1, -1, -1):
                if( grid[i][j] == "E" ):
                    runningSum += 1
                elif( grid[i][j] == "W" ):
                    runningSum = 0
                else:
                    dp[i][j][3] = runningSum
        
        ans = 0
        for i in range(n):
            for j in range(m):
                if(grid[i][j] == "0"):
                    ans = max( ans, sum(dp[i][j]) )
        return ans
        
```