# Golang O(n) solution, double 100%

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3746382/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/3746382/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```go
func checkArray(nums []int, k int) bool {
	desc := make([]int, len(nums))
	tweak := 0
	for i := 0; i < len(nums); i++ {
		tweak += desc[i]
		v := nums[i] + tweak
		if v < 0 {
			// nagative
			return false
		}
		if v == 0 {
			continue
		}
		tweak -= v
		if i+k-1 >= len(nums) {
			// tweak index OutOfRange
			return false
		}
		if i+k < len(nums) {
			desc[i+k] = v
		}
	}
	return true
}
```