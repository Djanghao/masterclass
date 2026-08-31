# Simple recursive TypeScript solution, efficient even for n > 8

**Author:** melihov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/4298518/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/4298518/)

---

# Approach
For ```n === 0```, the result is ```1```, for any ```n > 0```, the result is:

```f(n) = 9 * 9 * 8 * 7 * ... * (11 - n) + f(n - 1)```

After ```n === 10``` no more uniquely digited numbers exist.

# Code
```
function countNumbersWithUniqueDigits(n: number): number {
	if (!Number.isInteger(n) || n < 0) return 0
	if (n === 0) return 1
	if (n > 10) n = 10

	let res = 9

	for (let i = 9; i > 10 - n; i--) res *= i

    return res + countNumbersWithUniqueDigits(n - 1)
}
```