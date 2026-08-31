# [Python] Simple DFS O(M*N)

**Author:** msk200
**Votes:** -1
**Link:** [https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/1656836/](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/1656836/)

---

```
class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        seen = [[0] * len(grid[0]) for _ in range(len(grid))] 
        res = 0
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1 and seen[i][j] == 0:
                    option1 = self.dfs(i, j, 0, seen, grid, 1)
                    option2 = self.dfs(i, j, 1, seen, grid, 2)
                    res += min(option1, option2)
        
        return res
    
    def dfs(self, i, j, curr_color, seen, grid, marker):
        if not self.is_valid(i, j, grid) or grid[i][j] == 0 or seen[i][j] == marker:
            return 0
        
        seen[i][j] = marker
        res = 0 if grid[i][j] == curr_color else 1
        next_color = 1 - curr_color
        for x, y in [(i+1,j), (i,j+1), (i-1,j), (i,j-1)]:
            res += self.dfs(x, y, next_color, seen, grid, marker)
        
        return res
        
    def is_valid(self, i, j, grid):
        return 0 <= i < len(grid) and 0 <= j < len(grid[0])
        
```