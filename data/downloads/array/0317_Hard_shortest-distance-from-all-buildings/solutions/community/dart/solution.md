# Simple Dart solution

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/2886994/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/2886994/)

---

# Intuition
BFS, for every house calculate min distance to every empty cell.
If in any iteration empty cell keeps zero distance  - mark it as "2".
Add result to summary matrix.

# Approach
very similar to the official solution

# Complexity
- Time complexity:
n^2 * m^2 

- Space complexity:
n*m

# Code
```

import 'dart:collection';

class Pos {
  int r;
  int c;
  Pos(this.r, this.c);
}


class Solution {
  static const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];
  int shortestDistance(List<List<int>> grid) {
    final houses = List<Pos>.empty(growable: true);
    int R = grid.length;
    int C = grid.first.length;
    for (int r = 0; r < grid.length; r++)
      for (int c = 0; c < grid.first.length; c++)
        if (grid[r][c] == 1) houses.add(Pos(r, c));

    final maxDist = List<List<int>>.generate(
        R, (index) => List<int>.filled(C, 0)); // keep global ?

    for (int h = 0; h < houses.length; h++) {
      var queue = Queue<Pos>();
      queue.add(Pos(houses[h].r, houses[h].c));
      var dist = List<List<int>>.generate(R, (index) => List<int>.filled(C, 0));

      // bfs
      while (queue.isNotEmpty) {
        var pd = queue.removeFirst();
        for (var dir in dirs) {
          int nextRow = pd.r + dir[0];
          int nextCol = pd.c + dir[1];
          if (nextRow < 0 ||
              nextCol < 0 ||
              nextRow == R ||
              nextCol == C ||
              dist[nextRow][nextCol] > 0 ||
              grid[nextRow][nextCol] > 0) continue;
          dist[nextRow][nextCol] = dist[pd.r][pd.c] + 1;
          queue.add(Pos(nextRow, nextCol));
        }
      }

      for (int r = 0; r < R; r++)
        for (int c = 0; c < C; c++) {
          if (grid[r][c] != 0) continue;
          if (dist[r][c] == 0)
            grid[r][c] = 2;
          else
            maxDist[r][c] += dist[r][c];
        }
    }

    int ret = -1;
    for (int r = 0; r < R; r++)
      for (int c = 0; c < C; c++) {
        if (grid[r][c] == 0)
          ret = (ret == -1 ? maxDist[r][c] : min(ret, maxDist[r][c]));
      }
    return ret == 0 ? -1 : ret;
  }
}

```