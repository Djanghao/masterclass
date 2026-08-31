# Self descriptive iterative solution in golang, faster than 100.00% of Go online submissions

**Author:** yalovyy
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/285122/](https://leetcode.com/problems/minimum-window-subsequence/solutions/285122/)

---

```
package minstrsubset

func iterSolution(s, t string) string {
	n := len(s)
	m := len(t)
	if n == 0 || m == 0 || n < m {
		return ""
	}
	currentRange := LowHigh{0, 0}
	minRange := LowHigh{-1, n}
	ok := findNextStartOfRange(s, t, &currentRange)
	if !ok {
		return ""
	}
	if m == 1 {
		return s[currentRange.lo : currentRange.hi+1]
	}
	for {
		ok = findEndOfRange(s, t, &currentRange)
		if !ok {
			break
		}
		findClosestStartOfRange(s, t, &currentRange)
		updateMinRange(&minRange, &currentRange)
		currentRange.lo++
		ok = findNextStartOfRange(s, t, &currentRange)
		if !ok {
			break
		}
	}
	if minRange.lo < 0 {
		return ""
	}
	return s[minRange.lo : minRange.hi+1]
}

type LowHigh struct {
	lo int
	hi int
}

func (r LowHigh) Size() int {
	return r.hi - r.lo
}

func findNextStartOfRange(s, t string, r *LowHigh) bool {
	for i := r.lo; i < len(s); i++ {
		if s[i] == t[0] {
			r.lo = i
			r.hi = i
			return true
		}
	}
	return false
}

func findEndOfRange(s, t string, r *LowHigh) bool {
	for j := 1; j < len(t); j++ {
		found := false
		for i := r.hi + 1; i < len(s); i++ {
			if s[i] == t[j] {
				r.hi = i
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}
	return true
}

func findClosestStartOfRange(s, t string, r *LowHigh) {
	hi := r.hi - 1
	for j := len(t) - 2; j >= 0; j-- {
		for i := hi; i > r.lo; i-- {
			if s[i] == t[j] {
				if j == 0 {
					r.lo = i
					return
				}
				hi = i - 1
				break
			}
		}
	}
}

func updateMinRange(minR, otherR *LowHigh) {
	if minR.Size() > otherR.Size() {
		*minR = *otherR
	}
}

```