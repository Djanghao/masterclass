# Java 99% using DFS + PQ

**Author:** Samiksha12
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/5825631/](https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/5825631/)

---

```java []
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 * boolean canMove(char direction);
 * int move(char direction);
 * boolean isTarget();
 * }
 */

class Solution {
    int targetX;
    int targetY;

    public int findShortestPath(GridMaster master) {
        targetX = -1;
        targetY = -1;

        int[][] grid = new int[201][201];
        int[][] cost = new int[201][201];
        for (int i = 0; i <= 200; i += 1) {
            Arrays.fill(cost[i], 10001);
        }

        grid[100][100] = -1;
        cost[100][100] = 0;

        buildGrid(grid, cost, master, 100, 100);
        if (targetX == -1) {
            return -1;
        }

        Queue<int[]> queue = new PriorityQueue<>((a, b) -> a[2] - b[2]);
        queue.offer(new int[] { 100, 100, 0 });
        grid[100][100] = 0;

        int[][] dirs = {
                { -1, 0 },
                { 1, 0 },
                { 0, -1 },
                { 0, 1 },
        };

        int travel = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i += 1) {
                int[] cell = queue.poll();
                if (cell[0] == targetX && cell[1] == targetY) {
                    return cell[2];
                }

                for (int[] dir : dirs) {
                    int row = cell[0] + dir[0];
                    int col = cell[1] + dir[1];

                    if (grid[row][col] != 0) {
                        grid[row][col] = 0;
                        queue.offer(new int[] { row, col, cell[2] + cost[row][col] });
                    }
                }
            }

            travel += 1;
        }

        return -1;
    }

    private void buildGrid(int[][] grid, int[][] cost, GridMaster master, int row, int col) {
        if (master.isTarget()) {
            targetX = row;
            targetY = col;
            grid[row][col] = 2;
            return;
        }

        if (col - 1 >= 0 && grid[row][col - 1] == 0 && master.canMove('L')) {
            grid[row][col - 1] = 1;
            cost[row][col - 1] = master.move('L');

            buildGrid(grid, cost, master, row, col - 1);

            master.move('R');
        }

        if (row - 1 >= 0 && grid[row - 1][col] == 0 && master.canMove('U')) {
            grid[row - 1][col] = 1;
            cost[row - 1][col] = master.move('U');

            buildGrid(grid, cost, master, row - 1, col);

            master.move('D');
        }

        if (col + 1 < 201 && grid[row][col + 1] == 0 && master.canMove('R')) {
            grid[row][col + 1] = 1;
            cost[row][col + 1] = master.move('R');

            buildGrid(grid, cost, master, row, col + 1);

            master.move('L');
        }

        if (row + 1 < 201 && grid[row + 1][col] == 0 && master.canMove('D')) {
            grid[row + 1][col] = 1;
            cost[row + 1][col] = master.move('D');

            buildGrid(grid, cost, master, row + 1, col);

            master.move('U');
        }
    }
}

```