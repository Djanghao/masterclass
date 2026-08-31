# East dart solution

**Author:** Seif123
**Votes:** 0
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/5548427/](https://leetcode.com/problems/spiral-matrix/solutions/5548427/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
# Approach
<!-- Describe your approach to solving the problem. -->
Making left, right, top and bottom boundaries
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> spiralOrder(List<List<int>> matrix) {
    List<int> list = [];
  int matrixLenth = 0;
  for (var l in matrix) {
    matrixLenth += l.length;
  }
  int right = matrix[0].length - 1;
  int left = 0;
  int top = 0;
  int bottom = matrix.length - 1;
  while (list.length < matrixLenth) {
    for (int i = left; i <= right; i++) {
      list.add(matrix[top][i]);
    }
    if (list.length < matrixLenth) {
      for (int i = top + 1; i <= bottom; i++) {
        list.add(matrix[i][right]);
      }
    }
    top++;
    right--;
    if (list.length < matrixLenth) {
      for (int i = right; i >= left; i--) {
        list.add(matrix[bottom][i]);
      }
    }
    if (list.length < matrixLenth) {
      for (int i = bottom - 1; i >= top; i--) {
        list.add(matrix[i][left]);
      }
    }
    left++;
    bottom--;
  }
  return list;
  }
}
```