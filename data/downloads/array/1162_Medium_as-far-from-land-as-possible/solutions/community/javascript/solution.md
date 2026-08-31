# JavaScript super easy to understand

**Author:** hieubt280299
**Votes:** 11
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3167044/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3167044/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is the very straightforward approach, just based on the problem description itself.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an array containing two subarrays: the first subarray contains locations of water cells, the second one contains locations of land cells.
2. Iterate through the first subarray. For each water cell, calculate the nearest distance to a land cell by looping through the second subarray.
3. Get the maximum value of all nearest distance values.
# Complexity
- Time complexity: $$O(n^4)$$, because we have two nested for-loops, iterating through $$n^2$$ cells
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$, as we need to store all the cells
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let res = -1, n = grid.length, map = [[], []];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const p = grid[i][j];
            map[p].push([i, j]);
        }
    }
    if (map[0].length === 0 || map[1].length === 0) {
        return -1;
    }
    for (let i = 0; i < map[0].length; i++) {
        let nearest = 9999999;
        for (let j = 0; j < map[1].length; j++) {
            const d = distance(map[0][i], map[1][j]);
            if (d < nearest) {
                nearest = d;
            }
        }
        if (nearest > res) {
            res = nearest;
        }
    }
    return res;
};

const distance = (p0, p1) => {
    const x0 = p0[0], x1 = p1[0], y0 = p0[1], y1 = p1[1];
    let d = 0;
    if (x0 > x1) {
        d += x0 - x1;
    } else {
        d += x1 - x0;
    }
    if (y0 > y1) {
        d += y0 - y1;
    } else {
        d += y1 - y0;
    }
    return d;
}
```