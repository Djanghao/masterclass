# Javascript - DP

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/3690868/](https://leetcode.com/problems/decremental-string-concatenation/solutions/3690868/)

---

# Code
```
/**
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function (words) {
  const n = words.length;
  const dp = new Array(n)
    .fill()
    .map((_) => new Array(26).fill().map((_) => new Array(26).fill()));
  const firstCharCode = getCharCode(words[0], 0);
  const lastCharCode = getCharCode(words[0], words[0].length - 1);

  return words[0].length + helper(dp, n, words, 1, firstCharCode, lastCharCode);
};

function helper(dp, n, words, i, firstCharCode, lastCharCode) {
  if (i >= n) return 0;
  if (dp[i][firstCharCode][lastCharCode] !== undefined) {
    return dp[i][firstCharCode][lastCharCode];
  }

  const currFirstCharCode = getCharCode(words[i], 0);
  const currLastCharCode = getCharCode(words[i], words[i].length - 1);
  // put current word after the previous word
  const newLastCharCode = getCharCode(words[i], words[i].length - 1);
  let next = helper(dp, n, words, i + 1, firstCharCode, newLastCharCode);
  let resultOne = words[i].length + next;
  if (currFirstCharCode === lastCharCode) resultOne--;

  // put current word before the previous word
  const newFirstCharCode = getCharCode(words[i], 0);
  next = helper(dp, n, words, i + 1, newFirstCharCode, lastCharCode);
  let resultTwo = words[i].length + next;
  if (currLastCharCode === firstCharCode) resultTwo--;

  return (dp[i][firstCharCode][lastCharCode] = Math.min(resultOne, resultTwo));
}

const getCharCode = (string, idx) => string.charCodeAt(idx) - 97;

```