# Rotate image in Dart

**Author:** sarvar_azodov
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-image/solutions/3275874/](https://leetcode.com/problems/rotate-image/solutions/3275874/)

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
    void rotate(List<List<int>> matrix) {
        for(int i = 0; i < matrix.length / 2; i++){
            for(int j = i; j < matrix.length - i - 1; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[matrix.length - 1- j][i];
                matrix[matrix.length - 1- j][i] = matrix[matrix.length - 1- i][matrix.length - 1- j];
                matrix[matrix.length - 1- i][matrix.length - 1- j] = matrix[j][matrix.length - 1- i];
                matrix[j][matrix.length - 1- i] = temp;
            }
        }
    }
}
```