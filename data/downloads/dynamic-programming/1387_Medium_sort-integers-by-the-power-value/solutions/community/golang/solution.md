# Golang using sort and memoization

**Author:** ylz-at
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/546481/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/546481/)

---

```
package main

import (
	"fmt"
	"sort"
)

func getKth(lo int, hi int, k int) int {
	res := make([]int, hi-lo+1)
	for i := 0; i < len(res); i++ {
		res[i] = i + lo
	}
	sort.Slice(res, func(i, j int) bool {
		pi, pj := powerValue(res[i]), powerValue(res[j])
		if pi == pj {
			return res[i] < res[j]
		}
		return pi < pj
	})
	return res[k-1]
}
var data = map[int]int{1: 0}
func powerValue(i int) int {
	if res, ok := data[i]; ok {
		return res
	}
	if i%2 == 0 {
		res := powerValue(i / 2)
		data[i] = res + 1
		return res+1
	} else {
		res := powerValue(3*i + 1)
		data[i] = res + 1
		return res+1
	}
}


```