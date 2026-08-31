# Simple solution speed 100%

**Author:** gaponov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/5924381/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/5924381/)

---

# Code
```golang []
func findTheLongestBalancedSubstring(s string) int {
	ans := 0
	for i := 0; i < len(s); i++ {
		j := i
		for ; j < len(s); j++ {
			if s[j] != '0' {
				break
			}
		}
		k := j
		for ; k < min(len(s), i+2*(j-i)); k++ {
			if s[k] != '1' {
				break
			}
		}
		ans = max(ans, 2*min(j-i, k-j))
	}
	return ans
}
```