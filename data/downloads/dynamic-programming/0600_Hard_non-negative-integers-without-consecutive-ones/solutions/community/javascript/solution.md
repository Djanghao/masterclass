# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/4679792/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/4679792/)

---

# Code
```
var findIntegers = function (n) {
    let s = n.toString(2);
    n = s.length;
    let dp0 = 1, dp1 = 0, tight = 1;
    for (let i = 1; i < n; i++) {
        let xdp0 = dp1 + dp0;
        let xdp1 = dp0;
        if (tight && s[i] === '1') {
            xdp0++;
            if (s[i - 1] === '1') tight = 0;
        }
        dp0 = xdp0;
        dp1 = xdp1;
    }
    return dp0 + dp1 + tight;
};
```