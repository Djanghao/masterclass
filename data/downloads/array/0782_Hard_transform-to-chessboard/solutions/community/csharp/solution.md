# ⚡C# | Beats runtime AND memory 100% [EXPLAINED IN DETAILS]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/transform-to-chessboard/solutions/5743496/](https://leetcode.com/problems/transform-to-chessboard/solutions/5743496/)

---

# Intuition
When I looked at this problem, it was clear that I needed to transform a grid of 0s and 1s into a chessboard pattern, where no two adjacent cells are the same. Essentially, I want the board to look like a checkerboard, alternating between 0 and 1.

To solve this, I realized I could only swap rows and columns. So, the rows and columns in a valid chessboard pattern have to either be exactly the same as or the opposite of each other. My task is to see if I can rearrange the grid to meet this pattern and, if so, figure out the minimum number of swaps needed.


# Approach
Check if It\u2019s Possible: First, I need to check if it's even possible to turn the grid into a chessboard. I do this by comparing the rows and columns to the first row and column. For a valid chessboard:

Every row should be either the same as or the reverse of the first row.

Every column should be either the same as or the reverse of the first column.

If any row or column doesn\u2019t match this pattern, I know it\u2019s impossible to form a chessboard and return -1.

Count 1s and 0s: If the board looks like it can be turned into a chessboard, I check how many 1s and 0s are in the first row and first column. For a proper chessboard, these counts should be balanced. If they\u2019re not, it\u2019s impossible to make a chessboard pattern, so I return -1.

Calculate the Swaps:
 If the board is valid, I count how many rows and columns are out of place compared to the chessboard pattern. Then, I figure out how many swaps are needed to fix them.

Depending on whether the board size n is even or odd, there might be two valid patterns (for even n) or just one (for odd n). I calculate the minimum number of swaps required to align the board with one of these patterns and return that number.


# Complexity
- Time complexity:
O(n\xB2). I have to check every cell in the grid to see if it fits the chessboard pattern and count how many swaps are needed. So, the time it takes grows with the square of the size of the board.


- Space complexity:
O(1). I only use a few extra variables to keep track of counts and swaps, so the amount of extra space I need doesn\u2019t depend on the size of the board.

# Code
```csharp []
public class Solution {
    public int MovesToChessboard(int[][] board) {
        int n = board.Length;
        
        // Check for the validity of rows and columns
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if ((board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]) != 0)
                    return -1; // Invalid chessboard pattern
            }
        }

        // Count how many rows and columns we need to swap
        int rowSum = 0, colSum = 0, rowSwap = 0, colSwap = 0;
        
        // Analyze the first row and first column for patterns
        for (int i = 0; i < n; ++i) {
            rowSum += board[0][i]; // Count 1's in the first row
            colSum += board[i][0]; // Count 1's in the first column
            rowSwap += (board[0][i] == i % 2) ? 1 : 0; // How many need to be swapped in rows
            colSwap += (board[i][0] == i % 2) ? 1 : 0; // How many need to be swapped in columns
        }
        
        // Check if the sum of 1s in row and column is valid for a chessboard pattern
        if (rowSum < n / 2 || rowSum > (n + 1) / 2) return -1;
        if (colSum < n / 2 || colSum > (n + 1) / 2) return -1;
        
        // Calculate the minimum number of swaps
        if (n % 2 == 1) {
            if (rowSwap % 2 != 0) rowSwap = n - rowSwap;
            if (colSwap % 2 != 0) colSwap = n - colSwap;
        } else {
            rowSwap = Math.Min(rowSwap, n - rowSwap);
            colSwap = Math.Min(colSwap, n - colSwap);
        }
        
        return (rowSwap + colSwap) / 2;
    }
}

```