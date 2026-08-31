# ✅ Easy Solutions w/ Explanation & Comments | Optimization from Brute-Force Approach

**Author:** archit91
**Votes:** 163
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/1180249/](https://leetcode.com/problems/unique-paths-ii/solutions/1180249/)

---

We start at the top-left of the **`obstacleGrid`** and for each cell in the grid, we can either move right or down. We can't land at an obstacle. We need to return the number of unique paths to reach the bottom-right of grid.

---

\u274C ***Solution - I (Brute-Force) [Rejected]***

Let's build our solution starting from the brute force approach. Let's directly apply what's given in the problem statement.  At each cell, we have two choices -

&emsp;&emsp;\u2726 *Go Right*
&emsp;&emsp;\u2726 *Go Down*

So, we can recursively build up our solution as -.

1. At each cell, explore the two choices available to us - go right & go down (**Recursive function**).

2. If we reach the bottom-right cell of the grid, we have found a unique path (**Base Condition - I**). 

3. If at any time, we reach a cell with value 1, it is an **obstacle cell** and we can't move any further. So, we just stop exploring further paths from this cell (**Base Condition - II**).  


We will accumulate all such unique paths.

**C++**
```
int m, n;
int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {        
	m = size(obstacleGrid), n = size(obstacleGrid[0]);    
	return solve(obstacleGrid, 0, 0);   
}
// function to recursively explore all unique paths
int solve(vector<vector<int> >& grid, int i, int j){
	if(i < 0 || j < 0 || i >= m || j >= n) return 0;          // bounds checking
	if(grid[i][j]) return 0;   // if there's obstacle, just return 0 and stop further exploration
	if(i == m - 1 && j == n - 1 && !grid[i][j]) return 1;     // if we have reached end cell, return 1 if there's no obstacle   
	return solve(grid, i + 1, j) + solve(grid, i, j + 1);     // explore the two choice we have at each cell
}
```

---

**Python**

```
def uniquePathsWithObstacles(self, grid: List[List[int]]) -> int:
	m, n = len(grid), len(grid[0])
	def solve(grid, i, j):
		if i >= m or j >= n or i < 0 or j < 0 or grid[i][j]:
			return 0
		if i == m - 1 and j == n - 1: 
			return 1
		return solve(grid, i + 1, j) + solve(grid, i, j + 1)
	return solve(grid, 0, 0)
```

---


\u2714\uFE0F ***Solution - II (Dynamic Programming - Recursive version) [Accepted]***

We can observe that there are a lot of cells that are revisited in the above appraoch and the whole path is recursed till the bottom-right cell is reached for each cell again and again. We don't need to recalculate this everytime if we just store the previously calculated result for a given cell.

We can do this by maintaining a 2d DP array. Here *`dp[i][j]`* will denote the number of unique paths to reach the bottom-right corner of the grid starting from the cell - *`obstacleGrid[i][j]`*.

**C++**
```
int m, n;
vector<vector<int> > dp;
int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
	m = size(obstacleGrid), n = size(obstacleGrid[0]);
	dp.resize(m, vector<int>(n));
	return solve(obstacleGrid, 0, 0);
}
// function to recursively explore all unique paths and store the results once calculated
int solve(vector<vector<int>>& grid, int i, int j) {
	if(i < 0 || j < 0 || i >= m || j >= n) return 0;    // bounds checking
	if(grid[i][j]) return dp[i][j] = 0;                 // obstacle found at current cell
	if(i == m - 1 && j == n - 1) return 1;              // reached bottom-right of grid ? return 1
	if(dp[i][j]) return dp[i][j];                       // if already computed for current cell, just return the stored results
	return dp[i][j] = solve(grid, i + 1, j) + solve(grid, i, j + 1); // recursively explore the two options available with us
}
```

---

**Python**

```
def uniquePathsWithObstacles(self, grid: List[List[int]]) -> int:
    m, n, dp = len(grid), len(grid[0]), [[0]*len(grid[0]) for _ in range(len(grid))]
    def solve(grid, i, j):
        if i >= m or j >= n or i < 0 or j < 0 or grid[i][j]: return 0
        if i == m - 1 and j == n - 1:  return 1
        if dp[i][j]:
            return dp[i][j]
        dp[i][j] = solve(grid, i + 1, j) + solve(grid, i, j + 1)
        return dp[i][j]
    return solve(grid, 0, 0)
```

***Time Complexity :*** **`O(M*N)`**
***Space Complexity :*** **`O(M*N)`**

---

\u2714\uFE0F ***Solution - III (Dynamic Programming - Iterative version) [Accepted]***

We can also solve it iteratively. We have 1 way in which we can start from *`grid[0][0]`* and for rest of the cells, we could have reached here from the top cell or the left cell. So, we can maintain *`dp[i][j]`* and iteratively accumulate unique paths for current cell by adding *`dp[i - 1][j]`* (number of ways we reached top cell) and *`dp[i][j - 1]`* (number of ways we reached left cell).

Here, I am using padded row and column in *`dp`* to simplify the code. In this solution, *`dp[i][j]`*, will denote the number of unique paths to reach the cell *`grid[i-1][j-1]`* (since padded row and column used in dp at start) from the start. 

Thus, we can iterate over the whole grid and at last return **`dp[m][n]`** which will be the number of unique paths to reach bottom-right of grid from the start.

Here, *`dp[0][1]`* (or *`dp[1][0]`*) needs to be set to 1 at the start, so that *`dp[1][1]`* will become 1 in our loop (denoting we have one way to reach the starting cell `grid[0][0]`).

**C++**
```
int uniquePathsWithObstacles(vector<vector<int>>& grid) {
	int m = size(grid), n = size(grid[0]);
	vector<vector<int> > dp (m + 1, vector<int>(n + 1));
    dp[0][1] = 1;
    for(int i = 1; i <= m; i++)
        for(int j = 1; j <= n; j++)            
			// dp[i][j] = sum of unique paths for top and left cell (cells from which we reach current one)
            dp[i][j] = !grid[i - 1][j - 1] ? dp[i - 1][j] + dp[i][j - 1] : 0;
    return dp[m][n];
}
```

---

**Python**
```
def uniquePathsWithObstacles(self, grid: List[List[int]]) -> int:
    m, n, dp = len(grid), len(grid[0]), [[0]*(len(grid[0]) + 1) for _ in range(len(grid) + 1)]
    dp[0][1] = 1
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] if not grid[i - 1][j - 1] else 0
    return dp[-1][-1]
```

***Time Complexity :*** **`O(M*N)`**
***Space Complexity :*** **`O(M*N)`**


---

\u2714\uFE0F ***Solution - IV (Dynamic Programming - Space Optimized) [Accepted]***

We can see that in the above solution, we are only ever accessing the current and previous rows of the dp array. So, we don't need to maintain the whole *`M*N`* DP array and the space usage can be optimized by maintaining just 2 rows.

A common way of doing this with most dp problems is to declare a two rows dp matrix and just alternate between the rows at each iteration. We can alternate between the rows by doing a parity check while indexing a row of dp. Thus, we can use `dp[0]` at even indices and `dp[1]` and odd indices of iteration.

**C++**
```
int uniquePathsWithObstacles(vector<vector<int>>& grid) {
	int m = size(grid), n = size(grid[0]);
	vector<vector<int> > dp (2, vector<int>(n + 1));
    dp[0][1] = 1;
    for(int i = 1; i <= m; i++)
        for(int j = 1; j <= n; j++)            
            dp[i & 1][j] = !grid[i - 1][j - 1] ? dp[(i - 1) & 1][j] + dp[i & 1][j - 1] : 0;
    return dp[m & 1][n];
}
```

---

**Python**
```
def uniquePathsWithObstacles(self, grid: List[List[int]]) -> int:
	m, n, dp = len(grid), len(grid[0]), [[0]*(len(grid[0]) + 1)] * 2
	dp[0][1] = 1
	for i in range(1, m + 1):
		for j in range(1, n + 1):
			dp[i & 1][j] = dp[(i - 1) & 1][j] + dp[i & 1][j - 1] if not grid[i - 1][j - 1] else 0
	return dp[m & 1][-1]
```

***Time Complexity :*** **`O(M*N)`**
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution V - (In-Place) [Accepted]***

We can also choose to modify the given input grid itself (if input modification is allowed). This solution is similar to *`Solution - III`*, with just the change that we are using *`grid`* itself instead of auxillary space for **`dp`**.

**C++**
```
int uniquePathsWithObstacles(vector<vector<int>>& grid) {
	int m = size(grid), n = size(grid[0]);
    grid[0][0] ^= 1;  // if no obstacle at start, we can reach here in 1 way
	/* For each cell of first row and column, we can either reach that cell in 1 way
	 * if previous column/row cell are not obstacle respectively, or not reach it at all.
	 * That's what we are doing below */
    for(int i = 1; i < n; i++) grid[0][i] = !grid[0][i] & grid[0][i - 1]; // we can reach 
    for(int i = 1; i < m; i++) grid[i][0] = !grid[i][0] & grid[i - 1][0];
    // same process as in above solutions -
    for(int i = 1; i < m; i++)
        for(int j = 1; j < n; j++)            
            grid[i][j] = !grid[i][j] ? grid[i - 1][j] + grid[i][j - 1] : 0;                    
    return grid[m - 1][n - 1];
}
```

---

**Python**
```
def uniquePathsWithObstacles(self, grid: List[List[int]]) -> int:
	m, n = len(grid), len(grid[0])
	grid[0][0] ^= 1
	for i in range(1, n):
		grid[0][i] = grid[0][i - 1] & (not grid[0][i])
	for j in range(1, m):
		grid[j][0] = grid[j - 1][0] & (not grid[j][0])
	for i in range(1, m):
		for j in range(1, n):
			grid[i][j] = grid[i - 1][j] + grid[i][j - 1] if not grid[i][j] else 0
	return grid[m - 1][n - 1]
```

***Time Complexity :*** **`O(M*N)`**
***Space Complexity :*** **`O(1)`**


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---