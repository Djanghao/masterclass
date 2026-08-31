# dp with bitmask

**Author:** Vigneswar_A
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/4185032/](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/4185032/)

---

```
class Solution:
    def maximumCost(self, n: int, highways: List[List[int]], k: int) -> int:
        adjacency = defaultdict(list)
        
        for u,v,c in highways:
            adjacency[u].append((v, c))
            adjacency[v].append((u, c))
            
        @cache
        def dp(currnode, k, visited=0):
            if k == 0:
                return 0
            
            res = -inf
            visited ^= (1 << currnode)
            for node,cost in adjacency[currnode]:
                if not (visited&(1 << node)):
                    res = max(res, dp(node, k-1, visited)+cost)
                    
            visited ^= (1 << currnode)
            return res
            
        ans = max(map(lambda i: dp(i, k), range(n)))
        return ans if ans != -inf else -1
```