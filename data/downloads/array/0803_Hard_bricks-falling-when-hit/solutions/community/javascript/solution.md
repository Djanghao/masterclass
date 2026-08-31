# From bad(general intuition) to good( reversely adding bricks)

**Author:** sage33
**Votes:** 16
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/450482/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/450482/)

---

To understand the question better think of it like this:

1) Every brick has a power of stickiness. They will keep sticking until an external force is applied.

2) Top row bricks have a superpower of **stickiness sharing** (other bricks will also get this power if they are connected to the top ones directly or indirectly ).

3) The power of the top row bricks is overwhelming. Because of this, if a brick comes in contact with top row bricks(directly or indirectly) they will lose their own power permanently and start resonating the power of the top row( **stickiness sharing**).

4) As soon as a bridging brick ( which is receiving power from some top brick and sharing it with others)  is hit then the bricks connected to it will also drop because they stopped receiving the power from the top row.

5) One other scenario is that the connected bricks are receiving stickiness superpower from multiple top row bricks. So they may not fall if they are connected to some other top brick directly or indirectly.


```

```
Initial solution brute force, Time Limit Exceed

This soluton was based on general intution and we are checking all of the connected bricks again and again after removal of each brick.

```

 var hitBricks = function(grid, hits) {
    let output = []
    for (let i = 0; i < hits.length; i++) {
        let map = {};
        
        if (grid[hits[i][0]][hits[i][1]] == 1) {
            
            grid[hits[i][0]][hits[i][1]] = 0;
            
            
            for (let j = 0; j<grid[0].length; j++) {
                if (grid[0][j] == 1) {
                    dfs (grid, output, map, 0, j);
                    break;
                }
            }
            /* removing bricks that are not connected and adding the count to array */
            removeBricks(grid, map, output);  
        } else {
            output.push(0)
        }
        
        
    }
    return output;
};

function dfs(grid, output, map, i, j) {
    
    if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0) return;
    
    let key = i +'_'+ j
    
    if (map[key]) return;
    
    if (grid[i][j] == 1) {
        
        map[key] = 1;
        
        dfs(grid, output, map, i+1, j);
        dfs(grid, output, map, i-1, j);
        dfs(grid, output, map, i, j+1);
        dfs(grid, output, map, i, j-1);
        
    }
    
}

function removeBricks (grid, map, output) {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let key = row +'_'+ col;
            
            if (grid[row][col] == 1 && !map[key] ) {
                grid[row][col] = 0;
                count++
            }
        }
    }
    output.push(count)
    
}

```


The next solution didn't come intutively, I had to go through discuss section to understand that this is another way to do this.
To explain it in simple words, On every brick hit I was looping throught entire top row of grid and running dfs on each cell whenever I found there is a brick.
I want to somehow limit the number checking of connected bricks on every hit.

In the below solution what I am doing is: 

1) doing all hits on grid
2) after all hits, checking all of the connected bricks
3) Now restoring bricks one by one and only running dfs for each restoration once (this is main keypoint)
    Earlier I was checking connected bricks for every cell in first row on every hit.
	and now I am only doing checking on the restored brick only.


```
var hitBricks = function(grid, hits) {
    
    const output = new Array(hits.length).fill(0);
    
    
    // removing bricks from hits
    // if it is an empty space then marking it as -1 
    // so that we can differentiate later on whether it was an empty space or brick
    for (let i = 0; i < hits.length; i++) {
        
        if (grid[hits[i][0]][hits[i][1]] == 1) {
            
            grid[hits[i][0]][hits[i][1]] = 0
            
        } else {
            
            grid[hits[i][0]][hits[i][1]] = -1
            
        }
    }
    
    // looping over top row and running dfs to 
    // mark all of the bricks as 2 which are connected to top
    for (let j = 0; j < grid[0].length; j++) {
        markAndCount(0, j, grid)
    }
    
    
    // looping over hits array backwards and restoring bricks
    for (let i = hits.length-1; i >= 0; i-- ) {
        
        // if there was an empty space then skip the counting
        // of restored bricks else count how many bricks it has restored
        if (grid[hits[i][0]][hits[i][1]]  === -1 ) continue;
        
        grid[hits[i][0]][hits[i][1]] = 1 // restored brick
        
        // if the restored brick is not connected to previously marked bricks
        // which are not falling then it will not restore new bricks;
        if (!isConnectedToTop(hits[i][0], hits[i][1], grid)) continue;
        // saving the number of restored bricks
        output[i] = markAndCount(hits[i][0], hits[i][1], grid) - 1
        
    }
    
    
    return output;
    
    
}


// it traverse the grid and mark bricks connected witj top as 2
// and also gives back the number of added brick when restoring a hit

function markAndCount (i, j, grid) {
   
    // in this if condition the last grid[i][j] != 1 check is important
    // because with this we are disregarding the previously counted nodes
    // and empty spaces
    if (i >= grid.length || 
        j >= grid[0].length || 
        i < 0 || 
        j < 0 || 
        grid[i][j] != 1) return 0;
    
    let restored = 1;
    
    // marking the visited cell as 2
    grid[i][j] = 2
    
    restored += markAndCount(i+1, j, grid);
    restored += markAndCount(i-1, j, grid);
    restored += markAndCount(i, j+1, grid);
    restored += markAndCount(i, j-1, grid);
    
    return restored
    
}

function isConnectedToTop (i,j, grid) {
    if ( i == 0 ||
        (grid[i-1] && grid[i-1][j] == 2) ||
        (grid[i+1] && grid[i+1][j] == 2) ||
        grid[i][j-1] == 2 ||
        grid[i][j+1] == 2) return true;
        
    return false
}


```


**I hope it helps.**