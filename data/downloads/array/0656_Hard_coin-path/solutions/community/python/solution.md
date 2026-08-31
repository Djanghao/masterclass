# Dijkstra, more intuitive but slower than DP

**Author:** leonmak
**Votes:** 1
**Link:** [https://leetcode.com/problems/coin-path/solutions/238102/](https://leetcode.com/problems/coin-path/solutions/238102/)

---

Continue processing if path to current has lower distance (overall distance improves) or path length is longer (lexicographic order).
Slower because top down, starting from src
```
from heapq import *

class Solution(object):
    def cheapestJump(self, A, B):
        """
        :type A: List[int]
        :type B: int
        :rtype: List[int]
        """
        if not A or A[0] == -1:
            return []
        q = [(0, 0, -1, 1)]  # cost, idx, parent, path_len
        n = len(A)
        last = n-1 
        parent = dict()
        p_lens = [float('inf') for _ in range(n)]
        dists = [float('inf') for _ in range(n)]
        res = []
        while q:
            dist, idx, p_idx, path_len = heappop(q)
            shorter_dist = dist < dists[idx]
            longer_path = dist == dists[idx] and path_len > p_lens[idx]
            if shorter_dist or longer_path:
                dists[idx] = dist
                parent[idx] = p_idx
                p_lens[idx] = path_len
            else:
                continue
            
            if idx == last:
                curr = idx
                path = [curr]
                while parent[curr] != -1:
                    path.insert(0, parent[curr])
                    curr = parent[curr]
                res = list(map(lambda x: x+1, path))

            # append neighbour
            for nex in range(idx+1, min(n, idx+B+1)):
                if A[nex] == -1:
                    continue
                new_dist = dist + A[nex]
                if new_dist < dists[nex]:
                    heappush(q, (new_dist, nex, idx, path_len+1))
        return res
```