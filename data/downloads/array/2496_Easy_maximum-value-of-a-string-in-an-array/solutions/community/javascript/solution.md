# JavaScript - JS

**Author:** mlienhart
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2899041/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2899041/)

---

```
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  return Math.max(...strs.map((x) => (isNaN(+x) ? x.length : +x)));
};
```