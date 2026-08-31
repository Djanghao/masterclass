# Golang clean recursive

**Author:** ylz-at
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/573644/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/573644/)

---

```
func numMovesStones(a int, b int, c int) []int {
	if a > b {
		return numMovesStones(b, a, c)
	}
	if b > c {
		return numMovesStones(a, c, b)
	}
	if c-a == 2 {
		return []int{0, 0}
	}
	if b-a <= 2 || c-b <= 2 {
		return []int{1, c - a - 2}
	}
	return []int{2, c - a - 2}
}
```