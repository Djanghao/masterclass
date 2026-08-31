# javascript brute force 2550ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1996401/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1996401/)

---

```
const countDistinct = (a, k, p) => {
    let n = a.length, se = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = a.slice(i, j + 1);
            if (ok(sub, k, p)) se.add(JSON.stringify(sub)); // transfer array to string to remove duplicates
        }
    }
    return se.size;
};

const ok = (a, k, p) => {
    let cnt = 0;
    for (const x of a) {
        if (x % p == 0) cnt++;
    }
    return cnt <= k;
};
```