# JavaScript solution with custom comparator

**Author:** shengdade
**Votes:** 36
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/519654/](https://leetcode.com/problems/relative-sort-array/solutions/519654/)

---

```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const lookup = new Map();
  const N = arr2.length;
  arr2.forEach((a, i) => {
    lookup.set(a, i);
  });
  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
};
```

* 16/16 cases passed (52 ms)
* Your runtime beats 91.48 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.9 MB)