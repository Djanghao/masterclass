# [Python3] bfs & dfs

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/escape-a-large-maze/solutions/1292945/](https://leetcode.com/problems/escape-a-large-maze/solutions/1292945/)

---


```
class Solution:
    def isEscapePossible(self, blocked: List[List[int]], source: List[int], target: List[int]) -> bool:
        blocked = set(map(tuple, blocked))
        
        def fn(x, y, tx, ty): 
            """Return True if (x, y) is not looped from (tx, ty)."""
            seen = {(x, y)}
            queue = [(x, y)]
            level = 0 
            while queue: 
                level += 1
                if level > 200: return True 
                newq = []
                for x, y in queue: 
                    if (x, y) == (tx, ty): return True 
                    for xx, yy in (x-1, y), (x, y-1), (x, y+1), (x+1, y): 
                        if 0 <= xx < 1e6 and 0 <= yy < 1e6 and (xx, yy) not in blocked and (xx, yy) not in seen: 
                            seen.add((xx, yy))
                            newq.append((xx, yy))
                queue = newq
            return False 
        
        return fn(*source, *target) and fn(*target, *source)
```

```
class Solution:
    def isEscapePossible(self, blocked: List[List[int]], source: List[int], target: List[int]) -> bool:
        blocked = set(map(tuple, blocked))
        
        def dfs(sx, sy, tx, ty): 
            """Return True if (x, y) is not looped from (tx, ty)."""
            seen = {(sx, sy)}
            stack = [(sx, sy)]
            while stack: 
                x, y = stack.pop()
                if abs(x - sx) + abs(y - sy) > 200 or (x, y) == (tx, ty): return True 
                for xx, yy in (x-1, y), (x, y-1), (x, y+1), (x+1, y): 
                    if 0 <= xx < 1e6 and 0 <= yy < 1e6 and (xx, yy) not in blocked and (xx, yy) not in seen: 
                        seen.add((xx, yy))
                        stack.append((xx, yy))
            return False 
        
        return dfs(*source, *target) and dfs(*target, *source)
```

Btw, dfs is a lot quicker.