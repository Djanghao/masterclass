# [Python] Very simple Python solution

**Author:** Ghibli
**Votes:** 30
**Link:** [https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/1994677/](https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/1994677/)

---

**Idea**
Create grid. Map locations of guards and walls and set location to `1`
Iterate through guard locations and visit horizontal and vertical locations until we hit a wall/guard (**not guard path**) or the end of the map. Set these guard path locations to `2`.  We set this to `2` instead of `1` in order to distinguish guard path and original guard/wall. Count the remaining `0`s (not guard path, guard or wall). 

```
class Solution:
    def countUnguarded(self, m: int, n: int, guards: List[List[int]], walls: List[List[int]]) -> int:
        dp = [[0] * n for _ in range(m)]
        for x, y in guards+walls:
            dp[x][y] = 1
               
        directions = [(0, 1), (1, 0), (-1, 0), (0, -1)]
        
        for x, y in guards:
            for dx, dy in directions:
                curr_x = x
                curr_y = y
                
                while 0 <= curr_x+dx < m and 0 <= curr_y+dy < n and dp[curr_x+dx][curr_y+dy] != 1:
                    curr_x += dx
                    curr_y += dy
                    dp[curr_x][curr_y] = 2
                    
        return sum(1 for i in range(m) for j in range(n) if dp[i][j] == 0)                    
```