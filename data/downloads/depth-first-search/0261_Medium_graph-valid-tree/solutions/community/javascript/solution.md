# JavaScript DFS solution

**Author:** cnaer
**Votes:** 9
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/69116/](https://leetcode.com/problems/graph-valid-tree/solutions/69116/)

---

    var validTree = function(n, edges) {
        if (n < 2) return true;
        var adj = {};
    
        // Initalize adjacency list
        for (var i=0; i<n; i++) {
            adj[i] = [];
        }
    
        // Populate adjacency list
        for (var edge of edges) {
            adj[edge[0]].push(edge[1]);
            adj[edge[1]].push(edge[0]);
        }
    
        // Check if there are cycles
        var visited = new Set(),
            parent = {},
            containsCycles = false;
        function dfs(root) {
            visited.add(root);
            for (var neighbor of adj[root]) {
                if (visited.has(neighbor)){
                    if (parent[root] !== neighbor) {
                        // Cycle detected
                        containsCycles = true;
                    } else {
                        // Leave parent as is
                        continue;
                    }
                } else {
                    // New node
                    parent[neighbor] = root;
                    dfs(neighbor);
                }
            }
        }
        dfs(0);
        if (containsCycles) return false;
    
        // Check if the graph is connected (tree contains all nodes)
        return visited.size === n;
    };