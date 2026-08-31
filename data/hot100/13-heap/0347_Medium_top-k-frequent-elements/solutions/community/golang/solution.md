# [Go] 8ms, using PriorityQueue

**Author:** nakabonne
**Votes:** 9
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/519149/](https://leetcode.com/problems/top-k-frequent-elements/solutions/519149/)

---

We can build a priority queue with the [heap](https://golang.org/pkg/container/heap/) package:
```
func topKFrequent(nums []int, k int) []int {
	seen := make(map[int]int)
	for _, n := range nums {
		seen[n]++
	}

	q := &priorityQueue{}
	heap.Init(q)
	for val, cnt := range seen {
		heap.Push(q, element{value: val, count: cnt})
		if q.Len() > k {
			heap.Pop(q)
		}
	}

	ans := make([]int, k, k)
	for i := 1; i <= k; i++ {
		v := heap.Pop(q)
		if s, ok := v.(element); ok {
			ans[k-i] = s.value
		}
	}
	return ans
}

type element struct {
	value int
	count int
}

type priorityQueue []element

func (q priorityQueue) Len() int           { return len(q) }
func (q priorityQueue) Less(i, j int) bool { return q[i].count < q[j].count }
func (q priorityQueue) Swap(i, j int)      { q[i], q[j] = q[j], q[i] }

func (q *priorityQueue) Push(x interface{}) {
	*q = append(*q, x.(element))
}

func (q *priorityQueue) Pop() interface{} {
	old := *q
	n := len(old)
	x := old[n-1]
	*q = old[0 : n-1]
	return x
}

```