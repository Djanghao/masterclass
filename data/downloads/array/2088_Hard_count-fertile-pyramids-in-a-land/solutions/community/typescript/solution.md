# Simple O(n∗m) solution

**Author:** SJTGSHIVAM
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/3669689/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/3669689/)

---

# Approach
Its atcually quite an easy solution, not sure why it's maked hard. In first loop we went top to bottom counting the straight pyramids. Everytime we find one we increment the root so if on next layer 3 roots make base for a bigger pyramid we can count all possibilities. Second loop resets the grid. Third loops just as the first one counts inverted pyramids.

# Complexity
- Time complexity: $$O(n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```
function countPyramids(grid: number[][]): number {
    let count=0;
    for(let r=1;r<grid.length;r++){
        for(let c=1;c<grid[0].length-1;c++){
            if(grid[r][c]>0 && (grid[r-1][c-1]>0 )&& (grid[r-1][c]>0 )&&(grid[r-1][c+1]>0)){
                grid[r][c]=Math.min(grid[r-1][c-1],grid[r-1][c],grid[r-1][c+1])+1
                count+=(grid[r][c]-1);
            }
        }
    }
    for(let r=1;r<grid.length;r++){
        for(let c=1;c<grid[0].length-1;c++){
            if(grid[r][c]>0) grid[r][c]=1
        }
    }
    for(let r=grid.length-2;r>-1;r--){
        for(let c=1;c<grid[0].length-1;c++){
            if(grid[r][c]>0 && (grid[r+1][c-1]>0) && (grid[r+1][c]>0) && (grid[r+1][c+1]>0)){
                grid[r][c]=Math.min(grid[r+1][c-1],grid[r+1][c],grid[r+1][c+1])+1
                count+=(grid[r][c]-1)
            }
        }
    }
    return count;
};
```