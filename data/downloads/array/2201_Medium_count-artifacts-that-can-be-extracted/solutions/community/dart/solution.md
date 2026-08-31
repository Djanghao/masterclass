# [Dart] Clean Code && Explained

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/3280534/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/3280534/)

---

# Intuition
Make a grid, make true to all digged positions. If a artifact can have true for all in his range, that is mean all are uncovered. So res++. That's it.

# Complexity
- Time complexity:
O(N^2)

- Space complexity:
O(N^2)

# Code
```
class Solution {
  int digArtifacts(int n, List<List<int>> artifacts, List<List<int>> dig) {
    List<List<bool>> grid = List.generate(
      n,
      (index) => List.filled(n, false),
    );

    for (var i = 0; i < dig.length; i++) {
      grid[dig[i][0]][dig[i][1]] = true;
    }

    int res = 0;

    for (var art in artifacts) {
      var r1 = art[0], c1 = art[1], r2 = art[2], c2 = art[3];
      bool flag = true;
      for (var i = r1; i <= r2 && flag; i++) {
        for (var j = c1; j <= c2; j++) {
          if (!grid[i][j]) {
            flag = false;
            break;
          }
        }
      }
      if (flag) res++;
    }

    return res;
  }
}
```