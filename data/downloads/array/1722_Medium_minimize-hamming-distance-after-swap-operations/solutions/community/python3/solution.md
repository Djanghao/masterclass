# [Python3] union-find

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1009822/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1009822/)

---

**Algo**
UnionFind the pairs in `allowedSwaps` to group indices. Within each group, find the numbers in `source` that do not appear in `target` and update the `ans`. 

**Implementation**
```
class UnionFind: 
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [1]*n
    
    def find(self, p): 
        if p != self.parent[p]: 
            self.parent[p] = self.find(self.parent[p]) # path compression 
        return self.parent[p]
    
    def union(self, p, q): 
        prt, qrt = self.find(p), self.find(q)
        if prt == qrt: return False # already connected 
        if self.rank[prt] > self.rank[qrt]: prt, qrt = qrt, prt
        self.parent[prt] = qrt
        self.rank[qrt] += self.rank[prt]
        return True 
    

class Solution:
    def minimumHammingDistance(self, source: List[int], target: List[int], allowedSwaps: List[List[int]]) -> int:
        uf = UnionFind(len(source))
        for i, j in allowedSwaps: 
            uf.union(i, j)
        
        mp = {}
        for i in range(len(source)): 
            mp.setdefault(uf.find(i), []).append(i)
        
        ans = 0 
        for k, idx in mp.items(): 
            freq = {}
            for i in idx: 
                freq[source[i]] = freq.get(source[i], 0) + 1
                freq[target[i]] = freq.get(target[i], 0) - 1
            ans += sum(x for x in freq.values() if x > 0)
        return ans 
```

**Analysis**
Time complexity `O(M+N)` where `M` is length of `allowedSwaps` and `N` is length of `source` (or `target`)
Space complexity `O(N)`