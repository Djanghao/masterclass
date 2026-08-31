# Go binary search 95%

**Author:** tjucoder
**Votes:** 4
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/544400/](https://leetcode.com/problems/random-pick-with-weight/solutions/544400/)

---

```go
type Solution struct {
	values   []int
	maxValue int
}

func Constructor(w []int) Solution {
	values := []int{}
	current := 0
	for _, v := range w {
		current += v
		values = append(values, current)
	}
	rand.Seed(time.Now().UnixNano())
	return Solution{
		values:   values,
		maxValue: current,
	}
}

func (s *Solution) PickIndex() int {
	num := rand.Intn(s.maxValue)
	return findGreater(s.values, num)
}

func findGreater(values []int, num int) int {
	l, r := 0, len(values)-1
	for l <= r {
		m := (l+r)>> 1
		if values[m] > num {
			r = m-1
		} else {
			l = m+1
		}
	}
	return l
}
```