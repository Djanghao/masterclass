# Kotlin: Beats 100%, 2 Approaches with detailed comments

**Author:** karum006
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/3289827/](https://leetcode.com/problems/n-queens-ii/solutions/3289827/)

---


```
class Solution {
    // Approach 1: Use backtracking/recursive DFS to iterate all possible columns
    // for each row/queen. If the column is already vulnerable, then skip over. To
    // check the vulnerability check if a queen is already present in the column/row
    // diagonal.
    fun totalNQueens(n: Int): Int {
        var results = 0
        val queenPositions = Array(n) { CharArray(n) { '.' } }
        
        fun isVulnerable(rowIndex: Int, columnIndex: Int): Boolean {
            // Check for row/column/diagonal. Check only until the current row
            // since the rows below will be not be populated with Queens yet
            // This is just an optimization
            for (i in 0 until rowIndex) {
                for (j in 0 until n) {
                    if (i == rowIndex 
                        || j == columnIndex 
                        || Math.abs(rowIndex - i) == Math.abs(columnIndex - j)
                    ) {
                        if (queenPositions[i][j] == 'Q') return true
                    }
                }
            }
            return false
        }

        fun queensRecur(rowIndex: Int) {
            // All queens have been allocated, add result
            if (rowIndex == n) {
                results++
                return
            }

            // Consider all possible columns for a row startIndex
            for(columnIndex in 0 until n) {
                // if position is vulnerable, skip the column
                if (isVulnerable(rowIndex, columnIndex)) continue
                queenPositions[rowIndex][columnIndex] = 'Q'
                queensRecur(rowIndex + 1)
                queenPositions[rowIndex][columnIndex] = '.'
            }
        }

        queensRecur(0)
        return results
    }

    // Approach 2: Same backtracking approach as Approach 1, but for tracking the
    // vulnerability, use extra memory to keep track of the columns, positive and
    // negative diagonals used. Positive diagonals will have same rowIndex + columnIndex
    // Negative diagonals will have same rowIndex - columnIndex.
    fun totalNQueens2(n: Int): Int {
        var results = 0
        val queenPositions = Array(n) { CharArray(n) { '.' } }
        val columnSet = hashSetOf<Int>()
        val posDiagSet = hashSetOf<Int>()
        val negDiagSet = hashSetOf<Int>()

        fun queensRecur(rowIndex: Int) {
            // All queens have been allocated, add result
            if (rowIndex == n) {
                results++
                return
            }

            // Consider all possible columns for a row startIndex
            for(columnIndex in 0 until n) {
                // if position is vulnerable, skip the column
                if (columnSet.contains(columnIndex)
                    || posDiagSet.contains(rowIndex + columnIndex)
                    || negDiagSet.contains(rowIndex - columnIndex)) continue

                queenPositions[rowIndex][columnIndex] = 'Q'
                columnSet.add(columnIndex)
                posDiagSet.add(rowIndex + columnIndex)
                negDiagSet.add(rowIndex - columnIndex)

                queensRecur(rowIndex + 1)

                queenPositions[rowIndex][columnIndex] = '.'
                columnSet.remove(columnIndex)
                posDiagSet.remove(rowIndex + columnIndex)
                negDiagSet.remove(rowIndex - columnIndex)
            }
        }

        queensRecur(0)
        return results
    }
}
```