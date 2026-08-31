# Golang prefix sum solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2003705/](https://leetcode.com/problems/minimum-average-difference/solutions/2003705/)

---

```go
func minimumAverageDifference(nums []int) int {
	summation := make([]int, len(nums))
	summation[0] = nums[0]
	for i := 1; i < len(summation); i++ {
		summation[i] = summation[i-1] + nums[i]
	}
	index := len(nums) - 1
	minDiff := abs(summation[len(nums)-1] / len(nums))
	for i := 0; i < len(summation)-1; i++ {
		curDiff := abs(summation[i]/(i+1) - (summation[len(nums)-1]-summation[i])/(len(nums)-i-1))
		// index might be len(nums) - 1, so we must check index with i while curDiff equal to minDiff
		if curDiff < minDiff || (curDiff == minDiff && i < index) {
			minDiff, index = curDiff, i
		}
	}
	return index
}

func abs(v int) int {
	if v > 0 {
		return v
	}
	return v * -1
}
```