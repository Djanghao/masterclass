# [Java/Python 3] 2 codes: Bellman Ford and Dijkstra's algorithm w/ brief explanation and analysis.

**Author:** rock
**Votes:** 248
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/731767/](https://leetcode.com/problems/path-with-maximum-probability/solutions/731767/)

---

**Update:**

**Q & A**
`Q1`: Why negative weights can be used in Dijkstra's algorithm here in Python 3 code? I thought it's not allowed.
`A1`: Excellent question, negative weight is used ONLY in `heapq` to order its priority by reversed weight order. In fact, when calculating Prob., we still use positive value `-prob`.

----

`Q2`: Why Belman Ford actually works when vertices and edges can be as large as `10000` and `20000`, respectively? If algo is `O(n * E)` it would be at least `200 000 000` operations, which is too much.
`A2`:  - credit to **@Binga45**: `O(n * E)` is a very loose upper bound, and the code actually prunes enough branches to make itself run fast; Specifically, the bellman ford code won't add already visited vertices in most of the scenarios as we are enforcing below condition before adding to the queue.
```
	if (p[cur] * succProb[index] > p[neighbor]) {
		p[neighbor] = p[cur] * succProb[index];
		q.offer(neighbor);
	}
```
So, let's imagine an edge v-t and the probability connecting them to be 1. We have visited `v `and based on probability p[v], we updated p[t] also to the same value as p[v] as the edge connecting them has a prob of 1. Now, when we add `t` to the queue, we won't revisit the already visited neighbor v as p[t] * 1 is not > p[v].

The only exception to the above scenario is when we have another vertex `u` in the same level(depth) as `v` with a p[u] > p[v] and probability of edge u-t is 1. Then, we will revisit `v` from `t`, because in this scenario, p[t] * 1 > p[v] as p[t] is updated by `u` vertex. -- credit to **@Binga45**

----

`Q3`: Isn't this problem similar to Finding longest path in undirected graph which is a NP hard problem - [Longest Path Problem](https://en.m.wikipedia.org/wiki/Longest_path_problem) ?

`A3`: The problem says: "...Given two nodes `start` and `end`, ...". Therefore, it is similar to [Shortest Path Problem](https://en.m.wikipedia.org/wiki/Shortest_path_problem). In contrast, in [Longest Path Problem](https://en.m.wikipedia.org/wiki/Longest_path_problem) neither `start` nor `end` is specified. Hence it is very different from this problem.

**@stslxg** provids the following perspicacious insight:

You can transform this problem into a shortest path problem by taking - log of each edge.
That is, if the prob on edge (u, v) is x in (0,1), we change it into - log x, which is in (0, +infinity).
Then the problem of finding the max prob path is becoming the problem of finding the shortest path in a graph with non-negative weights.

----

*Q4:* Why did you choose to use `Map.computeIfAbsent(key, mappingFunction)` in Java codes?
*A4:* Just for simplicity. In fact, we could use the following two line codes
```java
g.putIfAbsent(e[0], new HashMap<>());
g.get(e[0]).put(e[1], succProb[i]);
```
to replace
```java
g.computeIfAbsent(e[0], m -> new HashMap<>()).put(e[1], succProb[i]);
```
for more details of `Map.computeIfAbsent(key, mappingFunction)`, plesase refer to 
https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html#computeIfAbsent(K,java.util.function.Function)

**End of Q & A.**

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

----

**Note:** It is necessary to build a graph in order to quickly locate relevant edges for a specific vertex; otherwise, it would cost too much time, say O(E), to search the input `edges` all way for even one vertex.

----
**Bellman Ford:**
1. Initialize all vertices probabilities as `0`, except `start`, which is `1`;
2. Use BFS to traverse all reachable vertices from `start`, update the corresponding probilities whenever we can have a higher probability; otherwise, ignore that vertex; *Note: when forwarding one step, multiply the corresponding `succProb` value with the probaboility of current vertex;*
3. Repeat 2 till all probabilities reach their maximum values.
4. Return the probability of `end` as solution.

```java
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        Map<Integer, List<int[]>> g = new HashMap<>();
        for (int i = 0; i < edges.length; ++i) {
            int a = edges[i][0], b = edges[i][1];
            g.computeIfAbsent(a, l -> new ArrayList<>()).add(new int[]{b, i});
            g.computeIfAbsent(b, l -> new ArrayList<>()).add(new int[]{a, i});
        }
        double[] p = new double[n];
        p[start] = 1d;
        Queue<Integer> q = new LinkedList<>(Arrays.asList(start));
        while (!q.isEmpty()) {
            int cur = q.poll();
            for (int[] a : g.getOrDefault(cur, Collections.emptyList())) {
                int neighbor = a[0], index = a[1];
                if (p[cur] * succProb[index] > p[neighbor]) {
                    p[neighbor] = p[cur] * succProb[index];
                    q.offer(neighbor);
                }
            }
        }
        return p[end];
    }
```
```python
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        g, dq = defaultdict(list), deque([start])
        for i, (a, b) in enumerate(edges):
            g[a].append([b, i])
            g[b].append([a, i])
        p = [0.0] * n    
        p[start] = 1.0
        while dq:
            cur = dq.popleft()
            for neighbor, i in g[cur]:
                if p[cur] * succProb[i] > p[neighbor]:
                    p[neighbor] = p[cur] * succProb[i]
                    dq.append(neighbor)
        return p[end]
```
**Analysis:**
Time: O(n * E), space: O(n + E), where E =  edges.length.

----

**Dijkstra:**
1. Initialize all vertices probabilities as `0`, except `start`, which is `1`;
2. Put all currently reachable vertices into a Priority Queue/heap, priority ordered by the corresponding current probability, REVERSELY;
3. Whenever popped out a vertex with currently highest probability, check if it is the `end` vertex; If yes, we have already found the solution; otherwise, traverse all its neighbors to update neighbors' probabilities if necessary; *Note: when forwarding one step, multiply the corresponding `succProb` value with the probaboility of current vertex.*
4. Repeat 2 & 3 to find the max probability for `end`; If can NOT, return `0.0d`.
```java
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        Map<Integer, Map<Integer, Double>> g = new HashMap<>();
        for (int i = 0; i < edges.length; ++i) {
            int[] e = edges[i];
            g.computeIfAbsent(e[0], m -> new HashMap<>()).put(e[1], succProb[i]);
            g.computeIfAbsent(e[1], m -> new HashMap<>()).put(e[0], succProb[i]);
        }
        PriorityQueue<double[]> pq = new PriorityQueue<>(Comparator.comparingDouble(a -> -a[0]));
        double[] prob = new double[n];
        pq.offer(new double[]{1, start});
        while (!pq.isEmpty()) {
            double[] cur = pq.poll();
            int v = (int)cur[1];
            if (v == end) {
                return cur[0];
            }
            if (cur[0] > prob[v]) {
                prob[v] = cur[0];
                for (var entry : g.getOrDefault(v, Map.of()).entrySet()) {
                    int nb = entry.getKey();
                    double p = entry.getValue();
                    pq.offer(new double[]{cur[0] * p, nb});
                }
            }
        }
        return 0d;
    }
```
```python
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        p, g = [0.0] * n, defaultdict(list)
        for index, (a, b) in enumerate(edges):
            g[a].append((b, index))
            g[b].append((a, index))
        p[start] = 1.0
        heap = [(-p[start], start)]    
        while heap:
            prob, cur = heapq.heappop(heap)
            if cur == end:
                return -prob
            for neighbor, index in g.get(cur, []):
                if -prob * succProb[index] > p[neighbor]:
                    p[neighbor] = -prob * succProb[index]
                    heapq.heappush(heap, (-p[neighbor], neighbor))
        return 0.0
```
**Analysis:**
Time: O((n + E) * logE), space: O(n + E), where E =  edges.length.

