# O(1)

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/3775061/](https://leetcode.com/problems/valid-boomerang/solutions/3775061/)

---


# Code
```
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    // x1 (y2 - y3) + x2 (y3 - y1) + x3 (y1 - y2) = 0
    let [[x1, y1], [x2, y2], [x3, y3]] = points
    return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0 ? false : true
};
```