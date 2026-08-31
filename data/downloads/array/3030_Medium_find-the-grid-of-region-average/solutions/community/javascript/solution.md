# Routine calculations - 916 ms

**Author:** eforce
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674664/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4674664/)

---

# Approach
Check every 3*3, if it pass `threshold`, return `avg`, for every coordinate create `avg` sum and number of intersects, later it will be used for getting final result, use initial, if intersects is 0. 

# Code
```
/**
 * @param {number[][]} image
 * @param {number} threshold
 * @return {number[][]}
 */
var resultGrid = function(image, threshold) {
    const colsCount = image[0].length;
    const result = Array.from({ length: image.length }, 
        () => Array.from({ length: colsCount }, () => new Array(2).fill(0)));

    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let rowMove, colMove;

    const getAvg = (row, col) => {
        let sum = 0;
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                sum += image[row + i][col + j];
                for (const [r, c] of dirs) {
                    rowMove = row + i + r;
                    colMove = col + j + c;
                    if (rowMove >= row && rowMove < row + 3 && colMove >= col && colMove < col + 3 && 
                        Math.abs(image[row + i][col + j] - image[rowMove][colMove]) > threshold) {
                            return -1;
                    }
                }
            }
        }

        return Math.floor(sum / 9);
    };

    const rows = image.length - 2;
    const cols = colsCount - 2;
    let avg;

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            avg = getAvg(i, j);
            if (avg !== -1) {
                for (let k = 0; k < 3; ++k) {
                    for (let z = 0; z < 3; ++z) {
                        result[i + k][j + z][0] += avg;
                        ++result[i + k][j + z][1];
                    }
                }
            }
        }
    }

    for (let i = 0; i < image.length; ++i) {
        for (let j = 0; j < colsCount; ++j) {
            result[i][j] = result[i][j][1] === 0 ? image[i][j] : Math.floor(result[i][j][0] / result[i][j][1]);
        }
    }

    return result;
};
```