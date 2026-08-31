# Go solution faster than 100% bit manuplation

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/1059496/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/1059496/)

---

```
func bitwiseComplement(N int) int {
	if N == 0 {
		return 1
	}
	res := 0
	g := 1
	for N > 0 {
		if N&1 == 0 {
			res += g
		}
		g <<= 1
		N >>= 1
	}
	return res
}
```