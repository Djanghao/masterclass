# Solution with Javascript

**Author:** manhhungit37
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5630213/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5630213/)

---

# Code
```
/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function(values) {
    const newValues = values.flat().sort((a, b) => a - b);
    let day = 1, total = 0;
    for (let value of newValues) {
        total += day * value;
        day++;
    }
    return total;
};
```