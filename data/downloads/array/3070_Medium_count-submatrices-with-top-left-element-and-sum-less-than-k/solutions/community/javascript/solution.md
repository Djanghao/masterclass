# JavaScript, In Place Vertical Accumulation

**Author:** ruslic19
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4814021/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4814021/)

---

# Code
```javascript
function countSubmatrices(grid, k) {
    let count = 0
    
    for (let row = 0; row < grid.length; row++) {
        let sum = 0
        for (let col = 0; col < grid[row].length; col++) {
            const prevRowValue = row - 1 >= 0 ? grid[row - 1][col] : 0
            sum += grid[row][col] + prevRowValue
            grid[row][col] = grid[row][col] + prevRowValue
            
            if (sum <= k) count++
        }
    }
    
    return count
}
```