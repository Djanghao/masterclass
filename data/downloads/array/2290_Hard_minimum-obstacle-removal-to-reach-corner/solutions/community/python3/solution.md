# [Java/Python 3] 2 codes: Shortest Path & BFS, w/ brief explanation, analysis and similar problems.

**Author:** rock
**Votes:** 113
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2085640/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/2085640/)

---

**Q & A**

Q1: Why do we not need to keep track of which nodes we've already visited? Is this code perhaps already implicitly tracking the nodes we've visited? According to the implementation of Lazy Dijkstra [here](http://nmamano.com/blog/dijkstra/dijkstra.html), we need to keep track of which nodes we've already visited. 
A1: The `PriorityQueue/heap` always keep track of the cell that we currently can reach with shortest path, and `grid[i][j] + o < dist[i][j]` makes sure we don't need to visit the cell again if we can not reach it with less obstacles. 
Q2: .Is it possible to optimize backtracking code with dp for this problem?
[@Mikey98](https://leetcode.com/Mikey98)   [@Adithya_U_Bhat](https://leetcode.com/Adithya_U_Bhat) contributed the following anwer.
A2: No. In this question `1 <= m, n <= 10`<sup>5</sup>, which is toooo big for backtracking; You cannot use dp here as there are 4 directions and revisiting a node again can give you minimum answer so dp fails here , remember one thing if its given 4 direction always go with graphs

**End of Q & A**

----

**Method 1: Shortest Path**

1. Initialize `dist` with `Integer.MAX_VALUE/math.inf`, and use `dist[i][j]` to indicate the currently minimum obstacles need to remove to reach `(i, j)`;
2. Starting from `(0, 0)`, put `[grid[0][0], 0, 0]` into a `PriorityQueue/heap` to begin to search by **Shortest Path**; Once we can reach any `(i, j)` from its neighbor with fewer obstacles, we update it with the less value and put the corresponding information array `[dist[i][j], i, j]` into `PriorityQueue/heap`, repeat till we find a path to `(m - 1, n - 1)`.

```java
    private static final int[] d = {0, 1, 0, -1, 0};
    public int minimumObstacles(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] dist = new int[m][n];
        for (int[] di : dist) {
            Arrays.fill(di, Integer.MAX_VALUE);
        }
        dist[0][0] = grid[0][0];
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[]{dist[0][0], 0,  0});
        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            int o = cur[0], r = cur[1], c = cur[2];
            if (r == m - 1 && c == n - 1) {
                return o;
            }
            for (int k = 0; k < 4; ++k) {
                int i = r + d[k], j = c + d[k + 1];
                if (0 <= i && i < m && 0 <= j && j < n && o + grid[i][j] < dist[i][j]) {
                    dist[i][j] = o + grid[i][j];
                    pq.offer(new int[]{dist[i][j], i, j});
                }
            }
        }
        return dist[m - 1][n - 1];
    }
```
```python
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        m, n = map(len, (grid, grid[0]))
        dist = [[inf] * n for _ in range(m)]
        dist[0][0] = grid[0][0]
        hp = [(dist[0][0], 0, 0)]
        while hp:
            o, r, c = heappop(hp)
            if (r, c) == (m - 1, n - 1):
                return o
            for i, j in (r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1):
                if m > i >= 0 <= j < n and grid[i][j] + o < dist[i][j]:
                    dist[i][j] = grid[i][j] + o
                    heappush(hp, (dist[i][j], i, j))
```

**Analysis:**

Time: `O(m * n log(m * n))`, space: `O(m * n)`.

----

**Method 2: Modified BFS** -- credit to **@Doskarin**.
1. Initialize `dist` with `Integer.MAX_VALUE/math.inf`, and use `dist[i][j]` to indicate the currently minimum obstacles need to remove to reach `(i, j)`;
2. Starting from `(0, 0)`, put `[grid[0][0], 0, 0]` into a `Deque` to begin BFS, and use `dist` value to avoid duplicates;
3. **Whenever encountering an empty cell neighbor, the `dist` value is same and hence we can put it to the front of the `Deque`;**  Otherwise, put it to the back of the `Deque`;
4. Repeat 2. and 3. and update `dist` accordingly till the `Deque` is empty;
5. return `dist[m - 1][n - 1]` as solution.

```java
    private static final int[] d = {0, 1, 0, -1, 0};
    private static final int M = Integer.MAX_VALUE;
    public int minimumObstacles(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] dist = new int[m][n];
        for (int[] di : dist) {
            Arrays.fill(di, M);
        }
        dist[0][0] = 0;
        Deque<int[]> dq = new ArrayDeque<>();
        dq.offer(new int[3]);
        while (!dq.isEmpty()) {
            int[] cur = dq.poll();
            int o = cur[0], r = cur[1], c = cur[2];
            for (int k = 0; k < 4; ++k) {
                int i = r + d[k], j = c + d[k + 1];
                if (0 <= i && i < m && 0 <= j && j < n && dist[i][j] == M) {
                    if (grid[i][j] == 1) {
                        dist[i][j] = o + 1;
                        dq.offer(new int[]{o + 1, i, j});
                    }else {
                        dist[i][j] = o;
                        dq.offerFirst(new int[]{o, i, j});
                    }
                }
            }
        }
        return dist[m - 1][n - 1];
    }
```
```python
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        m, n = map(len, (grid, grid[0]))
        dist = [[inf] * n for _ in range(m)]
        dist[0][0] = 0
        dq = deque([(0, 0, 0)])
        while dq:
            o, r, c = dq.popleft()
            for i, j in (r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1):
                if m > i >= 0 <= j < n and dist[i][j] == inf:
                    if grid[i][j] == 1:
                        dist[i][j] = o + 1
                        dq.append((o + 1, i, j))
                    else:
                        dist[i][j] = o
                        dq.appendleft((o, i, j))    
        return dist[-1][-1]
```
**Analysis:**

Since each cell is visited at most once, therefore

Time & space: `O(m * n)`.

----

In case you are NOT familiar with Bellman Ford and Dijkstra's algorithm, the following links are excellent materials for you to learn:

**Bellman Ford algorithm:**
https://algs4.cs.princeton.edu/44sp/
https://algs4.cs.princeton.edu/44sp/BellmanFordSP.java.html
https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture14.pdf
https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm
https://www.geeks for geeks.org/bellman-ford-algorithm-dp-23/(remove the 2 spaces among the links to make it valid)

**Dijkstra's algorithm:**
https://algs4.cs.princeton.edu/44sp/
https://algs4.cs.princeton.edu/44sp/DijkstraSP.java.html
https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
https://www.geeks for geeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/ (remove the 2 spaces among the links to make it valid)

Similar problems:

[407. Trapping Rain Water II](https://leetcode.com/problems/trapping-rain-water-ii)
[499. The Maze III](https://leetcode.com/problems/the-maze-iii)
[505. The Maze II](https://leetcode.com/problems/the-maze-ii)
[743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)
[778. Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/description/)
[787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
[1102. Path With Maximum Minimum Value](https://leetcode.com/problems/path-with-maximum-minimum-value) **Premium**
[1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/discuss/731767/JavaPython-3-2-codes%3A-Bellman-Ford-and-Dijkstra's-algorithm-w-brief-explanation-and-analysis.)
[1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/discuss/909002/JavaPython-3-3-codes%3A-Binary-Search-Bellman-Ford-and-Dijkstra-w-brief-explanation-and-analysis.)
[2290. Minimum Obstacle Removal to Reach Corner](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/discuss/2085640/JavaPython-3-Shortest-Path-w-brief-explanation-and-analysis.)