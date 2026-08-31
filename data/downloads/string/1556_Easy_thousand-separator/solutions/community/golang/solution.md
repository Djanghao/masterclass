# Golang very simple solution (faster than 100.00% of Go submissions.)

**Author:** aljabri
**Votes:** 1
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/2397301/](https://leetcode.com/problems/thousand-separator/solutions/2397301/)

---

```
func thousandSeparator(n int) string {
	str := strconv.Itoa(n)
	for i := len(str) - 3; i > 0; i -= 3 {
		str = str[:i] + "." + str[i:]
	}
	return str
}

```