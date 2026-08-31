# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397725/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397725/)

---

# Code
```
class Solution {
  int numSpecial(List<List<int>> grid) {
    final rows = grid.length, cols = grid[0].length;

    final validRows = grid.map((row) => row.reduce((a, b) => a + b) == 1).toList();

    var count = 0;
    for (var col = 0; col < cols; col++) {
      var colSum = 0;
      var atRow = -1;
      for (var row = 0; row < rows; row++) {
        if (grid[row][col] == 1) {
          colSum++;
          atRow = row;
        }
      }
      if (colSum == 1 && validRows[atRow]) {
        count++;
      }
    }
    return count;
  }
}
```