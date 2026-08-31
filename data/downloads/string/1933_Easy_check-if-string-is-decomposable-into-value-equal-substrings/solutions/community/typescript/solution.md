# TS/JS solution with RegExp.

**Author:** a_deev
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/5610656/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/5610656/)

---

# Code
```
function isDecomposable(s: string): boolean {
    const match = s.match(/(\\d)\\1*/g);
    if (!match) return false;

    let hasLengthOfTwo = false;

    for (const m of match) {
        const rem = m.length % 3;
        if (rem === 0) continue;

        if (rem === 2) {
            if (hasLengthOfTwo) return false;
            hasLengthOfTwo = true;
        } else {
            return false;
        }
    }

    return hasLengthOfTwo;
};
```