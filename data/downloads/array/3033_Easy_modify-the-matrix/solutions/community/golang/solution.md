# CLEAR O(m*n) SOLUTION!

**Author:** alikaaa
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/5680936/](https://leetcode.com/problems/modify-the-matrix/solutions/5680936/)

---

# Code
```golang []
func modifiedMatrix(matrix [][]int) [][]int {
    var col, n, m = make([]int, len(matrix[0])), len(matrix)-1, len(matrix[0]) - 1

    for i := 0; i <= n; i++ {
        for j := 0; j <= m; j++ {
            if col[j] < matrix[i][j] {
                col[j] = matrix[i][j]
            }
        }
    }

    for i := 0; i <= n; i++ {
        for j := 0; j <= m; j++ {
            if matrix[i][j] == -1 {
                matrix[i][j] = col[j]
            }
        }
    }

    return matrix
}
```