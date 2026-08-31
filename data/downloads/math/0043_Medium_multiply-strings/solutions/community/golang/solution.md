# Golang Solution

**Author:** rafee
**Votes:** 6
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/529103/](https://leetcode.com/problems/multiply-strings/solutions/529103/)

---

```
func multiply(num1 string, num2 string) string {
	if num1 == "0" || num2 == "0" {
		return "0"
	}
	l1, l2 := len(num1), len(num2)
	res := make([]byte, l1+l2)
	for i := l1 - 1; i >= 0; i-- {
		for j := l2 - 1; j >= 0; j-- {
			val := (num1[i] - '0') * (num2[j] - '0')
			res[i+j+1] += val
			if res[i+j+1] >= 10 {
				res[i+j] += (res[i+j+1] / 10)
				res[i+j+1] %= 10
			}
		}
	}
	if res[0] == 0 {
		res = res[1:]
	}
	for i := range res {
		res[i] += '0'
	}
	return string(res)
}
```