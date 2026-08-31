# Keep it simple

**Author:** sujiiak
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/6089411/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/6089411/)

---

# Intuition
We don't need to create a map or anything since this is just summation no state is needed

# Approach
We know the upper and lower bounds treat this like read each line starting from row1 col1 and sum until we hit the secondary boundary row2 col2


# Code
```typescript []
class NumMatrix {
    public localMatrix: number[][];
    constructor(matrix: number[][]) {
        this.localMatrix = matrix
    }

    update(row: number, col: number, val: number): void {
       this.localMatrix[row][col] = val; 
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        // go down to row2 and over to col 2
        let sum = 0;
        for(let row = row1; row <= row2; row++) {
            for(let col = col1; col <= col2; col++) {
                sum += this.localMatrix[row][col];
            }
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
```