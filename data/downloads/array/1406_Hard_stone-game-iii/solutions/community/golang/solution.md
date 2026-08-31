# Constant memory solution

**Author:** pioneer10
**Votes:** 3
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3566360/](https://leetcode.com/problems/stone-game-iii/solutions/3566360/)

---

# Intuition
Both players are playing optimally, which means we need to mazimize score of every player.

# Approach
For this purpose, for each index let's maximize the difference between score of player who starts at this index and score of the other player.
Since each player can only take one, two, or three first of remaining stones, we just need to remember differences only for next three indices.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
func stoneGameIII(stoneValue []int) string {
    dp := make([]int, 4)
    k, s := 0, 0
    for i := len(stoneValue) - 1; i >= 0; i-- {
        k = (k + 1) % 4
        s = stoneValue[i]
        // take only one stone
        dp[k] = s - dp[(k + 3) % 4]
        // let's try take two and three stones
        for j := 1; j < 3 && i + j < len(stoneValue); j++ {
            s += stoneValue[i + j]
            if r := s - dp[(k + 3 - j) % 4]; r > dp[k] {
                dp[k] = r
            }
        }
    }
    switch {
        case dp[k] > 0:
        return "Alice"
        case dp[k] < 0:
        return "Bob"
    }
    return "Tie"
}
```