# [Python3] Union-Find

**Author:** ye15
**Votes:** 109
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/978576/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/978576/)

---

**Algo**
Sort queries based on weight and sort edges based on weight as well. Scan through queries from lowest to highest weight and connect the edges whose weight strictly fall below this limit. Check if the queried nodes `p` and `q` are connected in Union-Find structure. If so, put `True` in the relevant position; otherwise put `False`. 

**Implementation**
```
class UnionFind:
    def __init__(self, N: int):
        self.parent = list(range(N))
        self.rank = [1] * N

    def find(self, p: int) -> int:
        if p != self.parent[p]:
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def union(self, p: int, q: int) -> bool:
        prt, qrt = self.find(p), self.find(q)
        if prt == qrt: return False 
        if self.rank[prt] > self.rank[qrt]: 
            prt, qrt = qrt, prt 
        self.parent[prt] = qrt 
        self.rank[qrt] += self.rank[prt] 
        return True 


class Solution:
    def distanceLimitedPathsExist(self, n: int, edgeList: List[List[int]], queries: List[List[int]]) -> List[bool]:
        queries = sorted((w, p, q, i) for i, (p, q, w) in enumerate(queries))
        edgeList = sorted((w, u, v) for u, v, w in edgeList)
        
        uf = UnionFind(n)
        
        ans = [None] * len(queries)
        ii = 0
        for w, p, q, i in queries: 
            while ii < len(edgeList) and edgeList[ii][0] < w: 
                _, u, v = edgeList[ii]
                uf.union(u, v)
                ii += 1
            ans[i] = uf.find(p) == uf.find(q)
        return ans 
```

**Analysis**
Time complexity `O(NlogN) + O(MlogM)`
Space complexity `O(N)`