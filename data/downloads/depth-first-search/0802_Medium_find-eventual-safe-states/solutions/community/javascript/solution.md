# Javascript solution

**Author:** mmartire
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/421196/](https://leetcode.com/problems/find-eventual-safe-states/solutions/421196/)

---

```
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let results = [];
    let visited = {};
    for(let i = 0; i < graph.length; i++) {        
        if (isNodeSafe(graph, i, visited)) {
            results.push(i);
        }
    }
    return results.sort((a, b) => a - b);
};

function isNodeSafe(graph, node, visited) {
    if (visited[node] === true) {
        return false;
    }    
    if (visited[node] === "safe") {
        return true;
    }
    
    visited[node] = true;
    for(let i = 0; i < graph[node].length; i++) {        
        if(!isNodeSafe(graph, graph[node][i], visited)) {
            return false;
        }        
    }
    visited[node] = "safe";   
    return true;
}