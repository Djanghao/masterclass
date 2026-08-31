# 1 line javascript solution 48ms

**Author:** daimant
**Votes:** 18
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/501726/](https://leetcode.com/problems/day-of-the-year/solutions/501726/)

---

```
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  return ((new Date(date) - new Date(date.slice(0,4))) + 86400000) / 86400000;
};
```