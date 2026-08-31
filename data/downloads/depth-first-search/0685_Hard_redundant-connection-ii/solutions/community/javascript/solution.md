# javascript union find 72ms 100%

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/1295783/](https://leetcode.com/problems/redundant-connection-ii/solutions/1295783/)

---

```
const findRedundantDirectedConnection = (edges) => {
    let n = edges.length;
    let parent = Array(n + 1).fill(0);
    let first = [];
    let second = [];
    for (const e of edges) {
        if (parent[e[1]] == 0) {
            parent[e[1]] = e[0];
        } else {
            first = [parent[e[1]], e[1]];
            second = [...e];
            e[1] = 0;
        }
    }
    for (let i = 0; i <= n; ++i) parent[i] = i;
    for (const e of edges) {
        if (e[1] == 0) continue;
        let [x, y] = [find(parent, e[0]), find(parent, e[1])];
        if (x == y) return first.length == 0 ? e : first;
        parent[x] = y;
    }
    return second;
};

const find = (parent, x) => {
    return x == parent[x] ? x : find(parent, parent[x]);
};
```