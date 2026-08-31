# [Go] 0ms, no branching

**Author:** adwski
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5908956/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5908956/)

---


# Code
```golang []
func minMoves(target int, maxDoubles int) int {
	var ops int
	for ; maxDoubles > 0 && target > 1; maxDoubles-- {
		ops += 1 + target&1
		target = (target - target&1) >> 1
	}

	return ops + target - 1
}
```