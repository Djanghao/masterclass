# The most elegant DFS solution, only for real gentlemans 🎩

**Author:** krustev03
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/5708673/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/5708673/)

---

# Intuition - gently check all possible moves, easy to grasp
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach - DFS
<!-- Describe your approach to solving the problem. -->
# Complexity
- Time complexity: $$O(8^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![cat.png](./images/0.png)


# Code
```csharp []
public class Solution {
    public bool CheckValidGrid(int[][] grid) {
        return DFS(grid, 0, 0, 0);
    }

    public bool DFS(int[][] grid, int i, int j, int num) {
        if (i < 0 || i > grid.Length - 1 || j < 0 || j > grid.Length - 1 || grid[i][j] != num) return false;

        if (grid[i][j] == (grid.Length * grid.Length) - 1) return true;

        num++;

        return  DFS(grid, i - 2, j - 1, num) ||
                DFS(grid, i - 2, j + 1, num) ||
                DFS(grid, i - 1, j - 2, num) ||
                DFS(grid, i - 1, j + 2, num) ||
                DFS(grid, i + 1, j - 2, num) ||
                DFS(grid, i + 2, j - 1, num) ||
                DFS(grid, i + 2, j + 1, num) ||
                DFS(grid, i + 1, j + 2, num);
    }
}
```