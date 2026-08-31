# [Python3] top-down dp

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/858187/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/858187/)

---


```
class Solution:
    def connectTwoGroups(self, cost: List[List[int]]) -> int:
        m, n = len(cost), len(cost[0])
        mn = [min(x) for x in zip(*cost)] # min cost of connecting points in 2nd group 
        
        @lru_cache(None)
        def fn(i, mask):
            """Return min cost of connecting group1[i:] and group2 represented as mask."""
            if i == m: return sum(mn[j] for j in range(n) if not (mask & (1<<j)))
            return min(cost[i][j] + fn(i+1, mask | 1<<j) for j in range(n))
                
        return fn(0, 0)
```

or symmetrically 
```
class Solution:
    def connectTwoGroups(self, cost: List[List[int]]) -> int:
        m, n = len(cost), len(cost[0])
        mn = [min(x) for x in cost] # min cost of connecting points in 1st group 
        
        @lru_cache(None)
        def fn(j, mask):
            """Return min cost of connecting group1[i:] and group2 represented as mask."""
            if j == n: return sum(mn[i] for i in range(m) if not (mask & (1<<i)))
            return min(cost[i][j] + fn(j+1, mask | 1<<i) for i in range(m))
                
        return fn(0, 0)
```