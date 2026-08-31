# Golang | Union Find

**Author:** kiruxan
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2464837/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2464837/)

---

```
func maximumSegmentSum(nums []int, removeQueries []int) []int64 {
	N := len(nums)

    // array for Union Find DS
	data := make([]int, N)
	for i := 0; i < N; i++ {
		data[i] = -1
	}
    // array for result
	res := make([]int64, N)
	// array for segments sizes
    segs := make([]int, N)

    // current size of biggest segment
	maxSeg := 0

    // starting from end
	for i := N - 1; i >= 0; i-- {
		query := removeQueries[i]
        // initial segment size
		segs[query] = nums[query]
        
		data[query] = query
        
        // check if we can join our segment from left side
		if query > 0 {
			l := data[query-1]
			if l >= 0 {
				leftSeg := find(data, query-1)
				data[leftSeg] = query // union
				segs[query] += segs[leftSeg] // increase segment
			}
		}
        
        // check if we can join our segment from right side
		if query < N-1 {
			r := data[query+1]
			if r >= 0 {
				rightSeg := find(data, query+1)
				data[rightSeg] = query // union
				segs[query] += segs[rightSeg] // increase segment
			}
		}
        
		res[i] = int64(maxSeg)
        
        // increase max segment if possible
		maxSeg = max(maxSeg, segs[query])
	}

	return res
}

func find(data []int, pos int) int {
	for data[pos] != pos {
		pos = data[pos]
	}
	return pos
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```