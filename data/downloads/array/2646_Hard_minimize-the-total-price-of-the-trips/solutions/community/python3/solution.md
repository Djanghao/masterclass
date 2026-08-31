# [Python3] DFS

**Author:** ye15
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3421861/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3421861/)

---


```
class Solution:
    def minimumTotalPrice(self, n: int, edges: List[List[int]], price: List[int], trips: List[List[int]]) -> int:
        tree = [[] for _ in range(n)] 
        for u, v in edges: 
            tree[u].append(v)
            tree[v].append(u)
        freq = [0]*n
        for s, e in trips: 
            queue = deque([(s, -1)])
            parent = {s : -1}
            while queue: 
                u, p = queue.popleft()
                if u == e: break 
                for v in tree[u]: 
                    if v != p: 
                        queue.append((v, u))
                        parent[v] = u
            u = e 
            while u >= 0: 
                freq[u] += 1
                u = parent[u]
            
        def dfs(u, p):
            """Return """
            full = half = 0 
            for v in tree[u]: 
                if v != p: 
                    ff, hh = dfs(v, u)
                    full += ff
                    half += min(ff, hh)
            return price[u]*freq[u] + half, price[u]*freq[u]//2 + full
            
        return min(dfs(0, -1))
```