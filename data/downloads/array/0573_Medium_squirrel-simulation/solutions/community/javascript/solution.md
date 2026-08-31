# A few lines of JavaScript, O(nuts) time and O(1) space

**Author:** loctn
**Votes:** 4
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/102836/](https://leetcode.com/problems/squirrel-simulation/solutions/102836/)

---

```
var minDistance = function(height, width, tree, squirrel, nuts) {
    const treeSum = 2 * nuts.reduce((sum, nut) => sum + dist(tree, nut), 0);
    const maxReductionBySquirrel = Math.max(...nuts.map(nut => dist(tree, nut) - dist(squirrel, nut)));
    return treeSum - maxReductionBySquirrel;
};

function dist(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
```
This can also be done in one pass:
```
var minDistance = function(height, width, tree, squirrel, nuts) {
    const [treeToNutSum, maxReductionBySquirrel] = nuts.reduce((prev, nut) => [
        prev[0] + dist(tree, nut),
        Math.max(prev[1], dist(tree, nut) - dist(squirrel, nut))
    ], [0, -Infinity]);
    return 2 * treeToNutSum - maxReductionBySquirrel;
};

function dist(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
```
Or one unreadable line:
```
var minDistance = function(h, w, t, s, N, m = Math.abs) {
    return h = (a, b) => m(a[0] - b[0]) + m(a[1] - b[1]), 2 * (w = N.reduce((p, n) => [p[0] + h(t, n), Math.max(p[1], h(t, n) - h(s, n))], [0, -Infinity]))[0] - w[1];
};
```