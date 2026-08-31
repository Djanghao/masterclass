# [Javascript] Clean and easy to read DFS

**Author:** dgalarza
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/1948657/](https://leetcode.com/problems/number-of-distinct-islands/solutions/1948657/)

---

```
var numDistinctIslands = function(grid) {
    let set = new Set();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                let shape = calcIsland(grid, row, col, 'X');
                set.add(shape);
            }
        }
    }
	
    return set.size;
};

const calcIsland = (grid, row, col, dir) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === 0) return 'O';
        grid[row][col] = 0;
        let down = calcIsland(grid, row+1, col, 'D');
        let up = calcIsland(grid, row-1, col, 'U');
        let right = calcIsland(grid, row, col+1, 'R');
        let left = calcIsland(grid, row, col-1, 'L');
        
        return dir + down + up + right + left;
}
```