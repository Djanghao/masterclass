# Easy JS Solution

**Author:** hbjORbj
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/720594/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/720594/)

---

```
/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
var numberOfDays = function(Y, M) {
    let date1 = new Date(Y,M-1);
    let date2 = new Date(Y,M);
    let diff = date2.getTime() - date1.getTime();
    return diff / (1000*60*60*24);
};
```