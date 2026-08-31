# Python - Longest Path in DAG, Simple Solution

**Author:** noahantisseril
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/5569970/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/5569970/)

---

My approach is slower than others, but intuitive. Our goal is to set the problem as a graph question. The graph will be a DAG, and as a result we can efficiently calculate the longest weighted path. When visiting a point, we update its neighbors to have the maximum possible earnings upon reaching that point.

The only caveat to the problem is that we can accumulate our earnings even without a direct path. For instance, we can keep our earnings from point 12 to point 13, even if there is no ride marking an edge between the two. We can account for this by keeping track of the largest earnings we have seen before our current point, and adding those earnings to the current point if greater.
# Code
```
class Solution:
    def maxTaxiEarnings(self, n: int, rides: List[List[int]]) -> int:
        g = defaultdict(list)
        for start, end, tip in rides:
            g[start].append((end, end - start + tip))
        profit = {i : 0 for i in range(1, n + 1)}
        prev_best = 0
        for u in range(1, n + 1):
            prev_best = max(prev_best, profit[u])
            profit[u] = prev_best
            for v, w in g[u]:
                profit[v] = max(profit[v], profit[u] + w)
        return prev_best   
```