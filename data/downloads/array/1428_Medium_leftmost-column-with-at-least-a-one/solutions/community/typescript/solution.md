# Simple and small code O(N+M)

**Author:** gourav_gunjan
**Votes:** 2
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1939357/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1939357/)

---

Intuitvely, if you move from top right corner based on below two conditions, you will find the answer easily.
* If cell is 1, move left till you reach 0
* If cell is 0, move down to next row.
* Keep track of minRow.


This beats 95% in terms of speed. Time complexity O(N + M) in worst case.

```
function leftMostColumnWithOne(binaryMatrix: BinaryMatrix) {
	const [rows, cols] = binaryMatrix.dimensions();
    let i = 0;
    let j = cols - 1;
    let minCol = Infinity;
    while (i < rows && j >= 0) {
        if (binaryMatrix.get(i, j) === 1) {
            // move left
            minCol = Math.min(minCol, j);
            j--;
        } else {
            // move down
            i++;
        }
    }
    return minCol === Infinity ? -1 : minCol;
};
```