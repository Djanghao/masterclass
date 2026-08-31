# Clean JavaScript solution (Count by Diagonal)

**Author:** Hongbo-Miao
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/415031/](https://leetcode.com/problems/minimum-area-rectangle/solutions/415031/)

---

```
const minAreaRect = (points) => {
  const map = new Map();
  for (const [x, y] of points) {
    if (!map.has(x)) map.set(x, new Set());
    map.get(x).add(y);
  }

  let min = Infinity;
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 === x2 || y1 === y2) continue;

      // Find other two diagonal points
      if (map.get(x1).has(y2) && map.get(x2).has(y1)) {
        min = Math.min(min, Math.abs(x1 - x2) * Math.abs(y1 - y2));
      }
    }
  }
  return min === Infinity ? 0 : min;
};
```