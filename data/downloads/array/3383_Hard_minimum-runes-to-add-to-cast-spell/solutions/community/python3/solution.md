# a python version of the SCC solution

**Author:** MaxOrgus
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/solutions/6128204/](https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/solutions/6128204/)

---

credit should be given to @bcrl-tylu 

I did nothing too much more than translation to python

# Code
```python3 []
class Solution:
    def minRunesToAdd(self, n: int, crystals: List[int], flowFrom: List[int], flowTo: List[int]) -> int:
        graph = {i:set([]) for i in range(n)}
        rgraph = {i:set([]) for i in range(n)}
        for i,o in zip(flowFrom,flowTo):
            graph[i].add(o)
            rgraph[o].add(i)
        self.seen = [0]*n
        self.all = []
        def dfs1(node):
            self.seen[node] = 1
            for neib in graph[node]:
                if self.seen[neib] ==0:
                    dfs1(neib)
            self.all.append(node)
        
        for i in range(n):
            if self.seen[i]==0:
                dfs1(i)

        self.sccs = [-1]*n
        def dfs2(node,cid):
            self.sccs[node] = cid
            for neib in rgraph[node]:
                if self.sccs[neib]==-1:
                    dfs2(neib,cid)
        currid = 0
        while self.all:
            node = self.all.pop(-1)
            if self.sccs[node] == -1:
                dfs2(node,currid)
                currid += 1
        
        m = currid
        HasCrys = [0]*m
        for c in crystals:
            HasCrys[self.sccs[c]] = 1
        res = 0
        Incomes = [0]*m       
        for u,v in zip(flowFrom,flowTo):
            uu,vv = self.sccs[u],self.sccs[v]
            if uu!=vv:
                Incomes[vv] = 1
        
        for i in range(m):
            if HasCrys[i] == 0 and Incomes[i] == 0:
                res += 1
        return res



        

```