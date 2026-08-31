# c# very simple and fast solution

**Author:** vinuaqua4u
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/3345904/](https://leetcode.com/problems/minimum-path-sum/solutions/3345904/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: o(mXn)

- Space complexity: o(1)

# Code
```Python3 []
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if i == 0 and j == 0: continue
                elif i == 0: grid[i][j] += grid[i][j - 1]
                elif j == 0: grid[i][j] += grid[i - 1][j]
                else: grid[i][j] += min(grid[i][j - 1], grid[i - 1][j])
        return grid[-1][-1]
```
```c# []
public class Solution {
    public int MinPathSum(int[][] grid) {
        for(int i = 0; i < grid.Length; i++) {
            for (int j = 0; j < grid[i].Length; j++) {
                if (i == 0 && j == 0)
                    continue;

                if (i == 0) {
                    grid[i][j] += grid[i][j - 1];
                    continue;
                }

                if (j == 0) {
                    grid[i][j] += grid[i - 1][j];
                    continue;
                }

                grid[i][j] += Math.Min(grid[i][j - 1], grid[i - 1][j]);
            }
        }

        return grid[grid.Length - 1][grid[0].Length - 1];
    }
}
```