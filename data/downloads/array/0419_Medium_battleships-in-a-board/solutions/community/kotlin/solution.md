# Solution in one iteration through the matrix without using additional memory.

**Author:** drgavrikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/5028822/](https://leetcode.com/problems/battleships-in-a-board/solutions/5028822/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can define the count of battleships by counting the number of right upper corners.

# Approach
<!-- Describe your approach to solving the problem. -->
A cell $#$ is a right upper corner of a battleship if and only if there is either a $.$ or the edge of the board above and to the right of it. We can easily count the number of such cells in one pass through the matrix.

# Complexity
- Time complexity: $O(n^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ additional memory
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countBattleships(board: Array<CharArray>): Int {
        var result = 0
        val n = board.size
        val m = board[0].size
        for (i in 0 until n) {
            for (j in 0 until m) {
                if (
                    board[i][j] == 'X' && 
                    (i == 0 || board[i - 1][j] == '.') && 
                    (j == 0 || board[i][j - 1] == '.')
                ) result++
            }
        }
        return result
    }
}
```