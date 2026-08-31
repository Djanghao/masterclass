# Golang simple solution using strings.Fields

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1538720/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1538720/)

---

```go
func countValidWords(sentence string) int {
	fields := strings.Fields(sentence)
	validCount := 0
	for _, word := range fields {
		if isValid(word) {
			validCount++
		}
	}
	return validCount
}

func isValid(w string) bool {
	if strings.ContainsAny(w, "0123456789") {
		return false
	}
	connected := false
	for i := 0; i < len(w)-1; i++ {
		switch w[i] {
		case '-':
			if connected == true {
				return false
			}
			if w[i+1] >= 'a' && w[i+1] <= 'z' && i > 0 {
				i++
				connected = true
			} else {
				return false
			}
		case '!', '.', ',':
			return false
		default:
		}
	}
	if w[len(w)-1] == '-' {
		return false
	}
	return true
}
```