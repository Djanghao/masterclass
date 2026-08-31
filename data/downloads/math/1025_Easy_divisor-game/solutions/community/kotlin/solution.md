# Kotlin solution with detailed explanation

**Author:** leet-do-it
**Votes:** 2
**Link:** [https://leetcode.com/problems/divisor-game/solutions/4261217/](https://leetcode.com/problems/divisor-game/solutions/4261217/)

---

# Intuition
Playing with some initial values of `n` (from 1 to 10) shows a pattern that if n is odd, the first player will always lose and if n is even the first player will always win.
Implementation hence will be ultra simple but we have to prove our claim!

# Approach
Observation: if during a gameplay, the player who receives number 1 on the board (i.e. it is their turn next) will lose. This also serves as a base case: `if (n == 1) => first player loses`

In order to prove our intuition, we need to prove this statement:
"If the number on the board is odd, the next player (or the first player) will ALWAYS lose!"

We prove it by providing a strategy for the second player. 

As the first player has to choose a divisor of an odd number `n (>=3)`, that divisor `x` must be odd, hence the next number on the board `n-x` is even (and as `n > x`, `n - x >= 2`). 

Now, the second player will just need to choose `1` (smallest divisor and valid as the current number on the board `n-x` is guaranteed to be `>= 2`) and write a new number on the board, which is `n-x-1` and is odd again for the first player in the next turn.

This process will continue until the second player writes `1` on the board which throws the first player (next to play) to lose.

**Side note**: one may be challenged on why it is guarantee that the series of number will converge to `1`. It can be proven by two points:
    1. the series is strictly decreasing according to the game's rule (`n-x > 0`)
    2. `n-x = 2` has a solution when `n` is odd (`n = 3` and `x = 1`)

Hence once `n is 3`, next number on the board is forced to be `2`, and after that it is `1`.

Please upvote if this is helpful :)


# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
class Solution {
    fun divisorGame(n: Int): Boolean {
        // take the last bit of n and compare with 0
        // if it is 0, n is even and hence Alice wins
        // otherwise Alice loses.

        // one can also return (n % 2 == 0)
        return (n and 1 == 0)
    }
}
```