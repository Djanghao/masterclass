# [Golang] 4D Top Down DP + bitmasking

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/3594760/](https://leetcode.com/problems/maximize-grid-happiness/solutions/3594760/)

---

# Intuition

We process one row at a time and memoize a single row as a whole to save on space (can be done for each cell as well but that'll be 5D DP).

We use a bitmask to keep track of the people in the grid for the current row (can be used for person on the left) and previous row (can be used for person on the top).

The tricky part is to calculate the happiness of the person. If we place an introvert/extrovert on a cell, we need to also adjust the happiness caused by the cell above and to the left.

# Code
```
func getMaxGridHappiness(m int, n int, introvertsCount int, extrovertsCount int) int {
  memo := make([][][7][7]int, m)
  for i := 0; i < len(memo); i++ {
    memo[i] = make([][7][7]int, 1 << (n*2))
  }
  return dp(m, n, 0, 0, 0, 0, introvertsCount, extrovertsCount, memo)  
}

func dp(m, n int, i, j int, curr, prev int, intro, extro int, memo [][][7][7]int) int {
  if i == m {
    // We've reached the end of the grid
    return 0
  }
  if j == n {
    // We've reached the end of the current row, go to the next row
    return dp(m, n, i+1, 0, 0, curr, intro, extro, memo)
  }
  if j == 0 && memo[i][prev][intro][extro] != 0 {
    return memo[i][prev][intro][extro]
  }
  // We have three options; We can skip this cell, put an introvert (if we have one)
  // or an extrovert (if we have one)
  res := dp(m, n, i, j+1, curr, prev, intro, extro, memo)
  var up, left int
  if j > 0 {
    // left comes from curr
    left = (curr >> ((j-1)*2)) & 3
  }
  // intro = 1
  // extro = 2
  up = (prev >> (j*2)) & 3
  if intro > 0 {
    curr := 120 + dp(m, n, i, j+1, curr | (1 << (j*2)), prev, intro-1, extro, memo)
    if up == 1 {
      curr -= 30 // up introvert loses happiness
      curr -= 30 // curr introvert loses happiness
    } else if up == 2 {
      curr += 20 // up extrovert gains happiness
      curr -= 30 // curr introvert loses happiness
    }
    if left == 1 {
      curr -= 30 // left introvert loses happiness
      curr -= 30 // curr introvert loses happiness
    } else if left == 2 {
      curr += 20 // left extrovert gains happiness
      curr -= 30 // curr introvert loses happiness
    }
    res = max(res, curr)
  }
  if extro > 0 {
    curr := 40 + dp(m, n, i, j+1, curr | (2 << (j*2)), prev, intro, extro-1, memo)
    if up == 1 {
      curr -= 30 // up introvert loses happiness
      curr += 20 // curr extrovert gains happiness
    } else if up == 2 {
      curr += 20 // up extrovert gains happiness
      curr += 20 // curr extrovert gains happiness
    }
    if left == 1 {
      curr -= 30 // left introvert loses happiness
      curr += 20 // curr extrovert gains happiness
    } else if left == 2 {
      curr += 20 // left extrovert gains happiness
      curr += 20 // curr extrovert gains happiness
    }
    res = max(res, curr)
  }
  if j == 0 {
    memo[i][prev][intro][extro] = res
  }
  return res
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}
```