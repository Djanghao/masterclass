# Clean Deikstra + PriorityQueue (Heap)

**Author:** panevskii
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/3378059/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/3378059/)

---

# Code
```

function reachableNodes(edges: number[][], maxMoves: number, n: number): number {
    let graph = [... new Array(n)].map(_ => []);
    for (const [u, v, cost] of edges) { 
        graph[u].push([v, cost]); 
        graph[v].push([u, cost]); 
    }

    const seen = new Map<number, number>();

    let pq = new MaxPriorityQueue({ priority: node => node[0] });
    pq.enqueue([maxMoves, 0])

    while (pq.size()) {
       const [moves, node] = pq.dequeue().element;
       if (!seen.has(node)) {
            seen.set(node, moves);
            for (const [neighbor, distance] of graph[node]) {
                const remainMoves = moves - distance - 1;
                if (remainMoves >= 0 && !seen.has(neighbor)) {
                    pq.enqueue([remainMoves, neighbor]);
                }
            }
       }
    }

    let res = seen.size;
    for (const [from, to, k] of edges) {
        res += Math.min((seen.get(from) || 0) + (seen.get(to) || 0), k);
    }
           
    return res;
};


```