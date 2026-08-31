# 87% BEATS | EASY SOLUTION | LAMBORGHINI AVENTADOR | GUCCI | LOUIS VUITTON

**Author:** semes
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5796617/](https://leetcode.com/problems/minimum-time-difference/solutions/5796617/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

func findMinDifference(timePoints []string) int {
	n := len(timePoints)
	minutes := make([]int, n)
	for idx, i := range timePoints {
		fullTime := strings.Split(i, ":")
		hour, _ := strconv.Atoi(fullTime[0])
		minute, _ := strconv.Atoi(fullTime[1])
		minutes[idx] = hour*60 + minute
	}
	sort.Ints(minutes)

	res := min(abs(minutes[0] - minutes[n-1]), 24 * 60 - abs(minutes[0] - minutes[n-1]))
	for i := 0; i < n-1; i++ {
		res = min(res, abs(minutes[i] - minutes[i + 1]), 24 * 60 - abs(minutes[i] - minutes[i + 1]))

		if res == 0 {
			break
		}
	}
	return res
}

func abs(a int) int {
	if a < 0 {
		return -1 * a
	}
	return a
}
```