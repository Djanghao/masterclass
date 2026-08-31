# JavaScript straight-forward solution

**Author:** shengdade
**Votes:** 8
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/508130/](https://leetcode.com/problems/rotated-digits/solutions/508130/)

---

```javascript
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let counter = 0;
  for (let i = 1; i <= N; i++) {
    if (isValid(i)) counter++;
  }
  return counter;
};

const isValid = n => {
  let valid = false;
  while (n) {
    const a = n % 10;
    if (a === 3 || a === 4 || a === 7) return false;
    if (a === 2 || a === 5 || a === 6 || a === 9) valid = true;
    n = Math.trunc(n / 10);
  }
  return valid;
};
```

* 50/50 cases passed (48 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.2 MB)