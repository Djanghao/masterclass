# Kotlin O(n*m) time O(1) space

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/5434351/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/5434351/)

---

# Code
```
class Solution {

    // O(n*m) time O(1) space
    fun validTicTacToe(board: Array<String>): Boolean {
        val x = board.count('X')
        val o = board.count('O')
        if (x != o && x != o + 1) {
            return false
        }

        val wins: Set<Char> = board.horizontalWins() + board.verticalWins() + board.diagonalWins()
        return when {
            wins.size > 1 -> false
            wins.size == 1 && wins.contains('X') -> x == o + 1
            wins.size == 1 && wins.contains('O') -> x == o
            else -> true 
        }
    }

    private fun Array<String>.diagonalWins(): Set<Char> {
        var result = HashSet<Char>()
        
        val middle = this[1][1]
        if (middle != 'X' && middle != 'O') {
            return result
        }

        if (this[0][0] == middle && this[2][2] == middle) {
            result.add(middle)
        } 
        if (this[0][2] == middle && this[2][0] == middle) {
            result.add(middle)
        }
        return result
    }

    private fun Array<String>.verticalWins(): Set<Char> {
        var result = HashSet<Char>()
        outerLoop@ for (j in 0..2) {
            val firstSymbol = this[0][j]
            if (firstSymbol != 'X' && firstSymbol != 'O') {
                continue@outerLoop
            }
            if (this[1][j] == firstSymbol && this[2][j] == firstSymbol) {
                result.add(firstSymbol)
            }
        }
        return result
    }

    private fun Array<String>.horizontalWins(): Set<Char> {
        var result = HashSet<Char>()
        for (i in 0..2) {
            if (this[i] == "XXX") {
                result.add('X')
            } else if (this[i] == "OOO") {
                result.add('O')
            }
        }
        return result
    }

    private fun Array<String>.count(char: Char): Int {
        var result = 0
        for (i in 0..2) {
            for (j in 0..2) {
                if (this[i][j] == char) {
                    result += 1
                }
            }
        }
        return result
    }
}
```