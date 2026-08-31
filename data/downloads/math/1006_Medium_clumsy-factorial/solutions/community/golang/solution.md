# Golang solution 100 faster RECURSIVE

**Author:** dxz935
**Votes:** 1
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/1894553/](https://leetcode.com/problems/clumsy-factorial/solutions/1894553/)

---

```
func clumsy(n int) int {
	switch n {
	case 1:
		return 1
	case 2:
		return 2 * 1
	case 3:
		return 3 * 2 / 1
	default:
		return n*(n-1)/(n-2) + t(n-3)
	}
}
func t(n int) int {
	switch n {
	case 1:
		return 1
	case 2:
		return 2 - 1
	case 3:
		return 3 - 2*1
	case 4:
		return 4 - 3*2/1
	default:
		return n - (n-1)*(n-2)/(n-3) + t(n-4)
	}
}
```