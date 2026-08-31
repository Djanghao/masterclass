# Dart solution

**Author:** aamirki
**Votes:** 0
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/6101714/](https://leetcode.com/problems/toeplitz-matrix/solutions/6101714/)

---

# Intuition
A matrix is Toeplitz if each element's top left neighbor matches
its value, if it exists.

# Approach
Starting with the second row, compare each (row, col) with the element
to the top left of it to ensure they match.

Early return if the matrix has one or fewer rows.

# Complexity
- Time complexity:
$$O(n * m)$$

- Space complexity:
$$O(1)$$ (just the temporary variables)

# Code
```dart []
class Solution {
  bool isToeplitzMatrix(List<List<int>> matrix) {
    if (matrix.length <= 1) {
        return true;
    }
    for (var row = 1; row < matrix.length; row++) {
        for (var column = 0; column < matrix[row].length; column++) {
            final topLeftRow = row - 1;
            final topLeftColumn = column - 1;
            if (topLeftColumn >= 0) {
                final topLeft = matrix[topLeftRow][topLeftColumn];
                if (topLeft != matrix[row][column]) {
                    return false;
                }
            }
        }
    }
    return true;
  }
}
```