# javascript gcd count 352ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1785187/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1785187/)

---

```
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

const coutPairs = (a, k) => {
    let f = Array(1e5 + 1).fill(0), gcdData = [], res = 0;
    for (const x of a) {
        let g = gcd(x, k);
        for (const y of gcdData) {
            if (g * y % k == 0) res += f[y];
        }
        if (f[g] == 0) gcdData.push(g);
        f[g]++;
    }
    return res;
};
```