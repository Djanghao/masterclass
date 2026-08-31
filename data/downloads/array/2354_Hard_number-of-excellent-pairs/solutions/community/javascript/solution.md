# javascript bit count 242ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/2325541/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/2325541/)

---

```
const bitCount = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };

const countExcellentPairs = (a, k) => {
    let u = [...new Set(a)], f = Array(30).fill(0), res = 0;
    for (const x of u) {
        let cnt = bitCount(x);
        f[cnt]++;
    }
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (i + j >= k) res += f[i] * f[j];
        }
    }
    return res;
};
```