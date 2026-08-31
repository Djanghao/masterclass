# Golang - Runtime: 283 ms, faster than 16.67%

**Author:** 9bany
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/2740307/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/2740307/)

---

- Runtime: 283 ms, faster than 16.67% of Go online submissions for Sum of Subsequence Widths.
- Memory Usage: 8.4 MB, less than 100.00% of Go online submissions for Sum of Subsequence Widths.
```
func sumSubseqWidths(nums []int) int {
    sort.Ints(nums)
	res, mod, n, p := 0, 1000000007, len(nums), 1
	for i := 0; i < n; i++ {
		res = (res + (nums[i]-nums[n-1-i])*p) % mod
		p = (p << 1) % mod
	}
	return res
}
```