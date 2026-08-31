# Easy Dart Solution | Beats 100%

**Author:** uzbek-coder-2022
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/4522778/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/4522778/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

N = max(n, m);

# Complexity
- Time complexity: O($N^2$log(N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// 1329. Sort the Matrix Diagonally

class Solution {
  List<List<int>> diagonalSort(List<List<int>> mat) {
    var m = mat.length;
    var n = mat[0].length;
    for (var i = 0; i < n; i++) {
      var arr = [];
      var x = i, y = 0;
      while (x < n && y < m) {
        arr.add(mat[y][x]);
        x++;
        y++;
      }
      print(arr);
      arr.sort();
      x = i;
      y = 0;
      while (x < n && y < m) {
        mat[y][x] = arr[y];
        x++;
        y++;
      }
    }
    for (var i = 1; i < m; i++) {
      var arr = [];
      var x = i, y = 0;
      while (x < m && y < n) {
        arr.add(mat[x][y]);
        x++;
        y++;
      }
      arr.sort();
      x = i;
      y = 0;
      while (x < m && y < n) {
        mat[x][y] = arr[y];
        x++;
        y++;
      }
    }

    return mat;
  }
}

```


![image.png](./images/0.png)
