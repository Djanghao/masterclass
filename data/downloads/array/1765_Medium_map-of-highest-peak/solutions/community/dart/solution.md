# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/4786971/](https://leetcode.com/problems/map-of-highest-peak/solutions/4786971/)

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

class Solution {
  List<List<int>> highestPeak(List<List<int>> isWater) {
    final m = isWater.length;
    final n = isWater[0].length;
    final List<List<int>> h = List.generate(m, (_) => List.filled(n, -1));
    final Queue<Pair> q = Queue();
    final List<List<int>> directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (isWater[i][j] == 1) {
                h[i][j] = 0;
                q.add(Pair(i, j));
            }
        }
    }

    while (q.isNotEmpty) {
        final pair = q.removeFirst();
        final row = pair.row;
        final col = pair.col;
        final nodeHeight = h[row][col];
        for (final d in directions) {
            var r = row + d.first;
            var c = col + d.last;

            if (r >= 0 && r < m && c >= 0 && c < n) {
                if (h[r][c] == -1) {
                    h[r][c] = nodeHeight + 1;
                    q.add(Pair(r, c));
                }
            }
        }
    }

    return h;
  }
}

class Pair {
    int row;
    int col;

    Pair(this.row, this.col);
}
```