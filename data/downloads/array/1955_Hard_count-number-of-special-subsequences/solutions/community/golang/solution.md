# Golang simple O(n) time O(1) space solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1584912/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1584912/)

---

```go
func countSpecialSubsequences(nums []int) int {
	special0, special1, special2 := 0, 0, 0
	for _, v := range nums {
		switch v {
		case 0:
            special0 = (2 * special0 + 1) % 1000000007
		case 1:
			special1 = (2 * special1 + special0) % 1000000007
		case 2:
			special2 = (2 * special2 + special1) % 1000000007
		}
	}
	return special2
}
```