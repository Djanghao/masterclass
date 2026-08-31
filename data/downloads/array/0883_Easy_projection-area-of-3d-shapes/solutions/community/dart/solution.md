# the fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3844645/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3844645/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n^2)
- Space complexity:
O(n)
# Code
```
class Solution {
  int projectionArea(List<List<int>> grid) {
  int area = 0;
  int n = grid.length;
  
  List<int> rowMax = List.filled(n, 0); // Maximum values for each row
  List<int> colMax = List.filled(n, 0); // Maximum values for each column

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      int value = grid[i][j]; // Current value in the grid

      if (value > 0) {
        area++; // zx-plane projection
      }

      rowMax[i] = value > rowMax[i] ? value : rowMax[i]; // Update rowMax
      colMax[j] = value > colMax[j] ? value : colMax[j]; // Update colMax
    }
  }

  area += rowMax.reduce((a, b) => a + b); // Sum of maximum values in rows
  area += colMax.reduce((a, b) => a + b); // Sum of maximum values in columns
  
  return area;
}

}
```