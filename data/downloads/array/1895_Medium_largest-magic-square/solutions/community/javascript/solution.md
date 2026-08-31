# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/4830558/](https://leetcode.com/problems/largest-magic-square/solutions/4830558/)

---

# Code
```
var largestMagicSquare = function (grid) {

    let r = grid.length, c = grid[0].length;
    let s = Math.min(r, c);
    let rowSum = Array(r).fill().map(_ => Array(c).fill(0));
    let colSum = Array(r).fill().map(_ => Array(c).fill(0));
    let leftDSum = Array(r).fill().map(_ => Array(c).fill(0));
    let rightDSum = Array(r).fill().map(_ => Array(c).fill(0));

    //ROWSUM
    for (let i = 0; i < r; i++) {
        let sum = 0;
        for (let j = 0; j < c; j++) {
            sum += grid[i][j];
            rowSum[i][j] = sum;
        }
    }

    //COLSUM
    for (let i = 0; i < c; i++) {
        let sum = 0;
        for (let j = 0; j < r; j++) {
            sum += grid[j][i];
            colSum[j][i] = sum;
        }
    }

    //LEFTDSUM
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (!i || !j) leftDSum[i][j] = grid[i][j];
            else leftDSum[i][j] = leftDSum[i - 1][j - 1] + grid[i][j]
        }
    }

    //LEFTDSUM
    for (let i = 0; i < r; i++) {
        for (let j = c - 1; j >= 0; j--) {
            if (!i || j === c - 1) rightDSum[i][j] = grid[i][j];
            else rightDSum[i][j] = rightDSum[i - 1][j + 1] + grid[i][j]
        }
    }


    for (let i = s; i > 1; i--) {
        for (let j = 0; j < r - i + 1; j++) {
            for (let k = 0; k < c - i + 1; k++) {

                let isRowValid = true, isColValid = true, isLeftDValid = true, isRightDValid = true;
                let prevRow = 0, prevCol = 0;


                //ROWCHECK
                for (let z = j; z < j + i; z++) {
                    let leftSum = k - 1 < 0 ? 0 : rowSum[z][k - 1];
                    let rightSum = rowSum[z][k + i - 1];
                    if (!prevRow) prevRow = rightSum - leftSum;
                    else if (prevRow !== rightSum - leftSum) {
                        isRowValid = false; break;
                    }
                }


                for (let z = k; z < k + i; z++) {
                    let upSum = j - 1 < 0 ? 0 : colSum[j - 1][z];
                    let downSum = colSum[j + i - 1][z];
                    if (!prevCol) prevCol = downSum - upSum;
                    else if (prevCol !== downSum - upSum) {
                        isColValid = false; break;
                    }
                }

                let leftDUpSum = j - 1 < 0 || k - 1 < 0 ? 0 : leftDSum[j - 1][k - 1];
                let leftDDownSum = leftDSum[j + i - 1][k + i - 1];

                isLeftDValid = (leftDDownSum - leftDUpSum) === prevCol;

                let rightDUpSum = k + i >= c || j - 1 < 0 ? 0 : rightDSum[j - 1][k + i];
                let rightDDownSum = rightDSum[j + i - 1][k];

                isRightDValid = (rightDDownSum - rightDUpSum) === prevCol;


                if (isRowValid && isColValid && isLeftDValid && isRightDValid) return i;
            }
        }
    }
    return 1

};
```