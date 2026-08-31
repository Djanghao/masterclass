# BFS + Binary Search Typescript

**Author:** Zeddic
**Votes:** 1
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698718/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698718/)

---

# Code
```
const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function latestDayToCross(row: number, col: number, cells: number[][]): number {

    function getGridAtDay(day: number) {
        const grid = new Array(row).fill(null).map(() => new Array(col).fill(0));

        for (let i = 0; i < day; i++) {
            const [r, c] = cells[i];
            grid[r - 1][c - 1] = 1;
        }

        return grid;
    }

    function canReachBottom(grid: number[][]) {
        const seen = new Set<string>();
        const queue: number[][] = [];
        for (let c = 0; c < col; c++) {
            if (grid[0][c] === 0) {
                queue.push([0, c]);
                seen.add(`0-${c}`);
            }
        }

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            if (r === row - 1) return true;

            for (const dir of DIRS) {
                const nextRow = r + dir[0];
                const nextCol = c + dir[1];
                const cell = grid[nextRow]?.[nextCol];
                if (cell !== 0) continue;
                if (seen.has(`${nextRow}-${nextCol}`)) continue;
                seen.add(`${nextRow}-${nextCol}`);
                queue.push([nextRow, nextCol]);
            }
        }

        return false;
    }

    let low = 1;
    let high = cells.length + 1;

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        const grid = getGridAtDay(mid);
        const ok = canReachBottom(grid);
        if (ok) {
            low = mid + 1;
        } else {
            high = mid; 
        }
    }


    return low - 1;
};


```