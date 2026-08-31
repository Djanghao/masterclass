# [Golang] Simple BFS solution easy to understand

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/2556891/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/2556891/)

---

```go
// directions holds the direction movement and the index matches the numbering used in the grid
var directions = [5][2]int{{}, {0, 1}, {0, -1}, {1, 0}, {-1, 0}}
func minCost(grid [][]int) int {
  m, n := len(grid), len(grid[0])
  // cost holds the minimum cost to reach the cell
  cost := make([][]int, m)
  for i := 0; i < len(cost); i++ {
    cost[i] = make([]int, n)
    for j := 0; j < len(cost[i]); j++ {
      cost[i][j] = math.MaxInt32
    }
  }
  queue := list.New()
  // starting with (0, 0)
  queue.PushBack([2]int{0, 0})
  cost[0][0] = 0
  for queue.Len() > 0 {
    elem := queue.Front()
    queue.Remove(elem)
    row, col := elem.Value.([2]int)[0], elem.Value.([2]int)[1]
    for i := 1; i <= 4; i++ {
      dir := directions[i]
      x, y := row + dir[0], col + dir[1]
      newCost := cost[row][col] // cost to go to the new cell
      if grid[row][col] != i { // needs changing because the cell is not pointing in this direction
        newCost++
      }
	  // only explore the path if the target cell is valid and we can reach the cell with lower cost
      if x >= 0 && x < m && y >= 0 && y < n && newCost < cost[x][y] {
        cost[x][y] = newCost
        queue.PushBack([2]int{x, y})
      }
    }
  }
  return cost[m-1][n-1]
}
```