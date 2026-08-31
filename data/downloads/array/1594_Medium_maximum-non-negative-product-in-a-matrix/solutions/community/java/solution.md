# JAVA  DFS straightforward

**Author:** yyyyyoung
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/855052/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/855052/)

---

```
public int maxProductPath(int[][] grid) {
        int rows = grid.length;
        int columns = grid[0].length;
        HashSet<Long> set = new HashSet<>();
        long sum = 1;
        dfs(0, 0, rows, columns, grid, set, sum);
        long max = -1;
        for (Long r : set) {
            max = Math.max(max, r);
        }
        if (max < 0) return -1;      
        long mod = (long)1e9 + 7;
        return (int)(max % mod);
    }
    private void dfs(int i, int j, int rows, int columns, int[][] grid, HashSet<Long> set, Long sum) {
        if (i < 0 || i >= rows || j < 0 || j >= columns) return;
        if (grid[i][j] == 0) {
            set.add((long)0);
            return;
        }
        if (i == rows - 1 && j == columns - 1) {
            sum *= grid[i][j];
            if (sum > 0) set.add(sum);
        }
        sum *= grid[i][j];
        dfs(i + 1, j, rows, columns, grid, set, sum);
        dfs(i, j + 1, rows, columns, grid, set, sum);
    }
```