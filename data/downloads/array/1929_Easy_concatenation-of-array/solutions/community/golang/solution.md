# Different Go solutions

**Author:** evleria
**Votes:** 20
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/1363702/](https://leetcode.com/problems/concatenation-of-array/solutions/1363702/)

---

```
func getConcatenation(nums []int) []int {
	n := len(nums)
	ans := make([]int, n*2)
	for i := 0; i < n; i++ {
		ans[i], ans[i+n] = nums[i], nums[i]
	}
	return ans
}
```

```
func getConcatenation(nums []int) []int {
	n := len(nums)
	ans := make([]int, n*2)
	for i := 0; i < n*2; i++ {
		ans[i] = nums[i%n]
	}
	return ans
}
```

```
func getConcatenation(nums []int) []int {
	return append(nums, nums...)
}
```