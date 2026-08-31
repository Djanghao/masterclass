# Javascript greedy + math 455ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734761/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734761/)

---

```
const sm = (a) => a.reduce(((x, y) => x + y), 0);

const makeSimilar = (a, b) => {
    let n = a.length, max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) max = Math.max(max, a[i], b[i]);
    let f = Array(max + 1).fill(0);
    for (let i = 0; i < n; i++) {
        f[a[i]]++;
        f[b[i]]--;
    }
    for (let x = 2; x <= max; x++) f[x] += f[x - 2];
    return sm(f.map(x => Math.abs(x))) / 2;
};
```