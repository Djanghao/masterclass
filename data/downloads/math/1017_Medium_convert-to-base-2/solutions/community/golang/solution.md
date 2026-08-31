# Golang 0ms

**Author:** kocherovf
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/267477/](https://leetcode.com/problems/convert-to-base-2/solutions/267477/)

---

```
func baseNeg2(N int) string {
	if N == 0 {
		return "0"
	}
	var binary = []rune{}
	i := 0
	dozen := 0
	for N > 0 {
		res := (N + dozen) % 2
		if dozen == 1 && N % 2 == 0 {
			dozen = 0
		}
		if dozen == 0 && i % 2 == 1 && res == 1 {
			dozen = 1
		}
		N /= 2
		binary = append([]rune{rune(res + '0')}, binary...)
		i++

	}
	if dozen == 1 {
		binary = append([]rune{rune(dozen + '0')}, binary...)
		if i % 2 == 1 {
			binary = append([]rune{rune(dozen + '0')}, binary...)
		}
	}
	return string(binary)
}
```