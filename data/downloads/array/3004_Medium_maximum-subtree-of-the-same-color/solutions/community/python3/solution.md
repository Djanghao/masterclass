# Python | DFS | O(n)

**Author:** aryonbe
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4545166/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4545166/)

---

# Code
```
from collections import defaultdict
class Solution:
    def maximumSubtreeSize(self, edges: List[List[int]], colors: List[int]) -> int:
        G = defaultdict(list)
        for u,v in edges:
            G[u].append(v)
            G[v].append(u)
        res = 0
        def dfs(v,u):
            nonlocal res
            color, freq, ncolor = colors[v], 1, 1
            for w in G[v]:
                if w == u: continue 
                tcolor, tfreq, tncolor = dfs(w,v)
                if tncolor > 1 or tcolor != color: 
                    ncolor += 1
                freq += tfreq
            if ncolor > 1: return 0, 0, 2
            res = max(res, freq)
            return color, freq, 1 
        dfs(0,-1)
        return res
        
```