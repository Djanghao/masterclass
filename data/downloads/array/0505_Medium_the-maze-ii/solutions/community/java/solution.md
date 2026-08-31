# Java Clean Solution

**Author:** skyhuangxy
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/2867946/](https://leetcode.com/problems/the-maze-ii/solutions/2867946/)

---



# Code
```
class Solution {
    private static final int[][] Directions = new int[][]{{0, -1}, {0, 1}, {1, 0}, {-1, 0}};
    public int shortestDistance(int[][] maze, int[] start, int[] destination) {
        int row = maze.length;
        int col = maze[0].length;
        PriorityQueue<int[]> queue = new PriorityQueue<>((arr1, arr2) -> arr1[2] - arr2[2]);
        int[][] distance = new int[row][col];
        for (int i = 0; i < row; i++) {
            Arrays.fill(distance[i], Integer.MAX_VALUE);
        } 
        boolean[][] visited = new boolean[row][col];
        queue.offer(new int[]{start[0], start[1], 0});

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int i = cur[0];
            int j = cur[1];
            int curdistance = cur[2];
            if (visited[i][j]) {
                continue;
            }
            visited[i][j] = true;
            
            if (i == destination[0] && j == destination[1]) {
                return curdistance;
            }
            for (int[] dir : Directions) {
                int ii = i;
                int jj = j;
                int curStep = 0;
                while (ii + dir[0] >= 0 && ii + dir[0] < row && jj + dir[1] >= 0 && jj + dir[1] < col && maze[ii + dir[0]][jj + dir[1]] == 0) {
                    ii += dir[0];
                    jj += dir[1];
                    curStep++;
                }
                if (curdistance + curStep < distance[ii][jj]) {
                    distance[ii][jj] = curdistance + curStep;
                    queue.offer(new int[]{ii, jj, distance[ii][jj]});
                }
            }

        }

        return -1;

    }
}
```