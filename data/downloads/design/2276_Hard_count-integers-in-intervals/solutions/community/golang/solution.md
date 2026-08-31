# [Go] Insertion sort / merge with comments

**Author:** sebnyberg
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/2070461/](https://leetcode.com/problems/count-integers-in-intervals/solutions/2070461/)

---

Very Go-unfriendly problem. We don't have TreeMaps or sets..

Keep a slice of intervals. Binary search for the relevant interval to consider for [left, right].

Then consider all cases. If necessary, merge several intervals into a single one using `copy`.

```go
type CountIntervals struct {
	intervals []interval
	count     int
}

type interval struct {
	start, end int
}

func Constructor() CountIntervals {
	c := CountIntervals{
		intervals: make([]interval, 0, 100),
	}
	// Add sentinel values to make indexing easier
	c.intervals = append(c.intervals,
		interval{-100, -99},
		interval{1e9 + 1, 1e9 + 2},
	)
	return c
}

func (this *CountIntervals) Add(left int, right int) {
	right++ // easier to work with open-ended intervals

	// Binary search for first and second interval.
	// These may be the same interval
	first := sort.Search(len(this.intervals), func(i int) bool {
		return left <= this.intervals[i].end
	})
	second := sort.Search(len(this.intervals), func(i int) bool {
		return this.intervals[i].start > right
	}) - 1

	// In the following if-statements, I will use the notation <left> <right>
	// [ ), where [ ) refers to an interval.
	//
	// For example: "<left> [ )" means that the left value is smaller than the
	// start value of an interval.

	if right < this.intervals[first].start {
		// <left> <right> [ )
		// Create a new interval and return.
		this.intervals = append(this.intervals, interval{})
		copy(this.intervals[first+1:], this.intervals[first:])
		this.intervals[first] = interval{left, right}
		this.count += right - left
		return
	} else if right > this.intervals[second].end {
		// We know that <left> is <= the right boundary of the first interval.
		// So [ ) <left> <right> cannot happen.
		//
		// It's safe to assume that we should update the right-boundary of the
		// second interval, i.e. we have
		// [ ) <right>
		this.count += right - this.intervals[second].end
		this.intervals[second].end = right
	} else {
		// right is inside the second interval - no need to update any intervals
		// (however, we might need to merge later on).
		// [ <right> )
	}

	if left < this.intervals[first].start {
		// We know that <right> to the right of the start boundary of the first
		// interval. So we can safely assume that the start boundary of the first
		// interval should be updated.
		//
		// Example cases:
		// <left> [ <right> ) or <left> [ ) <right>, etc
		this.count += this.intervals[first].start - left
		this.intervals[first].start = left
	} else {
		// <left> is inside the interval - no need to update
	}

	// If first != second, merge intervals. These actions will do nothing when
	// start == end so no need to check.
	for j := first + 1; j <= second; j++ {
		this.count += this.intervals[j].start - this.intervals[j-1].end
	}
	this.intervals[second].start = this.intervals[first].start
	copy(this.intervals[first:], this.intervals[second:])
	this.intervals = this.intervals[:len(this.intervals)-(second-first)]
}

func (this *CountIntervals) Count() int {
	return this.count
}
```