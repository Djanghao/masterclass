# Brute force solution

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5492489/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5492489/)

---

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> largestLocal(List<List<int>> grid) {
    var n = grid.length;
    var maxLocal = List.generate(n - 2, (i) => List.filled(n - 2, 0));

    for (var i = 1; i < n - 1; i++) {
      for (var j = 1; j < n - 1; j++) {
        var max = 0;
        for (var x = i - 1; x <= i + 1; x++) {
          for (var y = j - 1; y <= j + 1; y++) {
            max = max > grid[x][y] ? max : grid[x][y];
          }
        }
        maxLocal[i - 1][j - 1] = max;
      }
    }

    return maxLocal;
  }
}
```