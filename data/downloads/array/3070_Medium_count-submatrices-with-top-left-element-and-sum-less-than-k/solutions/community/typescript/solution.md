# typeScript DP solution

**Author:** thewickeffect
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4833237/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4833237/)

---


# Code
```
function countSubmatrices(grid: number[][], k: number): number {
    // transform rows into current row totals
    for(let i=0;i<grid.length;i++){
        for(let j=1;j<grid[0].length;j++){
            grid[i][j]+=grid[i][j-1];
        }
    }
    let count = 0;
    // count valid submatrices in the first row
    for(let i=0;i<grid[0].length;i++){
        if(grid[0][i]<=k) count++;
        else break;
    }
    //count submatrices and add up collumn totals;
    for(let i = 1;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            grid[i][j]+=grid[i-1][j];
            if(grid[i][j]<=k) count++;
            else break;
        }
    }
    return count;
};
```