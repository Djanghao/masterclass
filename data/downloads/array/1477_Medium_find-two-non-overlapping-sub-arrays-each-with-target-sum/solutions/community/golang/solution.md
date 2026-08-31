# Golang sliding window solution [with runnable tests on playground]

**Author:** Trane9991
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/685563/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/685563/)

---

https://play.golang.org/p/wPd7GMfSrAh

```go
package solution

import "sort"

func minSumOfLengths(arr []int, target int) int {
	sum := 0
	j := 0

	rr := [][2]int{}
	// use sliding window, to get list of
	// subarrays with the target sum
	for i, v := range arr {
		sum += v

		for ; sum > target; j++ {
			sum -= arr[j]
		}

		if sum == target {
			rr = append(rr, [2]int{j, i})
		}
	}

	if len(rr) < 2 {
		return -1
	}

	// helper func to get size of
	// subarray
	size := func(v [2]int) int {
		return v[1] - v[0] + 1
	}

	// sort list subarrays by their length
	sort.Slice(rr, func(i, j int) bool {
		f, s := rr[i], rr[j]
		fs, ss := size(f), size(s)

		if fs == ss {
			return f[0] < s[0]
		}

		return fs < ss
	})

	min := -1
	// look for two shortest subarrays that
	// do not intersect
	for i := 0; i < len(rr); i++ {
		f := rr[i]
		fs := size(f)

		for j := i + 1; j < len(rr); j++ {
			s := rr[j]
			ss := size(s)
			l := fs + ss

			// optimization, not to compute the items
			// that are already bigger then minimum we found
			// before
			if min != -1 && l >= min {
				break
			}

			// check if two subarrays are intersecting
			if (s[0] > f[1] && f[0] <= f[1]) || (f[0] > s[1] && s[0] <= s[1]) {

				// save lenghts of subarrays if it is smaller theen minimum
				if l < min || min == -1 {
					min = l
				}
			}
		}
	}

	return min
}
```