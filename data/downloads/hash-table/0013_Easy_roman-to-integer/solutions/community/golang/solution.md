# Golang solution (0ms)

**Author:** klakovskiy
**Votes:** 39
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/1642767/](https://leetcode.com/problems/roman-to-integer/solutions/1642767/)

---

To avoid many check I use ```var lv``` (last value) for define sign of current operations.

Runtime: 0 ms, faster than 100.00% 
Memory Usage: 3 MB, less than 40.11% (removing usages ```h,lv,cv``` variables doesn't help to improve memory usage)

```
func romanToInt(s string) int {
	var v, lv, cv int
	h := map[uint8]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

    for i := len(s) - 1; i >= 0; i-- {
		cv = h[s[i]]
		if cv < lv {
			v -= cv
		} else {
			v += cv
		}
		lv = cv
	}

	return v
}
```