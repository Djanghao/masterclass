# Simple Solution that beats 100% users...

**Author:** Success_Code
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5053028/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5053028/)

---



# Code
```
from heapq import heappop, heappush
from typing import List, Tuple


class Solution:

  def build_graph(self, n: int, edges: List[List[int]]) -> List[List[Tuple[int, int]]]:
    g = [[] for _ in range(n)]
    for v1, v2, w in edges:
      g[v1].append((v2, w))
      g[v2].append((v1, w))

    return g

  def dijkstra(self, g: List[List[Tuple[int, int]]], source: int) -> List[int]:
    frontier, dist = [(0, source)], [float('inf') for _ in range(len(g))]
    while frontier:
      curr_dist, node = heappop(frontier)
      if dist[node] > curr_dist:
        dist[node] = curr_dist
        for node_nxt, w in g[node]:
          heappush(frontier, (w + curr_dist, node_nxt))

    return dist

  def findAnswer(self, n: int, edges: List[List[int]]) -> List[bool]:
    g = self.build_graph(n, edges)
    dist1, dist2 = self.dijkstra(g, 0), self.dijkstra(g, n - 1)
    total = dist2[0]
    
    if total == float('inf'):
      return [False] * len(edges)

    return [(dist1[v1] + w + dist2[v2] == total) or (dist1[v2] + w + dist2[v1] == total) for (v1, v2, w) in edges]
```