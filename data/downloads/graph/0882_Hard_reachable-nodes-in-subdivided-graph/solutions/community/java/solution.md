# Simple C++, Java & Python Solutions Explained using Dijkstra and PriorityQueue

**Author:** rpn2eax
**Votes:** 6
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/4441736/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/4441736/)

---

# Intution
**Traditional Dijkstra** From **source node -> 0** to nodes with distance less than or equal to maxMoves and for subNodes, iterate them in order of edges and proceed as explained in the approach.
# Approach
Consider the distance between nodes as count of nodes between them + 1. Applying dijkstra will give the no. of reachable nodes. For reachable subNodes, iterate the edges in order and if the distance from 0 to respective node is greater than maxMoves, discard it. Otherwise,
consider the No. of subnodes between node **u** = min(cntofNodesBetween_U_and_V, maxMoves - dist[u]) as **A** 
and similarly with node **v** as **B**. 
Add **min(cnt of nodes between them, A + B)** to **reachableSubNodes**.
Finally, return **reachableNodes + reachableSubNodes**
 
# Complexity
- Time complexity:
**O((|V| + |E|)log(|V|))**, where V is the no. of vertices and E is the no. of edges. V + E is for traversing the graph and log factor for priorityQueue (minHeap).

- Space complexity:
**O(|V| + |E|)**

# Code
```C++ []
class Solution {
 public:
  int reachableNodes(vector<vector<int>>& edges, int maxMoves, int n) {
    vector<vector<pair<int, int>>> graph(n);
    vector<int> dist(graph.size(), maxMoves + 1);

    for (const vector<int>& edge : edges) {
      const int u = edge[0];
      const int v = edge[1];
      const int cnt = edge[2];
      graph[u].emplace_back(v, cnt);
      graph[v].emplace_back(u, cnt);
    }

    const int reachableNodes = dijkstra(graph, 0, maxMoves, dist);
    int reachableSubnodes = 0;

    for (const vector<int>& edge : edges) {
      const int u = edge[0];
      const int v = edge[1];
      const int cnt = edge[2];
      // the number of reachable nodes of `edge` from `u`
      const int a = dist[u] > maxMoves ? 0 : min(maxMoves - dist[u], cnt);
      // the number of reachable nodes of `edge` from `v`
      const int b = dist[v] > maxMoves ? 0 : min(maxMoves - dist[v], cnt);
      reachableSubnodes += min(a + b, cnt);
    }

    return reachableNodes + reachableSubnodes;
  }

 private:
  int dijkstra(const vector<vector<pair<int, int>>>& graph, int src,
               int maxMoves, vector<int>& dist) {
    using P = pair<int, int>;  // (d, u)
    priority_queue<P, vector<P>, greater<>> minHeap;

    dist[src] = 0;
    minHeap.emplace(dist[src], src);

    while (!minHeap.empty()) {
      const auto [d, u] = minHeap.top();
      minHeap.pop();
      // Already took `maxMoves` to reach `u`, so can't explore anymore.
      if (d >= maxMoves)
        break;
      for (const auto& [v, w] : graph[u])
        if (d + w + 1 < dist[v]) {
          dist[v] = d + w + 1;
          minHeap.emplace(dist[v], v);
        }
    }

    return ranges::count_if(dist, [&](int d) { return d <= maxMoves; });
  }
};
```
```Java []
class Solution {
  public int reachableNodes(int[][] edges, int maxMoves, int n) {
    List<Pair<Integer, Integer>>[] graph = new List[n];
    Queue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]); // (d, u)
    int[] dist = new int[n];
    Arrays.fill(dist, maxMoves + 1);

    for (int i = 0; i < n; ++i)
      graph[i] = new ArrayList<>();

    for (int[] edge : edges) {
      final int u = edge[0];
      final int v = edge[1];
      final int cnt = edge[2];
      graph[u].add(new Pair<>(v, cnt));
      graph[v].add(new Pair<>(u, cnt));
    }

    final int reachableNodes = dijkstra(graph, 0, maxMoves, dist);
    int reachableSubnodes = 0;

    for (int[] edge : edges) {
      final int u = edge[0];
      final int v = edge[1];
      final int cnt = edge[2];
      // the number of reachable nodes of `edge` from `u`
      final int a = dist[u] > maxMoves ? 0 : Math.min(maxMoves - dist[u], cnt);
      // the number of reachable nodes of `edge` from `v`
      final int b = dist[v] > maxMoves ? 0 : Math.min(maxMoves - dist[v], cnt);
      reachableSubnodes += Math.min(a + b, cnt);
    }

    return reachableNodes + reachableSubnodes;
  }

  private int dijkstra(List<Pair<Integer, Integer>>[] graph, int src, int maxMoves, int[] dist) {
    // (d, u)
    Queue<Pair<Integer, Integer>> minHeap = new PriorityQueue<>(Comparator.comparing(Pair::getKey));

    dist[src] = 0;
    minHeap.offer(new Pair<>(dist[src], src));

    while (!minHeap.isEmpty()) {
      final int d = minHeap.peek().getKey();
      final int u = minHeap.poll().getValue();
      // Already took `maxMoves` to reach `u`, so can't explore anymore.
      if (d >= maxMoves)
        break;
      for (Pair<Integer, Integer> pair : graph[u]) {
        final int v = pair.getKey();
        final int w = pair.getValue();
        if (d + w + 1 < dist[v]) {
          dist[v] = d + w + 1;
          minHeap.offer(new Pair<>(dist[v], v));
        }
      }
    }

    return (int) Arrays.stream(dist).filter(d -> d <= maxMoves).count();
  }
}
```
```Python []
class Solution:
  def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
    graph = [[] for _ in range(n)]
    dist = [maxMoves + 1] * n

    for u, v, cnt in edges:
      graph[u].append((v, cnt))
      graph[v].append((u, cnt))

    reachableNodes = self._dijkstra(graph, 0, maxMoves, dist)
    reachableSubnodes = 0

    for u, v, cnt in edges:
      # the number of reachable nodes of (u, v) from `u`
      a = 0 if dist[u] > maxMoves else min(maxMoves - dist[u], cnt)
      # the number of reachable nodes of (u, v) from `v`
      b = 0 if dist[v] > maxMoves else min(maxMoves - dist[v], cnt)
      reachableSubnodes += min(a + b, cnt)

    return reachableNodes + reachableSubnodes

  def _dijkstra(self, graph: List[List[Tuple[int, int]]], src: int, maxMoves: int, dist: List[int]) -> int:
    dist[src] = 0
    minHeap = [(dist[src], src)]  # (d, u)

    while minHeap:
      d, u = heapq.heappop(minHeap)
      # Already took `maxMoves` to reach `u`, so can't explore anymore.
      if dist[u] >= maxMoves:
        break
      for v, w in graph[u]:
        newDist = d + w + 1
        if newDist < dist[v]:
          dist[v] = newDist
          heapq.heappush(minHeap, (newDist, v))

    return sum(d <= maxMoves for d in dist)
```
