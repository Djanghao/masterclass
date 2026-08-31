# 💯Faster✅💯Lesser✅2 Methods🧠Detailed Approach🎯Counting🔥DFS🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 102
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/5039036/](https://leetcode.com/problems/island-perimeter/solutions/5039036/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 2 ways to solve this question with detailed explanation of each approach:

# Problem Explaination\uD83C\uDFAF: 
The `Island Perimeter` problem involves calculating the perimeter of an island represented by a 2D grid where `1` denotes land and `0` denotes water. Each cell of land contributes to the perimeter based on its surrounding neighboring cells.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering two different methods to solve this problem:
1.  Iterative Approach with Counting Borders
2. Depth-First Search (DFS)

# 1\uFE0F\u20E3 Iterative Approach with Counting Borders: 
In this method, we iterate through each cell of the grid. For every cell that represents land (denoted by `1`), we initially assume it contributes 4 units to the perimeter. Then, we adjust this count based on the neighboring cells.

- For each land cell (`grid[r][c] == 1`), add 4 to the perimeter count since the cell has four potential sides.
- Check the left neighbor (`grid[r][c-1]`) and the top neighbor (`grid[r-1][c]`). If either of these neighbors is also land (`1`), it means the shared side between the current cell and its neighbor is internal to the island and should not contribute to the perimeter. Therefore, we subtract 2 from the perimeter count for each such shared side.

By iterating over all cells and adjusting the perimeter count accordingly, we can efficiently compute the total perimeter of the entire island.

<!-- # Complexity
- \u23F1\uFE0F Time Complexity: `O(n)` where n is the number of pairs in the list.
 -->
<!-- - \uD83D\uDE80 Space Complexity: `O(n)` for the HashSet. -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        perimeter = 0
        rows, cols = len(grid), len(grid[0])
        
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    perimeter += 4
                    if r > 0 and grid[r-1][c] == 1:
                        perimeter -= 2
                    if c > 0 and grid[r][c-1] == 1:
                        perimeter -= 2
                        
        return perimeter
```
```Java []
class Solution {
    public int islandPerimeter(int[][] grid) {
        int perimeter = 0;
        int rows = grid.length;
        int cols = grid[0].length;
        
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 1) {
                    perimeter += 4;
                    if (r > 0 && grid[r-1][c] == 1) {
                        perimeter -= 2;
                    }
                    if (c > 0 && grid[r][c-1] == 1) {
                        perimeter -= 2;
                    }
                }
            }
        }
        
        return perimeter;
    }
}

```
```C++ []
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int perimeter = 0;
        int rows = grid.size();
        int cols = grid[0].size();
        
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 1) {
                    perimeter += 4;
                    if (r > 0 && grid[r-1][c] == 1) {
                        perimeter -= 2;
                    }
                    if (c > 0 && grid[r][c-1] == 1) {
                        perimeter -= 2;
                    }
                }
            }
        }
        
        return perimeter;
    }
};

```

# 2\uFE0F\u20E3 Depth-First Search (DFS):
This method utilizes Depth-First Search (DFS) to traverse and count the perimeter of the island. We define a helper function `dfs(r, c)` that recursively explores all adjacent cells of a given cell `(r, c)`.

- If a cell is out of the grid bounds or is water (`0`), it contributes 1 to the perimeter (since water cells have an exposed border).
- If a cell is land (`1`), we mark it as visited by changing its value to `-1` to avoid recounting, then recursively explore its four neighboring cells (up, down, left, right).
- The base case for the recursion is when the cell is out of bounds or is water, which contributes 1 to the perimeter.

By iterating through each cell of the grid and invoking the `dfs` function on unvisited land cells, we can compute the total perimeter of the island.
<!-- # Complexity
- \u23F1\uFE0F Time Complexity: `O(n)` where n is the number of pairs in the list.

- \uD83D\uDE80 Space Complexity: `O(n)` for the two lists. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        perimeter = 0
        
        def dfs(r, c):
            if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 0:
                return 1
            if grid[r][c] == -1:
                return 0
            grid[r][c] = -1
            return (dfs(r + 1, c) +
                    dfs(r - 1, c) +
                    dfs(r, c + 1) +
                    dfs(r, c - 1))

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    perimeter += dfs(r, c)

        return perimeter
```
```Java []
class Solution {
    public int islandPerimeter(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int perimeter = 0;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 1) {
                    perimeter += dfs(grid, r, c);
                }
            }
        }

        return perimeter;
    }

    private int dfs(int[][] grid, int r, int c) {
        // Base cases for DFS recursion
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] == 0) {
            return 1; // Water contributes 1 to perimeter
        }
        if (grid[r][c] == -1) {
            return 0; // Already visited land cell
        }

        // Mark cell as visited
        grid[r][c] = -1;

        // Explore neighbors (up, down, left, right)
        return (dfs(grid, r + 1, c) +
                dfs(grid, r - 1, c) +
                dfs(grid, r, c + 1) +
                dfs(grid, r, c - 1));
    }
}

```
```C++ []
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        int perimeter = 0;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 1) {
                    perimeter += dfs(grid, r, c);
                }
            }
        }

        return perimeter;
    }

private:
    int dfs(vector<vector<int>>& grid, int r, int c) {
        // Base cases for DFS recursion
        if (r < 0 || r >= grid.size() || c < 0 || c >= grid[0].size() || grid[r][c] == 0) {
            return 1; // Water contributes 1 to perimeter
        }
        if (grid[r][c] == -1) {
            return 0; // Already visited land cell
        }

        // Mark cell as visited
        grid[r][c] = -1;

        // Explore neighbors (up, down, left, right)
        return (dfs(grid, r + 1, c) +
                dfs(grid, r - 1, c) +
                dfs(grid, r, c + 1) +
                dfs(grid, r, c - 1));
    }
};
```
# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA