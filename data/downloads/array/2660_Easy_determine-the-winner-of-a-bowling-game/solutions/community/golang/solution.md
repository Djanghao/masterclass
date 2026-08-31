# Beats 100% | Easy | MUSTANG | LAMBORGHINI AVENTADOR | GTA SIX

**Author:** semes
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5607651/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5607651/)

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
func isWinner(player1 []int, player2 []int) int {
	score1 := 0
	score2 := 0
	for i, j := range player1 {
		score1 += j
		score2 += player2[i]
		if i-1 >= 0 && player1[i - 1] == 10 || i - 2 >= 0 && player1[i - 2] == 10{
			score1 += j
		} 
		if i-1 >= 0 && player2[i - 1] == 10 || i - 2 >= 0 && player2[i - 2] == 10{
			score2 += player2[i]
		}
	}
	if score1 > score2 {
		return 1
	} else if score1 < score2 {
		return 2
	} else {
		return 0
	}
}
```