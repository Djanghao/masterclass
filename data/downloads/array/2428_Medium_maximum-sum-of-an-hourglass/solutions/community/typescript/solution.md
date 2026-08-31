# Typescript solution: Beats speed(100%), memory(80%)

**Author:** mshenouda
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/3738623/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/3738623/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^4)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
function maxSum(grid: number[][]): number {
    let rows: number = grid.length;
    let columns: number = grid[0].length;
    let hourGlass: number[][] = [[1,1,1],[0,1,0],[1,1,1]];
    let rowsHourGlass: number = hourGlass.length;
    let colsHourGlass: number = hourGlass[0].length;

    let maxResult: number = 0;
    for(let i=0; i<rows; i++) {
        if (i + rowsHourGlass > rows) 
            break;
        for(let j=0; j<columns; j++) {
            if (j + colsHourGlass > columns)
                break; 
            let sum: number = 0;
            for(let u: number =0; u < 3; u++) {
                for(let v: number=0; v< 3; v++) {
                    sum += grid[i+u][j+v] * hourGlass[u][v]
                }
            }
            maxResult = Math.max(maxResult, sum);            
        }
    }
    return maxResult;
};
```