# Golang 100% solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/3971824/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/3971824/)

---

# Code
```go
func longestSubsequence(s string, k int) int {
	curShift := 0
	curValue := 0
	curSize := 0
	for i := len(s)-1; i >= 0; i-- {
		if s[i] == '0' {
			curSize++
			curShift++
		} else {
			if curShift > 30 {
				continue
			}
			value := 1<<curShift
			if curValue + value <= k {
				curSize++
				curShift++
				curValue += value
			}
		}
	}
	return curSize
}
```