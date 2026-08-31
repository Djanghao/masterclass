# javascript binary search + rolling hash

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/1314966/](https://leetcode.com/problems/longest-common-subpath/solutions/1314966/)

---

2176 ms, bigInt is slow
```
const mod = 180143985094819841n;
const ll = BigInt;
const multi = (x, y, mod) => {
    return ll(x) * ll(y) % mod;
};

const longestCommonSubpath = (n, paths) => {
    let base = ll(n + 37);
    let [low, high] = [0, 1e5];
    for (const p of paths) high = Math.min(high, p.length);
    while (low < high) {
        let mid = low + high + 1 >> 1;
        let se = new Set();
        let first = true;
        for (const path of paths) {
            let nset = new Set();
            let [h, p] = [0n, 1n];
            for (let i = 0; i < mid; i++) {
                h = (multi(h, base, mod) + ll(path[i])) % mod;
                if (i) p = multi(p, base, mod);
            }
            if (first || se.has(h)) nset.add(h);
            for (let i = mid; i < path.length; i++) {
                h = (multi((h + mod - multi(path[i - mid], p, mod)) % mod, base, mod) + ll(path[i])) % mod;
                if (first || se.has(h)) nset.add(h);
            }
            first = false;
            se = nset;
            if (se.size == 0) break;
        }
        se.size == 0 ? high = mid - 1 : low = mid;
    }
    return low;
};
```