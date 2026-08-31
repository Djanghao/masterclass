# typescript - simple w/ comments

**Author:** carti
**Votes:** 1
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/822680/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/822680/)

---

```
function oddCells(n: number, m: number, indices: number[][]): number {
    // res
    let odds = 0;

    // create matrix filled with 0s
    const mat: number[][] = Array(n)
        .fill(0)
        .map(() => Array(m).fill(0));

    // iterate through indices
    indices.forEach((index) => {
        // get i, j
        const [row, col] = index;

        // increment all in same row by 1
        for (let i = 0; i < m; i++) {
            mat[row][i]++;
        }

        // increment all in same col by 1
        for (let i = 0; i < n; i++) {
            mat[i][col]++;
        }
    });

    // loop back thru matrix, counting odds
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            odds += mat[i][j] % 2;
        }
    }

    return odds;
}
```
