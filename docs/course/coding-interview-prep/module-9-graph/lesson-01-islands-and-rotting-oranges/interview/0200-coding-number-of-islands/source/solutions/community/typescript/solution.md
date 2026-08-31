# Typescript / JavaScript : BFS and DFS

**Author:** SumanMax
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/2094043/](https://leetcode.com/problems/number-of-islands/solutions/2094043/)

---

```
//  Both BFS and DFS
function numIslands(grid: string[][]): number {
    let result = 0;
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                bfs(grid, i, j); // dfs(grid, i, j);
                result += 1;
            }
        }
    }
    return result;
};

// DFS
function dfs(grid: string[][], r: number, c: number) {
    if (grid[r] === undefined || grid[r][c] === undefined || grid[r][c] == "0") {
        return;
    }
    grid[r][c] = "0";
    bfs(grid, r+1, c);
    bfs(grid, r-1, c);
    bfs(grid, r, c+1);
    bfs(grid, r, c-1);
}

// BFS 
function bfs(grid, x, y) {
    let queue = new Array();
    const matrix = [[1,0], [-1,0], [0,1],[0,-1]];
    queue.push([x,y]);
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            for (const dir of matrix) {
                let r = curr[0] + dir[0];
                let c = curr[1] + dir[1];
                if (r < 0 ||  r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] == "0") {
                    continue;
                }
                grid[r][c] = "0";
                queue.push([r,c]);
            }
        }   
    }
}
```