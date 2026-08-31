# javascript bitmask 116ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/1711823/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/1711823/)

---

```
const bitCount = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };

const maximumGood = (g) => {
    let n = g.length, res = Number.MIN_SAFE_INTEGER;
    outer:
    for(let i = 0; i < 1 << n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (g[j][k] == 2) continue;
                if (i & (1 << j)) {
                    if (i & (1 << k)) {
                       if (g[j][k] == 0) continue outer;
                    } else {
                        if (g[j][k] == 1) continue outer;
                    }
                }
            }
        }
        res = Math.max(res, bitCount(i));
    }
    return res;
};
```
modified version
```
const maximumGood = (g) => {
    let n = g.length, res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < 1 << n; i++) {
        let ok = true, cnt = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                cnt++;
                for (let k = 0; k < n; k++) {
                    if (g[j][k] == 2) continue;
                    if (i & (1 << k)) {
                        if (g[j][k] == 0) ok = false;
                    } else {
                        if (g[j][k] == 1) ok = false;
                    }
                    // if (!ok) break;   // add will speed up, not add is also correct
                }
            }
            // if (!ok) break;
        }
        if (ok) res = Math.max(res, cnt);
    }
    return res;
};
```