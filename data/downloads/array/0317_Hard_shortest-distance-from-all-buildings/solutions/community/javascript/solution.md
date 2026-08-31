# Readable JavaScript Solution with Comments

**Author:** ehd
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/1856014/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/1856014/)

---

```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    // Create some constants for convenience
    const EMPTY_LAND = 0
    const BUILDING = 1;
    const OBSTACLE = 2;
    
    const NUM_ROWS = grid.length;
    const NUM_COLS = grid[0].length;
    
    // Find the coordinates of every building
    const buildings = [];
    for(let row = 0; row < NUM_ROWS; ++row){
        for(let col = 0; col < NUM_COLS; ++col){
            if(grid[row][col] === BUILDING){
                buildings.push([row, col])    
            }
        }
    }
    
    // We define a "flood fill" function which starts from the coodrinates of a building and fills each cell in our distances grid with the distance to that building
    const distances = new Array(NUM_ROWS).fill(0).map(()=>new Array(NUM_COLS).fill(0));
    
    function bfs(start_row, start_col){
        const seen = new Set();
        
        const q = [[start_row, start_col, 0]];
        
        while(q.length > 0){
            const [current_row, current_col, distance_traveled] = q.shift();
        
            // Check if we're out of bounds
            if(current_row < 0 || current_row >= NUM_ROWS){
                continue;
            }
            
            // Check if we're out of bounds
            if(current_col < 0 || current_col >= NUM_COLS){
                continue;
            }
        
            // Check whether we've visited this coordinate before
            const key = [current_row, current_col].join();
            if(seen.has(key)){
                continue;
            }
            seen.add(key);
            
            // Did we hit an obstacle?
            if(grid[current_row][current_col] === OBSTACLE){
                continue;
            }
            
            // Did we hit another building?
            if(grid[current_row][current_col] === BUILDING){
                if(current_row === start_row && current_col === start_col){
                    // do nothing ... this is the building we started from   
                }else{
                    continue;    
                }
            }
            
            // Did we hit empty land?
            if(grid[current_row][current_col] <= EMPTY_LAND){
                // Record how many buildings are reachable from this cell
                grid[current_row][current_col] -= 1;
                // Record the distance from our starting point to this cell
                distances[current_row][current_col] += distance_traveled;
            }
            
            // go up
            q.push([current_row-1, current_col, distance_traveled+1]);
            // go down
            q.push([current_row+1, current_col, distance_traveled+1]);
            // go left
            q.push([current_row, current_col-1, distance_traveled+1]);
            // go right
            q.push([current_row, current_col+1, distance_traveled+1]);
        }
    }
    
    // Fill our distances grid by calling our "flood fill" function starting form the coordinates of every building
    for(const [row, col] of buildings){
        bfs(row, col);
    }
    
    // Find the minimum distance in our distances grid that is reachable from all buildings
    let min_distance = Infinity;
    for(let row = 0; row < NUM_ROWS; ++row){
        for(let col = 0; col < NUM_COLS; ++col){
            if(grid[row][col] <= EMPTY_LAND && Math.abs(grid[row][col])===buildings.length){
                const distance = distances[row][col];
                min_distance = Math.min(min_distance, distance);
            }
        }
    }
    
    return min_distance === Infinity ? -1 : min_distance;
};
```