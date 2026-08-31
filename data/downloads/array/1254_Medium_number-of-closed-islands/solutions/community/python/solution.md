# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 55
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/3384860/](https://leetcode.com/problems/number-of-closed-islands/solutions/3384860/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem, we can iterate through the grid, and for each unvisited land` (grid[i][j] == 0 and !visited[i][j])`, we can perform a depth-first search to check if it forms a closed island, i.e., all adjacent land is surrounded by water `(1)`.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable `count` to keep track of the number of closed islands, and a boolean array `visited` t
keep track of visited land.
2. Iterate through the grid using two nested loops, `i` and `j`, for each unvisited land (grid[i][j] == 0 and
!visited[i][j]), perform a depth-first search to check if it forms a closed island. If it does, increment the
`count`.
3. In the depth-first search, we need to check if the current land is out of bounds or has already been visited
in which case we return true. If the current land is adjacent to water, we need to recursively check its four
neighbors (up, down, left, right) to see if they form a closed island. If any of the four neighbors is not in th
bounds or is adjacent to water, then the current land is not a closed island, and we return false. If all four
neighbors form a closed island, then the current land also forms a closed island, and we return true.
4. Finally, we return the `count`.


# Complexity

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Time complexity: $$O(mn)$$, where `m` and `n` are the dimensions of the grid. We visit each land at and perform a constant amount of work for each land, so the total time complexity is linear in thgrid.


- Space complexity: $$O(mn)$$, for the `visited` boolean array
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


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
    public int closedIsland(int[][] grid) {
        int m = grid.length; // number of rows in the grid
        int n = grid[0].length; // number of columns in the grid
        int count = 0; // counter to keep track of number of closed islands
        boolean[][] visited = new boolean[m][n]; // to keep track of visited cells
        
        // loop through all cells, skipping the border cells
        for (int i = 1; i < m - 1; i++) {
            for (int j = 1; j < n - 1; j++) {
                if (grid[i][j] == 0 && !visited[i][j]) { // if this is an unvisited land cell
                    boolean isClosed = dfs(grid, visited, i, j); // check if it is a closed island
                    if (isClosed) {
                        count++; // increment the counter if it is a closed island
                    }
                }
            }
        }
        return count; // return the number of closed islands
    }
    
    private boolean dfs(int[][] grid, boolean[][] visited, int i, int j) {
        int m = grid.length; // number of rows in the grid
        int n = grid[0].length; // number of columns in the grid
        if (i < 0 || i >= m || j < 0 || j >= n) { // if out of bounds, not a closed island
            return false;
        }
        if (visited[i][j]) { // if already visited, not a closed island
            return true;
        }
        visited[i][j] = true; // mark as visited
        if (grid[i][j] == 1) { // if water, not a closed island
            return true;
        }
        boolean isClosed = true; // flag to check if all adjacent cells are water (closed island)
        isClosed &= dfs(grid, visited, i - 1, j); // check the cell to the left
        isClosed &= dfs(grid, visited, i + 1, j); // check the cell to the right
        isClosed &= dfs(grid, visited, i, j - 1); // check the cell above
        isClosed &= dfs(grid, visited, i, j + 1); // check the cell below
        return isClosed; // return whether all adjacent cells are water (closed island)
    }
}

```

```C++ []
class Solution {
public:
    int closedIsland(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int count = 0;
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        for (int i = 1; i < m - 1; i++) {
            for (int j = 1; j < n - 1; j++) {
                if (grid[i][j] == 0 && !visited[i][j]) {
                    bool isClosed = dfs(grid, visited, i, j);
                    if (isClosed) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
    
    bool dfs(vector<vector<int>>& grid, vector<vector<bool>>& visited, int i, int j) {
        int m = grid.size();
        int n = grid[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false;
        }
        if (visited[i][j]) {
            return true;
        }
        visited[i][j] = true;
        if (grid[i][j] == 1) {
            return true;
        }
        bool isClosed = true;
        isClosed &= dfs(grid, visited, i - 1, j);
        isClosed &= dfs(grid, visited, i + 1, j);
        isClosed &= dfs(grid, visited, i, j - 1);
        isClosed &= dfs(grid, visited, i, j + 1);
        return isClosed;
    }
};
```
```python []
class Solution(object):
    def closedIsland(self, grid):
        m, n = len(grid), len(grid[0])
        count = 0
        visited = [[False] * n for _ in range(m)]
        
        def dfs(i, j):
            if i < 0 or i >= m or j < 0 or j >= n:
                return False
            if visited[i][j]:
                return True
            visited[i][j] = True
            if grid[i][j] == 1:
                return True
            isClosed = True
            isClosed &= dfs(i - 1, j)
            isClosed &= dfs(i + 1, j)
            isClosed &= dfs(i, j - 1)
            isClosed &= dfs(i, j + 1)
            return isClosed
        
        for i in range(1, m - 1):
            for j in range(1, n - 1):
                if grid[i][j] == 0 and not visited[i][j]:
                    isClosed = dfs(i, j)
                    if isClosed:
                        count += 1
        return count

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```