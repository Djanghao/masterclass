# C#: faster than 65%, Brute Force

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/3461949/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/3461949/)

---

# Intuition
Use brute force to calcutare result.

# Approach
Use brute force - calculate results for all hourglass' top-left corners.

# Complexity
- Time complexity:
$$O(n)$$, where n is the numbers of items in grid.

- Space complexity:
$$O(len(grid[0]))$$

# Code
```
public class Solution {
    public int MaxSum(int[][] grid) {
        var rs = -1;
        for (int i = 0; i < grid.Length - 2; i++)
        {
            var aux = new int[grid[0].Length - 2];
            aux[0] = grid[i][0] + grid[i][1] + grid[i][2] + grid[i + 1][1] + grid[i + 2][0] + grid[i + 2][1] + grid[i + 2][2];
            rs = Math.Max(rs, aux[0]);
            for (int j = 1; j < aux.Length; j++)
            {
                aux[j] = aux[j - 1] - grid[i][j - 1] + grid[i][j + 2] - grid[i + 1][j] + grid[i + 1][j + 1] - grid[i + 2][j - 1] + grid[i + 2][j + 2];
                rs = Math.Max(rs, aux[j]);
            }
        }
        return rs;
    }
}
```