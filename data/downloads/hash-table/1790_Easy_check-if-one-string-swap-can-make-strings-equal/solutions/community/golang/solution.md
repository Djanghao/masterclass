# Golang 0ms solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108995/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1108995/)

---

```go
func areAlmostEqual(s1 string, s2 string) bool {
	diffPair := [][]byte{}
	for i := 0; i < len(s1); i++ {
		if s1[i] != s2[i] {
			diffPair = append(diffPair, []byte{s1[i],s2[i]})
		}
	}
	if len(diffPair) == 0 {
		return true
	}
	if len(diffPair) != 2 {
		return false
	}
	return diffPair[0][1] == diffPair[1][0] && diffPair[0][0] == diffPair[1][1]
}
```