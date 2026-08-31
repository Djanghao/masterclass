# Easy idiomatic Go solution. Beats 100%, 0ms

**Author:** evleria
**Votes:** 3
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/1184513/](https://leetcode.com/problems/powerful-integers/solutions/1184513/)

---

```
func powerfulIntegers(x int, y int, bound int) []int {
	m := map[int]bool{}
	for a := 1; a < bound; a *= x {
		for b := 1; a+b <= bound; b *= y {
			m[a+b] = true
			if y == 1 {
				break
			}
		}
		if x == 1 {
			break
		}
	}

	result := []int{}
	for n := range m {
		result = append(result, n)
	}
	return result
}
```