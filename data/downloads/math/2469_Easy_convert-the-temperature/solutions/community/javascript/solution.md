# One-liner JavaScript

**Author:** ogochukwu_anayorachu
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/2869029/](https://leetcode.com/problems/convert-the-temperature/solutions/2869029/)

---

```
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [(celsius + 273.15),(celsius * 1.80 + 32.00)]
};
```