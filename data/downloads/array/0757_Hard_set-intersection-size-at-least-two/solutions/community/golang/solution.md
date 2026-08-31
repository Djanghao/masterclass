# Golang Sort and Greedy, 18ms

**Author:** harshawasthi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/3453761/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/3453761/)

---

```
package main

import "sort"

func intersectionSizeTwo(intervals [][]int) int {
	sort.Slice(intervals, func(i, j int) bool {
		if intervals[i][1] == intervals[j][1] {
			return intervals[i][0] > intervals[j][0]
		}
		return intervals[i][1] < intervals[j][1]
	})

	a := -1
	b := -1

	ans := 0
	for _, interval := range intervals {
		start := interval[0]
		end := interval[1]

		if start > b {
			// If the current interval start is greater than the last recorded end, record new 2 points (end-1, end)
			a, b = end-1, end
			ans += 2
		} else if start > a {
			// If current interval start lies in (a,b], we can update b to the current end, and update a to b.  
			a, b = b, end
			ans++
		}
	}

	return ans
}
```