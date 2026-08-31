# Go solution

**Author:** Ajay_74
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/5511773/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/5511773/)

---


# Code
- TC - O(N)
- SC - O(1)
```
func longestContinuousSubstring(s string) int {
    n := len(s)

	ans, count := 1, 1

	for i := 1; i < n; i++ {
		if s[i]-s[i-1] == 1 {
			count++
		} else {
			count = 1
		}
	    ans = max(ans, count)
	}

	return ans
}
```