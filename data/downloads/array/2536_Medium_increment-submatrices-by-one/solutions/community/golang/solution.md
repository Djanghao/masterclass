# [Golang] Prefix Sum / Line Sweep

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3731147/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3731147/)

---

# Code
```
func rangeAddQueries(n int, queries [][]int) [][]int {
  mat := make([][]int, n)
  for i := 0; i < len(mat); i++ {
    mat[i] = make([]int, n)
  }
  // Let's mark the start and one after the end and then do a prefix sum at the
  // end. This is very much like line sweep.
  for _, query := range queries {
    rowStart, colStart := query[0], query[1]
    rowEnd, colEnd := query[2], query[3]
    for i := rowStart; i <= rowEnd; i++ {
      mat[i][colStart]++
      if colEnd+1 < n {
        mat[i][colEnd+1]--
      }
    }
  }
  for i := 0; i < n; i++ {
    for j := 1; j < n; j++ {
      mat[i][j] = mat[i][j-1] + mat[i][j]
    }
  }
  return mat
}
```