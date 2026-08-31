# Video Walkthrough || 12 Line Solution || Python

**Author:** bnchn
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-of-nodes/solutions/2821619/](https://leetcode.com/problems/count-pairs-of-nodes/solutions/2821619/)

---

[Click Here For Video Walkthrough](https://youtu.be/wP811WAvioU)
```
class Solution:
    def countPairs(self, n: int, edges: List[List[int]], queries: List[int]) -> List[int]:
        SHARED, DEG, res = defaultdict(lambda: 0), defaultdict(lambda: 0), []
        for u,v in edges: DEG[u], DEG[v], SHARED[(min(u,v),max(u,v))]  = DEG[u] + 1, DEG[v] + 1, SHARED[(min(u,v),max(u,v))] + 1
        DI = sorted(range(1,n+1),key=lambda a: DEG[a])
        for q in queries:
            l,r, ans = 0, n-1, 0
            while l < r:
                if DEG[DI[l]] + DEG[DI[r]] > q:  ans,r =  ans + r - l, r - 1
                else: l += 1
            for a,b in SHARED:
                if DEG[a] + DEG[b] > q and DEG[a] + DEG[b] - SHARED[(a,b)] <= q: ans -= 1
            res.append(ans)
        return res
```
