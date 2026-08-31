# [Python] Dynamic Programming

**Author:** zhanweiting
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/570248/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/570248/)

---

```
class Solution:
    def longestLine(self, M: List[List[int]]) -> int:
        """
        dp[i][j][0]: the number of continuous 1 found at M[i][j] so far horizontally
        dp[i][j][1]: the number of continuous 1 found at M[i][j] so far vertically
        dp[i][j][2]: the number of continuous 1 found at M[i][j] so far diagonally
        dp[i][j][3]: the number of continuous 1 found at M[i][j] so far anti-diagonally
          input:          horizontal dp     vertical dp     diagonal dp   anti-diagonal dp
		 [[0,1,1,0],      [[0,1,2,0],      [[0,1,1,0],    [[0,1,1,0]    [[0,1,1,0]
          [0,1,1,0],       [0,1,2,0],       [0,2,2,0],     [0,1,2,0]     [0,2,1,0]
          [0,0,0,1]]       [0,0,0,1]]       [0,0,0,1]]     [0,0,0,3]     [0,0,0,1]] 
		 while generating the above 4 dp table, we can keep updating the maximum value found so far.
        """
        if M == []:
            return 0
        nrow,ncol = len(M),len(M[0])
        dp = [[[0 for _ in range(ncol)] for _ in range(nrow)] for _ in range(4)]
                   
        res = 0
        for row in range(nrow):
            for col in range(ncol):
                if M[row][col] == 1:
                    # horizontal
                    if col == 0:
                        dp[0][row][col] = 1
                    else:
                        dp[0][row][col] = dp[0][row][col-1] + 1
                        
                    # vertical
                    if row == 0:
                        dp[1][row][col] = 1
                    else:
                        dp[1][row][col] = dp[1][row-1][col] + 1 
                    
                    # diagonal
                    if row == 0 or col == 0:
                        dp[2][row][col] = 1
                    else:
                        dp[2][row][col] = dp[2][row-1][col-1] + 1
                    # anti-diagonal
                    if row == 0 or col == ncol-1:
                        dp[3][row][col] = 1
                    else:
                        dp[3][row][col] = dp[3][row-1][col+1] + 1
                    res = max(res,dp[0][row][col],dp[1][row][col],dp[2][row][col],dp[3][row][col])
        return res
```