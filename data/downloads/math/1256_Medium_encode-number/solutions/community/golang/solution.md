# Golang

**Author:** Dexes
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-number/solutions/3013431/](https://leetcode.com/problems/encode-number/solutions/3013431/)

---

```
func encode(num int) string {
	length := sort.Search(30, func(i int) bool { return ((1 << i) - 1) > num }) - 1
	num -= (1 << length) - 1

	result := make([]byte, length)
	for i := len(result) - 1; i >= 0; i-- {
		result[i] = '0' + byte(num&1)
		num >>= 1
	}

	return string(result)
}

```