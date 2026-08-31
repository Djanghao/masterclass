# topological sort

**Author:** parkCloud
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/4465374/](https://leetcode.com/problems/strange-printer-ii/solutions/4465374/)

---

# Intuition
suppose square b is on top of square a, then a is depended on b,
in graph, b has an arrow pointed to a, after bulid the graph, apply top sort logic

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
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function (matrix) {
    let n = matrix.length
    let m = matrix[0].length
    let colorMap = new Map()
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            let color = matrix[r][c]
            if (!colorMap.has(color)) {
                colorMap.set(color, {
                    top: n,
                    left: m,
                    right: -1,
                    bottom: -1
                })
            }
            let { top, left, right, bottom } = colorMap.get(color)
            top = Math.min(top, r)
            left = Math.min(left, c)
            right = Math.max(right, c)
            bottom = Math.max(bottom, r)
            colorMap.set(color, { top, left, right, bottom })
        }
    }
    let graph = new Map()
    let degrees = {}
    for (const color of colorMap.keys()) {
        graph.set(color, new Set())
        degrees[color] = 0
    }
    for (const [color, { top, left, right, bottom }] of colorMap.entries()) {
        for (let r = top; r <= bottom; r++) {
            for (let c = left; c <= right; c++) {
                let other = matrix[r][c]
                if (color !== other) {
                    graph.get(other).add(color)
                }
            }
        }
    }
    for (const [color, neighbors] of graph.entries()) {
        for (const to of neighbors) {
            degrees[to] += 1
        }
    }
    let queue = []
    for (const key in degrees) {
        if (degrees[key] === 0) {
            queue.push(key)
        }
    }
    let topsort = new Set()
    while (queue.length) {
        let at = queue.shift()
        topsort.add(at)
        for (const to of graph.get(Number(at)) || []) {
            degrees[to] -= 1
            if (!degrees[to]) {
                queue.push(to)
            }
        }
    }
    return topsort.size === Array.from(graph.keys()).length

};
```