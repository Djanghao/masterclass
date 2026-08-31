# Simple Solution using Math module

**Author:** Hanuman-Ghawade
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5633696/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5633696/)

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
function losingPlayer(x: number, y: number): string {
    const num = Math.floor(Math.min(x, y / 4))
    const winner = num % 2 === 0
    return winner ? "Bob" : "Alice"
};
```