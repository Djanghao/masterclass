# Javascript median greedy 250ms

**Author:** henrychen222
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5536818/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5536818/)

---


```
const ok = (v, k) => v >= 0 && v <= k;
const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const stmvalue_de = (m) => new Map([...m].sort((x, y) => y[1] - x[1]));

const minChanges = (a, k) => {
    let n = a.length, d = [], h = n >> 1, res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < h; i++) d.push(Math.abs(a[i] - a[n - i - 1]));
    d.sort((x, y) => x - y);
    let m = counter(d);
    m = stmvalue_de(m);
    let maxFreq = m.keys().next().value;
    let vals = [maxFreq, d[h >> 1]]; // greedy: possible values: median, max freq
    if (d[(h >> 1) - 1] != undefined) vals.push(d[(h >> 1) - 1]) // median may have 2 values
    vals.map(v => { // operate each values and get min result
        let change = go(a, v, k); 
        res = Math.min(res, change);
    })
    return res;
};


const go = (a, X, k) => {
    let res = 0, n = a.length;
    for (let i = 0; i < n >> 1; i++) {
        let l = a[i], r = a[n - i - 1];
        let curD = Math.abs(l - r);
        if (curD != X) {
            if (ok(l - X, k) || ok(l + X, k) || ok(r - X, k) || ok(r + X, k)) {
                res++; // valid absolute range, only needs to change 1 number
            } else {
                res += 2; // no valid, needs to change both values
            }
        }
    }
    return res;
};
```