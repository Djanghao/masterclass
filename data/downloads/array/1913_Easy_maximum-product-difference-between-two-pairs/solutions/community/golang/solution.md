# Sort and then take subtraction of product of last 2 and first 2 numbers

**Author:** sushilmaxbhile
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/5823091/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/5823091/)

---

# Approach
sort the list and then take subtraction of product of first 2 and last 2 numbers

# Complexity
- Time complexity:
15 ms, Beats: 81.48%

- Space complexity:
6.25 mb, beats: 76.54%

# Code
```golang []
func maxProductDifference(nums []int) int {
	sort.Ints(nums)

	left := nums[0] * nums[1]
	rigth := nums[len(nums)-1] * nums[len(nums)-2]

	res := rigth - left

	return res
}

```