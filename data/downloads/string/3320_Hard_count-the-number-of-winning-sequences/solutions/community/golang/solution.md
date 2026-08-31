# Go | Simple Bottom Up DP | O(n) mem

**Author:** ligt
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905529/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905529/)

---

# Intuitive

- `mapOpponents`: A mapping that converts each of Alice's possible creatures ('F', 'W', 'E') to an index (0, 1, 2), which corresponds to Fire Dragon, Water Serpent, and Earth Golem respectively.
- `loseOpponents`: For each of Alice's creatures, this map tells which creature Bob needs to summon to lose a point (because Alice wins).
- `winOpponents`: For each of Alice's creatures, this map tells which creature Bob needs to summon to win a point (because Bob wins).

The transition process is based on Bob\u2019s possible responses to Alice's move:

- `states[0]` corresponds to Bob winning (gain 1 point).
- `states[1]` corresponds to Bob losing (lose 1 point).
- `states[2]` corresponds to a tie (no points).


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func countWinningSequences(s string) int {
	mapOpponents := map[rune]int{
		'F': 0,
		'W': 1,
		'E': 2,
	}
	loseOpponents := map[int]int{
		0: 2,
		1: 0,
		2: 1,
	}
	winOpponents := map[int]int{
		2: 0,
		0: 1,
		1: 2,
	}
	var dp, dpPrev [2001][3]int
	var states [3][2]int

	for i, c := range s {
        ls := loseOpponents[mapOpponents[c]] // loseState, index that bob pick make him lose the point by Alice
		ws := winOpponents[mapOpponents[c]] // winState, win over Alice
		ss := mapOpponents[c] // sameState, no point added
		if i == 0 {
			dp[-1+1000][ls] = 1
			dp[0+1000][ss] = 1
			dp[1+1000][ws] = 1
			continue
		}

        // reset mem
        dpPrev, dp = dp, dpPrev
        dp = [2001][3]int{}

		for prevPoint, pdp := range dpPrev {
			states[0] = [2]int{prevPoint + 1, ws}
			states[1] = [2]int{prevPoint - 1, ls}
			states[2] = [2]int{prevPoint, ss}
			for oldState, oldStateCnt := range pdp {
				if oldStateCnt == 0 {
					continue
				}
				for _, state := range states {
					if state[1] == oldState {
						continue
					}
					dp[state[0]][state[1]] += (oldStateCnt % 1000000007)
				}
			}
		}
	}
	res := 0
	for _, stateCounts := range dp[1001:] {
		for _, stateCount := range stateCounts {
			res += stateCount
		}
	}
	return res % 1000000007
}
```