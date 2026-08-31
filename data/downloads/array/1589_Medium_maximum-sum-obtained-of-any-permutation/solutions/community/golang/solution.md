# Golang sort solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/885834/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/885834/)

---

```go
func maxSumRangeQuery(nums []int, requests [][]int) int {
	sort.Slice(requests, func(i, j int) bool {
		if requests[i][0] == requests[j][0] {
			return requests[i][1] < requests[j][1]
		}
		return requests[i][0] < requests[j][0]
	})
	requests2 := make([][]int, len(requests))
	for i := range requests {
		requests2[i] = make([]int, 2)
		copy(requests2[i], requests[i])
	}
	sort.Slice(requests2, func(i, j int) bool {
		if requests2[i][1] == requests2[j][1] {
			return requests2[i][0] < requests2[j][0]
		}
		return requests2[i][1] < requests2[j][1]
	})
	minValue, maxValue := requests[0][0], requests2[len(requests2)-1][1]
	requests = append(requests, []int{maxValue+1, maxValue+1})
	requests2 = append(requests2, []int{maxValue+1, maxValue+1})
	index1, index2 := 0, 0
	counter := []int{}
	for i := minValue; i <= maxValue; i++ {
		// index1, head > 1
		for requests[index1][0] <= i {
			index1++
		}
		// index2, tail >= i
		for requests2[index2][1] < i {
			index2++
		}
		counter = append(counter, index1 - index2)
	}
	sort.Ints(counter)
	sort.Ints(nums)
	reverse(counter)
	reverse(nums)
	maxSummaryMod := 0
	for i := 0; i < len(counter) && i < len(nums); i++ {
		maxSummaryMod += counter[i] * nums[i]
		maxSummaryMod %= 1000000007
	}
	return maxSummaryMod
}

func reverse(A []int) {
	for i := 0; i < len(A)/2; i++ {
		A[i], A[len(A)-1-i] = A[len(A)-1-i], A[i]
	}
}
```