# javascript direct way 168ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3679350/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3679350/)

---

```
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

const countBeautifulPairs = (a) => {
    let n = a.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (ok(a[i], a[j])) res++;
        }
    }
    return res;
};

const ok = (x, y) => {
    let sx = x + '', sy = y + '';
    return gcd(sx[0] - '0', sy[sy.length - 1] - '0') == 1;
};
```