# Go Simple Sol

**Author:** parryd
**Votes:** 2
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/2761918/](https://leetcode.com/problems/toeplitz-matrix/solutions/2761918/)

---

```
func isToeplitzMatrix(matrix [][]int) bool {
    for i:=1; i<len(matrix);i++ {
        for j:=1; j < len(matrix[i]); j++ {
            if matrix[i][j] != matrix[i-1][j-1] {
                return false
            }
        }
    }
    return true
}
```