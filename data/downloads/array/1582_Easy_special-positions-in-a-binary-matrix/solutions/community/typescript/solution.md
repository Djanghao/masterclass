# Typescript || Matrix || O(m*n) time || O(m+n) space

**Author:** onifs10
**Votes:** 2
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/3924321/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/3924321/)

---

# Complexity
- Time complexity:
$$O(m*n)$$ 

- Space complexity:
$$O(m+n)$$ 

# Code
```
function numSpecial(grid: number[][]): number {
    const ROW = grid.length;
    const COL = grid[0].length;   
   let rowCounts: number[] = new Array(grid.length).fill(0)
   let colCounts: number[] = new Array(grid[0].length).fill(0)

    for(let x = 0; x < ROW;x++){
        for(let y = 0; y < COL; y++){
           if(grid[x][y] == 1){
               rowCounts[x] += 1
               colCounts[y] += 1
           }
        }
    }

    let result:number = 0
    for(let x = 0; x < ROW;x++){
        for(let y = 0; y < COL; y++){
            if(grid[x][y] == 1 && rowCounts[x] == 1 &&  colCounts[y] == 1){
                result++
            }
        }
    }

    return result
};
```