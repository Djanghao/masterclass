# Go iterative solution 0ms, 2.5 MB

**Author:** amir2
**Votes:** 3
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/1673650/](https://leetcode.com/problems/nested-list-weight-sum/solutions/1673650/)

---

```
type MyNest struct {
	*NestedInteger
	depth int
}

func depthSum(nestedList []*NestedInteger) int {
	work := make([]MyNest, 0)
	for _, v := range nestedList {
		work = append(work, MyNest{v, 1})
	}

	sum := 0

	for len(work) != 0 {
		l := len(work) - 1
		nest := work[l]
		work = work[:l]

		if nest.IsInteger() {
			sum += nest.depth * nest.GetInteger()
		} else {
			for _, v := range nest.GetList() {
				work = append(work, MyNest{v, nest.depth + 1})
			}
		}
	}

	return sum
}
```