# go 1.21, clean code

**Author:** Colix
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/6021399/](https://leetcode.com/problems/solve-the-equation/solutions/6021399/)

---

```golang []
func solveEquation(equation string) string {
	parts := strings.Split(equation, "=")
	leftX, leftConst := parseExpression(parts[0])
	rightX, rightConst := parseExpression(parts[1])
	xCoeff, constant := leftX-rightX, rightConst-leftConst
	if xCoeff == 0 {
		if constant == 0 {
			return "Infinite solutions"
		}
		return "No solution"
	}
	return fmt.Sprintf("x=%d", constant/xCoeff)
}

func parseExpression(expr string) (int, int) {
	var xCoeff, constant int
	for sign, i := 1, 0; i < len(expr); {
		if expr[i] == '+' {
			sign = 1
			i++
		} else if expr[i] == '-' {
			sign = -1
			i++
		}
		start := i
		for ; i < len(expr) && (expr[i] >= '0' && expr[i] <= '9'); i++ {}
		if i < len(expr) && expr[i] == 'x' {
			num := 1
			if start < i {
				num, _ = strconv.Atoi(expr[start:i])
			}
			xCoeff += sign * num
			i++
		} else {
			num, _ := strconv.Atoi(expr[start:i])
			constant += sign * num
		}
	}
	return xCoeff, constant
}
```