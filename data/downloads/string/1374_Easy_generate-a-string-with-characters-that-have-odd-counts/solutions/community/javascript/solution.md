# [JavaScript] O(n) [96, 100]

**Author:** anatoliisf
**Votes:** 25
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/543710/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/543710/)

---

```
var generateTheString = function(n) {
  return n % 2 === 0 ? `${'a'.repeat(n - 1)}b` : 'a'.repeat(n);
};
```