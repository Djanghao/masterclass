# One line

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/5413773/](https://leetcode.com/problems/robot-return-to-origin/solutions/5413773/)

---

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the moves string, as we need to iterate over each character in the string.

- Space complexity:
$$O(1)$$, as we are not using any additional data structures.

# Code
``` python3 []
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        return moves.count('U') == moves.count('D') and moves.count('L') == moves.count('R')
```
``` javascript []
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    return moves.split('U').length - 1 === moves.split('D').length - 1 && moves.split('L').length - 1 === moves.split('R').length - 1;
};
```
``` php []
class Solution {

    /**
     * @param String $moves
     * @return Boolean
     */
    function judgeCircle($moves) {
        return substr_count($moves, 'U') === substr_count($moves, 'D') && substr_count($moves, 'L') === substr_count($moves, 'R');
    }
}
```