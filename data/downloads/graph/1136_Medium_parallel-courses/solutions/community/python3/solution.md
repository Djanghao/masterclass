# [Python 3] Topological sorting

**Author:** vilchinsky
**Votes:** 25
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/344807/](https://leetcode.com/problems/parallel-courses/solutions/344807/)

---

Kahn's algorithm for Topological sorting

https://en.wikipedia.org/wiki/Topological_sorting

```
class Solution:
    def minimumSemesters(self, N: int, relations: List[List[int]]) -> int:
        g = collections.defaultdict(set)
        g_reversed = collections.defaultdict(set)
        for c in relations:
            g[c[0]].add(c[1])            
            g_reversed[c[1]].add(c[0])            
        
        queue = []
        for i in range(1, N+1):
            if not g_reversed[i]:
                queue.append((1,i))
        
        max_level = 0 
        topological_sort = []
        while queue:
            level, v1 = queue.pop(0)
            topological_sort.append(v1)
            max_level = max(level, max_level)
            for v2 in g[v1]:
                g_reversed[v2].remove(v1)
                if not g_reversed[v2]:
                    queue.append((level+1, v2))                    
        
        return max_level if len(topological_sort) == N else -1
```