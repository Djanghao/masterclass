# Dart solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5117549/](https://leetcode.com/problems/right-triangles/solutions/5117549/)

---

# Code
```
class Solution {
  int numberOfRightTriangles(List<List<int>> grid) {
    int rows = grid.length;
    int cols = grid[0].length;
    var rowOnes = List.filled(rows, 0);
    var colOnes = List.filled(cols, 0);
    int count = 0;
    for (var (i, row) in grid.indexed) {
      for (var (j, cell) in row.indexed) {
        rowOnes[i] += cell;
        colOnes[j] += cell;
      }
    }
    for (var (i, row) in grid.indexed) {
      for (var (j, cell) in row.indexed) {
        if (cell == 1) {
          count += (rowOnes[i] - 1) * (colOnes[j] - 1);
        }
      }
    }
    return count;
  }
}
```