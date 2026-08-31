# In GO

**Author:** iampolo
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-9/solutions/1678647/](https://leetcode.com/problems/remove-9/solutions/1678647/)

---

```
func newInteger(n int) int {
	base := 1
	var res int
	for n != 0 {
		res += base * (n % 9)
		n /= 9
		base *= 10
	}
	return res
}

func newInteger_v2(n int) int {
	var res string
	for n != 0 {
		res = fmt.Sprint(n % 9) + res
		n /= 9
	}
	v, _ := strconv.Atoi(res)
	return v

```