# [Golang] Two rounds of DFS

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3731107/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3731107/)

---

# Code
```
func isPossibleToCutPath(grid [][]int) bool {
  m, n := len(grid),len(grid[0]) 
  visited := make([][]bool, m)
  for i := 0; i < len(visited); i++ {
    visited[i] = make([]bool, n)
  }
  if !dfs(grid, visited, 0, 0) {
    return true // can't visit; no need to flip a bit
  }
  // unset the last cell
  visited[m-1][n-1] = false
  return !dfs(grid, visited, 0, 0) // try another round by just using unvisited path
  
}

func dfs(grid [][]int, visited [][]bool, row, col int) bool {
  m, n := len(grid), len(grid[0])
  if row == m-1 && col == n-1 {
    return true
  }
  if row+1 < m && grid[row+1][col] == 1 && !visited[row+1][col] {
    visited[row+1][col] = true
    if dfs(grid, visited, row+1, col) {
      return true
    }
  }
  if col+1 < n && grid[row][col+1] == 1 && !visited[row][col+1] {
    visited[row][col+1] = true
    if dfs(grid, visited, row, col+1) {
      return true
    }
  }
  return false
}
```