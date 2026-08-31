# javascript O(n+m) time | O(1) space

**Author:** ethanneff
**Votes:** 6
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1004085/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1004085/)

---

```
var leftMostColumnWithOne = function(binaryMatrix) {
    let [rows,cols] = binaryMatrix.dimensions()
    let currentRow = 0;
    let currentCol = cols - 1;
    while (currentRow < rows && currentCol >= 0) {
        let val = binaryMatrix.get(currentRow, currentCol)
        if (val === 1) {
            currentCol--
        } else {
            currentRow++
        }
    }
    return (currentCol == cols - 1) ? -1 : currentCol + 1;
};
```