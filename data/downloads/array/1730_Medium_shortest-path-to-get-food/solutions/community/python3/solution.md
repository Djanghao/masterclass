# Python 3 | BFS, Matrix | Explanation

**Author:** idontknoooo
**Votes:** 15
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/1326092/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/1326092/)

---

### Explanation
- Intuition: We need to find the **_shortest_** path from one point to the other. Pretty obvious hint of `BFS`. 
- First, we need to find where to start. `O(m*n)`
- Starting BFS with the help of deque `(i, j, cnt)`, explore 4 neighbors and increment `cnt` by 1
- Mark visited point as `X` to avoid revisit
- If `#` is met, return `cnt`
- Time: `O(m*n)`
- Space: `O(m*n)`
### Implementation
```
class Solution:
    def getFood(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        q = collections.deque()
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '*': 
                    q.append((i,j, 0)); break
            if q: break        
        while q:
            x, y, cnt = q.popleft()
            if grid[x][y] == 'X': continue
            elif grid[x][y] == '#': return cnt
            grid[x][y] = 'X'
            for i, j in [(x + _x, y + _y) for _x, _y in [(-1, 0), (1, 0), (0, -1), (0, 1)]]:
                if 0 <= i < m and 0 <= j < n and grid[i][j] != 'X':
                    q.append((i, j, cnt + 1))
        return -1                    
```