# Dart O(n*m) Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/4290166/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/4290166/)

---

```
class Solution {
  List<List<int>> ans = [];
  int row = 0;
  int col = 0;

  void aux(List<List<int>> grid, int i, int j) {
    int r = i;
    int c = j;

    Map<int, int> bottomRight = {};
    while (r < row && c < col) {
      bottomRight.update(grid[r][c], (v) => v + 1, ifAbsent: () => 1);
      r++;
      c++;
    }

    r = i;
    c = j;

    Map<int, int> topLeft = {};
    while (r < row && c < col) {
      bottomRight.update(grid[r][c], (v) => v - 1, ifAbsent: () => 0);
      if (bottomRight[grid[r][c]] == 0) {
        bottomRight.remove(grid[r][c]);
      }

      ans[r][c] = (topLeft.length - bottomRight.length).abs();

      topLeft.update(grid[r][c], (v) => v + 1, ifAbsent: () => 1);

      r++;
      c++;
    }
  }

  List<List<int>> differenceOfDistinctValues(List<List<int>> grid) {
    row = grid.length;
    col = grid[0].length;

    ans = List.generate(row, (i) => List.generate(col, (_) => 0));

    for (int i = 0; i < row; i++) {
      aux(grid, i, 0);
    }

    for (int j = 1; j < col; j++) {
      aux(grid, 0, j);
    }

    return ans;
  }
}

```