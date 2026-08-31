# javascript dijkstra with pq 266ms 100%

**Author:** henrychen222
**Votes:** 7
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459224/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459224/)

---

```
const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const addEdgeWithCostToG = (G, Edges) => { for (const [u, v, cost] of Edges) { G[u].push([v, cost]); G[v].push([u, cost]); } };

const reachableNodes = (edges, maxMoves, n) => {
    let g = initializeGraph(n);
    addEdgeWithCostToG(g, edges);
    return dijkstra(g, n, edges, maxMoves);
};

const MIN = Number.MIN_SAFE_INTEGER;
const dijkstra = (g, n, edges, maxMoves) => {
    let pq = new MaxPriorityQueue({ priority: x => x[0] });
    let blood = Array(n).fill(MIN); // for each node, save maximum moves left to reach each node
    pq.enqueue([maxMoves, 0]);
    let res = 0;
    while (pq.size()) {
        let [hp, cur] = pq.dequeue().element;
        if (blood[cur] != MIN) continue;
        blood[cur] = hp;
        res++;
        for (const [next_node, cost] of g[cur]) {
            let next_hp = hp - cost - 1; // cut the cost for move to adjacent child
            if (next_hp < 0 || blood[next_node] != MIN) continue;
            pq.enqueue([next_hp, next_node]);
        }
    }
    for (const [u, v, cost] of edges) {
        let uv = blood[u] == MIN ? 0 : blood[u];
        let vu = blood[v] == MIN ? 0 : blood[v];
        res += Math.min(cost, uv + vu);
    }
    return res;
};
```