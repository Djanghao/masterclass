# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4467082/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4467082/)

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
  int maxIncreaseKeepingSkyline(List<List<int>> grid) {
    final rows = List.filled(grid.length, 0);
    final cols = List.filled(grid.first.length, 0);
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[i].length; j++) {
            rows[i] = max(grid[i][j], rows[i]);
            cols[j] = max(grid[i][j], cols[j]);
        }
    }

    var res = 0;
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[i].length; j++) {
            res += min(rows[i], cols[j]) - grid[i][j];
        }
    }

    return res;
  }
}
```