# 🔥 6ms | beats 100% | Dijkstra | Missing Case

**Author:** byegates
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/3186651/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/3186651/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- k: number of discounts

# Complexity
- Time complexity: O(k*n * log(k*n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    - # of edges is same order of magnitude as number of nodes in this problem

- Space complexity: O(k*n), the de-dup matrix and the queue
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# 2d de-dup on cost, [107ms](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/submissions/898061011/)
```java
class Solution {
    record Cell(int i, int w, int k) {}
    public int minimumCost(int n, int[][] edges, int k) {
        // create adjacency list graph
        List<Node>[] g = createGraph(n, edges, new List[n]);

        int[][] visited = new int[n][k+1];
        Queue<Cell> q = new PriorityQueue<>((a, b) -> a.w - b.w);
        q.offer(new Cell(0, 0, k));
        for (var _a : visited) Arrays.fill(_a, Integer.MAX_VALUE);

        while (!q.isEmpty()) {
            var cur = q.poll();
            if (cur.i == n-1) return cur.w;

            if (cur.k > 0) {
                int k2 = cur.k-1;
                for (var nei : g[cur.i]) {
                    int w2 = nei.w/2+cur.w;
                    if (w2 < visited[nei.i][k2]) {
                        visited[nei.i][k2] = w2;
                        q.offer(new Cell(nei.i, w2, k2));
                    }
                }
            }

            for (var nei : g[cur.i]) {
                int w2 = nei.w+cur.w;
                if (w2 < visited[nei.i][cur.k]) {
                    visited[nei.i][cur.k] = w2;
                    q.offer(new Cell(nei.i, w2, cur.k));
                }
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

# Naive Dijkstra, [245ms](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/submissions/898048728/)
```java
class Solution {
    record Cell(int i, int w, int k) {}
    public int minimumCost(int n, int[][] edges, int k) {
        // create adjacency list graph
        List<Node>[] g = createGraph(n, edges, new List[n]);

        int[] visited = new int[n];
        Arrays.fill(visited, -1);
        Queue<Cell> q = new PriorityQueue<>((a, b) -> a.w - b.w);
        q.offer(new Cell(0, 0, k));

        while (!q.isEmpty()) {
            var cur = q.poll();
            if (cur.i == n-1) return cur.w;
            if (cur.k <= visited[cur.i]) continue;
            visited[cur.i] = cur.k;

            for (var nei : g[cur.i]) {
                if (cur.k > 0)
                    q.offer(new Cell(nei.i, nei.w/2+cur.w, cur.k-1));
                q.offer(new Cell(nei.i, nei.w+cur.w, cur.k));
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

# Incorrect code
Leetcode added [this case](https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/11757) Feb 16th, 2023 1:38 PM EST, now below too faster solution will fail

- 2d+1d mixed de-dup [6ms](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/submissions/898083381/)
- improved 1d de-dup [52 ms](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/submissions/898208489/)


```java []
class Solution {
    record Cell(int i, int w, int k) {}
    public int minimumCost(int n, int[][] edges, int k) {
        // create adjacency list graph
        List<Node>[] g = createGraph(n, edges, new List[n]);

        int[][] W = new int[n][k+1]; // W: (mim) weights with diff 'k's for each node for pruning/de-dup
        Queue<Cell> q = new PriorityQueue<>((a, b) -> a.w - b.w);
        q.offer(new Cell(0, 0, k));
        for (var _a : W) Arrays.fill(_a, Integer.MAX_VALUE);
        boolean[] visited = new boolean[n]; // de-dup on each node

        while (!q.isEmpty()) {
            var cur = q.poll();
            if (cur.i == n-1) return cur.w;
            visited[cur.i] = true; // every node can be put into q many times, with different 'k's and/or costs, every one in queue will be polled out, but once it's out, it never needs to be put into queue again, as future generated same node will not have better cost or 'k's, neither

            for (var nei : g[cur.i]) {
                if (visited[nei.i]) continue; // important de-dup
                if (cur.k > 0) {
                    int k2 = cur.k-1;
                    int w2 = nei.w/2+cur.w;
                    if (w2 < W[nei.i][k2])
                        q.offer(new Cell(nei.i, W[nei.i][k2] = w2, k2));
                }

                int w2 = nei.w+cur.w;
                if (w2 < W[nei.i][cur.k])
                    q.offer(new Cell(nei.i, W[nei.i][cur.k] = w2, cur.k));
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
    public int minimumCost(int n, int[][] edges, int k) {
        List<Node>[] g = createGraph(n, edges, new List[n]);
        
        Queue<Cell> q = new PriorityQueue<>((a, b) -> a.w - b.w);
        q.offer(new Cell(0, 0, k));
        boolean[] visited = new boolean[n];

        while (!q.isEmpty()) {
            var cur = q.poll();
            if (cur.i == n-1) return cur.w;
            visited[cur.i] = true;

            for (var nei : g[cur.i]) {
                if (visited[nei.i]) continue;
                if (cur.k > 0)
                    q.offer(new Cell(nei.i, cur.w + nei.w/2, cur.k - 1));

                q.offer(new Cell(nei.i, cur.w + nei.w, cur.k));
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