# Transpose of a Matrix in Dart.

**Author:** naumanmirr
**Votes:** 0
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/5461102/](https://leetcode.com/problems/transpose-matrix/solutions/5461102/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The approach here is two convert matrxi to columns * rows. Create a new 2d array with columns and rows size.

# Complexity
- Time complexity:
0(rows * columns)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> transpose(List<List<int>> matrix) {
    final twoDList = List<List<int>>.generate(
        matrix[0].length,
        (i) => List<int>.generate(matrix.length, (index) {
              return -1;
            }, growable: false),
        growable: false);
    int rows = matrix.length;
    int columns = matrix[0].length;
    for (int i = 0; i < columns; i++) {
      for (int j = 0; j < rows; j++) {
        twoDList[i][j] = matrix[j][i];
      }
    }
    return twoDList;
  }
}
```