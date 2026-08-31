# Recursion + Memoization + Tabulation + Space Optimization : C++/Java/Kotlin/Python

**Author:** here_iAm
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/4287935/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/4287935/)

---

# Approach
1. **Recursive** :
- Stand at each column in the first row and move to each column in the next row. Repeat the process recursively for each row.
2. **Tabulation** :
- Stand at each column in the second last row and move to each column in the next row. Repeat the process iteratively for each row.
3. **Tabulation + Space Optimization** :
- No need of 2d Array/vector, two 1D space is enough since we need only current row and the next row in the table

# Code - Recursion

```C++ []
typedef vector<vector<int>> vvi;
class Solution {
private:
    int fun(int idx, int jdx, int m, int n, vvi& grid, vvi& moveCost){
        // base case
        if(idx==m-1) return grid[idx][jdx];

        // explore all paths i.e. move in every column from 0 to n
        int ans = (int)1e9;
        for(int j=0;j<n;j++){
            int x = grid[idx][jdx];
            int cur_cost = moveCost[x][j];
            ans = min(ans, fun(idx+1, j, m, n, grid, moveCost) + cur_cost + x);
        }

        return ans;
    }
public:
    int minPathCost(vvi& grid, vvi& moveCost) {
        int ans = 1e9, m = grid.size(), n = grid[0].size();
        for(int j=0;j<n;j++){
            ans = min(ans, fun(0, j, m, n, grid, moveCost));
        }
        return ans;
    }
};
```
```Python []
class Solution:
    def fun(self, idx, jdx, m, n, grid, moveCost):
        # base case
        if idx == m - 1:
            return grid[idx][jdx]

        # explore all paths i.e. move in every column from 0 to n
        ans = float('inf')
        for j in range(n):
            x = grid[idx][jdx]
            cur_cost = moveCost[x][j]
            ans = min(ans, self.fun(idx + 1, j, m, n, grid, moveCost) + cur_cost + x)

        return ans

    def minPathCost(self, grid, moveCost):
        ans = float('inf')
        m, n = len(grid), len(grid[0])
        for j in range(n):
            ans = min(ans, self.fun(0, j, m, n, grid, moveCost))
        return ans

```
```Java []
class Solution {
    private int fun(int idx, int jdx, int m, int n, int[][] grid, int[][] moveCost) {
        // base case
        if (idx == m - 1) return grid[idx][jdx];

        // explore all paths i.e. move in every column from 0 to n
        int ans = Integer.MAX_VALUE;
        for (int j = 0; j < n; j++) {
            int x = grid[idx][jdx];
            int curCost = moveCost[x][j];
            ans = Math.min(ans, fun(idx + 1, j, m, n, grid, moveCost) + curCost + x);
        }

        return ans;
    }

    public int minPathCost(int[][] grid, int[][] moveCost) {
        int ans = Integer.MAX_VALUE;
        int m = grid.length;
        int n = grid[0].length;
        for (int j = 0; j < n; j++) {
            ans = Math.min(ans, fun(0, j, m, n, grid, moveCost));
        }
        return ans;
    }
}
```
```Kotlin []
class Solution {

    private fun dfs(idx: Int, jdx: Int, grid: Array<IntArray>, moveCost: Array<IntArray>): Int {
        // base case
        val m = grid.size
        val n = grid[0].size
        if (idx == m - 1) return grid[idx][jdx]

        // explore all paths i.e. move in every column from 0 to n
        var ans = Int.MAX_VALUE
        for (j in 0 until n) {
            val x = grid[idx][jdx]
            val curCost = moveCost[x][j]
            ans = minOf(ans, dfs(idx + 1, j, grid, moveCost) + curCost + x)
        }
        return ans
    }

    fun minPathCost(grid: Array<IntArray>, moveCost: Array<IntArray>): Int {
        var ans = Int.MAX_VALUE
        val m = grid.size
        val n = grid[0].size

        for (j in 0 until n) {
            ans = minOf(ans, dfs(0, j, grid, moveCost))
        }

        return ans
    }
}
```

