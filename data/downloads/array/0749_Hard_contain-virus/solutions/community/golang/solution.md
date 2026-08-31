# [Golang] DFS easy to understand

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/contain-virus/solutions/3030370/](https://leetcode.com/problems/contain-virus/solutions/3030370/)

---

```go
func containVirus(isInfected [][]int) int {
  m, n := len(isInfected), len(isInfected[0])
  var res int
  for {
    // Let's do a depth first search and find the region that spread the most cells
    // (i.e) needs more walls to be built
    visited := make([][]bool, m)
    for i := 0; i < m; i++ {
      visited[i] = make([]bool, n)
    }
    // We want to focus on the region that can affect the most unaffected neighbors
    // The unaffected neighbors and the walls needed is different because an unaffected neighbor
    // can be infected by multiple neighbors and hence will need multiple walls.
    var wallsNeeded [][4]int // <x, y, uninfectedNeighbors, walls>
    for i := 0; i < m; i++ {
      for j := 0; j < n; j++ {
        if isInfected[i][j] == 1 && !visited[i][j] {
          visited[i][j] = true
          uninfectedNeighbors := make(map[[2]int]bool)
          count := countWalls(isInfected, visited, i, j, uninfectedNeighbors)
          wallsNeeded = append(wallsNeeded, [4]int{i, j, len(uninfectedNeighbors), count})
        }
      }
    }
    if len(wallsNeeded) == 0 {
      break
    }
    // Let's sort wallsNeeded in descending order on the number of walls
    sort.Slice(wallsNeeded, func(i, j int) bool {
      return wallsNeeded[i][2] > wallsNeeded[j][2]
    })
    res += wallsNeeded[0][3]
    buildWall(isInfected, wallsNeeded[0][0], wallsNeeded[0][1])
    spread(isInfected)
  }
  return res
}

var directions = [4][2]int{{0, -1}, {-1, 0}, {1, 0}, {0, 1}}

func countWalls(isInfected [][]int, visited [][]bool, row, col int, uninfectedNeighbors map[[2]int]bool) int {
  m, n := len(isInfected), len(isInfected[0])
  var walls int
  for _, dir := range directions {
    x, y := row + dir[0], col + dir[1]
    if x >= 0 && x < m && y >= 0 && y < n && !visited[x][y] {
      if isInfected[x][y] == 0 {
        uninfectedNeighbors[[2]int{x, y}] = true
        walls++
      } else if isInfected[x][y] == 1 {
        visited[x][y] = true
        walls += countWalls(isInfected, visited, x, y, uninfectedNeighbors)
      }
    }
  }
  return walls
}

// buildWall builds the wall around the given region (specified by a single cell)
// It uses DFS and marks the cells with -1 which means the region is contained
func buildWall(isInfected [][]int, row, col int) {
  m, n := len(isInfected), len(isInfected[0])
  isInfected[row][col] = -1
  for _, dir := range directions {
    x, y := row+dir[0], col+dir[1]
    if x >= 0 && x < m && y >= 0 && y < n && isInfected[x][y] == 1 {
      buildWall(isInfected, x, y)
    }
  }
}

// spread spreads the virus from the infected positions to their neighbor cells
func spread(isInfected [][]int) {
  m, n := len(isInfected), len(isInfected[0])
  for i := 0; i < m; i++ {
    for j := 0; j < n; j++ {
      if isInfected[i][j] == 1 {
        for _, dir := range directions {
          x, y := i+dir[0], j+dir[1]
          if x >= 0 && x < m && y >= 0 && y < n && isInfected[x][y] == 0 {
            // newly infected cells with special character since we don't want the neighbor
            // of this cell to be infected
            isInfected[x][y] = 2 
          }
        }
      }
    }
  }
  // Remove the special marking
  for i := 0; i < m; i++ {
    for j := 0; j < n; j++ {
      if isInfected[i][j] == 2 {
        isInfected[i][j] = 1
      }
    }
  }
}
```