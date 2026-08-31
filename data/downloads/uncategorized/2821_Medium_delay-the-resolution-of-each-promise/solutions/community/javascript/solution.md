# Straight forward implementation

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/delay-the-resolution-of-each-promise/solutions/3924558/](https://leetcode.com/problems/delay-the-resolution-of-each-promise/solutions/3924558/)

---

# Code
```
/**
 * @param {Array<Function>} functions
 * @param {number} ms
 * @return {Array<Function>}
 */
var delayAll = function(functions, ms) {
  var delayedFunctions = [];

  for (var i = 0; i < functions.length; i++) {
    (function(index) {
      delayedFunctions.push(function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            resolve(functions[index]());
          }, ms);
        });
      });
    })(i);
  }

  return delayedFunctions;
};


```