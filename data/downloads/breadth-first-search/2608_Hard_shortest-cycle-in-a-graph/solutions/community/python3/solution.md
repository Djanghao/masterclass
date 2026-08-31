# [Java/Python 3] BFS within DFS.

**Author:** rock
**Votes:** 11
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366362/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366362/)

---

1. Construct a graph to access each edge by vertex efficiently;
2. Traverse all vertices, for each one, `i`, initialize the `dist` all as `MX` value except for `i`, set it as `0`; initialize `parent` all as `-1`;
3. Use BFS to find the shortest cycle through current vertex `i`: if any offspring of `i` has never been visited, we set its `dist` value as `1 +` its parent's `dist`; If the offspring has already been visited and its parent is not the one we just visited, then a cycle found and update the mininum value `shortest`;
4. Repeat 3 to find the final solution.

```java
    private static final int MX = Integer.MAX_VALUE; 
    public int findShortestCycle(int n, int[][] edges) {
        Map<Integer, Set<Integer>> g = new HashMap<>();
        for (int[] e : edges) {
            g.computeIfAbsent(e[0], s -> new HashSet<>()).add(e[1]);
            g.computeIfAbsent(e[1], s -> new HashSet<>()).add(e[0]);
        }
        int shortest = MX;
        for (int i = 0; i < n; ++i) {
            int[] dist = new int[n], parent = new int[n];
            Arrays.fill(dist, MX);
            Arrays.fill(parent, -1);
            Queue<Integer> q = new LinkedList<>();
            q.offer(i);
            dist[i] = 0;
            while (!q.isEmpty()) {
                int node = q.poll();
                for (int kid : g.getOrDefault(node, Collections.emptySet())) {
                    if (dist[kid] == MX) {
                        dist[kid] = dist[node] + 1;
                        parent[kid] = node;
                        q.offer(kid);
                    }else if (parent[kid] != node && parent[node] != kid) {
                        shortest = Math.min(shortest, dist[kid] + dist[node] + 1);
                    }
                }
            }
        }
        return shortest == MX ? -1 : shortest;
    }
```
```python
    def findShortestCycle(self, n: int, edges: List[List[int]]) -> int:
        g = defaultdict(set)
        for u, v in edges:
            g[u].add(v)
            g[v].add(u)
        shortest = inf
        for i in range(n):
            dq, dist, parent = deque([i]), [inf] * n, [-1] * n
            dist[i] = 0
            while dq:
                node = dq.popleft()
                for kid in g.get(node, set()):
                    if dist[kid] == inf:
                        dist[kid] = dist[node] + 1
                        parent[kid] = node
                        dq.append(kid)
                    elif parent[kid] != node and parent[node] != kid:
                        shortest = min(shortest, dist[node] + dist[kid] + 1)
        return -1 if shortest == inf else shortest                
```

**Analysis:**

Time: `O(n * (n + E))`, space: `O(n + E)`, where `E = edges.length.`