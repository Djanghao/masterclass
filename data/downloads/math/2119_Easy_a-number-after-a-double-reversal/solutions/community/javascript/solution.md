# Beginner friendly short JavaScript solution

**Author:** HimanshuBhoir
**Votes:** 7
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1706407/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1706407/)

---

**Time Complexity : O(1)**

**Approach 1 :**
```
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num == 0)    return true;
    if(num % 10 == 0)   return false;
    return true;
};
```


**Approach 2 :**
```
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return num == 0 || num % 10 != 0;
};
```