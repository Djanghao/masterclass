# Go Solution Beats 100%

**Author:** pranayprajapati
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4387062/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4387062/)

---

# Code
```
func getGoodIndices(A [][]int, target int) []int {
	var result []int

	for i, row := range A {
		a, b, c, m := row[0], row[1], row[2], row[3]
		if pow(pow(a, b, 10), c, m) == target {
			result = append(result, i)
		}
	}

	return result
}

func pow(base, exp, mod int) int {
	result := 1
	for exp > 0 {
		if exp%2 == 1 {
			result = (result * base) % mod
		}
		base = (base * base) % mod
		exp /= 2
	}
	return result
}
```