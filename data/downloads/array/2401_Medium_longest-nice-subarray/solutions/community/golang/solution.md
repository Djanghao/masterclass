# Go | Sliding Window | Bitwise | Time O(n) | Space O(1)

**Author:** lovung
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2527550/](https://leetcode.com/problems/longest-nice-subarray/solutions/2527550/)

---

`&nums[r]` to verify if the nums at `l` can match with condition
`^=` to remove the combine of nums at `l`
`|=` to combine with nums as `r`

```go
func longestNiceSubarray(nums []int) int {
	n := len(nums)
	l, r := 0, 0
	curMask := 0
	max := 1
	for r < n {
		for (l < r) && (curMask&nums[r] != 0) {
			curMask ^= nums[l]
			l++
		}
		curMask |= nums[r]
		r++
		if max < r-l {
			max = r - l
		}
	}
	return max
}
```