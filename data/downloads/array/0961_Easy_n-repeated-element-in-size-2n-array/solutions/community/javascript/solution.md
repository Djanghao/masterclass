# JS - Faster than 97% - Using Sets

**Author:** nilsonmolina
**Votes:** 12
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/302954/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/302954/)

---

```
var repeatedNTimes = function(A) {
  let lookup = new Set();

  for (let n of A) {
    if (lookup.has(n)) return n;
    lookup.add(n);
  }

  return -1;
};
```