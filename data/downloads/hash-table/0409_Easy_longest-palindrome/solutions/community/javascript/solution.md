# JavaScript solution with a single for loop

**Author:** gorkiy
**Votes:** 103
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/391018/](https://leetcode.com/problems/longest-palindrome/solutions/391018/)

---

We don't have to make an additional loop through keys.

```
var longestPalindrome = function(s) {
  let ans = 0;
  let keys = {};
  
  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};
```