# Simple JS

**Author:** berkansivri
**Votes:** 6
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/1074773/](https://leetcode.com/problems/construct-the-rectangle/solutions/1074773/)

---

```
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let w = parseInt(Math.sqrt(area))

  while(!Number.isInteger(area/w)) w--

  return [area/w, w]
};
```
