# JavaScript easy solution

**Author:** shengdade
**Votes:** 6
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/512294/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/512294/)

---

```javascript
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  const groupSet = new Set();
  A.forEach(a => groupSet.add(transform(a)));
  return groupSet.size;
};

const transform = S => {
  const even = S.split('').filter((_, i) => i % 2 === 0);
  const odd = S.split('').filter((_, i) => i % 2 === 1);
  even.sort();
  odd.sort();
  return `${even.join('')}${odd.join('')}`;
};
```

* 36/36 cases passed (64 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.5 MB)