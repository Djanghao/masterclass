# Golang slightly faster using bool

**Author:** slightly-anonymous
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/3501060/](https://leetcode.com/problems/distinct-echo-substrings/solutions/3501060/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func distinctEchoSubstrings(text string) int {
   ans := make(map[string]bool)
	for i := range text {
		for j := i + 1; j-i <= len(text)-j; j++ {
			if t:=text[i:j]; t == text[j:2*j-i] {
				ans[t] = true
			}
		}
	}
	return len(ans) 
}
```