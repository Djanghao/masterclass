# [Python 3] BFS | Iterative

**Author:** 0xAbhishek
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314083/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314083/)

---

```
class Solution:
    def checkValidGrid(self, grid: List[List[int]]) -> bool:
        n = len(grid)
        
        q = deque( [(0, 0)] )
        res = 0
        
        while q:
            res += 1
            x, y = q.popleft()

            for i, j in [ (x + 1, y + 2), (x + 1, y - 2), (x - 1, y + 2), (x - 1, y - 2), (x + 2, y + 1), (x + 2, y - 1), (x - 2, y + 1), (x - 2, y - 1) ]:
                if 0 <= i < n and 0 <= j < n and grid[i][j] == grid[x][y] + 1:
                    q.append( (i, j) )

        return res == pow(n, 2)
```