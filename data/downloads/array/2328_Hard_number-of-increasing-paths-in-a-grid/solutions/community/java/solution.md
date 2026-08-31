# ✅✅Java✔ || C++✔ ||Python✔ || Solution Easy To Understand

**Author:** Armorix13
**Votes:** 98
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3650111/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3650111/)

---

# :) Guys Please VoteUp
The code provided seems to be solving a problem related to counting paths in a grid. However, without a clear problem statement, it's difficult to provide specific intuition.

# Approach
The code uses a dynamic programming approach to count the number of paths in the given grid. It employs memoization to avoid redundant calculations. The countPaths method initializes a 2D array dp to store the number of paths for each grid cell. It then iterates through each cell in the grid and calls the solve method to calculate the number of paths starting from that cell.

The solve method takes the current grid, cell coordinates, the previous value (for comparison), and the memoization array dp. It first checks the base cases: if the current cell is out of bounds or has a value less than or equal to the previous value, it returns 0. If the result for the current cell is already calculated and stored in dp, it directly returns the stored value.

If the base cases are not met, the method recursively calls itself for the left, right, up, and down neighboring cells. It passes the current cell value as the new previous value to ensure that paths only move to cells with greater values. The results from these recursive calls are summed up, and 1 is added to account for the current cell. The sum is then stored in dp for memoization.

Finally, the countPaths method returns the total number of paths calculated for all cells in the grid

# Complexity
Time complexity: The time complexity of the countPaths method is O(n * m), where n and m are the dimensions of the grid. This is because it iterates through each cell in the grid exactly once. The solve method has recursive calls, but each cell's result is memoized, ensuring that each cell is calculated only once.

Space complexity: The space complexity of the code is O(n * m) as well. It is determined by the memoization array dp, which has the same dimensions as the grid. The memory usage is proportional to the number of cells in the grid.

Overall, the code uses a dynamic programming approach with memoization to efficiently calculate the number of paths in a grid.



#  Java Code
```
class Solution {
    int mod = (int)(1e9+7);
    public int countPaths(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        
        int[][] dp = new int[n][m];
        for(int[] arr: dp){
            Arrays.fill(arr, -1);
        }
        int paths = 0;
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                paths = (paths+solve(grid, i, j, -1, dp))%mod;
            }
        }
        
        return paths;
    }
    
    public int solve(int[][] grid, int i, int j, int prev, int[][] dp){
        if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]<=prev){
            return 0;
        }
        
        if(dp[i][j]!=-1){
            return dp[i][j];
        }
        
        int left = solve(grid, i, j-1, grid[i][j], dp);
        int right = solve(grid, i, j+1, grid[i][j], dp);
        int up = solve(grid, i-1, j, grid[i][j], dp);
        int down = solve(grid, i+1, j, grid[i][j], dp);
        
        return dp[i][j] = (1+left+right+up+down)%mod;
    }
}
```
#  C++ Code
```
class Solution {
public:
    
    int Helper(vector<vector<int>>& grid, int i, int j, vector<vector<int>>& dp, int prev)
    {
        if(i<0 || j<0 || i>=grid.size() || j>=grid[0].size() || prev>=grid[i][j])
            return 0;
        
        if(dp[i][j]!=-1)
            return dp[i][j];
        
        int top =  Helper(grid,i-1,j,dp,grid[i][j]);
        int bottom =  Helper(grid,i+1,j,dp,grid[i][j]);
        int right = Helper(grid,i,j+1,dp,grid[i][j]);
        int left =  Helper(grid,i,j-1,dp,grid[i][j]);
        
        dp[i][j] = (1 + top + bottom + right + left)%1000000007; // it will give signed integer overflow run time error if you do not modulo at this point of code
        return dp[i][j];
    }
    int countPaths(vector<vector<int>>& grid) {
        
        int m = grid.size();
        int n = grid[0].size();
        if(m==1 && n==1)
            return 1;
        vector<vector<int> > dp(m,vector<int> (n,-1));
        
        int ans =0;
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(dp[i][j]==-1)
                  ans = (ans + Helper(grid,i,j,dp,-1))%1000000007;
                else
                  ans = (ans + dp[i][j])%1000000007;
            }
        }
        
        return ans;
    }
};
```

#  Python3 Code

```
class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        noOfRows, noOfCols, res = len(grid), len(grid[0]), 0
        dp = [[-1 for _ in range(noOfCols)] for _ in range(noOfRows)]
        
        def dfs(row: int, col: int, prev: int, dp: List[List[int]], grid: List[List[int]]) -> int:
            directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
            if row < 0 or col < 0 or row >= len(grid) or col >= len(grid[0]) or grid[row][col] <= prev:
                return 0
            if dp[row][col] != -1: 
                return dp[row][col]
            ans = 1
            for direction in directions:
                newRow, newCol = row + direction[0], col + direction[1]
                ans += dfs(newRow, newCol, grid[row][col], dp, grid)
            dp[row][col] = ans
            return ans
        
        for row in range(noOfRows):
            for col in range(noOfCols):
                res += dfs(row, col, -1, dp, grid)
        return res % (10 ** 9 + 7)
```

# Java Code Explaination
The code represents a Solution class with two methods: countPaths and solve. Here's an explanation of each part:

The class-level variable mod is set to (int)(1e9+7), which is a common approach to store a large constant value for modulo operations.

The countPaths method takes a 2D grid as input and returns the total number of paths. It initializes variables n and m with the dimensions of the grid. It also creates a 2D array dp with the same dimensions to store the number of paths for each cell.

The dp array is initialized with -1 using the Arrays.fill method. This is done to indicate that the paths for each cell have not been calculated yet.

The paths variable is initialized to 0 to store the cumulative number of paths.

The nested for loops iterate through each cell in the grid using the variables i and j.

Within the loops, the solve method is called for each cell to calculate the number of paths starting from that cell. The solve method is passed the grid, the current cell coordinates (i and j), the previous value (initialized as -1), and the dp array.

The solve method first checks if the current cell is out of bounds or if its value is less than or equal to the previous value. If so, it returns 0 indicating that no paths are possible from that cell.

If the base cases are not met, the method checks if the result for the current cell has already been calculated and stored in the dp array. If so, it directly returns the stored value.

If the base cases are not met and the result is not stored in dp, the method proceeds to recursively call itself for the neighboring cells (left, right, up, and down). It passes the current cell's value as the new previous value to ensure that paths only move to cells with greater values.

The results from the recursive calls (left, right, up, and down) are summed up, and 1 is added to account for the current cell. The modulo operation % mod is applied to keep the result within the given modulo value.

Finally, the calculated result is stored in the dp array for memoization, and it is also returned as the result of the solve method.

The cumulative paths variable in the countPaths method is updated by adding the result of the solve method for each cell. The modulo operation % mod is applied to keep the result within the given modulo value.

After iterating through all the cells, the paths variable contains the total number of paths in the grid, and it is returned as the final result of the countPaths method.

In summary, the code uses a dynamic programming approach with memoization to efficiently calculate the number of paths in a grid. The solve method handles the recursive calculation for each cell, storing intermediate results in the dp array to avoid redundant calculations. The countPaths method orchestrates the process by iterating through each cell and accumulating the results.
