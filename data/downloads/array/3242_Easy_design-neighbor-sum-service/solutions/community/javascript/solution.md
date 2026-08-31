# Javascript direct way 148ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583665/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5583665/)

---

```
function neighborSum(g) {
    let ma = new Map(), n = g.length, m = g[0].length;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++) ma.set(g[i][j], [i, j]);
    return { adjacentSum, diagonalSum }
    function adjacentSum(v) {
        let [i, j] = ma.get(v), res = 0;
        if (i - 1 >= 0) res += g[i - 1][j];
        if (i + 1 < n) res += g[i + 1][j];
        if (j - 1 >= 0) res += g[i][j - 1];
        if (j + 1 < m) res += g[i][j + 1];
        return res;
    }
    function diagonalSum(v) {
        let [i, j] = ma.get(v), res = 0;
        if (i - 1 >= 0 && j - 1 >= 0) res += g[i - 1][j - 1];
        if (i - 1 >= 0 && j + 1 < m) res += g[i - 1][j + 1];
        if (i + 1 < n && j + 1 < m) res += g[i + 1][j + 1];
        if (i + 1 < n && j - 1 >= 0) res += g[i + 1][j - 1];
        return res;
    }
}
```