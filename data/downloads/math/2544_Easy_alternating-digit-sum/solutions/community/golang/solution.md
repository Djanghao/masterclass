# Golang 0 ms 1.9 MB

**Author:** maxhero90
**Votes:** 2
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3086849/](https://leetcode.com/problems/alternating-digit-sum/solutions/3086849/)

---

```
func alternateDigitSum(n int) int {
	var result int
	for ; n != 0; n /= 10 {
		result = n%10 - result
	}
	return result
}
```