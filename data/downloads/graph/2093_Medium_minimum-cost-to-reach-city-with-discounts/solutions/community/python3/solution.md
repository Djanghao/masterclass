# [Python3] - Dijkstra Algorithm - Similar to original pattern with cost saving DS

**Author:** dolong2110
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/3387218/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/3387218/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
shortest path in weighted graph (positive weight) -> Dijkstra 

# Approach
<!-- Describe your approach to solving the problem. -->
there are 2 ways to save the cost:
- using a dictionary (similar to top-down memoirization in DP)
- using a 2D arrays (similar to bottom-up DP)

# Complexity
- Time complexity: $$O(ElogV)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k * n)$$ with `k` is the `discounts` number
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minimumCost(self, n: int, highways: List[List[int]], discounts: int) -> int:
        g = collections.defaultdict(list)
        for c1, c2, t in highways:
            g[c1].append((c2, t))
            g[c2].append((c1, t))
        
        cost = {(k, c) : float('inf') for k in range(discounts + 1) for c in range(n)}
        pq = [(0, discounts, 0)]
        while pq:
            toll, discnt, city = heapq.heappop(pq)
            if city == n - 1: return toll
            
            for c, t in g[city]:
                if toll + t < cost[(discnt, c)]:
                    cost[(discnt, c)] = toll + t
                    heapq.heappush(pq, (cost[(discnt, c)], discnt, c))
                if discnt and toll + t // 2 < cost[(discnt - 1, c)]:
                    cost[(discnt - 1, c)] = toll + t // 2
                    heapq.heappush(pq, (cost[(discnt - 1, c)], discnt - 1, c))
        return -1
```