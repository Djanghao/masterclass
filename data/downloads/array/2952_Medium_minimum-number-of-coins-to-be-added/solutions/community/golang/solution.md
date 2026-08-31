# GO | Greedy | Same as Leetcode 330

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/5320984/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/5320984/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumAddedCoins(coins []int, target int) int {
	sort.Ints(coins)
	coinsAdded, reach, idx := 0, 0, 0
	for reach < target {
		if idx < len(coins) && coins[idx] <= reach+1 {
			reach += coins[idx]
			idx++
		} else {
			coinsAdded++
			reach += reach + 1
		}
	}
	return coinsAdded
}
```