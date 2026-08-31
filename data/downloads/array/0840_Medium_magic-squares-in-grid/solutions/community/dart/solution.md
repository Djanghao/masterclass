# in dart

**Author:** UP7myCp0tC
**Votes:** 1
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5614445/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5614445/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool isValid(int i, int j, List<List<int>> grid) {
    List<int> count = List.filled(10, 0);
    
    // Check the numbers in the 3x3 grid
    for (int x = 0; x < 3; ++x) {
      for (int y = 0; y < 3; ++y) {
        int num = grid[i + x][j + y];
        if (num < 1 || num > 9 || count[num] > 0) return false;
        count[num]++;
      }
    }

    // Calculate the sum of the first row
    int sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
    
    // Check rows
    for (int x = 0; x < 3; ++x) {
      if (sum != (grid[i + x][j] + grid[i + x][j + 1] + grid[i + x][j + 2])) return false;
    }
    
    // Check columns
    for (int y = 0; y < 3; ++y) {
      if (sum != (grid[i][j + y] + grid[i + 1][j + y] + grid[i + 2][j + y])) return false;
    }
    
    // Check diagonals
    if (sum != (grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2])) return false;
    if (sum != (grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2])) return false;

    return true;
  }
  
  int numMagicSquaresInside(List<List<int>> grid) {
    int count = 0;
    int row = grid.length;
    int col = grid[0].length;
    
    if (row < 3 || col < 3) return 0;

    for (int i = 0; i <= row - 3; ++i) {
      for (int j = 0; j <= col - 3; ++j) {
        if (isValid(i, j, grid)) count++;
      }
    }
    return count;
  }
}

```