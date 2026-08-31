# JavaScript Solution - DFS Approach?

**Author:** Deadication
**Votes:** 10
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/890379/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/890379/)

---

I am not sure if this is a good way of doing it, but I thought I would post and get your guys' opinions. Thank you.

```
var minReorder = function(n, connections) {
    const graph = [];
    const set = new Set();
    
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    
    for (const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
        set.add(`${u}#${v}`);
    }
    
    let count = 0;
    
    dfs(0, -1)
    
    return count;
    
    
    function dfs(node, parent) {
        
        if (set.has(`${parent}#${node}`)) count++;
        
        for (const nei of graph[node]) {
            if (nei === parent) continue;
       
            dfs(nei, node);
        }
    }
}; 
```