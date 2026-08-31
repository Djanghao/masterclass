# [Python3] post-order dfs

**Author:** ye15
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1299545/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/1299545/)

---


```
class Solution:
    def waysToBuildRooms(self, prevRoom: List[int]) -> int:
        tree = defaultdict(list)
        for i, x in enumerate(prevRoom): tree[x].append(i)
        
        def fn(n): 
            """Return number of nodes and ways to build sub-tree."""
            if not tree[n]: return 1, 1 # leaf 
            c, m = 0, 1
            for nn in tree[n]: 
                cc, mm = fn(nn)
                c += cc
                m = (m * comb(c, cc) * mm) % 1_000_000_007
            return c+1, m
        
        return fn(0)[1] 
```

```
MOD = 1_000_000_007

class Solution:
    def waysToBuildRooms(self, prevRoom: List[int]) -> int:
        tree = defaultdict(list)
        for i, x in enumerate(prevRoom): tree[x].append(i)
            
        N = 100001
        fact, ifact, inv = [1] * N, [1] * N, [1] * N
        for i in range(1, N): 
            if i >= 2: inv[i] = (MOD - MOD//i) * inv[MOD % i] % MOD; 
            fact[i] = fact[i-1] * i % MOD 
            ifact[i] = ifact[i-1] * inv[i] % MOD 
        
        def fn(n): 
            """Return number of nodes and ways to build sub-tree."""
            if not tree[n]: return 1, 1 # leaf 
            c, m = 0, 1
            for nn in tree[n]: 
                cc, mm = fn(nn)
                c += cc
                m = m * mm * ifact[cc] % MOD
            return c+1, m * fact[c] % MOD
        
        return fn(0)[1]
```