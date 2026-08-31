# Simple javascript solution

**Author:** leetcodingm
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-prototype-foreach/solutions/3869418/](https://leetcode.com/problems/array-prototype-foreach/solutions/3869418/)

---


```
/**
 * @param {Function} callback
 * @param {Context} context
 */
Array.prototype.forEach = function(callback, context) {
    for (let i = 0; i < this.length; i++) {
        callback.call(context, this[i], i, this)
    }
}
