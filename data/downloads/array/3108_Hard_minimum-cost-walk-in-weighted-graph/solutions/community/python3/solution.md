# Python 3 || 16 lines,  union find || T/S: 77% / 50%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/4995128/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/4995128/)

---

```
class Solution:
    def minimumCost(self, n: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:

        def find(node: int)-> int:

            if node == par[node]: return node
            par[node] = find(par[node])
            return par[node]

        def union(u: int, v: int, w: int)-> int:

            x, y  = find(u), find(v)
            wgt[y]&= wgt[x] & w
            par[x] = y

        def findwgt(query: list)-> int:

            s, t = query
            if s == t: return 0
            if find(s)!=find(t): return -1
            return wgt[find(s)]
        

        par, ans = list(range(n)), []
        wgt = [(1<<31)-1] * n

        for edge in edges: union(*edge)
            
        return map(findwgt, queries)
```
[https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/submissions/1227059448/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/submissions/1227059448/)

I could be wrong, but I think that time complexity is *O*(*M*log*N*) and space complexity is *O*(*N*), in which *M* ~ `max(len(nums),len(queries))` and *M* ~ `n`.