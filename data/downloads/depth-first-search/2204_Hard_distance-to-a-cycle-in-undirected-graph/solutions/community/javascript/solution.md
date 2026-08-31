# topological sort + BFS

**Author:** Koushik-Sarkar
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/3889038/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/3889038/)

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
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function(n, edges) {
    let indegree = new Array(n).fill(0);
    const adj = {};
    const result = new Array(n).fill(-1);
    const nonCycleNode = new Set();
    
    const creatAdj = () => {
        for(let [u, v] of edges){
            if(!adj[u]) adj[u] = [];
            if(!adj[v]) adj[v] = [];
            adj[u].push(v);
            indegree[u]++;
            adj[v].push(u);
            indegree[v]++;
        }    
    }
    // Here I used topological sort to detect cycle. I used a set to store all the node that do not belongs to the cycle

    const findNonCycleNodes = () => {
        let queue = [];
        for(let i = 0; i < indegree.length; i++){
            if(indegree[i] == 1) queue.push(i);
        }

        while(queue.length){
            let newQueue = [];
            for(let node of queue){
                if(nonCycleNode.has(node)) continue;
                nonCycleNode.add(node);    
                for(let nei of adj[node] || []){
                    indegree[nei]--;
                    if(indegree[nei] == 1) newQueue.push(nei);
                }
            }
            queue = newQueue;
        }
    }

    const findDistanceFromCycleNode = () => {
        let queue = [];
        for(let i = 0; i < n; i++){
            if(nonCycleNode.has(i)) continue;
            queue.push(i);
        }
        let distance = 0;
        while(queue.length){
            let newQueue = [];
            for(let node of queue){
                result[node] = distance; 
                for(let nei of adj[node]){
                    if(!nonCycleNode.has(nei) || result[nei] != -1) continue;
                    newQueue.push(nei);
                }
            }
            distance++;
            queue = newQueue;
        }
    }

    creatAdj();
    findNonCycleNodes();
    findDistanceFromCycleNode();

    return result;
    
    
};
```