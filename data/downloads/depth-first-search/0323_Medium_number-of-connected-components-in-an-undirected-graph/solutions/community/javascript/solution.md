# javascript dfs

**Author:** Cjamm
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/1136637/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/1136637/)

---

```
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // create visited array
    let visited = [];
    // create graph
    let graph = buildGraph(n, edges);
    // create res
    let res = 0;
    
    // mark visited with false
    for (let i = 0; i < n; i ++) {
        visited.push(false);
    }
    
    // traverse graph
    for (let i = 0; i < n; i ++) {
        // not visited
        if (visited[i] === false) {
            res ++;
            dfs(i, graph, visited);
        }
    }
    return res;
};

const buildGraph = (n, edges) => {
    let graph = Array.from({length: n}, () => []);
    
    for (let edge of edges) {
        let [src, dist] = edge;
        graph[src].push(dist);
        graph[dist].push(src);
    }
    return graph
}

const dfs = (index, graph, visited) => {
    visited[index] = true;
    let nodes = graph[index];
    for (let i = 0; i < nodes.length; i ++) {
        if (visited[nodes[i]] === false) {
            dfs(nodes[i], graph, visited)
        }
    }
}