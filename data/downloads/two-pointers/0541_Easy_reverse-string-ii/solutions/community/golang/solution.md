# [Golang] Runtime 0 ms solution

**Author:** Nediiii
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/373835/](https://leetcode.com/problems/reverse-string-ii/solutions/373835/)

---

```go
func reverseStr(s string, k int) string {
	res := []byte(s)
	for i := 0; i < len(res); i = i + 2*k {
		if i+k < len(res) {
			reverseK(res[i : i+k])
		} else {
			reverseK(res[i:])
		}
	}
	return string(res)
}

// reverse slice
func reverseK(b []byte) {
	left, right := 0, len(b)-1
	for left < right {
		b[left], b[right] = b[right], b[left]
		left, right = left+1, right-1
	}
}
```