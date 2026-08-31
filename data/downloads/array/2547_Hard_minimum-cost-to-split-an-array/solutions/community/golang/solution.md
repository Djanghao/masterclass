# 👍Runtime 1054 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/5025581/](https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/5025581/)

---

# Code
```
func minCost(nums []int, k int) int {
	memo := make([]int, len(nums))
	return findMinCost(0, nums, k, memo)
}

func findMinCost(idx int, nums []int, k int, memo []int) int {
	if idx == len(nums) {
		return 0
	}
	if memo[idx] > 0 {
		return memo[idx]
	}

	d := make(map[int]int)
	minSubArrayCost := math.MaxInt32
	currSubArrayCost := k

	for i := idx; i < len(nums); i++ {
		if _, exists := d[nums[i]]; !exists {
			d[nums[i]] = 0
		}
		d[nums[i]]++
		if d[nums[i]] <= 1 {
			currSubArrayCost += 0
		} else if d[nums[i]] == 2 {
			currSubArrayCost += 2
		} else {
			currSubArrayCost++
		}
		minSubArrayCost = min(minSubArrayCost, findMinCost(i+1, nums, k, memo)+currSubArrayCost)
	}

	memo[idx] = minSubArrayCost
	return memo[idx]
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```