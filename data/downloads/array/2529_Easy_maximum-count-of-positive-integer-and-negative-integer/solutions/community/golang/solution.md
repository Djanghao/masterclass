# Single Pass Counting in Sorted Arrays (Go)

**Author:** maxchagin
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/6116571/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/6116571/)

---

# Approach
The approach starts with initializing counters for negative and zero numbers. We iterate through the array, incrementing these counters as we encounter a negative or zero. Once we hit a positive number, given the sorting of the array, we can break out since all subsequent numbers will be positive. Finally, we determine the number of positive integers as total numbers minus zeros and negatives, and return the maximum count between negatives and positives.

# Code
```golang []
func maximumCount(nums []int) int {

	neg, zero := 0, 0

	for i := range nums {
		if nums[i] < 0 {
			neg++
		} else if nums[i] == 0 {
			zero++
		} else if nums[i] > 0 {
			break
		}
	}

	if neg > len(nums)-zero-neg {
		return neg
	}

	return len(nums) - zero - neg
}

```