# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4057677/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/4057677/)

---

# Code
```
class Solution {
  List<int> kWeakestRows(List<List<int>> mat, int k) {
    List<List<int>> converted = [];
    for (int i = 0; i < mat.length; i++)
      converted.add([i, mat[i].reduce((sum, e) => sum + e)]);
    converted.sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);
    return converted.sublist(0, k).map((e) => e[0]).toList();
  }
}

```