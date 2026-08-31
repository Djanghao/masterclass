# [Python] Union Find + DFS

**Author:** coolguazi
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/2680867/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/2680867/)

---

```
class UF:
    def __init__(self, n):
        self.parents = list(range(n + 1))
    
    def find(self, u):
        if self.parents[u] != u:
            self.parents[u] = self.find(self.parents[u])
        return self.parents[u]
        
    def union(self, u, v):
        p, q = self.find(u), self.find(v)
        if p == q: return 0
        self.parents[p] = q
        return q
    
class Solution:
    def smallestMissingValueSubtree(self, parents: List[int], nums: List[int]) -> List[int]:
        def dfs(tree):
            smallest = max({dfs(subTree) for subTree in graph[tree]} | {1})
            for subTree in graph[tree]:
                uf.union(nums[tree], nums[subTree])
                
            for i in range(smallest, n + 1):
                if uf.find(i) != uf.find(nums[tree]):
                    res[tree] = i
                    return i
            else: return i + 1
            
        n, graph = len(nums), defaultdict(list)
        uf, res = UF(100000), [1] * n
        for i, p in enumerate(parents):
            graph[p].append(i)

        res[0] = dfs(0)
        return res
```