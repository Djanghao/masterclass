# Ex-Amazon explains a solution with a video, Python, JavaScript and Java

**Author:** niits
**Votes:** 11
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3799617/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3799617/)

---

# Intuition
Creating two boards and keep current and next probability.
This Python solution beats 92%.

![\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2023-07-22 15.45.14.png](./images/0.png)

---

# Solution Video
## *** Please upvote for this article. *** 

https://youtu.be/e3oSatmeAPo

# Subscribe to my channel from here. I have 227 videos as of July 22th
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

---

# Approach
This is based on Python. Other language might be different a bit.

1. Define a list `moves` that contains all possible directions a knight can move to. Each element in `moves` is a tuple representing the relative coordinates for each direction.

2. Create two 2D lists `cur_board` and `next_board`, both of size `n x n`, and initialize all elements to 0.0.

3. Set the starting position `next_board[row][column]` to 1.0, as the knight is initially at this cell.

4. Iterate `k` times, where `k` represents the number of moves the knight can take.

5. For each iteration, update `cur_board` with the values from `next_board`, and reset `next_board` to a new 2D list of size `n x n` filled with zeros.

6. For each cell `(r, c)` in the `cur_board` (representing the current state of the knight at each position), calculate the probability of reaching the neighboring cells by taking all possible moves (as specified in `moves`).

7. If the current cell is not reachable (`cur_board[r][c] == 0.0`), continue to the next cell.

8. If the neighboring cell `(next_row, next_col)` is within the chessboard (0 <= next_row < n and 0 <= next_col < n), update the probability of reaching that cell in `next_board` by adding the probability from the current cell divided by 8.0. This is because there are 8 possible moves the knight can take from the current cell.

9. Repeat steps 6-8 for all cells in the `cur_board`, updating the `next_board` with the new probabilities.

10. After `k` iterations, the `next_board` will contain the probabilities of the knight being at each cell on the chessboard after `k` moves.

11. Calculate the total probability of the knight being on the chessboard by summing up all the probabilities in `next_board`.

12. Return the total probability as the final result.

The code uses dynamic programming to calculate the probabilities efficiently and stores the intermediate results in `cur_board` and `next_board` for each iteration to avoid redundant calculations.

# Complexity
This is based on Python. Other language might be different a bit.

- Time complexity: O(k * n^2)
The outer loop runs k times, and the two nested loops run n^2 times each

- Space complexity: O(n^2)
Two 2D arrays, cur_board and next_board, are created with dimensions n x n, each occupying n^2 space.

k represents the number of moves the knight can take, and n is the size of the chessboard. 

```python []
class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        moves = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]

        cur_board = [[0.0] * n for _ in range(n)]
        next_board = [[0.0] * n for _ in range(n)]
        next_board[row][column] = 1.0

        for _ in range(k):
            cur_board, next_board = next_board, [[0.0] * n for _ in range(n)]

            for r in range(n):
                for c in range(n):
                    if cur_board[r][c] == 0.0:
                        continue
                    
                    for dr, dc in moves:
                        next_row, next_col = r + dr, c + dc

                        if 0 <= next_row < n and 0 <= next_col < n:
                            next_board[next_row][next_col] += cur_board[r][c] / 8.0
        
        total = 0.0
        for r in range(n):
            for c in range(n):
                total += next_board[r][c]
        
        return total
```
``` javascript []
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

    let curBoard = Array.from({ length: n }, () => Array(n).fill(0.0));
    let nextBoard = Array.from({ length: n }, () => Array(n).fill(0.0));
    nextBoard[row][column] = 1.0;

    for (let i = 0; i < k; i++) {
        [curBoard, nextBoard] = [nextBoard, Array.from({ length: n }, () => Array(n).fill(0.0))];

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (curBoard[r][c] === 0.0) {
                    continue;
                }

                for (const [dr, dc] of moves) {
                    const nextRow = r + dr;
                    const nextCol = c + dc;

                    if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
                        nextBoard[nextRow][nextCol] += curBoard[r][c] / 8.0;
                    }
                }
            }
        }
    }

    let total = 0.0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            total += nextBoard[r][c];
        }
    }

    return total;    
};
```
```java []
class Solution {

    public double knightProbability(int n, int k, int row, int column) {
        int[][] moves = {{-2, -1}, {-2, 1}, {-1, -2}, {-1, 2}, {1, -2}, {1, 2}, {2, -1}, {2, 1}};

        double [][] curBoard;
        double [][] nextBoard = new double[n][n];
        nextBoard[row][column] = 1.0;
        
        for (int i = 0; i < k; i++) {
            curBoard = nextBoard;
            nextBoard = new double[n][n];
            
            for (int r = 0; r < n; r++) {
                for (int c = 0; c < n; c++) {
                    if (curBoard[r][c] == 0.0)
                        continue;
                    
                    for (int [] dir : moves) {
                        int nextRow = r + dir[0];
                        int nextCol = c + dir[1];
                        
                        if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
                            nextBoard[nextRow][nextCol] += curBoard[r][c] / 8.0;
                        }
                    }
                }
            }
        }
        
        double total = 0.0;
        for (int r = 0; r < n; r++)
            for (int c = 0; c < n; c++)
                total += nextBoard[r][c];
        
        return total;
    }
}
```
