# JavaScript simple solution

**Author:** shengdade
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/508209/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/508209/)

---

```javascript
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  let lines = 1;
  let last = 0;
  const base = 'a'.charCodeAt(0);
  for (let i = 0; i < S.length; i++) {
    const width = widths[S.charCodeAt(i) - base];
    last += width;
    if (last > 100) {
      lines++;
      last = width;
    }
  }
  return [lines, last];
};
```