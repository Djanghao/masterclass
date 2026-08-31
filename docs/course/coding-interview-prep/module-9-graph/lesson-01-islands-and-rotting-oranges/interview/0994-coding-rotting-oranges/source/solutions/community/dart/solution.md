# Dart 3 solution

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotting-oranges/solutions/5051562/](https://leetcode.com/problems/rotting-oranges/solutions/5051562/)

---

# Code
```
import 'dart:collection';

class Solution {
  int orangesRotting(List<List<int>> grid) {
    var queue = Queue<(int, int)>();
    int oranges = 0;
    
    // traverse the grid, add rotten orange into queue and count oranges
    for (var (i, row) in grid.indexed) {
      for (var (j, cell) in row.indexed) {
        if (cell >= 1) oranges++;
        if (cell == 2) queue.add((i, j));
      }
    }
    if (oranges == 0) return 0;

    var directions = [(0, 1), (0, -1), (1, 0), (-1, 0)];
    int rotten = 0, time = 0;

    while (queue.isNotEmpty && rotten < oranges) {
      int size = queue.length;

      rotten += size;
      if (rotten == oranges) return time;

      time++;

      // dequeue all rotten oranges from last round
      for (int i = 0; i < size; i++) {
        var (curr_x, curr_y) = queue.removeFirst();

        for (var (dx, dy) in directions) {
          var x = curr_x + dx;
          var y = curr_y + dy;

          if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
            continue;
          }

          if (grid[x][y] == 1) {
            grid[x][y] = 2;
            queue.add((x, y));
          }
        }
      }
    }
    return -1;
  }
}
```