# Golang simple solution

**Author:** Compacted0031
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3055369/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3055369/)

---

```
func findLongestWord(s string, dictionary []string) string {
	result := ""
	for _, w := range dictionary {
		current := 0
		found := 0

		for i := 0; i < len(w) && current < len(s); i++ {
			for current < len(s) {
				if w[i] == s[current] {
					found++
					current++
					break
				}
				current++
			}
		}

		if found != len(w) {
			continue
		}

		if len(w) > len(result) {
			result = w
		}
		if len(w) == len(result) && w < result {
			result = w
		}
	}

	return result
}

```