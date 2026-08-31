# Golang solution

**Author:** olyaivanovs
**Votes:** 1
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/4298125/](https://leetcode.com/problems/camelcase-matching/solutions/4298125/)

---

# Code
```
func camelMatch(queries []string, pattern string) []bool {
    res := make([]bool, len(queries))
	for k, word := range queries {

		j, i := 0, 0
		for ;i < len(word); i++ {
			if j < len(pattern) && word[i] == pattern[j] {
				j++
			} else if unicode.IsUpper(rune(word[i])) {
				break
			}
		}

		if i == len(word) && j == len(pattern) {
			res[k] = true
		}
	}

	return res
}
```