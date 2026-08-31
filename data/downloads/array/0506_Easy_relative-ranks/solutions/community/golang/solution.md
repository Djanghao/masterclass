# Golang 100% simple solution

**Author:** ylz-at
**Votes:** 5
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/561738/](https://leetcode.com/problems/relative-ranks/solutions/561738/)

---

```
package main

import (
	"sort"
	"strconv"
)

type MyInt struct {
	Val int
	Index int
}

func findRelativeRanks(nums []int) []string {
	athletes := make([]MyInt, len(nums))
	for i, num := range nums {
		athletes[i].Index=i
		athletes[i].Val=num
	}
	sort.Slice(athletes, func(i, j int) bool {
		return athletes[i].Val>athletes[j].Val
	})
	rank := make([]string, len(nums))
	for i, athlete := range athletes {
		switch i {
		case 0:
			rank[athlete.Index]="Gold Medal"
		case 1:
			rank[athlete.Index]="Silver Medal"
		case 2:
			rank[athlete.Index]="Bronze Medal"
		default:
			rank[athlete.Index] = strconv.Itoa(i+1)
		}
	}
	return rank

}
```