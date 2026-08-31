# Golang brute-force solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3941954/](https://leetcode.com/problems/collecting-chocolates/solutions/3941954/)

---

# Complexity
- Time complexity: O(n\xB2)
- Space complexity: O(n)

# Code
```go
func minCost(nums []int, x int) int64 {
	numMinArray := make([]int, len(nums))
	copy(numMinArray, nums)
	minCostVal := 0
	for _, v := range nums {
		minCostVal += v
	}
	for i := 1; i < len(nums); i++ {
		curCostVal := i * x
		nums = append(nums, nums[0])
		nums = nums[1:]
		for i, v := range numMinArray {
			if nums[i] < v {
				numMinArray[i] = nums[i]
			}
			curCostVal += numMinArray[i]
		}
		if curCostVal < minCostVal {
			minCostVal = curCostVal
		}
	}
	return int64(minCostVal)
}
```