# Go solution with a direction flag

**Author:** phea
**Votes:** 2
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/786071/](https://leetcode.com/problems/increasing-decreasing-string/solutions/786071/)

---

```go
func sortString(s string) string {
	chars := make([]int, 26)
	for _, ch := range s {
		chars[ch-97]++
	}

    var buf strings.Builder
	i, direction := 0, 1
	for buf.Len() < len(s) {
		if i == 26 {
			i = 25
			direction = -1
		}
		
		if i == -1 {
			i = 0
			direction = 1
		}
		if chars[i] > 0 {
			buf.WriteByte(byte(i + 97))
			chars[i]--
		}

		i += direction
	}

    return buf.String()
}
```