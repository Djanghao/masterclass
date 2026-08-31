# the fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/3844692/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/3844692/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(rows * cols * log(rows * cols))
- Space complexity:
O(rows * cols)
# Code
```
class Solution {
  List<List<int>> allCellsDistOrder(
    int rows, int cols, int rCenter, int cCenter) {
  List<List<int>> a = [];
  int k = 0;
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      a.add([i, j]);
      k += 1;
    }
  }
  a.sort((a, b) {
    int d1 = (a[0] - rCenter).abs() + (a[1] - cCenter).abs();
    int d2 = (b[0] - rCenter).abs() + (b[1] - cCenter).abs();
    if (d1 > d2) {
      return 1;
    } else if (d1 < d2) {
      return -1;
    } else {
      return 0;
    }
  });
  return a;
}
}
```