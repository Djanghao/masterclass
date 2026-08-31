# Golang Binary Search : 3ms

**Author:** harshawasthi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/5834266/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/5834266/)

---

```
package main

import "sort"

var lastIndexes [2e3 + 1]int

func earliestSecondToMarkIndices(nums []int, changeIndices []int) int {
	m := len(changeIndices)

	ans := sort.Search(m+1, func(seconds int) bool {
		return ok(seconds, nums, changeIndices)
	})

	if ans == m+1 {
		return -1
	}

	return ans
}

func ok(seconds int, nums []int, indices []int) bool {
	for i := 0; i < seconds; i++ {
		lastIndexes[indices[i]-1] = i
	}

	availableDecrements := 0
	unique := 0

	for i := 0; i < seconds; i++ {
		index := indices[i] - 1
		if lastIndexes[index] == i {
			unique++
			availableDecrements -= nums[index]
			if availableDecrements < 0 {
				return false
			}
		} else {
			availableDecrements++
		}
	}

	return unique == len(nums)
}

```