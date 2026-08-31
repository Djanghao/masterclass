# python, union find, dfs, bfs

**Author:** journeyboy
**Votes:** 68
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/303150/](https://leetcode.com/problems/number-of-provinces/solutions/303150/)

---

union find:

```py
class UnionFind(object):
    def __init__(self, n):
        self.u = list(range(n))
        
    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra != rb: self.u[ra] = rb
    
    def find(self, a):
        while self.u[a] != a: a = self.u[a]
        return a
    
class Solution(object):
    def findCircleNum(self, M):
        """
        :type M: List[List[int]]
        :rtype: int
        """
        
        if not M: return 0
        s = len(M)
        
        uf = UnionFind(s)
        for r in range(s):
            for c in range(r,s):
                if M[r][c] == 1: uf.union(r,c)
                    
        return len(set([uf.find(i) for i in range(s)]))
```

DFS:

```py
class Solution(object):
    def findCircleNum(self, M):
        """
        :type M: List[List[int]]
        :rtype: int
        """
        
        if not M: return 0
        s = len(M)
        seen = set()
        
        def dfs(p):
            for q, adj in enumerate(M[p]):
                if (adj == 1) and (q not in seen):
                    seen.add(q)
                    dfs(q)
        
        cnt = 0
        for i in range(s):
            if i not in seen: 
                dfs(i)
                cnt += 1
        
        return cnt
```

BFS:

```py
class Solution(object):
    def findCircleNum(self, M):
        """
        :type M: List[List[int]]
        :rtype: int
        """
        
        if not M: return 0
        s = len(M)
        seen = set()
        cnt = 0
        for i in range(s):
            if i not in seen:
                q = [i]
                while q:
                    p = q.pop(0)
                    if p not in seen:
                        seen.add(p)
                        q += [k for k,adj in enumerate(M[p]) if adj and (k not in seen)]
                cnt += 1
        
        return cnt
```
