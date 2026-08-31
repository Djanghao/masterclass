# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 46
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3388585/](https://leetcode.com/problems/number-of-enclaves/solutions/3388585/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We want to find the number of land cells in the grid that are enclosed by other land cells, meaning they cannot reach the boundary of the grid by walking from one land cell to another adjacent land cell.

# Approach
<!-- Describe your approach to solving the problem. -->
We can use a depth-first search (DFS) algorithm to mark all land cells that are reachable
from the boundary of the grid. We start by marking all boundary land cells and their
connected cells, and then count the remaining unmarked land cells as enclosed land cells.
# Algorithm:
1. Define the DFS method that takes the grid, the row and column indices, and recursively marks all connected land cells that are reachable from the boundary.

2. In the `numEnclaves` method, initialize the variables `m` and `n` to be the dimensions of the grid.
3. Perform a DFS starting from each boundary cell to mark all connected land cells that are reachable from the boundary. We mark these cells with -1 to indicate that they have been visited.
4. After marking all connected land cells, count the remaining unmarked land cells and return the count as the number of enclosed land cells.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this algorithm is $$O(mn)$$, where m and n are the dimensions of the grid. We visit each cell at most once in the DFS. In the worst case, we could visit all the cells in the grid.


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this algorithm is also $$O(mn)$$. This is the space used by the recursion stack in the DFS. In the worst case, the DFS could recurse for each cell in the grid.


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public int numEnclaves(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        
        // mark all boundary land cells and their connected cells
        for (int i = 0; i < m; i++) {
            dfs(grid, i, 0);
            dfs(grid, i, n-1);
        }
        for (int j = 0; j < n; j++) {
            dfs(grid, 0, j);
            dfs(grid, m-1, j);
        }
        
        // count unmarked land cells
        int count = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
        }
        return count;
    }
    
    private void dfs(int[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != 1) {
            return;
        }
        grid[i][j] = -1; // mark as visited
        dfs(grid, i+1, j);
        dfs(grid, i-1, j);
        dfs(grid, i, j+1);
        dfs(grid, i, j-1);
    }
}

```

```C++ []
class Solution {
public:
    int numEnclaves(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        // mark all boundary land cells and their connected cells
        for (int i = 0; i < m; i++) {
            dfs(grid, i, 0);
            dfs(grid, i, n-1);
        }
        for (int j = 0; j < n; j++) {
            dfs(grid, 0, j);
            dfs(grid, m-1, j);
        }
        
        // count unmarked land cells
        int count = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
        }
        return count;
    }
    
private:
    void dfs(vector<vector<int>>& grid, int i, int j) {
        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] != 1) {
            return;
        }
        grid[i][j] = -1; // mark as visited
        dfs(grid, i+1, j);
        dfs(grid, i-1, j);
        dfs(grid, i, j+1);
        dfs(grid, i, j-1);
    }
};

```

```python []
class Solution(object):
    def numEnclaves(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        m = len(grid)
        n = len(grid[0])
        
        # mark all boundary land cells and their connected cells
        for i in range(m):
            self.dfs(grid, i, 0)
            self.dfs(grid, i, n-1)
        for j in range(n):
            self.dfs(grid, 0, j)
            self.dfs(grid, m-1, j)
        
        # count unmarked land cells
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    count += 1
        return count
    
    def dfs(self, grid, i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != 1:
            return
        grid[i][j] = -1 # mark as visited
        self.dfs(grid, i+1, j)
        self.dfs(grid, i-1, j)
        self.dfs(grid, i, j+1)
        self.dfs(grid, i, j-1)

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```