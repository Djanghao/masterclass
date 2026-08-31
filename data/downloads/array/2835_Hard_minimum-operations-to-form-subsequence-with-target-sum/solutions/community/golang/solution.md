# 👍Runtime 5 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/5020612/](https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/5020612/)

---

# Code
```
type PriorityQueue []int

func (pq PriorityQueue) Len() int            { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool  { return pq[i] > pq[j] }
func (pq PriorityQueue) Swap(i, j int)       { pq[i], pq[j] = pq[j], pq[i] }
func (pq *PriorityQueue) Push(x interface{}) { *pq = append(*pq, x.(int)) }
func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	x := old[n-1]
	*pq = old[0 : n-1]
	return x
}

func minOperations(nums []int, target int) int {
	pq := make(PriorityQueue, len(nums))
	copy(pq, nums)
	heap.Init(&pq)

	var sum int64
	var count int64
	for _, x := range nums {
		sum += int64(x)
	}

	if sum < int64(target) {
		return -1
	}

	for len(pq) > 0 {
		val := heap.Pop(&pq).(int)
		sum -= int64(val)

		if val <= target {
			target -= val
		} else if val > target && sum < int64(target) {
			count++
			heap.Push(&pq, val/2)
			heap.Push(&pq, val/2)
			sum += int64(val)
		}
	}

	return int(count)
}
```