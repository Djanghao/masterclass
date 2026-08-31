# [Python3] SortedList

**Author:** ye15
**Votes:** 22
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583245/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5583245/)

---


```
from sortedcontainers import SortedList

class Solution:
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        graph = SortedList(range(n))
        ans = []
        for u, v in queries: 
            lo = graph.bisect_right(u)
            hi = graph.bisect_left(v)
            for _ in range(lo, hi): 
                graph.pop(lo)
            ans.append(len(graph)-1)
        return ans 
```

Adding a `O(N)` solution learned from @lee215
```
class Solution:
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        ans = []
        jump = list(range(1, n))
        n -= 1
        for u, v in queries: 
            while jump[u] < v: 
                jump[u], u = v, jump[u]
                n -= 1
            ans.append(n)
        return ans 
```