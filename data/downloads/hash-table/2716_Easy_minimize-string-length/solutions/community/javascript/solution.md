# Use new Set(). 2 lines

**Author:** Movsar
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/3594910/](https://leetcode.com/problems/minimize-string-length/solutions/3594910/)

---

```
/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = function(s) {
    const u = new Set(s)
    return u.size
};
```