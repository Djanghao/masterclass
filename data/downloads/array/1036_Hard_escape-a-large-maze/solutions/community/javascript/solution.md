# 🔥 Javascript Solution - 100% 100%

**Author:** joenix
**Votes:** 2
**Link:** [https://leetcode.com/problems/escape-a-large-maze/solutions/2069328/](https://leetcode.com/problems/escape-a-large-maze/solutions/2069328/)

---

<img src="https://assets.leetcode.com/users/images/88bb50fd-0236-4129-bbf3-e5860a0e7763_1653383384.5933099.png" width="640" />

```
var isEscapePossible = function (b, s, t) {
    // Set max for 2 points
    const max = b.length ** 2 / 2;
    // 4 Types
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    // Set as Hash Result
    const spc = b.reduce((a, c) => a.add(hash(c[0], c[1])), new Set());

    // s and t as x, y
    return dfs(...s, max, new Set(), t) && dfs(...t, max, new Set(), s);

    // Get Hash
    function hash(x, y) {
        return 1123 * x + y;
    }

    // DFS Handler
    function dfs(x, y, max, v, t) {
        if (x < 0 || x >= 1e6 || y < 0 || y >= 1e6 || spc.has(hash(x, y)) || v.has(hash(x, y))) {
            return false;
        }
        if (--max <= 0 || (x === t[0] && y === t[1])) {
            return true;
        }
        // Add Hash into Set
        v.add(hash(x, y));
        
        // Recursion
        return dir.reduce((a, c) => a || dfs(x + c[0], y + c[1], max, v, t), false);
    }
};
```