# Simple JavaScript Solution

**Author:** _kamal_jain
**Votes:** 4
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/797313/](https://leetcode.com/problems/reach-a-number/solutions/797313/)

---

```
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target);
    let steps = 0, sum = 0;
    while (sum < target) {
        steps++;
        sum += steps;
    }
    while ((sum - target) % 2 !== 0) {
        steps++;
        sum += steps;
    }
    return steps;
};
```