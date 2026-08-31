# javascript direct way with endless loop 96ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130714/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1130714/)

---

```
const reinitializePermutation = (n) => {
    let perm = [];
    for (let i = 0; i < n; i++) perm.push(i);
    let origin = [...perm];
    let res = 0;
    while (1) {
        let a = [...perm];
        for (let i = 0; i < n; i++) {
            let idx;
            if (i & 1) {
                idx = (n >> 1) + (i - 1) / 2;
            } else {
                idx = i / 2;
            }
            a[i] = perm[idx];
        }
        perm = a;
        res++;
        if (arrayEquals(origin, perm)) {
            break;
        }
    }
    return res;
};

const arrayEquals = (a, b) => {
    return a.length === b.length && a.every((v, i) => v === b[i]);
};
```