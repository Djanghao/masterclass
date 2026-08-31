# Golang 0ms solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/reaching-points/solutions/1666782/](https://leetcode.com/problems/reaching-points/solutions/1666782/)

---

```go
func reachingPoints(sx int, sy int, tx int, ty int) bool {
	for {
		if sx == tx && sy == ty {
			return true
		}
		if tx == ty || tx < sx || ty < sy {
			return false
		}
		if sx == tx {
			return (ty - sy) % sx == 0
		}
		if sy == ty {
			return (tx - sx) % sy == 0
		}
		if tx > ty {
			tx = tx % ty
		} else {
			ty = ty % tx
		}
	}
}
```