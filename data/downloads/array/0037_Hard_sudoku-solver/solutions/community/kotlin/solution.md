# Idiomatic Kotlin recursive backtracking-in-place solution

**Author:** javamage
**Votes:** 1
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/1828981/](https://leetcode.com/problems/sudoku-solver/solutions/1828981/)

---

This recursive backtracking solution updates the board in-place to save memory, undoing changes if an attempt doesn't work

```
// helpers to make array access more natural
inline operator fun Array<BooleanArray>.get(row: Int, column: Int) = this[row][column]
inline operator fun Array<BooleanArray>.set(row: Int, column: Int, value: Boolean) { this[row][column] = value }
inline operator fun Array<CharArray>.get(row: Int, column: Int) = this[row][column]
inline operator fun Array<CharArray>.set(row: Int, column: Int, value: Char) { this[row][column] = value }
inline fun inSquare(row: Int, column: Int) = (row / 3 * 3) + (column / 3)

class Solution {
    /**
     * Solve a Sudoku assuming there's a valid solution for a starting board
     * @param board the starting board; will be filled in by this solver
     */
    fun solveSudoku(board: Array<CharArray>) {

        // track which values we've seen in each row/column/square so we know invalid options
        val rowNumbersSeen = Array(9) { BooleanArray(9) }
        val columnNumbersSeen = Array(9) { BooleanArray(9) }
        val squareNumbersSeen = Array(9) { BooleanArray(9) }

        /**
         * Recursive function to extend our answer
         * note that we modify the board in place rather than creating new copies
         * for each call. This requires that we "undo" any bad attempts, which are
         * remembered in locals in the call stack
         * @param board The board array
         * @param numEntries The number of entries on this board
         * @return true if the board is valid and complete
         */
        fun extend(
            board: Array<CharArray>,
            numEntries: Int
        ): Boolean {
            // if we're full, just return true
            if (numEntries == 81) {
                return true
            }

            // find next empty spot
            (0..8).forEach { row ->
                (0..8).forEach { column ->
                    val char = board[row, column]
                    if (char == '.') { // it's empty
                        val square = inSquare(row, column) // which 3x3 square is it in?

                        // try entries that are valid with what we have so far
                        (0..8)
                            .filter { num ->  // narrow to only valid entries
                                !rowNumbersSeen[row, num] &&
                                !columnNumbersSeen[column, num] &&
                                !squareNumbersSeen[square, num]
                            }
                            .forEach { num ->
                                // try modifying the board with the new attempt
                                board[row, column] = '1' + num // convert the 0..8 to '1'..'9'
                                // track what we've seen
                                rowNumbersSeen[row, num] = true
                                columnNumbersSeen[column, num] = true
                                squareNumbersSeen[square, num] = true

                                // attempt to extend the board further
                                // if solution found, propagate true upward so we'll stop
                                if (extend(board, numEntries + 1)) return true

                                // didn't find solution; back out the attempted addition
                                board[row, column] = '.'
                                rowNumbersSeen[row, num] = false
                                columnNumbersSeen[column, num] = false
                                squareNumbersSeen[square, num] = false
                            }

                        // didn't find any valid extensions; this attempt is invalid
                        return false
                    }
                }
            }
            // we didn't find any empty spots (should not be possible but return required here)
            return false
        }

        // start the first attempt

        var entries = 0
        // count and track initial entries
        for (row in 0..8) {
            for (column in 0..8) {
                val char = board[row, column]
                if (char != '.') {
                    entries++
                    val num = char - '1' // convert from '1'..'9' to 0..8
                    rowNumbersSeen[row, num] = true
                    columnNumbersSeen[column, num] = true
                    squareNumbersSeen[inSquare(row, column), num] = true
                }
            }
        }

        // go for it!
        extend(board, entries)

        // print the result
        board.forEach { row ->
            println(row.joinToString(" "))
        }
    }
}
```