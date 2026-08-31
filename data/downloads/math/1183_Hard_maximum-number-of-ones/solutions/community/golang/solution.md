# [Golang] Priority Queue

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/3249795/](https://leetcode.com/problems/maximum-number-of-ones/solutions/3249795/)

---

```go
type PriorityQueue []int

func (pq PriorityQueue) Len() int           { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i] < pq[j] }
func (pq PriorityQueue) Swap(i, j int)      { pq[i], pq[j] = pq[j], pq[i] }

func (pq *PriorityQueue) Push(x interface{}) {
  *pq = append(*pq, x.(int))
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

func maximumNumberOfOnes(width int, height int, sideLength int, maxOnes int) int {
  // We're going through the first square inside the matrix and for each cell
  // we compute how many cell that cell appears in other sub matrices throughout
  // the original matrix.
  // We use a minHeap to maintain the highest frequency maxOnes cells.
  var pq PriorityQueue
  for i := 0; i < sideLength; i++ {
    for j := 0; j < sideLength; j++ {
      rows := (width + sideLength - 1 - i)/sideLength
      cols := (height + sideLength - 1 - j)/sideLength
      heap.Push(&pq, rows * cols)
      if pq.Len() > maxOnes {
        heap.Pop(&pq)
      }
    }
  }
  var res int
  for pq.Len() > 0 {
    res += heap.Pop(&pq).(int)
  }
  return res
}
```