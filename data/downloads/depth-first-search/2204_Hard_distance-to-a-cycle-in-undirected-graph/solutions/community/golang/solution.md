# [Golang] DFS and BFS

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/3017243/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/3017243/)

---

```go
func distanceToCycle(n int, edges [][]int) []int {
  al := make([][]int, n)
  for _, edge := range edges {
    al[edge[0]] = append(al[edge[0]], edge[1])
    al[edge[1]] = append(al[edge[1]], edge[0])
  }
  visited := make([]bool, n)  
  cycle := dfs(al, 0, []int{}, visited)
  // Let's do a multi-source BFS starting from each node that belongs to the cycle
  res := make([]int, n)
  visited = make([]bool, n)  
  var queue []int
  for _, node := range cycle {
    queue = append(queue, node)
    visited[node] = true
  }
  var dist int
  for len(queue) > 0 {
    var newQueue []int
    for _, node := range queue {
      res[node] = dist
      for _, nei := range al[node] {
        if !visited[nei] {
          visited[nei] = true
          newQueue = append(newQueue, nei)
        }
      }
    }
    dist++
    queue = newQueue
  }
  return res
}

// DFS performs a DFS on the graph and returns the nodes that make up the cycle
func dfs(al [][]int, curr int, path []int, visited []bool) []int {
  if visited[curr] {
    // Got a node that we've visited before
    i := 0
    for ; i < len(path); i++ {
      if path[i] == curr {
        break
      }
    }
    if len(path[i:]) > 2 { // cycle of length 3 or more
      return path[i:] 
    }
    return nil
  }
  visited[curr] = true
  path = append(path, curr)
  for _, nei := range al[curr] {
    if cycle := dfs(al, nei, path, visited); cycle != nil {
      return cycle
    }
  }
  return nil
}
```