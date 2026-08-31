# Easy BFS

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5796800/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5796800/)

---

```
class Solution:
    def findSafeWalk(self, grid: List[List[int]], health: int) -> bool:
        R,C = len(grid), len(grid[0])
        queue = deque([(0, 0, health - grid[0][0])])
        visited = set([(0, 0, health - grid[0][0])])
        while queue:
            r,c,h = queue.popleft()
            if r == R - 1 and c == C - 1:
                return True
            for nr,nc in (r + 1, c), (r, c + 1), (r - 1, c), (r, c - 1):
                if R > nr >= 0 <= nc < C:
                    nh = h - grid[nr][nc]
                    if nh >= 1 and (nr,nc,nh) not in visited:
                        queue.append((nr,nc,nh))
                        visited.add((nr,nc,nh))
        return False
```