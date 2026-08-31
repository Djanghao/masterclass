# LCA rooted at any of start, end or node

**Author:** soyukotoda
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/4898936/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/4898936/)

---

# Intuition
For each query `[start, end, node]`, root the tree at `node`, then find LCA of `start` and `end`. The ancestor must be lowest, otherwise the ancestor will not be on the path from `start` to `end`.

The method will also work if you choose to root the tree at `start` or `end`.

# Approach
<!-- Describe your approach to solving the problem. -->
For finding LCA of tree at O(N) see [Q236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/). This uses a score system. Earliest (encoutered during the postorder) node with score of 2 will be the LCA.

# Code
```
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var closestNode = function (n, edges, query) {
    const adj = Array.from({ length: n }, () => []);
    for (const [n1, n2] of edges) {
        adj[n1].push(n2);
        adj[n2].push(n1);
    }

    const res = [];
    for (const [n1, n2, root] of query) res.push(solve(root, -1, n1, n2));
    return res;


    function solve(root, parent, n1, n2) {
        // O(N) per query, see Q236
        let ans = null;
        getLCA(root, parent, n1, n2);
        return ans;

        function getLCA(crt, parent, n1, n2) {
            // Will return score, earliest 2 will be the answer
            let score = 0;
            if (crt === n1) score++;
            if (crt === n2) score++; // Impossible score will > 2 even after considering child, tree, will not revisit n1 n2
            for (const next of adj[crt]) {
                if (next === parent) continue;
                score += getLCA(next, crt, n1, n2);
            }
            if (score === 2 && ans === null) ans = crt;
            return score;
        }
    }
};
```