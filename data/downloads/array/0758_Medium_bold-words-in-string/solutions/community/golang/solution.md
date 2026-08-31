# Golang Brute Force

**Author:** flk_go
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/1171438/](https://leetcode.com/problems/bold-words-in-string/solutions/1171438/)

---

```
func boldWords(words []string, S string) string {
	s := make([]int, len(S)+1)
	for _, w := range words {
		for i := 0; i <= len(S); i++ {
			idx := strings.Index(S[i:], w)
			if idx < 0 {
				break
			} else {
				i += idx
			}
			s[i]++
			s[i+len(w)]--
		}
	}
	var sb []byte
	var pre, sum int
	for i := 0; i <= len(S); i++ {
		sum += s[i]
		if sum > 0 && pre == 0 {
			sb = append(sb, "<b>"...)
		}
		if sum == 0 && pre > 0 {
			sb = append(sb, "</b>"...)
		}
		if i < len(S) {
			sb = append(sb, S[i])
		}
		pre = sum
	}
	return string(sb)
}

```