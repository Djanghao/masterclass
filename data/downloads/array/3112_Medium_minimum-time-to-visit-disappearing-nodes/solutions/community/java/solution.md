# [Java / Python 3] Dijkstra's algorithm w/ brief explanation and analysis.

**Author:** rock
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017135/](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017135/)

---

1. Build graph in order to access each node and corresponding weight efficiently;
2. Use node `0` as the starting point, and put it and the visiting time `0` into a `PriorityQueue / heap`;
3. Traverse all neighboring nodes and check if they had dispeared; if not, put them and the corresponding visiting time into the afore-mentioned `PriorityQueue / heap`; Remember to prune duplicates to avoid `TLE`;
4. For all visited nodes, record their visiting time, and those not visited are initialized as `-1`.

```java
    public int[] minimumTime(int n, int[][] edges, int[] disappear) {
        int[] ans = new int[n];
        Arrays.fill(ans, -1);
        Map<Integer, Map<Integer, Integer>> graph = new HashMap<>();
        for (int[] e : edges) {
            graph.computeIfAbsent(
                e[0], m -> new HashMap<>()
            ).compute(
                // (k, v) -> v == null || v > e[2] ? e[2] : v 
                // here means: if no value associated with
                // current key or the associated value greater 
                // than e[2], then replaced old value with e[2].    
                e[1], (k, v) -> v == null || v > e[2] ? e[2] : v
            );
            graph.computeIfAbsent(
                e[1], m -> new HashMap<>()
            ).compute(
                e[0], (k, v) -> v == null || v > e[2] ? e[2] : v
            );
        } 
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[2]);
        while (!pq.isEmpty()) {
            int[] timeNode = pq.poll();
            int time = timeNode[0], u = timeNode[1];
            if (ans[u] == -1 || ans[u] > time) {
                ans[u] = time;
                if (graph.containsKey(u)) {
                    for (var nodeTime : graph.remove(u).entrySet()) {
                        int v = nodeTime.getKey(), w = nodeTime.getValue();
                        if (time + w < disappear[v]) {
                            pq.offer(new int[]{time + w, v});
                        }
                    }
                }
            }
        }
        return ans;
    }
```
```python
    def minimumTime(self, n: int, edges: List[List[int]], disappear: List[int]) -> List[int]:
        ans, graph, heap = [inf] * n, defaultdict(dict), [(0, 0)]
        for u, v, w in edges:
            graph[u][v] = min(w, graph[u].get(v, inf))
            graph[v][u] = min(w, graph[v].get(u, inf))
        while heap:
            time, u = heappop(heap)
            if ans[u] > time: 
                ans[u] = time
                if u in graph:
                    for v, w in graph.pop(u).items():
                        if time + w < disappear[v]:
                            heappush(heap, (time + w, v))
        return [x if x < inf else -1 for x in ans]
```

----

Another variant of the above codes:

```java
   public int[] minimumTime(int n, int[][] edges, int[] disappear) {
        int[] ans = new int[n];
        Arrays.fill(ans, -1);
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int[] e : edges) {
            graph.computeIfAbsent(
                e[0], l -> new ArrayList<>()
            ).add(new int[]{e[2], e[1]});
            graph.computeIfAbsent(
                e[1], l -> new ArrayList<>()
            ).add(new int[]{e[2], e[0]});
        } 
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            Comparator.comparingInt(a -> a[0])
        );
        pq.offer(new int[2]);
        while (!pq.isEmpty()) {
            int[] timeNode = pq.poll();
            int time = timeNode[0], u = timeNode[1];
            if (ans[u] == -1 || ans[u] > time) {
                ans[u] = time;
                if (graph.containsKey(u)) {
                    for (int[] timeNode2 : graph.remove(u)) {
                        timeNode2[0] += time;
                        int v = timeNode2[1], timeV = timeNode2[0];
                        if (timeV < disappear[v]) {
                            pq.offer(timeNode2);
                        }
                    }
                }
            }
        }
        return ans;
        
    }
```
```pyhton
    def minimumTime(self, n: int, edges: List[List[int]], disappear: List[int]) -> List[int]:
        ans, graph, heap = [inf] * n, defaultdict(list), [(0, 0)]
        for u, v, w in edges:
            graph[u].append((w, v))
            graph[v].append((w, u))
        while heap:
            time, u = heappop(heap)
            if ans[u] > time:
                ans[u] = time
                for w, v in graph.pop(u, []):
                    if time + w < disappear[v]:
                        heappush(heap, (w + time, v))
        return [x if x < inf else -1 for x in ans]
```
**Analysis:**

Time: `O(V*logE)`, space: `O(V + E)`, where `V = # of nodes, E = # of edges`.