# DFS in C++, Java and Python

**Author:** cpcs
**Votes:** 6
**Link:** [https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4041705/](https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4041705/)

---

# Intuition
All the nodes in the same connected component have the same answer value which is the sum of all the nodes in the whole graph subtracts the sum of all the nodes in the connected component.

# Approach
DFS to get all connected components, for each connecetd component, we need sum and count which are the sum of all the node values and the number of the nodes in the connected components.

And the final answer is sigma((sum_of_all_nodes - sum_of_nodes_in_each_connected_component) * count_of_nodes_in_each_connected_component)

# Complexity
- Time complexity:
O(m * n)

- Space complexity:
O(1)

# Code
C++
```
class Solution {
    pair<long long, int> dfs(int x, int y, vector<vector<int>>& g) {
        if (x < 0 || x >= g.size() || y < 0 || y >= g[0].size() || g[x][y] < 0) {
            return {0, 0};
        }
        const int dx[] = {-1, 0, 1, 0}, dy[] = {0, 1, 0, -1};
        pair<long long, int> r = {g[x][y], 1};
        g[x][y] = -1;
        for (int i = 0; i < 4; ++i) {
            const auto& p = dfs(x + dx[i], y + dy[i], g);
            r.first += p.first;
            r.second += p.second;
        }
        return r;
    }
public:
    long long sumRemoteness(vector<vector<int>>& grid) {
        long long s = 0;
        for (const auto& g : grid) {
            for (int x : g) {
                s += max(x, 0);
            }
        }
        long long r = 0;
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[0].size(); ++j) {
                if (grid[i][j] > 0) {
                    const auto p = dfs(i, j, grid);
                    r += (s - p.first) * p.second; 
                }
            }
        }
        return r;
    }
};
```

Java
```
class Solution {
    private static final int[] dx = {-1, 0, 1, 0};
    private static final int[] dy = {0, 1, 0, -1};

    private class Pair {
        long first;
        int second;

        Pair(long first, int second) {
            this.first = first;
            this.second = second;
        }
    }

    private Pair dfs(int x, int y, int[][] g) {
        int rows = g.length;
        int cols = g[0].length;

        if (x < 0 || x >= rows || y < 0 || y >= cols || g[x][y] < 0) {
            return new Pair(0, 0);
        }

        Pair r = new Pair(g[x][y], 1);
        g[x][y] = -1;

        for (int i = 0; i < 4; ++i) {
            Pair p = dfs(x + dx[i], y + dy[i], g);
            r.first += p.first;
            r.second += p.second;
        }

        return r;
    }

    public long sumRemoteness(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        long s = 0;
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                s += Math.max(grid[i][j], 0);
            }
        }

        long r = 0;
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (grid[i][j] > 0) {
                    Pair p = dfs(i, j, grid);
                    r += (s - p.first) * p.second;
                }
            }
        }

        return r;
    }
}
```
Python
```

class Solution:
    def __init__(self):
        self.dx = [-1, 0, 1, 0]
        self.dy = [0, 1, 0, -1]

    def dfs(self, x, y, g):
        if x < 0 or x >= len(g) or y < 0 or y >= len(g[0]) or g[x][y] < 0:
            return (0, 0)

        r = (g[x][y], 1)
        g[x][y] = -1

        for i in range(4):
            p = self.dfs(x + self.dx[i], y + self.dy[i], g)
            r = (r[0] + p[0], r[1] + p[1])

        return r

    def sumRemoteness(self, grid: List[List[int]]) -> int:
        s = 0
        for row in grid:
            for x in row:
                s += max(x, 0)

        r = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] > 0:
                    p = self.dfs(i, j, grid)
                    r += (s - p[0]) * p[1]

        return r

```