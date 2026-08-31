# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/4652701/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/4652701/)

---

# Code
```
var canConvertString = function (s, t, k) {
    if (s === t) return true;
    if (s.length !== t.length) return false;
    if (k > 26 * s.length) return true;
    if (k < s.length) return false;

    const usedSteps = new Array(27).fill(0);
    let steps;

    for (let i = 0; i < s.length; i++) {
        steps = t.charCodeAt(i) - s.charCodeAt(i);
        if (steps == 0) continue;
        if (steps < 0) steps = 26 + steps; // steps should be strictly positive.
        if (26 * usedSteps[steps] + steps > k) return false;
        usedSteps[steps]++; // update the future steps.
    }
    return true;
};
```