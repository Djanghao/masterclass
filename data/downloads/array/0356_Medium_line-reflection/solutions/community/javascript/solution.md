# JavaScript: create Set, calculate midpoint, check opposite points

**Author:** anton-ivanov
**Votes:** 1
**Link:** [https://leetcode.com/problems/line-reflection/solutions/3373219/](https://leetcode.com/problems/line-reflection/solutions/3373219/)

---

# Intuition

1. Add all points into a set of strings (e.g. "1,3")
2. Calculate the supposed vertical line, which should be exactly in the middle between the leftmost and rightmost points on the `x` axis.
3. Make sure that for all points, the set contains an opposite (reflected) point. Calculate that opposite point based on the position of the supposed vertical line.

# Code
```
const isReflected = function(points) {
    const set = new Set();

    let leftmost = Infinity;
    let rightmost = -Infinity;

    for (const point of points) {
      set.add(point.join(','));
      leftmost = Math.min(leftmost, point[0]);
      rightmost = Math.max(rightmost, point[0]);
    }

    let midpoint = (leftmost + rightmost) / 2;

    for (const point of points) {
      const [x, y] = point;
      const oppositePoint = [
        midpoint * 2 - x,
        y
      ];
      if (!set.has(oppositePoint.join(','))) {
        return false;
      }
    }
    
    return true;
};

```