# JS Solution

**Author:** VarunNarayan21
**Votes:** 3
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/4323649/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/4323649/)

---


# Code
```
var minimumRemoval = function(beans) {
    beans.sort((a,b) => a - b);
    let sum = beans.reduce((c,a) => c + a);
    let rest = 0;
    for(let i = 0; i < beans.length; i++) {
        rest = Math.max(rest, beans[i]*(beans.length-i));
    }
    return sum - rest;
};
```