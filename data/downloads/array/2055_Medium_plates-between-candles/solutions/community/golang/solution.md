# Golang Binary Search.

**Author:** harshawasthi90
**Votes:** 2
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/3065855/](https://leetcode.com/problems/plates-between-candles/solutions/3065855/)

---

```
package main

import (
	"sort"
)

func platesBetweenCandles(s string, queries [][]int) []int {
	candles := make([]int, 0, len(s))

	for i, ch := range s {
		if ch == '|' {
			candles = append(candles, i)
		}
	}

	ans := make([]int, 0, len(queries))

	for _, query := range queries {
		l := query[0]
		r := query[1]

		left := sort.Search(len(candles), func(i int) bool {
			return candles[i] >= l
		})

		right := sort.Search(len(candles), func(i int) bool {
			return candles[i] > r
		}) - 1

		if right <= left {
			ans = append(ans, 0)
			continue
		}
		c := (candles[right] - candles[left]) - (right - left)
		ans = append(ans, c)
	}

	return ans
}

```