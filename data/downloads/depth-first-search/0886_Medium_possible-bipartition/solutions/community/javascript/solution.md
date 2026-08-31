# JavaScript Simple Graph Coloring With Detailed Explanation

**Author:** control_the_narrative
**Votes:** 7
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/1140797/](https://leetcode.com/problems/possible-bipartition/solutions/1140797/)

---

Approach:
1. We can color each node either `1` or `2`
2. Same colored nodes can not be neighbors  
3. So, first removed colors that are already used by neighbors
4. If no color is left (aka conneceted to both `1` and `2` color nodes) return `false`
5. Assign the current node the smalles available color

Time: `O(N + E)`
Space: `O(N)`

```javascript
var possibleBipartition = function(N, dislikes) {
    const graph = [...Array(N+1)].map(() => []);
    const visited = Array(N+1).fill(false);
    const color = Array(N+1).fill(0);

    for(let [u, v] of dislikes) {
        graph[u].push(v);
        graph[v].push(u);
    }

    for(let i = 1; i <= N; i++) {
        if(!colorNodes(i)) return false;
    }
    return true;

    function colorNodes(node) {
        if(visited[node]) return true;
        const currColor = new Set([1, 2]);

		// remove colors used by neighbors
        for(let child of graph[node]) {
            if(color[child] === 1) currColor.delete(1);
            if(color[child] === 2) currColor.delete(2);
        }

		// no color is available return false
        if(currColor.size === 0) return false;
		
		// assign the smallest available color
        color[node] = Math.min(...currColor);
        visited[node] = true;  

        for(let child of graph[node]) {
            if(!colorNodes(child)) return false; 
        }
        return true;
    }
};
```