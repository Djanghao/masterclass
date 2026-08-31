# [JavaScript] Z-function

**Author:** mxn42
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/1907356/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/1907356/)

---

Explanation: [Z-function and its calculation](https://cp-algorithms.com/string/z-function.html)

```js
const sumScores = (s) => {
  return s.length + zFunction(s).reduce((acc, x) => acc + x, 0);
};

const zFunction = (s) => {
  const n = s.length;
  const Z = Array(n).fill(0);
  let left = 0, right = 0;
  for (let i = 1; i < n; ++i) {
    if (i <= right)
      Z[i] = Math.min(right - i + 1, Z[i - left]);
    while (i + Z[i] < n && s[Z[i]] === s[i + Z[i]])
      Z[i] += 1;
    if (i + Z[i] - 1 > right) {
      left = i;
      right = i + Z[i] - 1;
    }
  }
  return Z;
};
```