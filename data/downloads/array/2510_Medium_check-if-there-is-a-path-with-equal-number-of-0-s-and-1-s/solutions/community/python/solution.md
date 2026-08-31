# Python: BFS + DP

**Author:** vokasik
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3186793/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3186793/)

---

**BFS**
```
class Solution:
    def isThereAPath(self, grid: List[List[int]]) -> bool:
        balance = lambda r,c,b: b + (1 if grid[r][c] else -1)
        
        ROWS, COLS = len(grid), len(grid[0])
        
        visited = set()
        queue = deque([(0,0, balance(0,0,0))])
        while queue:
            r,c,b = queue.popleft()
            
            if (r,c) == (ROWS - 1, COLS - 1) and b == 0:
                return True
            
            for dr,dc in (0,1),(1,0):
                nr,nc = r+dr, c+dc
                if COLS > nc >= 0 <= nr < ROWS and (nr,nc,balance(nr,nc,b)) not in visited:
                    next_state = (nr,nc,balance(nr,nc,b))
                    visited.add(next_state) # states are repeated and do avalanche
                    queue.append(next_state)
        
        return False
```
**DP: Top-down**
```
class Solution:
    def isThereAPath(self, grid: List[List[int]]) -> bool:
        @cache
        def dfs(r,c,b):
            if r < 0 or c < 0:
                return False
            b += +1 if grid[r][c] else -1
            
            if r == c == b == 0:
                return True
            return dfs(r - 1, c, b) or dfs(r, c - 1, b)
        
        return dfs(len(grid) - 1, len(grid[0]) - 1, 0)
```