# [Python3] - Dijkstra - Simple solution

**Author:** dolong2110
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/3708682/](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/3708682/)

---

# Intuition
Shortest path in positive weight graph -> Dijkstra
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The idea is the following: paths from `s1` to `dest` and from `s2` to `dest` can have common point `x`. Then we need to reach:

From `s1` to `x`, for this we use Dijkstra
From `s2` to `x`, same.
From `x` to `dest`, for this we use Dijkstra on the reversed graph.
Finally, we check all possible `x`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(ElogV)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(V + E)$$ ~ $$O(E)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minimumWeight(self, n: int, edges: List[List[int]], src1: int, src2: int, dest: int) -> int:
        g1 = collections.defaultdict(list)
        g2 = collections.defaultdict(list)
        for u, v , w in edges:
            g1[u].append((v, w))
            g2[v].append((u, w))

        def get_distance(node: int, g: dict) -> List[float | int]:
            distance = [float('inf') for _ in range(n)]
            distance[node] = 0
            q = [(0, node)]
            while q:
                d, u = heapq.heappop(q)
                if d > distance[u]: continue
                for v, w in g[u]:
                    if d + w < distance[v]:
                        distance[v] = d + w
                        heapq.heappush(q, (distance[v], v))
            return distance
        
        l1, l2, l3 = get_distance(src1, g1), get_distance(src2, g1), get_distance(dest, g2)
        ans = float("inf")
        for i in range(n):
            ans = min(ans, l1[i] + l2[i] + l3[i])
        
        return ans if ans != float("inf") else -1
```