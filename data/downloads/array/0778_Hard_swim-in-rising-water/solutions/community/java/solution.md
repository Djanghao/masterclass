# [Java] 3 clean codes: Dijkstra's algo, PriorityQueue and Binary search

**Author:** shk10
**Votes:** 48
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/965631/](https://leetcode.com/problems/swim-in-rising-water/solutions/965631/)

---

**Approach 1: Dijkstra's algorithm**
It is easy to see the grid as a graph so we can apply Dijkstra's algorithm to find the shortest path from start vertex to end vertex. When grid value at a vertex is higher than our current minimum distance path (which basically represents the current time), this edge can be seen as having a positive weight equal to grid value - current distance value otherwise we can treat this edge as 0 weight.

```
// 14 ms. 41.35%
class Solution {
    private static final int[][] dir = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };
    public int swimInWater(int[][] grid) {
        int n = grid.length;
        int[][] dist = new int[n][n];
        for(int i = 0; i < n; i++) Arrays.fill(dist[i], n * n);
        dist[0][0] = grid[0][0];
        TreeSet<int[]> set = new TreeSet<>((a, b) -> a[2] == b[2] ? (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]) : a[2] - b[2]);
        set.add(new int[] {0, 0, grid[0][0]});
        while(!set.isEmpty()) {
            int[] p = set.pollFirst();
            int i = p[0], j = p[1], time = p[2];
            if(i == n-1 && j == n-1) break;
            for(int[] d: dir) {
                int x = i + d[0], y = j + d[1];
                if(x < 0 || x >= n || y < 0 || y >= n) continue;
                int alt = time + Math.max(0, grid[x][y] - time);
                if(alt < dist[x][y]) {
                    int[] key = {x, y, dist[x][y]};
                    set.remove(key);
                    key[2] = dist[x][y] = alt;
                    set.add(key);
                }
            }
        }
        return dist[n-1][n-1];
    }
}
```

**Approach 2: PriorityQueue based shortest path search**
This is very similar to Dijkstra's algorithm except we don't maintain ```dist``` array and update ```dist``` for other vertices. We are just focused on finding the next closest vertex (the one that increases minimum time) and using it to reach towards target vertex.

Reason why we can get by without ```dist``` array and update ```dist``` step is because of the way problem is defined, specifically because a vertex's ```dist``` value could become smaller than its grid value (if at all) **only once** i.e. at the time of exploring that vertex for the first time. After that, if we explore that vertex again through some other vertex, then time must be higher at that point and so the alternate path value (= time at that point) can not be better than what is already there. This is why we can get by without the "relax" step of Dijkstra's.

```
// 7 ms. 80.91%
class Solution {
    private static final int[][] dir = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };
    public int swimInWater(int[][] grid) {
        int n = grid.length;
        boolean[][] visited = new boolean[n][n];
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[2] - b[2]);
        pq.add(new int[] {0, 0, grid[0][0]});
        visited[0][0] = true;
        while(!pq.isEmpty()) {
            int[] a = pq.poll();
            for(int[] d: dir) {
                int x = a[0] + d[0], y = a[1] + d[1];
                if(x < 0 || x >= n || y < 0 || y >= n) continue;
                if(!visited[x][y]) {
                    visited[x][y] = true;
                    int t = Math.max(a[2], grid[x][y]);
                    if(x == n-1 && y == n-1) return t;
                    pq.add(new int[] {x, y, t});
                }
            }
        }
        return 0;
    }
}
```

**Approach 3: Binary search**
Note that the answer (least time to reach) lies in a fixed range and that range is ```grid[0][0]``` to ```n*n-1```.

**Minimum:** we need to wait atleast ```grid[0][0]``` time to be at ```0,0``` even if further path towards target takes 0 additional time
**Maximum:** since problem states that ```grid[i][j] is a permutation of [0, ..., N*N - 1]```, the time after which we can go from any point A to point B is the highest value in the grid i.e. ```n*n-1```

Important observation is that if we can reach from start vertex to end vertex within ```T``` time then we can also reach within ```T+1``` time. This means if we define a function ```F``` where ```F(T) = true/false depending on whether we can reach from start vertex to end vertex within T time```, then our ```F``` function would look something like this:

```T: min -> max```
```F(T): [false false .... false true true ... true]```

So what we have to do is find the location of first ```T``` such that ```F(T)``` is true. This should be our answer or the minimum time.
We can do this efficiently using binary search. In fact, we can apply binary search to a lot of similar problems where answer space is a fixed interval and feasibility results are monotonically non-increasing or non-decreasing.

We can do a DFS/BFS to test feasibility i.e. to check if we can reach from start vertex to end vertex within time ```T```.

```
// 2 ms. 99.20%
class Solution {
    int n;
    private boolean dfs(int[][] grid, int i, int j, int T, boolean[][] visited) {
        if(i < 0 || i >= n || j < 0 || j >= n || visited[i][j] || grid[i][j] > T) return false;
        visited[i][j] = true;
        if(i == n-1 && j == n-1) return true;
        return dfs(grid, i-1, j, T, visited) || dfs(grid, i+1, j, T, visited) || dfs(grid, i, j-1, T, visited) || dfs(grid, i, j+1, T, visited);
    }
    public int swimInWater(int[][] grid) {
        this.n = grid.length;
        int l = grid[0][0], r = n*n - 1;
        while(l < r) {
            int m = l + ((r-l) >> 1);
            if(dfs(grid, 0, 0, m, new boolean[n][n])) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
}
```