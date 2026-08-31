# Go || Two heap

**Author:** ligt
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075674/](https://leetcode.com/problems/zero-array-transformation-iii/solutions/6075674/)

---


This problem similar to last week 
Checkout my other, use heap as well
https://leetcode.com/problems/zero-array-transformation-ii/solutions/6053396/go-min-heap/

# Code
```golang []
func maxRemoval(nums []int, queries [][]int) int {
	slices.SortFunc(queries, func(a, b []int) int {
		if a[0] == b[0] {
			return b[1] - a[1] 
		}
		return a[0] - b[0] 
	})

	used := priorityqueue.New[int]() 
	q := priorityqueue.NewWith(func(x, y int) int { return y - x }) 

	queryIndex := 0
	usedCount := 0

	for i := range nums {
		for !used.Empty() {
			top, _ := used.Peek()
			if i <= top {
				break
			}
			used.Dequeue()
		}

		for queryIndex < len(queries) {
			start, end := queries[queryIndex][0], queries[queryIndex][1]
			if end < i {
				queryIndex++
				continue
			}
			if start > i {
				break
			}
			q.Enqueue(end)
			queryIndex++
		}

		for used.Size() < nums[i] {
			top, ok := q.Peek()
			if !ok || top < i {
				return -1
			}
			used.Enqueue(top)
			q.Dequeue()
			usedCount++
		}
	}

	return len(queries) - usedCount
}

```