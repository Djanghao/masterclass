# Easy to Understand | Step by Step Detailed Explaination | Beginner Friendly | Depth-First Search

**Author:** tanishqsingh
**Votes:** 85
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619109/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619109/)

---

# Problem Statement
We are given an `m x n` binary grid `grid` where `1` represents land and `0` represents water. An island is defined as a maximal 4-directionally connected group of `1's`. The grid is considered connected if there is exactly one island; otherwise, it is disconnected.

Our task is to determine the minimum number of days required to disconnect the grid by changing any single land cell (`1`) into a water cell (`0`).

# Intuition
First of all, looking at the problem statement, we can observe that we need to make the grid disconnected by turning some land cells into water. If the grid has more than one island initially, it is already disconnected, and no further steps are required. However, if it is connected, we need to figure out the minimum number of days required to disconnect it. So, I decided to use Depth-First Search (DFS) to count the number of islands. If we remove land cells and recheck the number of islands, we can figure out the minimum days needed to achieve a disconnected grid.

# Approach
### Step 1: **Initial Check for Connectivity**:
   - Before diving into removing any land cells, first, I checked if the grid is already disconnected by counting the number of islands. This was done using a DFS traversal. If the grid is already disconnected (i.e., it has more than one island), then no days are needed, and we can return 0 immediately.

### Step 2: **Try Removing Each Land Cell**:
   - Since the grid might still be connected, I decided to try removing each land cell one by one. For every land cell `(i, j)`, I temporarily changed it to water (`grid[i][j] = 0`) and then rechecked the number of islands using DFS. If the grid becomes disconnected after removing a single cell, it means we only needed one day to achieve this, and I can return 1. If removing a single cell doesn't work, I restored the cell back to land (`grid[i][j] = 1`) and moved on to the next cell.

### Step 3: **Handling Cases Where One Day Is Not Enough**:
   - If removing a single land cell is not enough to disconnect the grid, I realized that it would require at least 2 days. This is because a fully connected grid of land cells always needs two changes to disconnect.

### Example
Let's walk through an example with `grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]`:

- **Step 1**:
  - First, I checked if the grid is already disconnected. It was not; the grid had one large island.

- **Step 2**:
  - Then, I began testing each land cell. For instance, by removing the cell at `grid[1][1]`, the grid still remained connected. But when I removed `grid[0][2]`, the grid split into two islands, making it disconnected. So, in this case, I found that it took at least 2 days to disconnect the grid.

# Complexity
- **Time Complexity**: `O(m * n * (m + n))` where `m` and `n` are the dimensions of the grid. The DFS operation, which checks the number of islands, is run for each cell.
  
- **Space Complexity**: `O(m * n)` which accounts for the space used by the DFS stack and the grid itself.

# Code
This implementation follows the approach I described, ensuring that every step is clear and understandable in a conversational manner.

```C++ []
class Solution {
public:
    int minDays(vector<vector<int>>& grid) {
        auto count_islands = [&]() -> int {
            vector<vector<int>> seen(grid.size(), vector<int>(grid[0].size(), 0));
            int islands = 0;
            
            function<void(int, int)> dfs = [&](int r, int c) {
                seen[r][c] = 1;
                for (auto [dr, dc] : {pair{-1, 0}, {1, 0}, {0, -1}, {0, 1}}) {
                    int nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < grid.size() && nc >= 0 && nc < grid[0].size() && grid[nr][nc] == 1 && !seen[nr][nc]) {
                        dfs(nr, nc);
                    }
                }
            };
            
            for (int i = 0; i < grid.size(); i++) {
                for (int j = 0; j < grid[0].size(); j++) {
                    if (grid[i][j] == 1 && !seen[i][j]) {
                        islands++;
                        dfs(i, j);
                    }
                }
            }
            return islands;
        };
        
        if (count_islands() != 1) return 0;
        
        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if (grid[i][j] == 1) {
                    grid[i][j] = 0;
                    if (count_islands() != 1) return 1;
                    grid[i][j] = 1;
                }
            }
        }
        
        return 2;
    }
};

```

```Java []
class Solution {
    public int minDays(int[][] grid) {
        if (countIslands(grid) != 1) return 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    grid[i][j] = 0;
                    if (countIslands(grid) != 1) return 1;
                    grid[i][j] = 1;
                }
            }
        }

        return 2;
    }

    private int countIslands(int[][] grid) {
        boolean[][] seen = new boolean[grid.length][grid[0].length];
        int islands = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1 && !seen[i][j]) {
                    islands++;
                    dfs(grid, i, j, seen);
                }
            }
        }
        return islands;
    }

    private void dfs(int[][] grid, int r, int c, boolean[][] seen) {
        seen[r][c] = true;
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (int[] dir : directions) {
            int nr = r + dir[0], nc = c + dir[1];
            if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] == 1 && !seen[nr][nc]) {
                dfs(grid, nr, nc, seen);
            }
        }
    }
}

```
```Python3 []
class Solution:
    def minDays(self, grid: List[List[int]]) -> int:
        def count_islands():
            seen = set()
            
            def dfs(r, c):
                stack = [(r, c)]
                while stack:
                    x, y = stack.pop()
                    for nx, ny in [(x-1, y), (x+1, y), (x, y-1), (x, y+1)]:
                        if 0 <= nx < len(grid) and 0 <= ny < len(grid[0]) and grid[nx][ny] == 1 and (nx, ny) not in seen:
                            seen.add((nx, ny))
                            stack.append((nx, ny))
            
            islands = 0
            for i in range(len(grid)):
                for j in range(len(grid[0])):
                    if grid[i][j] == 1 and (i, j) not in seen:
                        islands += 1
                        seen.add((i, j))
                        dfs(i, j)
            return islands
        
        if count_islands() != 1:
            return 0
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    grid[i][j] = 0
                    if count_islands() != 1:
                        return 1
                    grid[i][j] = 1
        
        return 2


```
```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    const countIslands = () => {
        const seen = new Set();
        let islands = 0;

        const dfs = (r, c) => {
            const stack = [[r, c]];
            while (stack.length > 0) {
                const [x, y] = stack.pop();
                for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                    const nx = x + dx, ny = y + dy;
                    if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === 1 && !seen.has(`${nx},${ny}`)) {
                        seen.add(`${nx},${ny}`);
                        stack.push([nx, ny]);
                    }
                }
            }
        };

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1 && !seen.has(`${i},${j}`)) {
                    islands++;
                    seen.add(`${i},${j}`);
                    dfs(i, j);
                }
            }
        }
        return islands;
    };

    if (countIslands() !== 1) return 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                if (countIslands() !== 1) return 1;
                grid[i][j] = 1;
            }
        }
    }

    return 2;
};


```
Thank you for exploring this solution! I hope it helped clarify the problem. 
### Please feel free to upvote if you found it useful. Happy coding!

