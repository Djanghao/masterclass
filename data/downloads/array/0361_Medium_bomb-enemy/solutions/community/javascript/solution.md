# JavaScript 2 solutions DP & BFS, easiest to understand

**Author:** ChaoWan_2021
**Votes:** 2
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/615796/](https://leetcode.com/problems/bomb-enemy/solutions/615796/)

---

DP: 
```
var maxKilledEnemies = function(grid) {
    const checkRowCol = ([row, col], [rowIncrement, colIncrement]) => {
        let num = 0;
        while(row < grid.length && col < grid[0].length && grid[row][col] !== 'W') {
            if(grid[row][col] === 'E') num++;
            row += rowIncrement;
            col += colIncrement;
        }
        return num;
    }
    let res = 0, rowCount = 0, colCount = [];
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 'W') continue;
            if(!col || grid[row][col - 1] === 'W') rowCount = checkRowCol([row, col], [0, 1]);
            if(!row || grid[row - 1][col] === 'W') colCount[col] = checkRowCol([row, col], [1, 0]);
            if(grid[row][col] === '0') res = Math.max(res, rowCount + colCount[col]);
        }
    }
    return res;
};
```

BFS:
```
var maxKilledEnemies = function(grid) {
    const bfs = (row, col) => {
        const checkValid = (x, y) => x >= 0 && y >=0 && x < grid.length && y < grid[0].length;
        let num = 0;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // down, up, left, right
        for(const [rowDir, colDir] of directions) {
            let newRow = row, newCol = col;
            while(checkValid(newRow, newCol) && grid[newRow][newCol] !== 'W') {
                if(grid[newRow][newCol] === 'E') num++;
                newRow = newRow + rowDir;
                newCol = newCol + colDir;
            }
        }
        return num;
    }
    let res = 0;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === '0') {
                res = Math.max(bfs(row, col), res);
            }
        }
    }
    return res;
};
```