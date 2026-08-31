# Simple, Efficient Solution Illustrated

**Author:** akatuoro6
**Votes:** 1
**Link:** [https://leetcode.com/problems/grid-illumination/solutions/2027061/](https://leetcode.com/problems/grid-illumination/solutions/2027061/)

---

Idea:
Each lamp on the same row/column/diagonal can be counted. E.g. in

```
n=6
lamps=[[5, 1], [5,5]]

  0 1 2 3 4 5
0 x       x x
1 x x x x x o
2     x   x x
3       x   x
4     x   x x
5 x x x x x o
```

the column `5` gets illuminated by 2 lamps:
```
columns[5] = 2
```
The rows and diagonals each get illuminated by a single lamp.
```
row[1] = 1; row[5] = 1;
```
For the downward diagonals, we move diagonally up/left from the lamp `[row, col]` starting in `row` until we hit the left wall. This happens with `col` steps -> `row - col` (or `col - row` for reaching the top).
```
diagDown[5-1] = 1; diagDown[5-5] = 1;
```
For the upward diagonal, we move diagonally down/left from the lamp `[row, col]` starting in `row` until we hit the left wall. This happens again in `col` steps -> `row + col`.
```
diagUp[5+1] = 1; diagUp[5+5] = 1;
```


Now each time we turn off a lamp, we can simply decrement the count in the corresponding row/column/diagonals by 1.

To efficiently check if a lamp exists at a position, we also save the lamp positions in a map. Since duplicate lamps should not be counted, we skip any positions that we have already inserted.

Since the number of lamps is much lower than n, we use a Map for memorizing the lamp positions, rows, columns and diagonals.
Putting it all together:


```
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    // save number of lamps affecting each:
    // - row (0 <= i < n)
    // - column (0 <= i < n)
    // - downward diagonal (-n <= i < n)
    // - upward diagonal (0 <= i < 2n)
    // save all lamps in hashmap per position

    const rows = new Map();
    const columns = new Map();
    const diagDown = new Map();
    const diagUp = new Map();
    const map = new Map();

    // increment and decrement functions that delete
    // the element from the map if it is 0.
    const incrementMap = (m, key) => {
        if (m.has(key)) m.set(key, m.get(key) + 1);
        else m.set(key, 1);
    }
    const decrementMap = (m, key) => {
        if (m.has(key)) {
            const value = m.get(key);
            if (value > 1) m.set(key, value - 1);
            else m.delete(key);
        }
    }

    for (const [row, col] of lamps) {
        // if duplicates should not count double, check if it's already in the map.
        if (map.has(row * n + col)) continue;

        map.set(row * n + col, true);
        incrementMap(rows, row);
        incrementMap(columns, col);
        incrementMap(diagDown, col - row);
        incrementMap(diagUp, col + row);
    }

    // for every query:
    // check if field is iluminated by calculating row, column and diagonal starting points (number of lamps for this line is > 0)
    // for all adjacent fields, check if hashmap contains lamp. If yes, reduce corresponding row, diag etc. by one.
    const ans = [];
    for (const [row, col] of queries) {
        ans.push((rows.has(row) ||
           columns.has(col) ||
           diagDown.has(col - row) ||
           diagUp.has(col + row))? 1 : 0);

        for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, n - 1); i++) {
            for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, n - 1); j++) {
                const index = i * n + j;
                if (map.has(index)) {
                    map.delete(index);
                    decrementMap(rows, i);
                    decrementMap(columns, j);
                    decrementMap(diagDown, j - i);
                    decrementMap(diagUp, j + i);
                }
            }
        }
    }
    return ans;
};
```
