# [Java/Python 3] 2 DP codes: space O(m * n) and O(n), w/ analysis.

**Author:** rock
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/2140973/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/2140973/)

---

```java
    public int minPathCost(int[][] grid, int[][] moveCost) {
        int m = grid.length, n = grid[0].length;
        int[][] cost = new int[m][n];
        for (int c = 0; c < n; ++c) {
            cost[0][c] = grid[0][c];
        }
        for (int r = 1; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                int mi = Integer.MAX_VALUE;
                for (int j = 0; j < n; ++j) {
                    mi = Math.min(mi, cost[r - 1][j] + moveCost[grid[r - 1][j]][c]);
                }
                cost[r][c] = mi + grid[r][c];
            }
        }
        return IntStream.of(cost[m - 1]).min().getAsInt();
    }
```
```python
    def minPathCost(self, grid: List[List[int]], moveCost: List[List[int]]) -> int:
        m, n = map(len, (grid, grid[0]))
        min_cost = 0
        cost = [grid[0][:]]
        for r, row in enumerate(grid):
            if r > 0:
                cost.append([])
                for c, cell in enumerate(row):
                        cost[-1].append(cell + min(cost[-2][j] + moveCost[i][c] for j, i in enumerate(grid[r - 1])))
        return min(cost[-1])            
```

**Analysis:**

Time: `O(m * n * n)`, space: `O(m * n)`.

----

Space optimization to `O(n)`:
```java
    public int minPathCost(int[][] grid, int[][] moveCost) {
        int m = grid.length, n = grid[0].length;
        int[][] cost = new int[2][n];
        cost[0] = grid[0].clone();
        for (int r = 1; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                int min = Integer.MAX_VALUE;
                for (int j = 0; j < n; ++j) {
                    min = Math.min(min, cost[1 - r % 2][j] + moveCost[grid[r - 1][j]][c]);
                }
                cost[r % 2][c] = min + grid[r][c];
            }
        }
        return IntStream.of(cost[1 - m % 2]).min().getAsInt();
    }
```

```python
    def minPathCost(self, grid: List[List[int]], moveCost: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        cost = [grid[0][:], [0] * n]
        for r, row in enumerate(grid):
            for c, cell in enumerate(row):
                if r > 0:
                    cost[r % 2][c] = cell + min(cost[1 - r % 2][j] + moveCost[i][c] for j, i in enumerate(grid[r - 1]))
        return min(cost[1 - m % 2])
```

**Analysis:**

Time: `O(m * n * n)`, space: `O(n)`.

----

Feel free to let me know if you have any questions, and please **upvote** if the post is helpful.