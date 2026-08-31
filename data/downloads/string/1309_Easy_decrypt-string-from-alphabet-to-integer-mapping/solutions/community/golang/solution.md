# Go O(n) solution using bytes.Buffer

**Author:** phea
**Votes:** 4
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/774889/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/774889/)

---

The trick is to use bytes.Buffer and then treat every digit as a single number(`a..i`), only when we hit a `#`, we truncate the last two bytes off of the buffer and then grab the last 2 digits to pass as a single number(`j..z`).

https://github.com/phea/leetcode-go

```go
func freqAlphabets(s string) string {
	var buf bytes.Buffer
	for i, ch := range s {
		if ch == '#' {
			buf.Truncate(buf.Len() - 2)
			d, _ := strconv.Atoi(s[i-2 : i])
			buf.WriteString(string(96 + d))
		} else {
			buf.WriteRune(ch + 48)
		}
	}

	return buf.String()
}
```