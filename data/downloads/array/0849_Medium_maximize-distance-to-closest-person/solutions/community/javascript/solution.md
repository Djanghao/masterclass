# Javascript 2 lines solution

**Author:** AlloVince
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/340825/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/340825/)

---

```js
var maxDistToClosest = function(seats) {
  const zeros = seats.join('').split('1');
  return Math.max(
    zeros.shift().length,
    zeros.pop().length,
    ...zeros.map(i => i.length > 0 ? Math.floor((i.length + 1) / 2) : 0)
  );
};
```