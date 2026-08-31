# Javascript bfs 325ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366955/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366955/)

---

```
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

const findShortestCycle = (n, edges) => {
    let g = initializeGraph(n), res = Number.MAX_SAFE_INTEGER;
    packUG(g, edges);
    for (let i = 0; i < n; i++) res = Math.min(res, shortestCycleUG(g, i));
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

const shortestCycleUG = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [[start, -1]], res = Number.MAX_SAFE_INTEGER;
    dis[start] = 0;
    while (q.length) {
        let [cur, par] = q.shift();
        for (const child of g[cur]) {
            if (dis[child] > dis[cur] + 1) {
                dis[child] = dis[cur] + 1;
                q.push([child, cur]);
            } else if (child != par) {
                let cycle = dis[cur] + dis[child] + 1;
                res = Math.min(res, cycle);
            }
        }
    }
    return res;
};
```