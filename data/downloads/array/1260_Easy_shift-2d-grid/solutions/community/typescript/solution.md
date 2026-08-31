# JavaScript / TypeScript Very Easy Understanding

**Author:** petterfreak
**Votes:** 1
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/1760397/](https://leetcode.com/problems/shift-2d-grid/solutions/1760397/)

---

```
function shiftGrid(grid: number[][], k: number): number[][] {
    const rowLength = grid.length - 1
    const columnLength = grid[0].length - 1
    
    for(let rotation = 0; rotation < k; rotation++){
        let cache = grid[rowLength][columnLength]
            
        for(let i = 0; i <= rowLength; i++){  
		
            for(let j = 0; j <= columnLength; j++){
                let curr = grid[i][j]
                grid[i][j] = cache
                cache = curr
            }
        }
    }
    
    return grid
}