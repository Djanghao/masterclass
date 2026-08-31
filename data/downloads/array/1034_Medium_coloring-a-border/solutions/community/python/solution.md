# Python DFS faster than 100% Easy to understand

**Author:** zarn_yao
**Votes:** 3
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/873995/](https://leetcode.com/problems/coloring-a-border/solutions/873995/)

---

```
class Solution:
    def colorBorder(self, grid: List[List[int]], r0: int, c0: int, color: int) -> List[List[int]]:
        
        def dfs(r, c, current, border, seen):
            
            # if out of range or seen
            if r<0 or c<0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] != current or (r,c) in seen:
                return
            
            seen.add((r,c))
            
            # if it is a border
            if (r==0 or c==0 or r==len(grid)-1 or c==len(grid[0])-1 or grid[r-1][c] != current or grid[r+1][c] != current or grid[r][c-1] != current or grid[r][c+1] != current):
                border.add((r,c))
                
                
            dfs(r-1, c, current, border, seen)
            dfs(r+1, c, current, border, seen)
            dfs(r, c-1, current, border, seen)
            dfs(r, c+1, current, border, seen)
                
            return
        
        if not grid:
            return grid
        
        current = grid[r0][c0]
        border = set()
        seen = set()
        dfs(r0, c0, current, border, seen)
        
        for elem in border:
            grid[elem[0]][elem[1]] = color
        
        return grid
```