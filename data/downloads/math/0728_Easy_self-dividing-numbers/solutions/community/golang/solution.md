# With GO

**Author:** Mee_CI
**Votes:** 1
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/1180373/](https://leetcode.com/problems/self-dividing-numbers/solutions/1180373/)

---

```
func selfDividingNumbers(left int, right int) []int {
	var n []int
	for i := left; i <= right; i++ {
		m := 0
		for j := 0; j < digitCount(i); j++ {
			a, _ := strconv.Atoi(strconv.Itoa(i)[j : j+1])
			if a != 0 {
				if i%a == 0 {
					m++
				}
			}
		}
		if m == digitCount(i) {
			n = append(n, i)
		}
	}
	return n
}
func digitCount(n int) int {
	count := 0
	for n != 0 {
		n /= 10
		count++
	}
	return count
}
```