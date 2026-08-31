# Javascript - Backtracking

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/5191075/](https://leetcode.com/problems/word-pattern-ii/solutions/5191075/)

---

# Code
```
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function (pattern, s) {
  const mapPattern = {};
  const mapString = {};
  return backtrack(pattern, s, mapPattern, mapString, 0, 0);
};

function backtrack(pattern, s, mapPattern, mapString, i, j) {
  if (i === pattern.length && j === s.length) return true;
  if (i === pattern.length || j === s.length) return false;

  const char = pattern[i];

  for (let k = j; k < s.length; k++) {
    const substring = s.slice(j, k + 1);
    let result = false;

    if (!(char in mapPattern) && !(substring in mapString)) {
      mapPattern[char] = substring;
      mapString[substring] = char;

      result = backtrack(pattern, s, mapPattern, mapString, i + 1, k + 1);
      if (!result) {
        delete mapPattern[char];
        delete mapString[substring];
      }
    } else if (mapPattern[char] && mapPattern[char] === substring) {
      result = backtrack(pattern, s, mapPattern, mapString, i + 1, k + 1);
    }

    if (result) return true;
  }

  return false;
}

```