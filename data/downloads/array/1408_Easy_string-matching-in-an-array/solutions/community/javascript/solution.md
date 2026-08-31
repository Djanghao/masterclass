# 1408 | 1-line javascript solution

**Author:** Sporkyy
**Votes:** 18
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/642653/](https://leetcode.com/problems/string-matching-in-an-array/solutions/642653/)

---

> Runtime: **64 ms**, faster than *51.50%* of JavaScript online submissions_
> Memory Usage: **34.8 MB**, less than **100.00%** of JavaScript online submissions_

```javascript
const stringMatching = words =>
  words.filter(n => words.some(h => h !== n && h.includes(n)));
```