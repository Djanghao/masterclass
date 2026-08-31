# Go clear solution, 324ms beats 100% speed

**Author:** khangtn1
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/2303790/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/2303790/)

---

```

type IntHeap [][2]int

func (h IntHeap) Len() int {
	return len(h)
}

func (h IntHeap) Less(i, j int) bool {
	return h[i][0] < h[j][0]
}

func (h IntHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.([2]int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func minInterval(intervals [][]int, queries []int) []int {
	//sorted array by start
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	//sorted queries
	//store unsorted queries to return results
	sorted_queries := make([]int, len(queries))
	copy(sorted_queries, queries)
	sort.Ints(sorted_queries)

	// mapping result to unsorted_queries
	mapQueries := map[int]int{}

	// O(n)
	h := IntHeap{}
	heap.Init(&h)

	i := 0
	for j := 0; j < len(sorted_queries); j++ {
		for j+1 < len(sorted_queries) && sorted_queries[j] == sorted_queries[j+1] {
			j++
		}
		qj := sorted_queries[j]

		for i < len(intervals) && (intervals[i][0] <= qj) {
			end := intervals[i][1]
			size := end - intervals[i][0] + 1
			// O(logn)
			heap.Push(&h, [2]int{size, end})
			i++
		}

		// pop intervals is oubounded
		// O(logn)
		for h.Len() > 0 && qj > h[0][1] {
			heap.Pop(&h)
		}

		if len(h) > 0 {
			mapQueries[qj] = h[0][0]
		} else {
			mapQueries[qj] = -1
		}

	}

	res := []int{}
	for _, q := range queries {
		res = append(res, mapQueries[q])
	}
	return res
}

```