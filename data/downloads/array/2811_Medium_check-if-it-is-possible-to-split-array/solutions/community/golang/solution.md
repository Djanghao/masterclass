# Golang simple solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3882636/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3882636/)

---

# Code
```go
func canSplitArray(nums []int, m int) bool {
	if len(nums) <= 2 {
		return true
	}
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] + nums[i+1] >= m {
			return true
		}
	}
	return false
}

```