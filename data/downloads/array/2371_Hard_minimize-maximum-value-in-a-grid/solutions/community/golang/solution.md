# [Golang] Priority Queue

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/3039512/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/3039512/)

---

```go
type PriorityQueue [][3]int

func (pq PriorityQueue) Len() int           { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i][0] < pq[j][0] }
func (pq PriorityQueue) Swap(i, j int)      { pq[i], pq[j] = pq[j], pq[i] }

func (pq *PriorityQueue) Push(x interface{}) {
  *pq = append(*pq, x.([3]int))
}

func (pq *PriorityQueue) Pop() interface{} {
  old := *pq
  n := len(old)
  item := old[n-1]
  *pq = old[:n-1]
  return item
}

func (pq PriorityQueue) Top() interface{} {
  return pq[0]
}

func minScore(grid [][]int) [][]int {
  var pq PriorityQueue
  // Let's first store all indices in the priority queue based on the order of the elements.
  // We'll process them from smallest to largest and set it to the value of
  // max(max row, max coll) + 1. This is guaranteed to be the right value because we're processing
  // them in smallest to largest and resulting matrix doesn't need to have distinct numbers.
  m, n := len(grid), len(grid[0])
  for i := 0; i < m; i++ {
    for j := 0; j < n; j++ {
      heap.Push(&pq, [3]int{grid[i][j], i, j})
    }
  }
  rowMax := make([]int, m)
  colMax := make([]int, n)
  for pq.Len() > 0 {
    top := heap.Pop(&pq).([3]int)
    i, j := top[1], top[2]
    grid[i][j] = max(rowMax[i], colMax[j]) + 1
    rowMax[i] = max(rowMax[i], grid[i][j])
    colMax[j] = max(colMax[j], grid[i][j])
  }
  return grid
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}
```