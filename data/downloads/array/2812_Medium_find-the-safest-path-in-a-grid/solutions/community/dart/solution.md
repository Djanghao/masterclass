# ✅DART BEATS 100% Runtime And Memory

**Author:** Motabbir
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5159082/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5159082/)

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
import 'dart:collection';
import 'package:collection/collection.dart';

class Solution {
  int maximumSafenessFactor(List<List<int>> grid) {
    int n = grid.length;
    int m = grid[0].length;
    List<List<int>> directions = [
      [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    List<List<int>> distance = List.generate(n, (_) => List.filled(m, n * m));
    Queue<List<int>> queue = Queue();

    // Initialize BFS from all cells with a 1
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (grid[i][j] == 1) {
          queue.add([i, j]);
          distance[i][j] = 0;
        }
      }
    }

    // BFS to calculate the minimum distance to any cell with a 1
    while (queue.isNotEmpty) {
      var cell = queue.removeFirst();
      int x = cell[0], y = cell[1];
      for (var dir in directions) {
        int nx = x + dir[0], ny = y + dir[1];
        if (nx >= 0 && ny >= 0 && nx < n && ny < m && distance[nx][ny] > distance[x][y] + 1) {
          distance[nx][ny] = distance[x][y] + 1;
          queue.add([nx, ny]);
        }
      }
    }

    // Use PriorityQueue to find the path with maximum safeness factor
    PriorityQueue<List<int>> pq = PriorityQueue((a, b) => b[2].compareTo(a[2]));
    pq.add([0, 0, distance[0][0]]);
    Set<String> visited = {};

    while (pq.isNotEmpty) {
      var cell = pq.removeFirst();
      int x = cell[0], y = cell[1], safeness = cell[2];
      if (x == n - 1 && y == m - 1) {
        return safeness;
      }
      String key = "$x,$y";
      if (visited.contains(key)) continue;
      visited.add(key);
      for (var dir in directions) {
        int nx = x + dir[0], ny = y + dir[1];
        if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited.contains("$nx,$ny")) {
          pq.add([nx, ny, safeness.clamp(0, distance[nx][ny])]);
        }
      }
    }

    return -1; // In case there's no valid path
  }
}

```