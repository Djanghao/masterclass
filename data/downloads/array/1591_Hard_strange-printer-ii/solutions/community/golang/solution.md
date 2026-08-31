# [Golang] Topological Sorting | Easy Understanding

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/3085815/](https://leetcode.com/problems/strange-printer-ii/solutions/3085815/)

---

```go
func isPrintable(targetGrid [][]int) bool {
  // Let's find the top-left and bottom-right coordinates for each color
  colors := make(map[int][]int)
  m, n := len(targetGrid), len(targetGrid[0])
  for i := 0; i < m; i++ {
    for j := 0; j < n; j++ {
      c := targetGrid[i][j]
      if _, ok := colors[c]; !ok {
        colors[c] = []int{math.MaxInt32, math.MaxInt32, math.MinInt32, math.MinInt32}
      }
      colors[c][0] = min(colors[c][0], i)
      colors[c][1] = min(colors[c][1], j)
      colors[c][2] = max(colors[c][2], i)
      colors[c][3] = max(colors[c][3], j)
    }
  }
  // Now we're going to build a graph on colors based on overlaps.
  overlaps := make(map[int]map[int]struct{})
  indegrees := make(map[int]int)
  for c, coords := range colors {
    overlaps[c] = make(map[int]struct{})
    for i := coords[0]; i <= coords[2]; i++ {
      for j := coords[1]; j <= coords[3]; j++ {
        c2 := targetGrid[i][j]
        if c != c2 {
          if _, ok := overlaps[c][c2]; !ok {
            indegrees[c2]++
            overlaps[c][c2] = struct{}{}
          }
        }
      }
    }
  }
  // We'll do a topological sorting based on the overlaps. We start by processing
  // all nodes that aren't overlapping with anything else. 
  var queue []int
  var handled int
  for c := range colors {
    if indegrees[c] == 0 {
      queue = append(queue, c)
    }
  }
  for len(queue) > 0 {
    var newQueue []int
    for _, c := range queue {
      handled++
      for c2 := range overlaps[c] {
        indegrees[c2]--
        if indegrees[c2] == 0 {
          newQueue = append(newQueue, c2)
        }
      }
    }
    queue = newQueue
  }
  // Return whether we can paint all colors
  return handled == len(colors)
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}
```