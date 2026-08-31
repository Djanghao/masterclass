# JavaScript backtracking DFS beats 80%

**Author:** dannycurrie42
**Votes:** 16
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/856058/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/856058/)

---

```
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1;
    
    const res = [];
    
    const DFS = (node,path) => {
        
        path.push(node);
        
		// if we've reached the target, we've found a path
        if(node === target) { 
            res.push(path);
            return;
        }
            
        for(let edge of graph[node]) {
            DFS(edge,[...path]);
        }
    }
    
    DFS(0,[]);
    
    return res;
};
```