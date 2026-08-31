# 🔥2ms | beat 100% | Dijkstra | DFS+MEMO

**Author:** byegates
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/3186817/](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/3186817/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: n*ELOG(E)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: n+E
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Two very similar Dijkstra [2ms](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/submissions/898124763/)
```java []
class Solution {
    record Cell(int i, int w, int k) {}

    int k;
    List<Node>[] g;
    public int maximumCost(int n, int[][] edges, int k) {
        if(k >= n) return -1;
        this.k = k;

        // create adjacency list graph
        g = createGraph(n, edges, new List[n]);

        int res = -1;
        for (int i = 0; i < n; i++)
            res = Math.max(res, dijkstra(i, new boolean[n], new PriorityQueue<>((a, b) -> b.w - a.w)));

        return res;
    }

    private int dijkstra(int src, boolean[] visisted, Queue<Cell> q) {
        q.offer(new Cell(src, 0, k));
        visisted[src] = true;

        while (!q.isEmpty()) {
            var cur = q.poll();
            if (cur.k == 0)
                return cur.w;
            visisted[cur.i] = true;

            for (var nei : g[cur.i]) {
                if (visisted[nei.i]) continue;
                q.offer(new Cell(nei.i, nei.w + cur.w, cur.k-1));
            }
        }

        return -1;
    }

    record Node(int i, int w) {}
    private List<Node>[] createGraph(int n, int[][] edges, List<Node>[] g) {
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (var e : edges) {
            g[e[0]].add(new Node(e[1], e[2]));
            g[e[1]].add(new Node(e[0], e[2]));
        }
        return g;
    }
}
```
```java []
class Solution {
    
    record Cell(int i, int w, int k) {}

    List<Node>[] g;
    int k;
    public int maximumCost(int n, int[][] edges, int k) {
        if (k >= n) return -1;
        this.k = k;
        g = createGraph(n, edges, new List[n]);

        int res = -1;
        for (int i = 0; i < n; i++)
            res = Math.max(res, dijkstra(i, new boolean[n], new PriorityQueue<>((a, b) -> b.w - a.w)));

        return res;
    }

    private int dijkstra(int src, boolean[] visited, Queue<Cell> q) {
        q.offer(new Cell(src, 0, k));

        while (!q.isEmpty()) {
            var cur = q.poll();
            if (visited[cur.i]) continue;
            if (cur.k == 0) return cur.w;
            visited[cur.i] = true;

            for (var nei : g[cur.i]) {
                // if (!visited[nei.i])
                    q.offer(new Cell(nei.i, nei.w + cur.w, cur.k - 1));
            }

        }

        return -1;
    }

    record Node(int i, int w) {}
    private List<Node>[] createGraph(int n, int[][] edges, List<Node>[] g) {
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();

        for (var e : edges) {
            g[e[0]].add(new Node(e[1], e[2]));
            g[e[1]].add(new Node(e[0], e[2]));
        }

        return g;
    }
}
```
# [dfs+memo 20ms](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/submissions/898114137/)
```java
class Solution {
    int K;
    int[][] dp;
    List<Node>[] g;
    public int maximumCost(int n, int[][] edges, int k) {
        if(k >= n) return -1;
        dp = new int[n][1<<n];
        for (var _a : dp) Arrays.fill(_a, Integer.MIN_VALUE);
        K = k+1;

        // create adjacency list graph
        g = createGraph(n, edges, new List[n]);

        int res = -1;
        for (int i = 0; i < n; i++)
            res = Math.max(res, dfs(i, 1 << i, k));

        return res;
    }

    private int dfs(int cur, int pre, int k) {
        if (k == 0) return 0;

        if (dp[cur][pre] != Integer.MIN_VALUE) return dp[cur][pre];

        for (var nei : g[cur]) {
            int mask = 1 << nei.i;
            if ((pre & mask) != 0) continue;
            dp[cur][pre] = Math.max(dp[cur][pre], nei.w + dfs(nei.i, pre | mask, k-1));
        }

        return dp[cur][pre];
    }

    record Node(int i, int w) {}
    private List<Node>[] createGraph(int n, int[][] edges, List<Node>[] g) {
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (var e : edges) {
            g[e[0]].add(new Node(e[1], e[2]));
            g[e[1]].add(new Node(e[0], e[2]));
        }
        return g;
    }
}
```