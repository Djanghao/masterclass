# Go: check start and finish only

**Author:** artyom_andreev
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/1313534/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/1313534/)

---

```go
func mostVisited(n int, rounds []int) []int {
	var (
		start  = rounds[0]
		finish = rounds[len(rounds)-1]
		res    []int
	)
	if start <= finish {
		res = make([]int, 0, finish-start+1)
		for i := start; i <= finish; i++ {
			res = append(res, i)
		}
	} else {
		res = make([]int, 0, n-start+finish+1)
		for i := 1; i <= finish; i++ {
			res = append(res, i)
		}
		for i := start; i <= n; i++ {
			res = append(res, i)
		}
	}
	return res
}
```