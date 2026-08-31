# Intuitive JavaScript solution using DFS

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466830/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466830/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
DFS

# Complexity
- Time complexity: O(M * N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(M * N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    let max_fishes = 0;
    let ROW = grid.length;
    let COL = grid[0].length;
    
    // returns the sum of fishes possible
    const DFS = (r, c, visit) => {
        
        // base cases returns 0; 
        if( r < 0 || r >= ROW ||
            c < 0 || c >= COL || 
            visit.has(`${r}_${c}`) ||
            grid[r][c] == 0 
          ){
            return 0;
        }
        
        // set visted
        visit.add(`${r}_${c}`);
        
        let sum = grid[r][c]; // add current value to sum
        
        // check the surrounding nodes
        sum += DFS(r, c + 1, visit);
        sum += DFS(r, c - 1, visit);
        sum += DFS(r + 1, c, visit);
        sum += DFS(r - 1, c, visit);
        
        return sum;
    }
    
    let set = new Set(); // to record all visted nodes
    
    // go through each cell
    for(let r = 0; r < ROW; r++){
       for(let c = 0; c < COL; c++){
            // if the cell is water
           if(grid[r][c] != 0){ 
               let res = DFS(r, c, set);

               //compare the result from DFS to main global variable 
               max_fishes = Math.max(res, max_fishes);
           }
       }
    }
    
    return max_fishes; 
};
```