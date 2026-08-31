# Swift Solution with Explanations and Dry Run.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/transform-to-chessboard/solutions/3616635/](https://leetcode.com/problems/transform-to-chessboard/solutions/3616635/)

---

# Approach
The `movesToChessboard` function takes a 2D array (`board`) representing the chessboard configuration as input and returns an integer representing the minimum number of moves required. The code uses a dry run of the algorithm to explain the steps.

Here's a step-by-step explanation of the code:

1. Initialize variables `rowSum`, `colSum`, `rowSwap`, and `colSwap` to keep track of row and column sums, as well as the number of row and column swaps.

2. Iterate over each element of the chessboard using nested loops.

3. Check if the current element's XOR operation with the top-left element (`board[0][0]`), top element (`board[r][0]`), and left element (`board[0][c]`) is equal to 1. If true, it means there is an invalid configuration, and the function returns -1.

4. Calculate the sum of the first row (`rowSum`) and the sum of the first column (`colSum`).

5. Determine the number of row swaps (`rowSwap`) and column swaps (`colSwap`) needed. For each row and column, if the current element matches the expected pattern (`i % 2`), increment the respective swap counter.

6. Check if the rowSum is within the valid range (`N / 2` to `(N + 1) / 2`). If not, return -1.

7. Check if the colSum is within the valid range (`N / 2` to `(N + 1) / 2`). If not, return -1.

8. If the size of the chessboard (`N`) is odd, adjust the rowSwap and colSwap counts to minimize the number of swaps.

9. If the size of the chessboard is even, take the minimum value between the current swap count and the complement of the swap count (N - swapCount) for both rowSwap and colSwap.

10. Calculate the total number of swaps needed by adding rowSwap and colSwap and dividing it by 2.

11. Return the minimum number of swaps as the result.


# Dry Run
```
let board: [[Int]] = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

let solution = Solution()
let minMoves = solution.movesToChessboard(board)
print(minMoves)
```

Let's perform a sample check on the given code with a sample chessboard configuration.

In this example, we have a 4x4 chessboard represented by the `board` array. The elements of the array are either 0 or 1, indicating different pieces on the chessboard.

The provided code will be executed to find the minimum number of moves required to transform this chessboard configuration.

Step-by-step execution:
1. The code initializes variables `rowSum`, `colSum`, `rowSwap`, and `colSwap` to 0.
2. The first nested loop iterates over each element of the chessboard.
3. The XOR operation is performed to check the validity of the configuration. In this case, all XOR operations evaluate to 0, indicating a valid configuration.
4. The code calculates the row and column sums (`rowSum` and `colSum`) and the number of row and column swaps (`rowSwap` and `colSwap`).
   - `rowSum` = 4, `colSum` = 2, `rowSwap` = 2, `colSwap` = 2
5. Since the rowSum and colSum are within the valid range, no further checks are required.
6. The code checks if the size of the chessboard is odd or even. In this case, it is even.
7. The number of swaps needed is calculated by taking the minimum value between the current swap count and its complement for both rowSwap and colSwap. In this case, `rowSwap` and `colSwap` remain unchanged.
8. The total number of swaps needed is calculated by adding rowSwap and colSwap and dividing by 2. In this case, it is 2.
9. The result, `minMoves`, is set to 2.
10. The result, 2, is printed to the console.

# Complexity
- Time complexity: O(N^2)
- Space complexity: O(1)

# Code
```
class Solution
{
    func movesToChessboard(_ board: [[Int]]) -> Int
    {
        let N = board.count
        var rowSum = 0, colSum = 0, rowSwap = 0, colSwap = 0
        for r in 0..<N
        {
            for c in 0..<N
            {
                if (board[0][0] ^ board[r][0] ^ board[0][c] ^ board[r][c]) == 1
                {
                    return -1
                }
            }
        }
        for i in 0..<N
        {
            rowSum += board[0][i]
            colSum += board[i][0]
            rowSwap += board[i][0] == i % 2 ? 1 : 0
            colSwap += board[0][i] == i % 2 ? 1 : 0
        }
        if N / 2 > rowSum || rowSum > (N + 1) / 2
        {
            return -1
        }
        if N / 2 > colSum || colSum > (N + 1) / 2
        {
            return -1
        }
        if N % 2 == 1
        {
            if colSwap % 2 == 1
            {
                colSwap = N - colSwap
            }
            if rowSwap % 2 == 1
            {
                rowSwap = N - rowSwap
            }
        }
        else
        {
            colSwap = min(N - colSwap, colSwap)
            rowSwap = min(N - rowSwap, rowSwap)
        }
        return (colSwap + rowSwap) / 2
    }
}
```