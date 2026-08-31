# javascript solution beats 100%

**Author:** zmj97
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/1844423/](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/1844423/)

---

```js
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} src1
 * @param {number} src2
 * @param {number} dest
 * @return {number}
 */
var minimumWeight = function (n, edges, src1, src2, dest) {
    var paths = new Array(n).fill(0).map(i => []);
    var reversePaths = new Array(n).fill(0).map(i => []);
    for (var edge of edges) {
        var [u, v, w] = edge;
        paths[u].push([v, w]);
        reversePaths[v].push([u, w]);
    }

    var dijkstra = function (start, paths) {
        var visited = [];
        var dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        dp[start] = 0;
        
        var pq = new MinPriorityQueue({priority: item => item[1]});
        pq.enqueue([start, 0]);
        
        while(!pq.isEmpty()) {
            var [u, cost] = pq.dequeue().element;
            if (visited[u] || cost > dp[u]) continue;
            visited[u] = true;
            for (var path of paths[u]) {
                var [v, w] = path;
                if (dp[v] > dp[u] + w) {
                    dp[v] =  dp[u] + w;
                    pq.enqueue([v, dp[v]]);
                }
            }
        }

        return dp;
    }

    var dpStartFromSrc1 = dijkstra(src1, paths);
    var dpStartFromSrc2 = dijkstra(src2, paths);
    var dpStartFromDesc = dijkstra(dest, reversePaths);

    var ans = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < n; i++) {
        ans = Math.min(ans, dpStartFromSrc1[i] + dpStartFromSrc2[i] + dpStartFromDesc[i]);
    }

    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};
```