# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/4835819/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/4835819/)

---

# Code
```
var minDifference = function (A, Q) {
    let n = A.length;
    let maxVal = A.reduce((max, e) => Math.max(max, e), -1);
    let memo = Array.from({ length: n + 1 }, () => new Array(maxVal + 1).fill(0));
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= maxVal; ++j) memo[i][j] = memo[i - 1][j];
        memo[i][A[i - 1]]++;
    }
    let res = new Array(Q.length);
    for (let q = 0; q < Q.length; ++q) {
        let [l, r] = Q[q];
        let [jPrevChange, min] = [-Infinity, Infinity];
        for (let j = 1; j <= maxVal; ++j) {
            if (memo[r + 1][j] != memo[l][j]) {
                min = Math.min(min, j - jPrevChange);
                jPrevChange = j;
            }
        }
        res[q] = min == Infinity ? -1 : min;
    }
    return res;
};
```