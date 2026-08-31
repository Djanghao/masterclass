# [Dart] Query Brute Force

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3300667/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3300667/)

---

# Code
```
class Solution {
  List<List<int>> rangeAddQueries(int n, List<List<int>> queries) {
    List<List<int>> mat = List.generate(
      n,
      (index) => List.filled(n, 0),
    );
    for (var q in queries) {
      int r1 = q[0], c1 = q[1], r2 = q[2], c2 = q[3];
      for (var i = r1; i <= r2; i++) {
        for (var j = c1; j <= c2; j++) {
          mat[i][j] = mat[i][j] + 1;
        }
      }
    }

    return mat;
  }
}
```