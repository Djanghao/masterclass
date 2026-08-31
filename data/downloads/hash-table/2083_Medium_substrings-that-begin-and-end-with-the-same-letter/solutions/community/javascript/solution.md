# Javascript - HashMap

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5276971/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5276971/)

---

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let ans = 0;
  const map = {};
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
    ans += map[char];
  }

  return ans;
};

```