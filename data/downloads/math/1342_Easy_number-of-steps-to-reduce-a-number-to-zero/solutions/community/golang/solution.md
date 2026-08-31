# Go 100% time and 100% space | log(n)

**Author:** Dexes
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/1621952/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/1621952/)

---

```
func numberOfSteps(num int) int {
	if num == 0 {
		return 0
	}

	result := 0
	for num > 0 {
		if num&1 == 1 {
			result += 2
		} else {
			result += 1
		}

		num >>= 1
	}

	return result - 1
}
```