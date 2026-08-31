# [Python3] Math One-Liner O(1) |  Check & Count for Parity

**Author:** xil899
**Votes:** 6
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4636717/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4636717/)

---

# Intuition
Note that `x` is the number of flowers in the clockwise direction must be in the range `[1,n]`, and `y` is the number of flowers in the clockwise direction must be in the range `[1,m]`. Based on the rule of the game, if `x + y` is odd, then there will be no flowers after Alice's turn, and Alice wins. Thus, this question is essentially asking for the number of possible `x` and `y` such that `x + y` is odd.

# Approach
For any given `n` (either odd or even), the number of odd numbers in the range `[1,n]` is `(n + 1) // 2`, and the number of odd numbers in the range `[1,n]` is `n // 2`. Similarly, for any given `m` (either odd or even), the number of odd numbers in the range `[1,m]` is `(m + 1) // 2`, and the number of odd numbers in the range `[1,m]` is `m // 2`.

Thus, the total number of possible `x` and `y` such that `x + y` is odd, where `x` is in the range `[1,n]` and `y` is in the range `[1,m]` is `(n + 1) // 2 * (m // 2) + (n // 2) * ((m + 1) // 2)`.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution:
    def minimumPushes(self, word: str) -> int:
        return (n + 1) // 2 * (m // 2) + (n // 2) * ((m + 1) // 2)
```

# Extra
The above code can be further reduced to the following (by checking the parity of `n` and `m`):
```
class Solution:
    def minimumPushes(self, word: str) -> int:
        return n * m // 2
```