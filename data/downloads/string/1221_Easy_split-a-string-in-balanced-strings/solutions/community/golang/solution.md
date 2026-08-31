# golang O(N) easy to understand

**Author:** antcheri
**Votes:** 5
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/495016/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/495016/)

---

```
func balancedStringSplit(s string) int {
	var stack int
	var out int
	for i := range s {
		if s[i] == 'R' {
			stack++
		} else {
			stack--
		}
		if stack == 0 {
			out++
		}
	}
	return out
}