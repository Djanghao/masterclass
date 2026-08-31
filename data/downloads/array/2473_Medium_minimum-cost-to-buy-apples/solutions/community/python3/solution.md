# [Python3] Dijkstra's algo

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2828872/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2828872/)

---


```
class Solution:
    def minCost(self, n: int, roads: List[List[int]], appleCost: List[int], k: int) -> List[int]:
        graph = [[] for _ in range(n)]
        for u, v, w in roads: 
            graph[u-1].append((v-1, w))
            graph[v-1].append((u-1, w))
        ans = [inf]*n
        for i in range(n): 
            dist = [inf]*n
            dist[i] = 0 
            pq = [(0, i)]
            while pq: 
                x, u = heappop(pq)
                ans[i] = min(ans[i], appleCost[u]+(1+k)*x)
                for v, w in graph[u]: 
                    xx = x + w
                    if xx < dist[v]: 
                        dist[v] = xx
                        heappush(pq, (xx, v))
        return ans 
```