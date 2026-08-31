# Golang solution using Priority Queue

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/2231658/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/2231658/)

---

```go
type PriorityQueue [][2]int

func (pq PriorityQueue) Len() int           { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i][0] > pq[j][0] }
func (pq PriorityQueue) Swap(i, j int)      { pq[i], pq[j] = pq[j], pq[i] }

func (pq *PriorityQueue) Push(x interface{}) {
  *pq = append(*pq, x.([2]int))
}

func (pq *PriorityQueue) Pop() interface{} {
  old := *pq
  n := len(old)
  item := old[n-1]
  *pq = old[:n-1]
  return item
}

func repeatLimitedString(s string, repeatLimit int) string {
  var chars [26]int
  for _, ch := range s {
    chars[ch-'a']++
  }
  // Let's push all characters to the priority queue along with the count
  // We'll sort them based on the character's code.
  var pq PriorityQueue
  heap.Init(&pq)
  for i := 0; i < 26; i++ {
    if chars[i] > 0 {
      heap.Push(&pq, [2]int{i, chars[i]})
    }
  }
  res := make([]byte, 0, len(s))
  for pq.Len() > 0 {
    largest := heap.Pop(&pq).([2]int)
    for i := 0; i < repeatLimit && largest[1] > 0; i++ {
      res = append(res, byte(largest[0]+'a'))
      largest[1]--
    }
    if largest[1] > 0 {
      // We still have some characters remaining; let's write a next largest
      // character once; then we'll continue with this character again in the
      // next iteration
      if pq.Len() > 0 { // If there are more characters to write
        secondLargest := heap.Pop(&pq).([2]int)
        res = append(res, byte(secondLargest[0]+'a'))
        secondLargest[1]--
        if secondLargest[1] > 0 {
          heap.Push(&pq, secondLargest)
        }
        heap.Push(&pq, largest)
      }
    }
  }
  return string(res)
}
```