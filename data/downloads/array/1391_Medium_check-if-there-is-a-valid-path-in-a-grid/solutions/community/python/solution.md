# Python: BFS - Very Simple

**Author:** e_alhakim
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/1249569/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/1249569/)

---

```
from collections import deque
class Solution:
    def hasValidPath(self, grid: List[List[int]]) -> bool:
        
        DIRECTIONS = {
            1: [(0, -1), (0, 1)],
            2: [(-1, 0), (1, 0)],
            3: [(0, -1), (1, 0)],
            4: [(0, 1), (1, 0)],
            5: [(0, -1), (-1, 0)],
            6: [(0, 1), (-1, 0)]
        }
        
        ROWS, COLS = len(grid), len(grid[0])
        
        def isValidMove(r,c): 
            return r < ROWS and r >= 0 and c < COLS and c >= 0 and (r,c) not in visited
        
        
        q = deque([(0,0)])
        visited = set()
        while q:
            r,c = q.pop()
            
            if r == ROWS - 1 and c == COLS - 1:
                return True

            visited.add((r,c))
            s = grid[r][c]

            for dr, dc in DIRECTIONS[s]:
                nr, nc = r+dr, c+dc
                if isValidMove(nr,nc):
                    ns = grid[nr][nc]
                    if (-dr,-dc) in DIRECTIONS[ns]:
                        q.append((nr, nc))

        return False
```