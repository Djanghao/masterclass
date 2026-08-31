# JavaScript | Simple Solution

**Author:** aryonbe
**Votes:** 3
**Link:** [https://leetcode.com/problems/partial-function-with-placeholders/solutions/3831373/](https://leetcode.com/problems/partial-function-with-placeholders/solutions/3831373/)

---

# Code
```
/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function(fn, args) {
    return function(...restArgs) {
        const replacedArgs = args.map(arg => arg === '_' ? restArgs.shift() : arg);
        return fn(...replacedArgs.concat(restArgs));   
    }
};
```