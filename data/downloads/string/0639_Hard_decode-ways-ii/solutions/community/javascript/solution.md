# javascript clean dp 124ms 100%

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/1329960/](https://leetcode.com/problems/decode-ways-ii/solutions/1329960/)

---

reference: https://leetcode.com/problems/decode-ways-ii/discuss/105274/Python-Straightforward-with-Explanation
```
const mod = 1e9 + 7;
const numDecodings = (s) => {
    let [e0, e1, e2, f0] = [1, 0, 0, 0];
    for (const c of s) {
        if (c == '*') {
            f0 = 9 * e0 + 9 * e1 + 6 * e2;
            e1 = e0;
            e2 = e0;
        } else {
            f0 = (c > '0') * e0 + e1 + (c <= '6') * e2;
            e1 = (c == '1') * e0;
            e2 = (c == '2') * e0;
        }
        e0 = f0 % mod;
    }
    return e0;
};
```