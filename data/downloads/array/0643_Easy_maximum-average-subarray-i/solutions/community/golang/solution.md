# Golang sliding window solution. Faster than 98.25% and easy to follow

**Author:** the-robot
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/970714/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/970714/)

---

You do not need to store the average in `max` instead store only the sum total. Because the divisor `k` is always the same as long as the sum is larger, the average will be larger.

```go
package main

func findMaxAverage(nums []int, k int) float64 {
	sum := 0
	// sum up to first k
	for i := 0; i < k; i++ {
		sum += nums[i]
	}

	max := sum
	pointer := k

	for pointer < len(nums) {
		sum = sum - nums[pointer-k] + nums[pointer]
		if sum > max {
			max = sum
		}
		pointer++
	}

	return float64(max) / float64(k)
}
```