# Go solution using strings.Builder (0ms)

**Author:** superpolikow
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/2248265/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/2248265/)

---

```
func strWithout3a3b(a int, b int) string {
	var sb strings.Builder
	sb.Grow(a + b)

	for a > 0 || b > 0 {
		switch {
		case a == 0:
			sb.WriteByte('b')
			b--

		case b == 0:
			sb.WriteByte('a')
			a--

		case a > b:
			sb.WriteByte('a')
			a--
			sb.WriteByte('a')
			a--
			sb.WriteByte('b')
			b--

		case b > a:
			sb.WriteByte('b')
			b--
			sb.WriteByte('b')
			b--
			sb.WriteByte('a')
			a--

		default:
			sb.WriteByte('a')
			a--
			sb.WriteByte('b')
			b--
		}
	}
	return sb.String()
}
```
