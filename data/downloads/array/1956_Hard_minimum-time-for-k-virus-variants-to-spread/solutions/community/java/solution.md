# Simple BFS

**Author:** jasmine-joey
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/3063895/](https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/3063895/)

---


# Code
```
class Solution {

    private static final int[][] dirs = {
        {0, 1},
        {0, -1},
        {1, 0},
        {-1, 0}
    };

    public int minDayskVariants(int[][] points, int k) {
        
        Queue<int[]> queue = new LinkedList<>();
        boolean[][][] visited = new boolean[points.length][101][101];
        for (int i = 0; i < points.length; i++) {
            queue.offer(new int[] {i, points[i][0], points[i][1]});
            visited[i][points[i][0]][points[i][1]] = true;
        }

        int[][] count = new int[101][101];
        int steps = 0;
    
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] node = queue.poll();
                int viral = node[0];
                if (++count[node[1]][node[2]] == k) {
                    return steps;
                }
                for (int[] dir : dirs) {
                    int x = node[1] + dir[0];
                    int y = node[2] + dir[1];
                    if (x >= 1 && y >= 1 && x <= 100 && y <= 100 && !visited[viral][x][y]) {
                        queue.offer(new int[] {viral, x, y});
                        visited[viral][x][y] = true;
                    }
                }
            }
            steps++;
        }
        return -1;
    }
}
```