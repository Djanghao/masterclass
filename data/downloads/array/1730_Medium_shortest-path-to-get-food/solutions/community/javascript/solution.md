# JavaScript BFS with comment

**Author:** y4mo
**Votes:** 7
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/1324032/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/1324032/)

---

```
/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
    let minDistance = 0;
    let queue = []
    let visited = [];
    let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let rows = grid.length;
    let cols = grid[0].length;
    
    // Array to keep track of which cell has been visited
    for(let i = 0; i < rows; i++) {
        visited.push(new Array(cols).fill(false));
    }
    
    // Find starting position for our queue
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === '*') {
                queue.push([i, j]);
                visited[i][j] = true;
                break;
            }
        }
    }
    
    while(queue.length) {
        // All cells within the size will be at the same distance from starting cell
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
          let cell = queue.shift();
          
          // We find the closest food cell since we are doing BFS
          if(grid[cell[0]][cell[1]] === '#') return minDistance;
        
          for(let dir of dirs) {
            let row = cell[0] + dir[0];
            let col = cell[1] + dir[1];
            
            // Skip visited cell and out of bound cell and obstacle cell  
            if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'X' || visited[row][col]) continue;
            
            // Add unvisited cell to the queue  
            visited[row][col] = true;
            queue.push([row, col]);
          }  
        }
        
        // We finish all cell at the current distance and going to look for cells at next distance
        minDistance++;
    }
    
    return -1;
};
```

m -> number of rows, n-> number of cols
- O(mn) time (since we are traversing whole grid)
- O(mn) space (need visited array to keep track of visited cells in grid)