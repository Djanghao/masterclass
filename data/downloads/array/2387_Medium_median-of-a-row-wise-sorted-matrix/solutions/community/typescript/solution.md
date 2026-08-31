# Typescript | Binary Search

**Author:** SakuraTK
**Votes:** 1
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/2488420/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/2488420/)

---

To find the smallest number between the *min* and *max* in `grid`, whose **count** of numbers less than and equal to it in `grid` is at least `Math.ceil(m * n  / 2)`.
```
function matrixMedian(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const expectedLeqCount = (m * n + 1) / 2;
    
    let min = Math.min(...grid.map(row => row[0]));
    let max = Math.max(...grid.map(row => row[n - 1]));
    
    const countLeqPerRow = (row: number[], num: number): number => {
        let left = 0;
        let right = row.length;
        
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            if (row[mid] <= num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    const countLeqPerGrid = (grid: number[][], num: number): number => {
        let count = 0;
        
        for (const row of grid) {
            count += countLeqPerRow(row, num);
        }
        
        return count;
    }
    
    while (min < max) {
        let mid = min + Math.floor((max - min) / 2);
        let leqCount = countLeqPerGrid(grid, mid);
        if (leqCount < expectedLeqCount) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    
    return min;
};
```