# Complexity [ Time Limit Exceeded ]
- Time Complexity: **O( (m^n) * n) ~ Exponential** [ where m = no. of rows & n = no. of columns ] 
 
- Space complexity: **O(m^n * n) = O(Recursion Stack Space)**



<br>
<hr> 
<br>

# Code - Recursion + Memoization


```C++ []
typedef vector<vector<int>> vvi;
class Solution {
private:
    int dp[51][51];
    int fun(int idx, int jdx, int m, int n, vvi& grid, vvi& moveCost){
        // base case
        if(idx==m-1) return grid[idx][jdx];

        if(dp[idx][jdx] != -1) return dp[idx][jdx];

        // explore all paths i.e. move in every column from 0 to n
        int ans = (int)1e9;
        for(int j=0;j<n;j++){
            int x = grid[idx][jdx];
            int cur_cost = moveCost[x][j];
            ans = min(ans, fun(idx+1, j, m, n, grid, moveCost) + cur_cost + x);
        }

        return dp[idx][jdx] =  ans;
    }
public:
    int minPathCost(vvi& grid, vvi& moveCost) {
        int ans = 1e9, m = grid.size(), n = grid[0].size();
        memset(dp, -1, sizeof(dp));
        for(int j=0;j<n;j++){
            ans = min(ans, fun(0, j, m, n, grid, moveCost));
        }
        return ans;
    }
};
```
```Python []
class Solution:
    def __init__(self):
        self.dp = [[-1] * 51 for _ in range(51)]

    def fun(self, idx, jdx, m, n, grid, moveCost):
        # base case
        if idx == m - 1:
            return grid[idx][jdx]

        if self.dp[idx][jdx] != -1:
            return self.dp[idx][jdx]

        # explore all paths i.e. move in every column from 0 to n
        ans = float('inf')
        for j in range(n):
            x = grid[idx][jdx]
            cur_cost = moveCost[x][j]
            ans = min(ans, self.fun(idx + 1, j, m, n, grid, moveCost) + cur_cost + x)

        self.dp[idx][jdx] = ans
        return ans

    def minPathCost(self, grid, moveCost):
        ans = float('inf')
        m, n = len(grid), len(grid[0])
        for j in range(n):
            ans = min(ans, self.fun(0, j, m, n, grid, moveCost))

        return ans

```
```Java []
class Solution {
    int fun(int idx, int jdx, int m, int n, int[][] grid, int[][] moveCost, int [][] dp){
        // base case
        if(idx==m-1) return grid[idx][jdx];

        if(dp[idx][jdx] != -1) return dp[idx][jdx];

        // explore all paths i.e. move in every column from 0 to n
        int ans = Integer.MAX_VALUE;
        for(int j = 0; j < n; j++){
            int x = grid[idx][jdx];
            int cur_cost = moveCost[x][j];
            ans = Math.min(ans, fun(idx+1, j, m, n, grid, moveCost, dp) + cur_cost + x);
        }

        return dp[idx][jdx] =  ans;
    }
    public int minPathCost(int[][] grid, int[][] moveCost) {
        int ans = Integer.MAX_VALUE, m = grid.length, n = grid[0].length;

        int[][] dp = new int[m+1][n+1];
        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }

        for(int j=0;j<n;j++){
            ans = Math.min(ans, fun(0, j, m, n, grid, moveCost, dp));
        }
        return ans;
    }
}
```
```Kotlin []
class Solution {
    private lateinit var dp: Array<IntArray>

    private fun dfs(idx: Int, jdx: Int, grid: Array<IntArray>, moveCost: Array<IntArray>): Int {
        // base case
        val m = grid.size
        val n = grid[0].size
        if (idx == m - 1) return grid[idx][jdx]

        if (dp[idx][jdx] != -1) return dp[idx][jdx]

        // explore all paths i.e. move in every column from 0 to n
        var ans = Int.MAX_VALUE
        for (j in 0 until n) {
            val x = grid[idx][jdx]
            val curCost = moveCost[x][j]
            ans = minOf(ans, dfs(idx + 1, j, grid, moveCost) + curCost + x)
        }

        dp[idx][jdx] = ans
        return ans
    }

    fun minPathCost(grid: Array<IntArray>, moveCost: Array<IntArray>): Int {
        var ans = Int.MAX_VALUE
        val m = grid.size
        val n = grid[0].size
        dp = Array(m) { IntArray(n) { -1 } }

        for (j in 0 until n) {
            ans = minOf(ans, dfs(0, j, grid, moveCost))
        }

        return ans
    }
}
```

