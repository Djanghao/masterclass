# Solution Find Kth Largest XOR Coordinate Value

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/5565686/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/5565686/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int kthLargestValue(List<List<int>> matrix, int k) {
    int rows = matrix.length;
    int cols = matrix[0].length;
    List<int> temp = [];

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (i > 0) matrix[i][j] ^= matrix[i - 1][j];
        if (j > 0) matrix[i][j] ^= matrix[i][j - 1];
        if (i > 0 && j > 0) matrix[i][j] ^= matrix[i - 1][j - 1];
        temp.add(matrix[i][j]);
      }
    }

    temp.sort((a, b) => b.compareTo(a)); // Sort in descending order
    return temp[k - 1];
  }
}

```