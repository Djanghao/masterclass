# Snake

**Author:** redwasp
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5507609/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5507609/)

---

# Code
```
class Solution {
func restoreMatrix(_ rowSum: [Int], _ colSum: [Int]) -> [[Int]] {
    var (rowSum, colSum) = (rowSum, colSum)
    let (width, height)  = (colSum.count, rowSum.count)
    var matrix = Array(repeating: Array(repeating: 0, count: width), count: height)
    var (x, y) = (0, 0)
    var item = 0
    while x < width && y < height {
        item = min(colSum[x], rowSum[y])
        matrix[y][x] = item
        colSum[x] -= item
        rowSum[y] -= item
        if colSum[x] == 0 {x += 1} else {y += 1}
    }
    return matrix
}
}
```