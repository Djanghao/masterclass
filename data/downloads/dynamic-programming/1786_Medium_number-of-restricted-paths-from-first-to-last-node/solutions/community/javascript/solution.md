# Fast Easy JS Solution | dijkstras + dfs + dp | 70% faster

**Author:** nontoxic
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/2168862/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/2168862/)

---

```
var countRestrictedPaths = function(n, edges) {
    const g = Array.from({ length: n + 1}, () => []);
    for(let [a, b, c] of edges) {
        g[a].push([b, c]);
        g[b].push([a, c]);
    }
    // do dijkstras to find shortest path from n to all nodes
    const dis = new Array(n + 1).fill(Infinity);
    dis[n] = 0;
    const dijkstra = () => {
        const heap = new MinPriorityQueue({ priority: (x) => x[1] });
        heap.enqueue([n, 0]);
        while(heap.size()) {
            const [node, cost] = heap.dequeue().element;
            for(let [nextNode, w] of g[node]) {
                const totalCost = cost + w;
                if(dis[nextNode] > totalCost) {
                    dis[nextNode] = totalCost;
                    heap.enqueue([nextNode, totalCost]);
                }
            }
        }
    }
    dijkstra();
    
    // do dfs from 1 having path always lesser dist
    let rPaths = 0;
    const MOD = 1000000007;
    const dp = new Array(n + 1).fill(-1);
    const dfs = (curr = 1, rCost = dis[1]) => {
        if(curr == n) return 1;
        if(dp[curr] != -1) return dp[curr];
        
        let op = 0;
        for(let [n, w] of g[curr]) {
            if(dis[n] < rCost) {
                op = (op + dfs(n, dis[n])) % MOD;
            }
        }
        
        return dp[curr] = op;
    }
    return dfs();
};
```