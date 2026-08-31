# 💥[EXPLAINED] TypeScript. Runtime beats 95.50%

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/5676468/](https://leetcode.com/problems/sudoku-solver/solutions/5676468/)

---

# Intuition
 Use backtracking to explore all possible placements of digits in the empty cells while ensuring Sudoku constraints.


# Approach
Backtracking: Recursively try placing digits in empty cells.


Validation: Ensure each placement adheres to Sudoku rules (unique digits in rows, columns, and 3x3 subgrids).


Solve: If a placement leads to a solution, the board is solved; otherwise, backtrack and try the next digit.


# Complexity
- Time complexity:
O(9 81). This is because in the worst case, every cell could potentially be tried with each digit (1-9), though backtracking significantly reduces the actual number of operations.


- Space complexity:
O(1) for additional space. The fixed-size arrays and auxiliary structures use constant space, though the recursion stack depth can go up to O(N 2) in the worst case.


# Code
```typescript []
function solveSudoku(board: string[][]): void {
    const rows: number[][] = Array.from({ length: 9 }, () => Array(10).fill(0));
    const cols: number[][] = Array.from({ length: 9 }, () => Array(10).fill(0));
    const boxes: number[][] = Array.from({ length: 9 }, () => Array(10).fill(0));
    const emptyCells: [number, number][] = [];

    // Initialize the bitmasks and collect empty cells
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === '.') {
                emptyCells.push([r, c]);
            } else {
                const n = parseInt(num);
                rows[r][n] = 1;
                cols[c][n] = 1;
                boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][n] = 1;
            }
        }
    }

    function isValid(r: number, c: number, n: number): boolean {
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        return rows[r][n] === 0 && cols[c][n] === 0 && boxes[boxIndex][n] === 0;
    }

    function placeNumber(r: number, c: number, n: number): void {
        rows[r][n] = 1;
        cols[c][n] = 1;
        boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][n] = 1;
        board[r][c] = n.toString();
    }

    function removeNumber(r: number, c: number, n: number): void {
        rows[r][n] = 0;
        cols[c][n] = 0;
        boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][n] = 0;
        board[r][c] = '.';
    }

    function backtrack(index: number): boolean {
        if (index === emptyCells.length) return true;

        const [r, c] = emptyCells[index];
        for (let n = 1; n <= 9; n++) {
            if (isValid(r, c, n)) {
                placeNumber(r, c, n);
                if (backtrack(index + 1)) return true;
                removeNumber(r, c, n);
            }
        }
        return false;
    }

    backtrack(0);
}

```