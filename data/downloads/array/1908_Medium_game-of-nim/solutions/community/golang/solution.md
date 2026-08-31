# Golang | Top-down DP

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3111797/](https://leetcode.com/problems/game-of-nim/solutions/3111797/)

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
func nimGame(piles []int) bool {
    memo := make(map[int]bool)
    return backtrack(piles, 0, memo)
}

func backtrack(piles []int, numEmptyPiles int, memo map[int]bool) bool {
    if len(piles) == numEmptyPiles {
        return false
    }

    state := 0
    for i := range piles {
        state = state*10+piles[i]
    }
    if v, ok := memo[state]; ok {
        return v
    }

    wins := false
    for i := range piles {
        for j := 1; j <= piles[i]; j++ {
            piles[i] -= j
            if piles[i] == 0 {
                wins = wins || !backtrack(piles, numEmptyPiles+1, memo)
            } else {
                wins = wins || !backtrack(piles, numEmptyPiles, memo)
            }
            piles[i] += j
            if wins {
                memo[state] = wins
                return wins
            }
        }
    }

    memo[state] = false
    return false
}
```