# TypeScript straightforward and easy.

**Author:** jacobbassett
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/5080400/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/5080400/)

---

# Logic
If there are no '1's in s or target then it would be impossible to convert s into target. The only hope then is if s and target are already the same.

# Code
```
function makeStringsEqual(s: string, target: string): boolean {
    if (!s.includes("1") || !target.includes("1") ) {
        return s === target;
    };
    return true
};
```