# Simple solution in Golang

**Author:** bhargavsnv100
**Votes:** 3
**Link:** [https://leetcode.com/problems/goat-latin/solutions/925998/](https://leetcode.com/problems/goat-latin/solutions/925998/)

---

Code
====

```go
func isVowel(s string) bool {
	letter := strings.ToLower(string(s[0]))

	switch letter {
	case "a", "e", "i", "o", "u":
		return true
	}

	return false
}

func toGoatLatin(S string) string {
	words := strings.Split(S, " ")
	solution := ""

	for i, word := range words {
		a := strings.Repeat("a", i+1)
		goatWord := ""

		if isVowel(word) {
			goatWord = word + "ma"
		} else {
			goatWord = word[1:] + string(word[0]) + "ma"
		}

		solution = solution + goatWord + a + " "
	}

	return solution[:len(solution)-1]
}
```
