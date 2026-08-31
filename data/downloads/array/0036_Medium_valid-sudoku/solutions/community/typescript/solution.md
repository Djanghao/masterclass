# TypeScript Easy Solution Using Set

**Author:** MikePetrusha
**Votes:** 28
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/3474482/](https://leetcode.com/problems/valid-sudoku/solutions/3474482/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->



# Code
```
function isValidSudoku(board: string[][]): boolean {
    const set = new Set()

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[i][j]
            if(cell === '.') continue
            const row = `row: ${i}, value: ${cell}`
            const column = `column: ${j}, value: ${cell}`
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const box = `boxNumber: ${boxNumber}, value: ${cell}`
            if(set.has(row) || set.has(column) || set.has(box)) return false
            set.add(row).add(column).add(box)
        }
    }
    return true
};
```