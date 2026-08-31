# check-if-move-is-legal- TS Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/6014542/](https://leetcode.com/problems/check-if-move-is-legal/solutions/6014542/)

---



# Code
```typescript []
function getCellAt(board: string[][], x: number, y: number): string | undefined {
    if (y >= board.length || x >= board[0].length || y < 0 || x < 0) {
        return undefined; 
    }
    return board[y][x];
}

type Modifier = { x: number, y: number };


const lineMoves: Modifier[] = [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }];



function checkMove(board: string[][], rMove: number, cMove: number, color: string): boolean {
    if (getCellAt(board, cMove, rMove) !== '.') {
        return false; 
    }

    function checkForValidLine(x: number, y: number, length: number, modifier: Modifier): boolean {
        const cell = getCellAt(board, x, y);
        const opositeColor = color === 'B' ? 'W' : 'B';
        if (!cell || cell === '.') {
            return false; 
        }
        if (cell === opositeColor) {
            return checkForValidLine(x + modifier.x, y + modifier.y, length + 1, modifier); // Keep going in same direction
        }else if (length > 1) {
            return true; 
        }
        return false; 
    }

    return lineMoves.some( modifier => checkForValidLine(cMove + modifier.x, rMove + modifier.y, 1, modifier));
};
```