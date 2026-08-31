# Go simple solution

**Author:** Agito
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3583625/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3583625/)

---

# Complexity
- Time complexity:
- $$O(n)$$

- Space complexity:
- $$O(n)$$

# Code
```
func circularGameLosers(n int, k int) []int {
	winnerMap := map[int]bool{0: true}
	curIdx := 0
	round := 1

	for true {
		curIdx = (curIdx + round*k) % n

		if true == winnerMap[curIdx] {
			break
		}
		winnerMap[curIdx] = true
		round++
	}

	res := []int{}

	for i := 1; i < n; i++ {
		if false == winnerMap[i] {
			res = append(res, i+1)
		}
	}

	return res
}
```