# Complexity [ Accepted ]
- Time Complexity: **O( m * n * n)** [ where m = no. of rows & n = no. of columns ] 
 
- Space complexity: **O(m * n) + O(Recursion Stack Space)**




<br>
<hr> 
<br>

# Code - Tabulation

```C++ []
typedef vector<vector<int>> vvi;
class Solution {
public:
    int minPathCost(vvi& grid, vvi& moveCost) {
        int mini = 1e9, m = grid.size(), n = grid[0].size();
        int dp[m+1][n+1];
        memset(dp, 0, sizeof(dp));

        // base case handling
        for(int j=0;j<n;j++) dp[m-1][j] = grid[m-1][j];

        for(int idx=m-2; idx>=0; idx--){
            for(int jdx=0; jdx<n; jdx++){
                int ans = 1e9;
                for(int j=0;j<n;j++){
                    int x = grid[idx][jdx];
                    int cur_cost = moveCost[x][j];
                    ans = min(ans, dp[idx+1][j] + cur_cost + x);
                }
                dp[idx][jdx] =  ans;
                if(idx==0) mini = min(mini, ans);
            }
        }

        return mini;
    }
};
```
```Python []
class Solution:
    def minPathCost(self, grid, moveCost):
        mini = float('inf')
        m = len(grid)
        n = len(grid[0])
        dp = [[0] * (m+1) for _ in range(n+1)]

        # base case handling
        for j in range(n):
            dp[m - 1][j] = grid[m - 1][j]

        for idx in range(m - 2, -1, -1):
            for jdx in range(n):
                ans = float('inf')
                for j in range(n):
                    x = grid[idx][jdx]
                    cur_cost = moveCost[x][j]
                    ans = min(ans, dp[idx + 1][j] + cur_cost + x)
                dp[idx][jdx] = ans
                if idx == 0:
                    mini = min(mini, ans)

        return mini

```
```Java []
public class Solution {
    public int minPathCost(int[][] grid, int[][] moveCost) {
        int mini = Integer.MAX_VALUE;
        int m = grid.length;
        int n = grid[0].length;
        int[][] dp = new int[m+1][n+1];
        for (int[] row : dp) {
            Arrays.fill(row, 0);
        }

        // base case handling
        for (int j = 0; j < n; j++) {
            dp[m - 1][j] = grid[m - 1][j];
        }

        for (int idx = m - 2; idx >= 0; idx--) {
            for (int jdx = 0; jdx < n; jdx++) {
                int ans = Integer.MAX_VALUE;
                for (int j = 0; j < n; j++) {
                    int x = grid[idx][jdx];
                    int cur_cost = moveCost[x][j];
                    ans = Math.min(ans, dp[idx + 1][j] + cur_cost + x);
                }
                dp[idx][jdx] = ans;
                if (idx == 0) mini = Math.min(mini, ans);
            }
        }

        return mini;
    }
}
```
```Kotlin []
class Solution {
    fun minPathCost(grid: Array<IntArray>, moveCost: Array<IntArray>): Int {
        var mini = Int.MAX_VALUE
        val m = grid.size
        val n = grid[0].size
        val dp = Array(m+1) { IntArray(n+1) }

        // base case handling
        for (j in 0 until n) {
            dp[m - 1][j] = grid[m - 1][j]
        }

        for (idx in m - 2 downTo 0) {
            for (jdx in 0 until n) {
                var ans = Int.MAX_VALUE
                for (j in 0 until n) {
                    val x = grid[idx][jdx]
                    val curCost = moveCost[x][j]
                    ans = minOf(ans, dp[idx + 1][j] + curCost + x)
                }
                dp[idx][jdx] = ans
                if (idx == 0) {
                    mini = minOf(mini, ans)
                }
            }
        }

        return mini
    }
}

```

