# Single Array Iteration Solution

**Author:** cs_iitian
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4454337/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4454337/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
As we know that we can have 3 rows and 3 cols and 2 diagonals.
so we will create array of size 8, where first 3 will store row , second 3 will store col, then other 2 will store respective diagonals.

# Complexity
- Time complexity: O(c) where c is 9
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(c) where c is 9
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun tictactoe(moves: Array<IntArray>): String {
        val count = IntArray(8) { 0 }
        
        var inc = 1
        for(move in moves) {
            count[move[0]] += inc
            count[3 + move[1]] += inc
            if(move[0] == move[1]) count[6] += inc
            if((move[0] + move[1]) == 2) count[7] += inc
            inc *= -1
        }

        for(c in count) {
            if(c == 3) return "A"
            if(c == -3) return "B"
        }

        return if(moves.size == 9) "Draw" else "Pending"
    }
}
```