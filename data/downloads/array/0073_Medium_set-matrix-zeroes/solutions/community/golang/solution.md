# Go clear solution

**Author:** qube
**Votes:** 5
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/2005761/](https://leetcode.com/problems/set-matrix-zeroes/solutions/2005761/)

---

```
func setZeroes(matrix [][]int)  {
    m, n := len(matrix), len(matrix[0])
    zeroColumn, zeroRow := false, false
    for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
            if matrix[r][c] == 0 {
                if c == 0 { zeroColumn = true } else { matrix [0][c] = 0 }
                if r == 0 { zeroRow = true } else { matrix [r][0] = 0 }
            }
        }
    }
    for r := 1; r < m; r++ {
        for c := 1; c < n; c++ {
            if matrix[0][c] == 0 || matrix[r][0] == 0 {
                matrix[r][c] = 0
            }
        }
    }
    if zeroColumn { for r := 0; r < m; r++ { matrix[r][0] = 0 } }
    if zeroRow { for c := 0; c < n; c++ { matrix[0][c] = 0 } }
}
```