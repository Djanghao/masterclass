# Golang solution without sorting

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/3793367/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/3793367/)

---

# Code
```go
func getSubarrayBeauty(nums []int, k int, x int) []int {
	counter := make(map[int]int, 101)
	for i := 0; i < k-1; i++ {
		counter[nums[i]]++
	}
	beauty := make([]int, 0, len(nums)-k+1)
	for i := k-1; i < len(nums); i++ {
		counter[nums[i]]++
		if i - k >= 0 {
			counter[nums[i-k]]--
		}
		negative := 0
		for i := -50; i <= 50; i++ {
			if i >= 0 {
				beauty = append(beauty, 0)
				break
			}
			negative += counter[i]
			if negative >= x {
				beauty = append(beauty, i)
				break
			}
		}
	}
	return beauty
}
```