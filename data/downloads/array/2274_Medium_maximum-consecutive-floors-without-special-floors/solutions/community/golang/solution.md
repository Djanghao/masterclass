# Golang sort the special - O(nlogn) beats 98%

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2239029/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/2239029/)

---

```
func maxConsecutive(bottom int, top int, special []int) int {
	sort.Ints(special)

	maxConsecutiveFloor := 0

	for i := 1; i < len(special); i++ {
		if special[i]-special[i-1]-1 > maxConsecutiveFloor {
			maxConsecutiveFloor = special[i] - special[i-1] - 1
		}
	}

	if special[0]-bottom > maxConsecutiveFloor {
		maxConsecutiveFloor = special[0] - bottom
	}

	if top-special[len(special)-1] > maxConsecutiveFloor {
		maxConsecutiveFloor = top - special[len(special)-1]
	}

	return maxConsecutiveFloor
}

```