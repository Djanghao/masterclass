# Python3 || dfs  ||

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5787132/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5787132/)

---


```python3 []
class Solution:
    def findSafeWalk(self, grid: List[List[int]], health: int) -> bool:

        @lru_cache(None)
        def dp(x: int, y: int, health_used: int)-> int: 

            if health_used == health or (x, y) not in eligible: return inf

            cnt = health_used + grid[x][y]
            if (x, y) == (m - 1 , n - 1): return cnt
            
            eligible.discard((x, y))

            res = min(dp(x + 1, y, cnt), dp(x, y + 1, cnt),
                      dp(x - 1, y, cnt), dp(x, y - 1, cnt))

            eligible.add((x, y))

            return res


        m, n = len(grid), len(grid[0])
        eligible = set(product(range(m), range(n)))

        return dp(0,0,0) < health        
        
```
[https://leetcode.com/problems/find-a-safe-walk-through-a-grid/submissions/1390177636/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/submissions/1390177636/)

I could be wrong, but I think that time complexity is *O*(*MNH*) and space complexity is *O*(*MNH*), in which *M, N, H* ~ `m`, `n`, `health`.