# Complexity [ Accepted ]
- Time Complexity: **O( m * n * n )** [ where m = no. of rows & n = no. of columns ] 
 
- Space complexity: **O(m * n)** [ no recursion stack space ]




<br>
<hr> 
<br>

# Code - Tabulation + Space Optimization

```C++ []
typedef vector<vector<int>> vvi;
class Solution {
public:
    int minPathCost(vvi& grid, vvi& moveCost) {
        int mini = 1e9, m = grid.size(), n = grid[0].size();
        vector<int> next(m+1);

        // base case handling
        for(int j=0;j<n;j++) next[j] = grid[m-1][j];

        for(int idx=m-2; idx>=0; idx--){
            vector<int> cur(n+1);
            for(int jdx=0; jdx<n; jdx++){
                int ans = 1e9;
                for(int j=0;j<n;j++){
                    int x = grid[idx][jdx];
                    int cur_cost = moveCost[x][j];
                    ans = min(ans, next[j] + cur_cost + x);
                }
                cur[jdx] =  ans;
                if(idx==0) mini = min(mini, ans);
            }
            next = cur;
        }

        return mini;
    }
};
```
```Python []
class Solution:
    def minPathCost(self, grid, move_cost):
        mini = float('inf')
        m, n = len(grid), len(grid[0])
        next_row = grid[-1][:]

        # base case handling
        for j in range(n):
            next_row[j] = grid[m-1][j]

        for idx in range(m-2, -1, -1):
            cur_row = [0] * (n+1)
            for jdx in range(n):
                ans = float('inf')
                for j in range(n):
                    x = grid[idx][jdx]
                    cur_cost = move_cost[x][j]
                    ans = min(ans, next_row[j] + cur_cost + x)
                cur_row[jdx] = ans
                if idx == 0:
                    mini = min(mini, ans)
            next_row = cur_row

        return mini
```
```Java []
public class Solution {
    public int minPathCost(int[][] grid, int[][] moveCost) {
        int mini = Integer.MAX_VALUE;
        int m = grid.length;
        int n = grid[0].length;
        int[] next = new int[m+1];

        // base case handling
        for (int j = 0; j < n; j++) {
            next[j] = grid[m - 1][j];
        }

        for (int idx = m - 2; idx >= 0; idx--) {
            int[] cur = new int[n+1];
            for (int jdx = 0; jdx < n; jdx++) {
                int ans = Integer.MAX_VALUE;
                for (int j = 0; j < n; j++) {
                    int x = grid[idx][jdx];
                    int curCost = moveCost[x][j];
                    ans = Math.min(ans, next[j] + curCost + x);
                }
                cur[jdx] = ans;
                if (idx == 0) {
                    mini = Math.min(mini, ans);
                }
            }
            next = Arrays.copyOf(cur, cur.length);
        }

        return mini;
    }
}

```
```Kotlin []
class Solution {
    fun minPathCost(grid: Array<IntArray>, moveCost: Array<IntArray>): Int {
        var mini = Int.MAX_VALUE
        val m = grid.size
        val n = grid[0].size
        var next = grid[m - 1].copyOf()

        // base case handling
        for (j in 0 until n) {
            next[j] = grid[m - 1][j]
        }

        for (idx in m - 2 downTo 0) {
            val cur = IntArray(n+1)
            for (jdx in 0 until n) {
                var ans = Int.MAX_VALUE
                for (j in 0 until n) {
                    val x = grid[idx][jdx]
                    val curCost = moveCost[x][j]
                    ans = minOf(ans, next[j] + curCost + x)
                }
                cur[jdx] = ans
                if (idx == 0) {
                    mini = minOf(mini, ans)
                }
            }
            next = cur
        }

        return mini
    }
}
```

# Complexity [ Accepted ]
- Time Complexity: **O( m * n * n )** [ where m = no. of rows & n = no. of columns ] 
 
- Space complexity: **O(m + n)**


<hr>

<br>

Do upvote if you understood \uD83D\uDE01\uD83D\uDE01
Do comment if finding difficult to understand any step or any mistake found.
