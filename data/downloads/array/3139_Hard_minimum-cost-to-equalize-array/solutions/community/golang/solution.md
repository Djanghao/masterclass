# 👍Runtime 106 ms  Beats 68.42% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5160388/](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5160388/)

---

# Code
```
func minCostToEqualizeArray(A []int, c1, c2 int) int {
	mod := 1000000007
	n := len(A)
	mi, ma := A[0], A[0]
	total := 0

	for _, a := range A {
		if a < mi {
			mi = a
		}
		if a > ma {
			ma = a
		}
		total += a
	}

	totalCost := int64(ma*n - total)

	// case 1
	if c1*2 <= c2 || n <= 2 {
		return int((totalCost * int64(c1)) % int64(mod))
	}

	// case 2
	op1 := int64(math.Max(0, float64((ma-mi)*2)-float64(totalCost)))
	op2 := totalCost - op1
	res := (op1 + op2%2) * int64(c1) + (op2 / 2) * int64(c2)

	// case 3
	totalCost += op1 / int64(n-2) * int64(n)
	op1 %= int64(n - 2)
	op2 = totalCost - op1
	res = int64(math.Min(float64(res), float64((op1+op2%2)*int64(c1)+(op2/2)*int64(c2))))

	// case 4
	for i := 0; i < 2; i++ {
		totalCost += int64(n)
		res = int64(math.Min(float64(res), float64(totalCost%2*int64(c1)+(totalCost/2)*int64(c2))))
	}

	return int(res % int64(mod))
}
```