# [Kotlin] Fast Easy Solution

**Author:** sshamillov
**Votes:** 2
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/4451770/](https://leetcode.com/problems/toeplitz-matrix/solutions/4451770/)

---

# Code
```
class Solution {
    fun isToeplitzMatrix(matrix: Array<IntArray>): Boolean {
        for (i in 1 until matrix.size) {
            for (j in 1 until matrix[0].size) {
                if (matrix[i-1][j-1] != matrix[i][j]) return false
            }
        }

        return true
    }
}
```