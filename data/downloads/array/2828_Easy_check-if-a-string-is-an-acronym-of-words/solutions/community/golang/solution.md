# Here is my answer.

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5550807/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5550807/)

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
func isAcronym(words []string, s string) bool {
	d := 0
	if len(words) == len(s) {
		for i := 0; i < len(words); i++{
			if words[i][0] == s[i] {
				d++
			}
		}
	}
	return d == len(words)
}
```