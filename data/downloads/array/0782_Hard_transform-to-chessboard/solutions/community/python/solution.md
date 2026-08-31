# 782: Beats 98.8%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 3
**Link:** [https://leetcode.com/problems/transform-to-chessboard/solutions/4217080/](https://leetcode.com/problems/transform-to-chessboard/solutions/4217080/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
```
        n = len(board)
```

Get the size of the board.

```
        for i in range(n):
            for j in range(n):
                if board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]:
                    return -1
```

For every possible 2x2 square in the board (formed by picking cells (0, 0), (i, 0), (0, j), (i, j)), if the four cells are neither all the same nor all different, we instantly return -1 because it's impossible to form a chessboard in this situation. The ^ operator is a bitwise XOR operation that will return 1 if two bits are different and 0 if they're the same.

```
        row_sum = sum(board[0])
```

Count the number of ones in the first row.

```
        col_sum = sum(board[i][0] for i in range(n))
```

Count the number of ones in the first column.

```
        if not n//2 <= row_sum <= (n+1)//2:
            return -1
        if not n//2 <= col_sum <= (n+1)//2:
            return -1
```

Check if the number of ones in the first row and column is valid. A valid chessboard will have almost equal number of ones and zeros in the first row and column. Depending on whether the board size n is even or odd, we ensure that the number of ones lies in the acceptable range.

```
        row_swaps = sum(board[i][0] == i % 2 for i in range(n))
```

Calculate how many rows in the board have their starting bit different from their row index modulo 2. This will help determine how many rows we need to swap to get the desired alternating pattern.

```
        col_swaps = sum(board[0][i] == i % 2 for i in range(n))
```

Similarly, calculate how many columns have their starting bit different from their column index modulo 2.

```
        if n % 2:
```

If the size of the board n is odd

```
            if row_swaps % 2:
                row_swaps = n - row_swaps
```

If the number of row swaps is odd, you adjust it because you can't make an odd number of swaps to achieve the desired configuration. It becomes the complement, i.e., the difference from the total number of rows.

```
            if col_swaps % 2:
                col_swaps = n - col_swaps
```

Similarly, adjust column swaps if it's odd.

```
        else:
            row_swaps = min(row_swaps, n - row_swaps)
            col_swaps = min(col_swaps, n - col_swaps)
```

If n is even, for both rows and columns, choose the minimum between the calculated swaps and its complement. This ensures you always take the minimum number of swaps required.

```
        return (row_swaps + col_swaps) // 2
```

Finally, return the total number of swaps required. We divide by 2 because for every two moves, we fix one position in both rows and columns.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```
class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
        n = len(board)
        
        for i in range(n):
            for j in range(n):
                if board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]:
                    return -1
        
        row_sum = sum(board[0])
        col_sum = sum(board[i][0] for i in range(n))

        if not n//2 <= row_sum <= (n+1)//2:
            return -1
        if not n//2 <= col_sum <= (n+1)//2:
            return -1

        row_swaps = sum(board[i][0] == i % 2 for i in range(n))
        col_swaps = sum(board[0][i] == i % 2 for i in range(n))

        if n % 2:
            if row_swaps % 2:
                row_swaps = n - row_swaps
            if col_swaps % 2:
                col_swaps = n - col_swaps
        else:
            row_swaps = min(row_swaps, n - row_swaps)
            col_swaps = min(col_swaps, n - col_swaps)
        
        return (row_swaps + col_swaps) // 2

```