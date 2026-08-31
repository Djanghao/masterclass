# binary lifting

**Author:** parkCloud
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/4472497/](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/4472497/)

---

# Intuition
think of path of node a to b is terms of path of root to a and path of root to b minus 2 * path of root to lca(a,b).

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minOperationsQueries = function (n, edges, queries) {
    let LOG = 20
    let freq = Array(n).fill(0).map((row) => Array(27).fill(0)) // freq[node][w]
    let up = Array(n).fill(0).map((row) => Array(LOG).fill(-1))
    let depth = Array(n).fill(0)
    let graph = new Map()
    for (const [at, to, w] of edges) {
        if (!graph.has(at)) {
            graph.set(at, [])
        }
        if (!graph.has(to)) {
            graph.set(to, [])
        }
        graph.get(at).push([to, w])
        graph.get(to).push([at, w])
    }
    function dfs(at, parent, w, dep) {
        up[at][0] = parent
        depth[at] = dep
        for (let i = 1; i < LOG; i++) {
            let p = up[at][i - 1]
            if (p == -1) break
            up[at][i] = up[p][i - 1]
        }
        if (parent !== -1) {
            freq[at] = [...freq[parent]]
            freq[at][w] += 1
        }
        for (const [to, w] of graph.get(at) || []) {
            if (to !== parent) {
                dfs(to, at, w, dep + 1)
            }
        }
    }
    dfs(0, -1, 0, 0)
    function lca(u, v) {
        // assure depth of  node u is greater
        if (depth[u] < depth[v]) {
            return lca(v, u)
        }
        // put u and v at the same level
        let diff = depth[u] - depth[v]
        for (let i = LOG; i > -1; i--) {
            if (diff & (1 << i)) {
                u = up[u][i]
            }
        }
        if (u == v) return u
        for (let i = LOG; i > -1; i--) {
            if (up[u][i] !== up[v][i]) {
                u = up[u][i]
                v = up[v][i]
            }
        }
        return up[u][0]

    }
    let m = queries.length
    let ans = Array(m).fill(0)
    for (let i = 0; i < m; i++) {
        let [u, v] = queries[i]
        let p = lca(u, v)
        let total = 0
        let max = 0
        for (let i = 0; i < 27; i++) {
            let res = freq[u][i] + freq[v][i] - 2 * freq[p][i]
            total += res
            max = Math.max(max, res)
        }
        ans[i] = total - max

    }
    return ans
};
```