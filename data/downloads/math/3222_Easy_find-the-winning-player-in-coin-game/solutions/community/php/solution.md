# One line

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5507809/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5507809/)

---

# Approach
The solution calculates the minimum number of 75-value coins Alice can pick up or the number of 10-value coins Bob can pick up divided by 4. 
If this number is even, it indicates that Bob can always ensure the total value of 115 in each turn and eventually win the game. 
If the number is odd, Alice will win the game because Bob will not be able to reach the total value in the last turn. 

# Complexity
- Time complexity:
$$O(1)$$, as it performs constant time operations.

- Space complexity:
$$O(1)$$, as no additional data structures or memory allocation is required.

# Code
``` python3 []
class Solution:
    def losingPlayer(self, x: int, y: int) -> str:
        return "Bob" if min(x, y // 4) % 2 == 0 else "Alice"
```
``` javascript []
/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    return (Math.min(x, Math.floor(y / 4)) % 2 === 0) ? "Bob" : "Alice";
};
```
``` php []
class Solution {

    /**
     * @param Integer $x
     * @param Integer $y
     * @return String
     */
    function losingPlayer($x, $y) {
        return (min($x, floor($y / 4)) % 2 === 0) ? "Bob" : "Alice";
    }
}
```