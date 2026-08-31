# ✅✅Python🔥Java 🔥C++🔥Simple Solution🔥Easy to Understand🔥

**Author:** cohesk
**Votes:** 405
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/3345656/](https://leetcode.com/problems/minimum-path-sum/solutions/3345656/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers this week. I planned to give for next 10,000 Subscribers as well. So **DON'T FORGET** to Subscribe

**Search \uD83D\uDC49`Tech Wired leetcode` on YouTube to Subscribe**

# Video Solution
**Search \uD83D\uDC49 `Minimum Path Sum by Tech Wired` on YouTube**

![Yellow & Black Earn Money YouTube Thumbnail (1).png](./images/0.png)


Happy Learning, Cheers Guys \uD83D\uDE0A

# Approach:

- The code implements a dynamic programming approach to find the minimum path sum in a grid.

- The algorithm uses a 2D array to store the minimum path sum to reach each position (i, j) in the grid, where i represents the row and j represents the column.

- The minimum path sum to reach each position (i, j) is computed by taking the minimum of the path sum to reach the position above (i-1, j) and the position to the left (i, j-1), and adding the cost of the current position (i, j).

- The minimum path sum to reach the bottom-right corner of the grid is stored in the last element of the array (grid[m-1][n-1]), where m is the number of rows and n is the number of columns in the grid.

# Intuition:

- The intuition behind the dynamic programming approach is that the minimum path sum to reach a position (i, j) in the grid can be computed by considering the minimum path sum to reach the positions (i-1, j) and (i, j-1).

- This is because the only two possible ways to reach the position (i, j) are either by moving down from (i-1, j) or moving right from (i, j-1).

- By computing the minimum path sum to reach each position in the grid, the algorithm can find the minimum path sum to reach the bottom-right corner of the grid by simply looking at the last element of the array (grid[m-1][n-1]).


```Python []
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
            
        
        m, n = len(grid), len(grid[0])
        
        for i in range(1, m):
            grid[i][0] += grid[i-1][0]
        
        for i in range(1, n):
            grid[0][i] += grid[0][i-1]
        
        for i in range(1, m):
            for j in range(1, n):
                grid[i][j] += min(grid[i-1][j], grid[i][j-1])
        
        return grid[-1][-1]
    
        # An Upvote will be encouraging

```
```Java []
class Solution {
    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        
        for (int i = 1; i < m; i++) {
            grid[i][0] += grid[i-1][0];
        }
        
        for (int j = 1; j < n; j++) {
            grid[0][j] += grid[0][j-1];
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            }
        }
        
        return grid[m-1][n-1];
    }
}


```
```C++ []
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        for (int i = 1; i < m; i++) {
            grid[i][0] += grid[i-1][0];
        }
        
        for (int j = 1; j < n; j++) {
            grid[0][j] += grid[0][j-1];
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                grid[i][j] += min(grid[i-1][j], grid[i][j-1]);
            }
        }
        
        return grid[m-1][n-1];
    }
};


```

![image.png](./images/1.png)

# Please UPVOTE \uD83D\uDC4D