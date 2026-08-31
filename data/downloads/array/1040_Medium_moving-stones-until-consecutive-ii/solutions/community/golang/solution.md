# Golang solution with explanation, not good enough

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/756275/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/756275/)

---

```go
func numMovesStonesII(stones []int) []int {
	sort.Ints(stones)
	// calc all gaps
	gap := make([]int, 0)
	for i := 1; i < len(stones); i++ {
		diff := stones[i] - stones[i-1]
		if diff > 1 {
			gap = append(gap, diff-1)
		}
	}
	// calc max here
	// each move, we will lost one gap
	// we may lose more than one gap at the first move
	max := 0
	for _, v := range gap {
		max += v
	}
	gapBoundL := stones[1] - stones[0] - 1
	gapBoundR := stones[len(stones)-1] - stones[len(stones)-2] - 1
	if gapBoundL < gapBoundR {
		max -= gapBoundL
	} else {
		max -= gapBoundR
	}
	// calc min here
    // we need move stones until they are all continuously
	count := 1
	for l, r := 0, 1; r < len(stones); {
		if stones[r] - stones[l] < len(stones) {
			if current := r - l + 1; current > count {
				count = current
			}
			r++
		} else {
			l++
		}
	}
	min := len(stones) - count
    if min == 1 && len(gap) == 1 && gap[0] != 1 {
        // [6,5,4,3,10], cap = [3]
        // we need 2-moves
        // [4,5,6,8,10]
        // [4,5,6,7,8]
        
        // [6,5,4,3,8], cap = [1]
        // one move is enough
        
        // [6,5,10,3,7], cap = [1,2]
        // one move is enough
        min++
    }
	return []int{min, max}
}
```