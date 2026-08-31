# go 1.21, clean code

**Author:** Colix
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/6010230/](https://leetcode.com/problems/complex-number-multiplication/solutions/6010230/)

---

```golang []
func complexNumberMultiply(num1 string, num2 string) string {
	a, b := parseComplexNumber(num1)
	c, d := parseComplexNumber(num2)
	return strconv.Itoa(a*c-b*d) + "+" + strconv.Itoa(a*d+b*c) + "i"
}

func parseComplexNumber(num string) (int, int) {
	parts := strings.Split(num[:len(num)-1], "+")
	r, _ := strconv.Atoi(parts[0])
	i, _ := strconv.Atoi(parts[1])
	return r, i
}
```