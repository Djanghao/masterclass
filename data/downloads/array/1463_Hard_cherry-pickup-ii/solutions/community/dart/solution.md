# BFS with a LinkedHhashMap

**Author:** jolleekin
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solutions/4711535/](https://leetcode.com/problems/cherry-pickup-ii/solutions/4711535/)

---

# Intuition
See comments in code.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(R * C * C)$$

- Space complexity: $$O(R * C * C)$$

where `R` = number of rows and `C` = number of columns

# Code
```Dart []
import 'dart:math';

/// Observations:
/// - Iterative BFS.
///
/// - Each queue element needs to store the robots' positions and the total
///   number of cherries picked: `r, c0, c1, total`.
///
/// - The robots may move to the same cells but they don't need to cross
///   each other, i.e. `c0 <= c1`.
///
/// - Need to avoid enqueueing duplicated robot positions to prevent out of memory.
///
/// => Use `LinkedHashMap` with
/// - keys are robots' positions `(r, c0, c1)`
/// - values are total numbers of cherries picked
class Solution {
  int cherryPickup(List<List<int>> grid) {
    final rowMax = grid.length - 1;
    final colCnt = grid.first.length;
    final map = {(-1, -1, colCnt): 0};
    var ans = 0;

    while (map.isNotEmpty) {
      final key = map.keys.first;
      final total = map.remove(key)!;
      var (r, c0, c1) = key;

      if (r == rowMax) {
        ans = max(ans, total);
        continue;
      }

      ++r;

      for (var m = -1; m <= 1; ++m) {
        final c0next = c0 + m;
        if (c0next < 0 || c0next >= colCnt) continue;

        for (var n = -1; n <= 1; ++n) {
          final c1next = c1 + n;
          if (c1next < c0next || c1next >= colCnt) continue;

          var nextTotal = total + grid[r][c0next];
          if (c0next != c1next) nextTotal += grid[r][c1next];

          final k = (r, c0next, c1next);
          map[k] = max(map[k] ?? 0, nextTotal);
        }
      }
    }

    return ans;
  }
}

```
```typescript []
/// Observations:
/// - Iterative BFS.
///
/// - Each queue element needs to store the robots' positions and the total
///   number of cherries picked: `r, c0, c1, total`.
///
/// - The robots may move to the same cells but they don't need to cross
///   each other, i.e. `c0 <= c1`.
///
/// - Need to avoid enqueueing duplicated robot positions to prevent out of memory.
///
/// => Use `LinkedHashMap` with
/// - keys are robots' positions `(r, c0, c1)`
/// - values are total numbers of cherries picked
function cherryPickup(grid: number[][]): number {
    const rowMax = grid.length - 1;
    const colCnt = grid[0].length;
    const map = new Map();
    // Can't use map.set(encode(-1, -1, colCnt), 0).
    map.set(
      encode(0, 0, colCnt - 1),
      grid[0][0] + grid[0][colCnt - 1]
    );
    let ans = 0;
    
    while (map.size) {
      const key = map.keys().next().value;
      const total = map.get(key)!;
      map.delete(key);
      
      let r = key >> 16;
      if (r === rowMax) {
        ans = Math.max(ans, total);
        continue;
      }

      ++r;
      const c0 = (key >> 8) & 0xff;
      const c1 = key & 0xff;

      for (let i = -1; i <= 1; ++i) {
        const c0next = c0 + i;
        if (c0next < 0 || c0next >= colCnt) continue;

        for (let j = -1; j <= 1; ++j) {
          const c1next = c1 + j;
          if (c1next < c0next || c1next >= colCnt) continue;

          let nextTotal = total + grid[r][c0next];
          if (c0next !== c1next) nextTotal += grid[r][c1next];

          const k = encode(r, c0next, c1next);
          map.set(k, Math.max(map.get(k) ?? 0, nextTotal));
        }
      }
    }

    return ans;
};

const encode = (r: number, c0: number, c1: number) => (r << 16) | (c0 << 8) | c1;
```