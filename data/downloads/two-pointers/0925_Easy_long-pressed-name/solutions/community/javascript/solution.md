# JavaScript two-pointers

**Author:** shengdade
**Votes:** 12
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/512597/](https://leetcode.com/problems/long-pressed-name/solutions/512597/)

---

```javascript
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let j = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[j]) {
      j++;
    } else if (typed[i] === name[j - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return j === name.length;
};
```

* 71/71 cases passed (48 ms)
* Your runtime beats 98.18 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (35.6 MB)