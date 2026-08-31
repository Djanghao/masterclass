# Easy JS / TS solution

**Author:** deleted_user
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3265233/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3265233/)

---

# Code
```
const checkStraightLine = ([[x1, y1], [x2, y2], ...coordinates]) => {
    const dx = x2 - x1, dy = y2 - y1;

    return coordinates.every(([x, y]) => (dx * (y - y1)) === (dy * (x - x1)));
};
```