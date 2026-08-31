# Optimized Approach for Reaching Points Problem

**Author:** pandalexander
**Votes:** 1
**Link:** [https://leetcode.com/problems/reaching-points/solutions/4970585/](https://leetcode.com/problems/reaching-points/solutions/4970585/)

---

# Intuition
The problem requires determining whether it's possible to reach the target point (tx, ty) starting from the given point (sx, sy) using a series of moves. Initially, we might think of using a brute force approach, trying out all possible moves until we reach the target point or exhaust all possibilities. However, such an approach would be inefficient for large inputs due to its exponential time complexity.

# Approach
To optimize the solution, we can use a mathematical approach that involves working backward from the target point. At each step, we evaluate whether it's possible to reach the current point from the previous one using certain rules. We apply modulo operations to handle cases where the coordinates of the previous point are greater than the starting point's coordinates, effectively reducing the coordinates iteratively until we reach the starting point or determine that it's not possible to reach it.

# Complexity
- Time complexity:
The time complexity of this optimized approach is O(log(max(tx, ty))) because at each step, we perform modulo operations, reducing the coordinates until we reach the starting point or determine that it's not reachable. Since the reduction is based on the maximum of the target coordinates, the algorithm's time complexity is logarithmic.

- Space complexity:
The space complexity of this approach is O(1) because we only use a constant amount of extra space for variables and do not require any additional data structures. Therefore, the space complexity is constant.

# Code
```
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx === ty) break;
        if (tx > ty) {
            if (ty > sy) tx %= ty;
            else return (tx - sx) % ty === 0;
        } else {
            if (tx > sx) ty %= tx;
            else return (ty - sy) % tx === 0;
        }
    }
    return (tx === sx && ty === sy);
};


```