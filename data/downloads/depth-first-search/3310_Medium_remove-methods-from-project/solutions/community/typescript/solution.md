# 100% Beat | Simple TypeScript Solution - Check Now

**Author:** callmeanupam
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5875766/](https://leetcode.com/problems/remove-methods-from-project/solutions/5875766/)

---

# Intuition
The problem seems to involve tracking a directed graph where some nodes (methods) may have been called and others may depend on them. The goal is to identify which methods can still be invoked given some previous invocation patterns, while also determining if any cycle exists that would allow for an infinite invocation loop. 

# Approach
1. **Graph Representation**: 
   - Construct an adjacency list `addj` from the `invocations` array, where `addj[i]` contains all nodes that can be reached from node `i`.
   
2. **Marking Special Nodes**:
   - Create a `spc` boolean array to track which nodes (methods) have been "invoked" based on the method `k`.
   - Use the `expl` function to perform a depth-first search (DFS) starting from `k`, marking all reachable nodes in the `spc` array.

3. **Cycle Detection**:
   - Initialize a `visited` array to track the visitation state of nodes.
   - Iterate through all nodes, and for each unvisited node that is not marked special, call the `detect` function to check if a cycle exists starting from that node.
   - If a cycle is detected, return an array containing all node indices (0 to n-1).

4. **Collect Remaining Methods**:
   - If no cycles are found, iterate through the `spc` array to collect and return the indices of the methods that have not been invoked.

### Helper Functions:
- **`expl` Function**: 
  - A DFS function that marks all reachable nodes from a given starting node as special in the `spc` array.
  
- **`detect` Function**: 
  - Another DFS function that checks if a cycle is present in the graph starting from the current node. It returns `true` if a cycle is detected through any of the neighboring nodes.

## Complexity
- **Time complexity**: 
  - The algorithm primarily performs depth-first searches on the graph, which takes \\(O(n + m)\\) time, where \\(n\\) is the number of nodes and \\(m\\) is the number of edges in the invocation list.
  
- **Space complexity**: 
  - The space complexity is \\(O(n)\\) due to the adjacency list representation and the auxiliary arrays `spc` and `visited`.

# Code
```typescript []
function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    const addj: number[][] = Array.from({ length: n }, () => []);
    
    for (const x of invocations) {
        addj[x[0]].push(x[1]);
    }
    
    const spc: boolean[] = new Array(n).fill(false);
    expl(addj, k, spc);
    
    const visited: boolean[] = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (!spc[i] && !visited[i]) {
            if (detect(addj, i, spc, visited)) {
                return Array.from({ length: n }, (_, index) => index);
            }
        }
    }

    const rest: number[] = [];
    for (let i = 0; i < n; i++) {
        if (!spc[i]) {
            rest.push(i);
        }
    }

    return rest;

    function expl(adj: number[][], current: number, spc: boolean[]): void {
    spc[current] = true;

    const ng = adj[current];
    for (let i = 0; i < ng.length; i++) {
        const nghbour = ng[i];
        if (!spc[nghbour]) {
            expl(adj, nghbour, spc);
        }
    }
}


    function detect(adj: number[][], current: number, spc: boolean[], visited: boolean[]): boolean {
    visited[current] = true;

    for (const nghbour of adj[current]) {
        const isSpc = spc[nghbour];
        const isVsSpc = !visited[nghbour] && detect(adj, nghbour, spc, visited);

        if (isSpc || isVsSpc) {
            return true;
        }
    }
    return false
    }
}

```