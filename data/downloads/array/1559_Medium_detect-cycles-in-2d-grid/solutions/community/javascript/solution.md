# JS Solution

**Author:** VarunNarayan21
**Votes:** 3
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4323675/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4323675/)

---


# Code
```

const directions = [[1,0],[-1,0],[0,1],[0,-1]];
var containsCycle = function(grid) {
    const visited = new Set();

    for(let row =0; row < grid.length; row++) {
        for(let col =0; col < grid[0].length; col++) {
            if(!visited.has(row + "," + col) && bfs(grid, row, col, visited)) {
                return true;
            }
        }   
    }
    return false;
};

const bfs = (grid, row, col, visited) => {
    let queue = [[row, col, -1, -1]];

    while(queue.length > 0) {
        const [cRow, cCol, parentRow, parentCol] = queue.shift();
        
        if(visited.has(cRow + "," + cCol)) {
            return true;
        }
        visited.add(cRow + "," + cCol);

        for(let [dr, dc] of directions) {
            const nRow = cRow + dr;
            const nCol = cCol + dc;

            const rowInbounds = 0 <= nRow && nRow < grid.length;
            const colInbounds = 0 <= nCol && nCol < grid[0].length;
            if(!rowInbounds || !colInbounds) {
                continue;
            }
            if (nRow === parentRow && nCol === parentCol) {
                continue;
            }
            if(grid[nRow][nCol] !== grid[row][col]) {
                continue;
            }
            if (visited.has(nRow + "," + nCol)) {
                continue;
            }
            queue.push([nRow, nCol, cRow, cCol]);
        }
    }
    return false;
}
```