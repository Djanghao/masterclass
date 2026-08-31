# Simple solution

**Author:** Sap1k
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/5284617/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/5284617/)

---

```
func smallestSubsequence(s string) string {
	letterIndex := make(map[byte]int)
	for i := range s {
		letterIndex[s[i]] = i
	}
	stack := make([]byte, 0)
	seen := make(map[byte]struct{})
	for i := range s {
		if _, ok := seen[s[i]]; ok {
			continue
		}
		for len(stack) > 0 && s[i] < stack[len(stack) - 1] && i < letterIndex[stack[len(stack) - 1]] {
			delete(seen, stack[len(stack) - 1])
			stack = stack[:len(stack) - 1]
		}
		stack = append(stack, s[i])
		seen[s[i]] = struct{}{}
	}
	return string(stack)
}
```