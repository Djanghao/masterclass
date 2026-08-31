# [Python3] greedy

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/1128518/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/1128518/)

---


```
class Solution:
    def checkWays(self, pairs: List[List[int]]) -> int:
        graph = {}
        for x, y in pairs: 
            graph.setdefault(x, set()).add(y)
            graph.setdefault(y, set()).add(x)
        
        ans = 1 
        ancestors = set()
        for n in sorted(graph, key=lambda x: len(graph[x]), reverse=True): 
            p = min(ancestors & graph[n], key=lambda x: len(graph[x]), default=None) # immediate ancestor 
            ancestors.add(n)
            if p: 
                if graph[n] - (graph[p] | {p}): return 0 # impossible to have more than ancestor
                if len(graph[n]) == len(graph[p]): ans = 2
            elif len(graph[n]) != len(graph)-1: return 0
        return ans 
```

```
class Solution:
    def checkWays(self, pairs: List[List[int]]) -> int:
        nodes = set()
        graph = {}
        degree = {}
        for x, y in pairs: 
            nodes |= {x, y}
            graph.setdefault(x, set()).add(y)
            graph.setdefault(y, set()).add(x)
            degree[x] = 1 + degree.get(x, 0)
            degree[y] = 1 + degree.get(y, 0)
        
        if max(degree.values()) < len(nodes) - 1: return 0 # no root
        for n in nodes: 
            if degree[n] < len(nodes)-1: 
                nei = set()
                for nn in graph[n]: 
                    if degree[n] >= degree[nn]: nei |= graph[nn] # brothers & childrens
                if nei - {n} - graph[n]: return 0 # impossible
        
        for n in nodes: 
            if any(degree[n] == degree[nn] for nn in graph[n]): return 2 # brothers 
        return 1 
```