# Check All Cells || C++, Python, Java

**Author:** not_yl3
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5149936/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5149936/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate row by row and check for the specified conditions (every cell is equal to the one below it and different from the one to the right of it).
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool satisfiesConditions(vector<vector<int>>& grid) {
        for (int i = 0; i < grid.size(); i++){
            for (int j = 0; j < grid[i].size() - 1; j++){
                if (grid[i][j] == grid[i][j+1]) return false;
            }
            if (i > 0 && grid[i] != grid[i-1]) return false;
        }
        return true;
    }
};
```
```python3 []
class Solution:
    def satisfiesConditions(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if j+1 < n and grid[i][j] == grid[i][j+1]: return False
                elif i+1 < m and grid[i][j] != grid[i+1][j]: return False
        return True
```
```Java []
class Solution {
    public boolean satisfiesConditions(int[][] grid) {
        for (int i = 0; i < grid.length; i++){
            for (int j = 0; j < grid[i].length; j++){
                if (j+1 < grid[i].length && grid[i][j] == grid[i][j+1]){
                    return false;
                }
                else if (i+1 < grid.length && grid[i][j] != grid[i+1][j]){
                    return false;
                }
            }
        }
        return true;
    }
}
```
