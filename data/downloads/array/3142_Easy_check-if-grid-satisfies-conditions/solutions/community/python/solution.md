# Easy solution - Contest 11/05/2024

**Author:** MangeurDeSushi
**Votes:** 8
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5143788/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5143788/)

---

# Approach
Easy solution, we just check for all cell in the matrix if the cell bellow is equal and if the sell on the right is different. upvote if you like pls !

```python []
class Solution:
    def satisfiesConditions(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if j < n - 1 and grid[i][j] == grid[i][j + 1]:
                    return False
                if i < m - 1 and grid[i][j] != grid[i + 1][j]:
                    return False
        return True
```
```cpp []
class Solution {
public:
    bool satisfiesConditions(std::vector<std::vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (j < n - 1 && grid[i][j] == grid[i][j + 1]) {
                    return false;
                }
                if (i < m - 1 && grid[i][j] != grid[i + 1][j]) {
                    return false;
                }
            }
        }
        
        return true;
    }
};
```
```java []
public class Solution {
    public boolean satisfiesConditions(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (j < n - 1 && grid[i][j] == grid[i][j + 1]) {
                    return false;
                }
                if (i < m - 1 && grid[i][j] != grid[i + 1][j]) {
                    return false;
                }
            }
        }
        
        return true;
    }
}
```