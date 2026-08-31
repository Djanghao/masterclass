# 0 ms, faster than 100%

**Author:** shikuan
**Votes:** 2
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/2830411/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/2830411/)

---


```
func fractionToDecimal(numerator int, denominator int) string {
	if numerator == 0 {
		return "0"
	}
	var res bytes.Buffer
	if ((numerator < 0) && (denominator > 0)) || ((numerator > 0) && (denominator < 0)) {
		res.WriteString("-")
	}
	num := int(math.Abs(float64(numerator)))
	den := int(math.Abs(float64(denominator)))
	res.WriteString(fmt.Sprintf("%d", num/den))
	num %= den
	if num == 0 {
		return res.String()
	}
	res.WriteString(".")
	remainder := make(map[int]int)
	remainder[num] = res.Len()
	for num != 0 {
		num *= 10
		res.WriteString(fmt.Sprintf("%d", num/den))
		num %= den
		if index, ok := remainder[num]; ok {
			result := res.String()
			return result[:index] + "(" + result[index:] + ")"
		}
		remainder[num] = res.Len()
	}
	return res.String()
}
```