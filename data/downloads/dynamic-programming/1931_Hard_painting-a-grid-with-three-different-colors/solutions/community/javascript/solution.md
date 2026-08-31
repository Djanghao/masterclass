# javascript dp 412ms

**Author:** henrychen222
**Votes:** 0
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1332044/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/1332044/)

---

```
const mod = 1e9 + 7;
const colorTheGrid = (m, n) => {
    let valid = [];
    let a = Array(m).fill(0);
    outer:
    do { // get initial valid cases ways
        for (let i = 0; i < m - 1; i++) {
            if (a[i] == a[i + 1]) continue outer;
        }
        valid.push([...a]);
    } while (ok(a, 3));
    let vn = valid.length;
    let dp = Array(vn).fill(1); // initial state is 1 way, accumalate further ways for each state
    for (let i = 0; i < n - 1; i++) {
        let ndp = Array(vn).fill(0); // next dp array, update based on previous dp
        for (let j = 0; j < vn; j++) {
            mark:
            for (let k = 0; k < vn; k++) {
                let [aj, ak] = [valid[j], valid[k]];
                for (let l = 0; l < m; l++) {
                    if (aj[l] == ak[l]) continue mark;
                }
                ndp[k] += dp[j];
                ndp[k] %= mod;
            }
        }
        for (let j = 0; j < vn; j++) ndp[j] % mod;
        dp = ndp;
    }
    let res = 0;
    for (const e of dp) { // result is sum of ways of all based ways
        res += e;
        if (res >= mod) res -= mod;
    }
    return res;
};

const ok = (a, base) => {
    let n = a.length;
    let i;
    for (i = n - 1; ~i && a[i] == base - 1; i--);
    if (i == -1) return false;
    a[i]++;
    for (let k = i + 1; k < n; k++) a[k] = 0;
    return true;
};
```