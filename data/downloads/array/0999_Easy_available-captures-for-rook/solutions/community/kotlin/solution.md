# Kotlin

**Author:** fyrl29074
**Votes:** 0
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/5306456/](https://leetcode.com/problems/available-captures-for-rook/solutions/5306456/)

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
class Solution {
    fun numRookCaptures(board: Array<CharArray>): Int {
        var capturesCounter = 0
        val (rookRow, rookColumn) = findRook(board)  // Int, Int

        var left = rookColumn - 1
        while (left >= 0) {
            if (board[rookRow][left] == 'p') {
                capturesCounter++
                break
            }
            if (board[rookRow][left] == 'B') {
                break
            }
            left--
        }

        var right = rookColumn + 1
        while (right <= board[0].lastIndex) {
            if (board[rookRow][right] == 'p') {
                capturesCounter++
                break
            }
            if (board[rookRow][right] == 'B') {
                break
            }
            right++
        }

        var top = rookRow - 1
        while (top >= 0) {
            if (board[top][rookColumn] == 'p') {
                capturesCounter++
                break
            }
            if (board[top][rookColumn] == 'B') {
                break
            }
            top--
        }

        var bottom = rookRow + 1
        while (bottom <= board.lastIndex) {
            if (board[bottom][rookColumn] == 'p') {
                capturesCounter++
                break
            }
            if (board[bottom][rookColumn] == 'B') {
                break
            }
            bottom++
        }

        return capturesCounter
    }

    private fun findRook(board: Array<CharArray>): IntArray {
        for (i in 0..board.lastIndex) {
            val row = board[i]
            for (j in 0..row.lastIndex) {
                if (row[j] == 'R') return intArrayOf(i, j)
            }
        }

        return intArrayOf(-1, -1)
    }
}
```