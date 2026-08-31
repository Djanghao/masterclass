# TypeScript DFS

**Author:** YuanRuQian
**Votes:** 1
**Link:** [https://leetcode.com/problems/minesweeper/solutions/2644120/](https://leetcode.com/problems/minesweeper/solutions/2644120/)

---



# Code
```



function updateBoard(board: string[][], click: number[]): string[][] {

    const m = board.length, n = board[0].length
    const dirs = [[0, -1], [0, 1], [1, 0], [-1, 0], [-1, -1], [1, 1], [-1, 1], [1, -1]]

    function countMinesNeighbors(row: number, col: number): number {
        let mines = 0
        for (const [r, c] of dirs) {
            const nr = row + r, nc = col + c
            if (nr < 0 || nc < 0 || nr === m || nc === n) {
                continue
            }
            mines += board[nr][nc] === 'M' ? 1 : 0
        }
        return mines
    }

    function updateCell(row: number, col: number) {
        if (row < 0 || col < 0 || row === m || col === n) {
            return
        }
        if (board[row][col] === 'M') {
            board[row][col] = 'X'
            return
        }
        if (board[row][col] === 'E') {
            const minesCount = countMinesNeighbors(row, col)
            if (minesCount === 0) {
                board[row][col] = 'B'
                for (const [r, c] of dirs) {
                    const nr = row + r, nc = col + c
                    if (nr < 0 || nc < 0 || nr === m || nc === n) {
                        continue
                    }
                    updateCell(nr, nc)
                }
            }
            else {
                board[row][col] = String(minesCount)
            }
        }

    }

    updateCell(click[0], click[1]);

    return board;
};
```