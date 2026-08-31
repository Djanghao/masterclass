# Dart 3 solution

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/5051325/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/5051325/)

---

# Code
```
import 'dart:collection';

class Solution {
  int nearestExit(List<List<String>> maze, List<int> entrance) {
    int rows = maze.length, cols = maze[0].length;
    Queue<(int, int)> queue = Queue();
    Set<(int, int)> visited = {};
    var dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];

    int steps = 0;

    var [x, y] = entrance;
    queue.add((x, y));
    visited.add((x, y));

    while (queue.isNotEmpty) {
      steps++;
      var queueLen = queue.length;

      for (int i = 0; i < queueLen; i++) {
        var (curr_x, curr_y) = queue.removeFirst();

        for (var [dir_x, dir_y] in dirs) {
          var x = curr_x + dir_x;
          var y = curr_y + dir_y;

          if (x < 0 ||
              y < 0 ||
              x >= rows ||
              y >= cols ||
              maze[x][y] == '+' ||
              visited.contains((x, y))) continue;

          if (x == 0 || x == rows - 1 || y == 0 || y == cols - 1) return steps;

          queue.add((x, y));
          visited.add((x, y));
        }
      }
    }
    return -1;
  }
}
```