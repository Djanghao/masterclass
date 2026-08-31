# Sliding window && Bin search

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/4356600/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/4356600/)

---

# Code
```
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func kthSmallestSubarraySum(nums []int, k int) int {
	minSum, maxSum := math.MaxInt, 0
	for _, num := range nums {
		minSum = min(minSum, num)
		maxSum += num
	}

	l, r := minSum, maxSum
	for l < r {
		mid := l + (r-l)/2
		if lessOrEqual(nums, mid) < k {
			l = mid + 1
		} else {
			r = mid
		}
	}
	return l
}

func lessOrEqual(nums []int, target int) int {
	l, r := 0, 0
	currentSum := 0
	out := 0
	for r < len(nums) {
		currentSum += nums[r]
		for currentSum > target {
			currentSum -= nums[l]
			l++
		}
		out += r - l + 1
		r++
	}
	return out
}

```