# JavaScript simple one-pass

**Author:** shengdade
**Votes:** 7
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/505550/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/505550/)

---

```javascript
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let i = 0;
  while (i < bits.length - 1) {
    if (bits[i] === 1) i++;
    i++;
  }
  return bits[i] === 0;
};
```

* 93/93 cases passed (52 ms)
* Your runtime beats 90.91 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.5 MB)