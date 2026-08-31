# TypeScript Optimized Approach

**Author:** benmar000
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/3802990/](https://leetcode.com/problems/design-tic-tac-toe/solutions/3802990/)

---

# Approach
Converted to TypeScript from Editorial's Java solution

# Complexity
- Time complexity:
Time Complexity: O(1) because for every move, we mark a particular row, column, diagonal, and anti-diagonal in constant time.

- Space complexity:
Space Complexity: O(n) because we use arrays rows and cols of size n. The variables diagonal and antiDiagonal use constant extra space.

# Code
```
class TicTacToe {
    rows: number[];
    cols: number[];
    diagonal: number;
    antiDiagonal: number;

    constructor(n: number) {
        this.rows = Array(n).fill(0);
        this.cols = Array(n).fill(0);
        this.diagonal = 0;
        this.antiDiagonal = 0;
    }

    move(row: number, col: number, player: number): number {
        const currentPlayer = player === 1 ? 1 : -1;
        // update currentPlayer in rows an cols array
        this.rows[row] += currentPlayer;
        this.cols[col] += currentPlayer;

        if (row === col) {
            this.diagonal += currentPlayer;
        }

        if (col === (this.cols.length - row - 1)) {
            this.antiDiagonal += currentPlayer;
        }

        const n = this.rows.length;

        // check if current player wins
        if(Math.abs(this.rows[row]) === n  || 
            Math.abs(this.cols[col]) === n ||
            Math.abs(this.diagonal) === n  ||
            Math.abs(this.antiDiagonal) === n
            ) {
                return player;
            }

            // no one wins
            return 0;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
```