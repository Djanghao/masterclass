# Brute force

**Author:** drawers
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/4876305/](https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/4876305/)

---

# Intuition
Search each submatrix, bind the letters as we go

# Complexity

- Time complexity:

Assume $$n$$ rows and $$m$$ columns in the board.


Given a matrix of size $$nm$$ and a pattern of size $$pq$$ then we will need to search $$n-p$$ $$m-q$$ submatrices. 

Each search will cost $$pq$$. So $$O( (n - p).(m - q).(pq) )$$ 

- Space complexity:

We are required to store mappings of letters to numbers. There are a maximium of 26 letters. Therefore $$O(1)$$.


# Code
```
class Solution {
    fun findPattern(board: Array<IntArray>, pattern: Array<String>): IntArray {
        for (row in 0..board.size - pattern.size) {
            for (col in 0..board[0].size - pattern[0].length) {
                if (searchSubmatrix(board, row, col, pattern)) {
                    return intArrayOf(row, col)
                }
            }
        }
        return intArrayOf(-1, -1)
    }

    private fun searchSubmatrix(
        board: Array<IntArray>,
        boardRow: Int,
        boardCol: Int,
        pattern: Array<String>
    ): Boolean {
        val charToInt = hashMapOf<Char, Int>()
        val boundInts = hashSetOf<Int>()
        for (patternRow in pattern.indices) {
            for (patternCol in 0 until pattern[0].length) {
                val boardInt = board[boardRow + patternRow][boardCol + patternCol]
                when (val patternChar = pattern[patternRow][patternCol]) {
                    in '0'..'9' -> {
                        if (boardInt != patternChar.digitToInt()) {
                            return false
                        }
                    }

                    else -> {
                        // check(patternChar in 'a'..'z')
                        val boundNumber = charToInt[patternChar]
                        if (boundNumber == null) {
                            if (boardInt in boundInts) {
                                return false
                            }
                            charToInt[patternChar] = boardInt
                            boundInts.add(boardInt)
                        } else {
                            // we've already bound something like 'a' -> 1
                            // make sure we match the 1
                            if (boundNumber != boardInt) {
                                return false
                            }
                        }
                    }
                }
            }
        }
        return true
    }
}
```