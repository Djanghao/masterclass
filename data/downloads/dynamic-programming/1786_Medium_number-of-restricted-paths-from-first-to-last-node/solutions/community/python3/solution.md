# [Python3] Dijkstra + Cache DFS ~ DP Top-down Memorization - Simple

**Author:** dolong2110
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/3872932/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/3872932/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(V)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(V + E)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def countRestrictedPaths(self, n: int, edges: List[List[int]]) -> int:
        if n == 1: return 0
        g = collections.defaultdict(list)
        sum_w, mod = 0, 10 ** 9 + 7
        for u, v, w in edges:
            g[u].append((w, v))
            g[v].append((w, u))
            sum_w += w
        
        def dijkstra() -> List[int]:
            pq = [(0, n)]
            distance = [sum_w + 1 for _ in range(n + 1)]
            distance[n] = 0
            while pq:
                w, u = heapq.heappop(pq)
                for v_w, v in g[u]:
                    if w + v_w < distance[v]:
                        distance[v] = w + v_w
                        heapq.heappush(pq, (w + v_w, v))
            return distance
        
        @cache
        def dfs(u: int) -> int:
            if u == n: return 1
            cnt = 0
            for _, v in g[u]:
                if distance[u] > distance[v]: cnt = (cnt + dfs(v)) % mod
                    
            return cnt
        
        distance = dijkstra()
        return dfs(1)

```