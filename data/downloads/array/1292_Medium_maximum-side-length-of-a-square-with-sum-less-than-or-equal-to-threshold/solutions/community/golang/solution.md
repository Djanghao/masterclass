# [Golang] Prefix Sum and Binary Search

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/2620360/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/2620360/)

---

```go
func maxSideLength(mat [][]int, threshold int) int {
  // Convert the matrix into prefix sum
  m, n := len(mat), len(mat[0])
  for i := 0; i < m; i++ {
    for j := 0; j < n; j++ {
      if i == 0 { // first row
        if j == 0 { // first cell, nothing to do
          continue
        }
        mat[i][j] += mat[i][j-1]
      } else if j == 0 { // First column for all other rows
        mat[i][j] += mat[i-1][j]
      } else {
        mat[i][j] += mat[i-1][j] + mat[i][j-1] - mat[i-1][j-1]
      }
    }
  }
  var res int
  left, right := 1, min(m, n)
  for left <= right {
    mid := left + (right - left)/2
    if possible(mat, threshold, mid) {
      res = max(res, mid)
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return res
}

func possible(mat [][]int, threshold int, side int) bool {
  for i := side-1; i < len(mat); i++ {
    for j := side-1; j < len(mat[i]); j++ {
      // Simply go through the matrix and get blocks of sums with a side length of
      // side. If at any point, we can get a sum within the threshold, we're done and return true.
      sum := mat[i][j]
      if i-side >= 0 { // Subtract the left portion
        sum -= mat[i-side][j]
      }
      if j-side >= 0 { // subtract the top portion
        sum -= mat[i][j-side]
      }
      if i-side >= 0 && j-side >= 0 {
        // If we had both left and top portion removed, we removed the
        // top-left portion twice, let's add it back
        sum += mat[i-side][j-side]
      }
      if sum <= threshold {
        return true
      }
    }
  }
  return false
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
```