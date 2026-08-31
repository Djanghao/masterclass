# Golang 0ms | 100%

**Author:** user4863og
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6088179/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6088179/)

---

```
package main

var next [1e5 + 1]int

func shortestDistanceAfterQueries(n int, queries [][]int) []int {
	for i := 0; i < n-1; i++ {
		next[i] = i + 1
	}

	count := n - 1
	ans := make([]int, len(queries))

	for i, query := range queries {
		l := query[0]
		r := query[1]

		for next[l] < r {
			next[l], l = r, next[l]
			count--
		}

		ans[i] = count
	}

	return ans
}

```