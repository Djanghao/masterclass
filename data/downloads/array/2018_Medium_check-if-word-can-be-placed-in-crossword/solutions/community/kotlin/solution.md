# Kotlin DFS straight forward

**Author:** jacob_ho
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1959143/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1959143/)

---

```
class Solution {
    fun placeWordInCrossword(board: Array<CharArray>, word: String): Boolean {
        for (x in 0 until board.count()) {
            for (y in 0 until board[x].count()) {
                if (placeWordInCrossword(board, word, x, y)) return true
            }
        }
        return false
    }

    private fun placeWordInCrossword(board: Array<CharArray>, word: String, x: Int, y: Int): Boolean {
        if (board[x][y] == '#') return false
        if (((x == 0 || board[x - 1][y] == '#')
                    && fillWord(board, word, x, y, 1, 0, 0))
        ) return true
        if (((x == board.count() - 1 || board[x + 1][y] == '#')
                    && fillWord(board, word, x, y, -1, 0, 0))
        ) return true
        if (((y == 0 || board[x][y - 1] == '#')
                    && fillWord(board, word, x, y, 0, 1, 0))
        ) return true
        if (((y == board[x].count() - 1 || board[x][y + 1] == '#')
                    && fillWord(board, word, x, y, 0, -1, 0))
        ) return true
        return false
    }

    private fun fillWord(board: Array<CharArray>, word: String, x: Int, y: Int, dx: Int, dy: Int, i: Int): Boolean {
        if (x < 0 || y < 0 || x == board.count() || y == board[x].count()) {
            return i == word.count()
        }
        if (board[x][y] == '#') return i == word.count()
        if (i == word.count()) return false
        if (board[x][y] != ' ' && board[x][y] != word[i]) return false
        return fillWord(board, word, x + dx, y + dy, dx, dy, i + 1)
    }
}


```