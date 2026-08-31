# javascript dijkstra 132ms

**Author:** henrychen222
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/1418253/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/1418253/)

---

```
const mod = 1e9 + 7;
const countPaths = (n, road) => {
    let adj = initializeGraph(n);
    for (const [u, v, cost] of road) {
        adj[u].push([v, cost]);
        adj[v].push([u, cost]);
    }
    return dijkstra(n, adj, 0);
};

const dijkstra = (n, g, source) => { // g: adjacent graph list, n: total vertices
    let dist = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let ways = Array(n).fill(0);
    const pq = new MinPriorityQueue({ priority: x => x[0] * 200 + x[1] });
    dist[0] = 0;
    ways[0] = 1;
    pq.enqueue([0, source]);
    while (pq.size()) {
        let cur = pq.dequeue().element;
        let [curCost, curNode] = cur;
        if (dist[curNode] != curCost) continue;
        for (const [node, cost] of g[curNode]) { // parse neighbour node
            let newDis = curCost + cost;
            if (newDis == dist[node]) {
                ways[node] += ways[curNode];
                ways[node] %= mod;
            } else if (newDis < dist[node]) {
                dist[node] = newDis;
                ways[node] = ways[curNode];
                pq.enqueue([dist[node], node]);
            }
        }
    }
    return ways[n - 1];
};

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
```