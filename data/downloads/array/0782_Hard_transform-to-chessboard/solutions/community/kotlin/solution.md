# Kotlin with explanation

**Author:** Arista_agarwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/transform-to-chessboard/solutions/4952361/](https://leetcode.com/problems/transform-to-chessboard/solutions/4952361/)

---

# Approach
Validity Check: The code starts by checking the validity of the chessboard by comparing each cell in the first row and first column with the top-left cell (b[0][0]). It checks if the XOR of these cells equals 1. If it does, it means the chessboard cannot be formed, and -1 is returned.
Counting Row and Column Sums:

Next, the code iterates through the first row and first column to count the number of 1s. This count is stored in rowSum and colSum.
Additionally, it counts the number of rows and columns that need to be swapped (rowSwap and colSwap). If a row or column needs to be swapped, it increments the respective swap counter.
Checking Row and Column Sums Validity:

After counting, it checks if the row and column sums are valid for forming a chessboard. If the sums are not equal to N / 2 or (N + 1) / 2, where N is the size of the board, it means the chessboard cannot be formed, and -1 is returned.
Adjusting Swap Counts for Even and Odd Board Sizes:

If the board size N is odd, the code ensures that the number of swaps for rows and columns is even. If it's odd, it adjusts it to make it even.
If the board size is even, the code takes the minimum of the original swap count and its complement to N.
Calculating the Minimum Number of Swaps:

Finally, the code calculates the minimum number of swaps needed by adding the row and column swap counts and dividing by 2. This is because each swap operation fixes two cells (one in a row and one in a column) of the chessboard.

# Code
```
class Solution {
    fun movesToChessboard(board: Array<IntArray>): Int {
        val n = board.size
        var rowSum = 0
        var colSum = 0
        var rowSwap = 0
        var colSwap = 0

        for (i in 0 until n) {
            for (j in 0 until n) {
                if ((board[0][0] xor board[i][0] xor board[0][j] xor board[i][j]) == 1) return -1
            }
        }

        for (i in 0 until n) {
            rowSum += board[0][i]
            colSum += board[i][0]
            if (board[i][0] == i % 2) rowSwap++
            if (board[0][i] == i % 2) colSwap++
        }

        if (rowSum != n / 2 && rowSum != (n + 1) / 2) return -1
        if (colSum != n / 2 && colSum != (n + 1) / 2) return -1

        if (n % 2 == 1) {
            if (colSwap % 2 == 1) colSwap = n - colSwap
            if (rowSwap % 2 == 1) rowSwap = n - rowSwap
        } else {
            colSwap = minOf(n - colSwap, colSwap)
            rowSwap = minOf(n - rowSwap, rowSwap)
        }

        return (colSwap + rowSwap) / 2
    }

}
```