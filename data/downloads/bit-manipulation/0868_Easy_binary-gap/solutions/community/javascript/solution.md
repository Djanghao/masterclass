# 868 | JavaScript 1-line solution

**Author:** Sporkyy
**Votes:** 12
**Link:** [https://leetcode.com/problems/binary-gap/solutions/358693/](https://leetcode.com/problems/binary-gap/solutions/358693/)

---

> Runtime: **48 ms**, faster than *95.29%* of JavaScript online submissions
> Memory Usage: **33.9 MB**, less than *100.00%* of JavaScript online submissions

```javascript
/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = N =>
  Math.max(
    0,
    ...N.toString(2)
      .split('1')
      .slice(1, -1)
      .map(gap => gap.length + 1),
  );
```