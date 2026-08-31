# JS

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5683021/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5683021/)

---

# Code
```javascript []
/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

class SegmentTree {
    constructor() {
        this.tree = [];
    }

    build(node, start, end, values) {
        if (start === end) {
            return this.tree[node] = values[start];
        }
        let mid = (start + end) >> 1;
        return this.tree[node] = Math.max(
            this.build(node * 2 + 1, start, mid, values),
            this.build(node * 2 + 2, mid + 1, end, values)
        );
    }

    query(node, start, end, queryStart, queryEnd) {
        if (start > queryEnd || queryStart > end) {
            return Number.NEGATIVE_INFINITY;
        }
        if (start >= queryStart && end <= queryEnd) {
            return this.tree[node];
        }
        let mid = (start + end) >> 1;
        return Math.max(
            this.query(node * 2 + 1, start, mid, queryStart, queryEnd),
            this.query(node * 2 + 2, mid + 1, end, queryStart, queryEnd)
        );
    }
}

var maximumValueSum = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let topIndices = Array.from({ length: rows }, () => Array(3).fill(-1));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < 3; k++) {
                if (topIndices[i][k] === -1 || matrix[i][topIndices[i][k]] <= matrix[i][j]) {
                    for (let l = 2; l > k; l--) {
                        topIndices[i][l] = topIndices[i][l - 1];
                    }
                    topIndices[i][k] = j;
                    break;
                }
            }
        }
    }

    let segmentTrees = Array.from({ length: rows }, () => new SegmentTree());
    let maxValues = Array(cols).fill(Number.NEGATIVE_INFINITY);

    for (let i = rows - 1; i > 0; i--) {
        for (let j = 0; j < cols; j++) {
            maxValues[j] = Math.max(matrix[i][j], maxValues[j]);
        }
        segmentTrees[i].tree = Array(2 * cols - 1);
        segmentTrees[i].build(0, 0, cols - 1, maxValues);
    }

    let result = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < rows - 2; i++) {
        for (let firstIdx of topIndices[i]) {
            for (let j = i + 1; j < rows - 1; j++) {
                for (let secondIdx of topIndices[j]) {
                    if (secondIdx !== firstIdx) {
                        let left = Math.min(firstIdx, secondIdx);
                        let right = Math.max(firstIdx, secondIdx);

                        let extra = Number.NEGATIVE_INFINITY;
                        if (left > 0) {
                            extra = Math.max(extra, segmentTrees[j + 1].query(0, 0, cols - 1, 0, left - 1));
                        }
                        if (right < cols - 1) {
                            extra = Math.max(extra, segmentTrees[j + 1].query(0, 0, cols - 1, right + 1, cols - 1));
                        }
                        if (left + 1 < right) {
                            extra = Math.max(extra, segmentTrees[j + 1].query(0, 0, cols - 1, left + 1, right - 1));
                        }
                        result = Math.max(result, matrix[i][firstIdx] + matrix[j][secondIdx] + extra);
                    }
                }
            }
        }
    }

    return result;
};

```