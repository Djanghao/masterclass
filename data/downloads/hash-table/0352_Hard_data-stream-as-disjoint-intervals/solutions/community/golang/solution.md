# Golang binary-search 100% solution

**Author:** tjucoder
**Votes:** 3
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/1571725/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/1571725/)

---

```go
type SummaryRanges struct {
	ranges [][]int
}

func Constructor() SummaryRanges {
	return SummaryRanges{
		ranges: make([][]int, 0),
	}
}

func (sr *SummaryRanges) AddNum(val int)  {
	l, r := 0, len(sr.ranges)-1
	for l <= r {
		m := (l+r)>>1
		if val >= sr.ranges[m][0] && val <= sr.ranges[m][1] {
			// in a valid range, nothing to do
			return
		}
		if val == sr.ranges[m][0]-1 {
			if m > 0 && sr.ranges[m-1][1] + 1 == val {
				// connect with prev range
				sr.ranges[m-1][1] = sr.ranges[m][1]
				copy(sr.ranges[m:], sr.ranges[m+1:])
				sr.ranges = sr.ranges[:len(sr.ranges)-1]
				return
			}
			// modify left bound
			sr.ranges[m][0] = val
			return
		}
		if val == sr.ranges[m][1]+1 {
			if m + 1 < len(sr.ranges) && sr.ranges[m+1][0] - 1 == val {
				//  connect with next range
				sr.ranges[m+1][0] = sr.ranges[m][0]
				copy(sr.ranges[m:], sr.ranges[m+1:])
				sr.ranges = sr.ranges[:len(sr.ranges)-1]
				return
			}
			// modify right bound
			sr.ranges[m][1] = val
			return
		}
		if val < sr.ranges[m][0] {
			r = m - 1
		} else {
			l = m + 1
		}
	}
	// value @index r+1 is greater, insert index r+1
	sr.ranges = append(sr.ranges, nil)
	copy(sr.ranges[r+2:], sr.ranges[r+1:])
	sr.ranges[r+1] = []int{val, val}
}

func (sr *SummaryRanges) GetIntervals() [][]int {
	return sr.ranges
}
```