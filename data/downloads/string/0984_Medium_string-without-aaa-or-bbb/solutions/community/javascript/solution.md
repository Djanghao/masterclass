# Recursive JavaScript Solution

**Author:** _kamal_jain
**Votes:** 3
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/797274/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/797274/)

---

```
/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    if (A === 0) return "b".repeat(B);
    if (B === 0) return "a".repeat(A);
    if (A === B) return "ab" + strWithout3a3b(A - 1, B - 1);
    if (A > B) return "aab" + strWithout3a3b(A - 2, B - 1);
    return "bba" + strWithout3a3b(A - 1, B - 2);
};

```