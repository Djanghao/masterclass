# JavaScript 3-Line Solution

**Author:** Sporkyy
**Votes:** 2
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/493416/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/493416/)

---

Runtime: 60 ms, faster than 94.27% of JavaScript online submissions
Memory Usage: 33.8 MB, less than 80.87% of JavaScript online submissions

```
const numMovesStones = (a, b, c) => {
  const [x, y, z] = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - a)];
  const [min, max] = [Math.min(x, y, z), Math.max(x, y, z)];
  return 2 === max ? [0, 0] : [min < 3 ? 1 : 2, max - 2];
};
```