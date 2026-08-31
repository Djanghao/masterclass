# 2588ms 😎 || LONG😎 || TYPESCRIPT😎 || CLICK 😎

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/3691569/](https://leetcode.com/problems/path-with-maximum-probability/solutions/3691569/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
let dijkstra = (n: number, map: any, s: number, d: number) => {
    let visited = new Array(n).fill(0);
    let costs = new Array(n).fill(0);
    costs[s] = 1;
    while(true) {
        let node;
        for(let i=0; i<visited.length; i++) {
            if(visited[i]) continue;
            if(node === undefined) node = i;
            else node = costs[node] < costs[i] ? i: node;
        }
        if(node === undefined) break;
        if(node === d) return costs[d];
        visited[node] = 1;
        if(map[node] === undefined) continue;
        let adjNodes = Object.keys(map[node]);
        for(let adj of adjNodes) {
            if(visited[adj]) continue;
            let w = map[node][adj] * costs[node];
            costs[adj] = Math.max(costs[adj], w);
        }
    }
    return costs[d];
}

function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
    let map = {};
    for (let i = 0; i < edges.length; i++) {
        let [f, t] = edges[i];
        if (map[f] === undefined) map[f] = {};
        if (map[t] === undefined) map[t] = {};
        map[f][t] = succProb[i];
        map[t][f] = succProb[i];
    }
    if(map[end] === undefined) return 0;
    let res = dijkstra(n, map, start, end);
    return res;
}
```