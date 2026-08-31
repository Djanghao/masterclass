# javascript - basic logic flow

**Author:** jcmlumacad1
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5144107/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5144107/)

---

```
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(g) {
    let i = 0;
    for (let j = 1; j < g[0].length; j++) {
        if (
            g[i][j-1] == g[i][j]
        ) return false
    }
    
    let s = new Set(g.map(e => e.join('')))
    if (s.size > 1) return false 
    return true
};
```