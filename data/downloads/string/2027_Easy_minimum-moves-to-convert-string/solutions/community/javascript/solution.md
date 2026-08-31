# 2027 | JavaScript 1-Line Solution

**Author:** Sporkyy
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1519447/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1519447/)

---

> Runtime: **83 ms**, faster than *47.58%* of JavaScript online submissions
> Memory Usage: **39.2 MB**, less than *17.18%* of JavaScript online submissions

```javascript
 const minimumMoves = s => s.match(/X.{0,2}/g)?.length ?? 0;
 ```