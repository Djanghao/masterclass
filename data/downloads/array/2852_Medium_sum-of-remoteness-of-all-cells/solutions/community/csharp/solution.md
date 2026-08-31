# [Java/C#] BFS straightforward

**Author:** sh2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4476040/](https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4476040/)

---

# Intuition
The sum of R[i][j] = (totalRemoteness - islandRemoteness) * islandArea
BFS can get remoteness and island area of each island

# Approach
1 get the total remoteness of the matrix
2 get the remoteness of the island and the area of the island
3 return ans

# Complexity
- Time complexity: O(n^2) n = grid.length
- Space complexity: O(n^2)

# Code
```
class Solution {
    private static final int[][] DIRECTIONS = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    private boolean[][] visited;
    public long sumRemoteness(int[][] grid) {
        int n = grid.length;
        long totalRemoteness = 0;
        for (int x = 0; x < n; x++) {
            for (int y = 0; y < n; y++) {
                if (grid[x][y] == -1) continue;
                totalRemoteness += grid[x][y];
            }
        }

        long ans = 0;
        visited = new boolean[n][n];
        for (int x = 0; x < n; x++) {
            for (int y = 0; y < n; y++) {
                if (grid[x][y] == -1 || visited[x][y]) continue;
                long[] island = getIsland(grid, x, y);
                ans += island[1] * (totalRemoteness - island[0]);
            }
        }
        return ans;
    }

    private long[] getIsland(int[][] grid, int sx, int sy) {
        int n = grid.length;
        Queue<Integer> q = new ArrayDeque<>();
        q.offer(sx * n + sy);
        visited[sx][sy] = true;

        long numOfPoints = 0, totalSum = 0;
        while (!q.isEmpty()) {
            int index = q.poll();
            int x = index / n, y = index % n;
            numOfPoints++;
            totalSum += grid[x][y];

            for (int[] dir : DIRECTIONS) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                if (!(0 <= nx && nx < n && 0 <= ny && ny < n)) continue;
                if (visited[nx][ny] || grid[nx][ny] == -1) continue;
                q.offer(nx * n + ny);
                visited[nx][ny] = true;
            }
        }

        return new long[]{totalSum, numOfPoints};
    }
}


```
C# (DFS will get stack overflow)
```
public class Solution {

    private int[,] DIRECTIONS = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
    private bool[,] visited;

    public long SumRemoteness(int[][] grid) {
        int n = grid.Length;
        long totalRemoteness = 0;
        for (int x = 0; x < n; x++) {
            for (int y = 0; y < n; y++) {
                if (grid[x][y] == -1) continue;
                totalRemoteness += grid[x][y];
            }
        }

        visited = new bool[n, n];
        long ans = 0;
        for (int x = 0; x < n; x++) {
            for (int y = 0; y < n; y++) {
                if (grid[x][y] == -1 || visited[x, y]) continue;
                // (long remoteness, long area) = dfs(grid, x, y);
                (long remoteness, long area) = bfs(grid, x, y);
                ans += (totalRemoteness - remoteness) * area;
            }
        }
        return ans;
    }

    private (long, long) bfs(int[][] grid, int x, int y) {
        int n = grid.Length;
        var q = new Queue<(int, int)>();
        q.Enqueue((x, y));
        visited[x, y] = true;

        long remoteness = 0, area = 0;
        while (q.Count > 0) {
            var curr = q.Dequeue();
            area++;
            remoteness += grid[curr.Item1][curr.Item2];

            for(int i = 0; i < 4; i++) {
                int nx = curr.Item1 + DIRECTIONS[i, 0];
                int ny = curr.Item2 + DIRECTIONS[i, 1];
                if (!(0 <= nx && nx < n && 0 <= ny && ny < n)) continue;
                if (visited[nx, ny] || grid[nx][ny] == -1) continue;
                visited[nx, ny] = true;
                q.Enqueue((nx, ny));
            } 
        }
        return (remoteness, area);
    }

    private (long, long) dfs(int[][] grid, int cx, int cy) {
        int n = grid.Length;
        long remoteness = grid[cx][cy], area = 1;
        visited[cx, cy] = true;
        for(int i = 0; i < 4; i++) {
            int nx = cx + DIRECTIONS[i, 0];
            int ny = cy + DIRECTIONS[i, 1];
            if (!(0 <= nx && nx < n && 0 <= ny && ny < n)) continue;
            if (visited[nx, ny] || grid[nx][ny] == -1) continue;
            (long r, long a) = dfs(grid, nx, ny);
            remoteness += r;
            area += a;
        } 

        return (remoteness, area);
    }
}
```