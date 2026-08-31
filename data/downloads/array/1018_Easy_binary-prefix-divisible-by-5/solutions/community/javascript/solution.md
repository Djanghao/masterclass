# 1018 | JavaScript 1 Line Solution

**Author:** Sporkyy
**Votes:** 5
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/357072/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/357072/)

---

> Runtime: **72 ms**, faster than *59.00%* of JavaScript online submissions
> Memory Usage: **38.2 MB**, less than *92.31%* of JavaScript online submissions

Not the fastest.

```
/**
 * @param {number[]} A
 * @param {number} acc
 * @return {boolean[]}
 */
const prefixesDivBy5 = (A, acc = 0) => A.map(d => !(acc = (acc * 2 + d) % 5));
```