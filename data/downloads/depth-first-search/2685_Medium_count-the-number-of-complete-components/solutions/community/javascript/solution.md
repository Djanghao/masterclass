# DFS JS easy to understand solution

**Author:** Aram6
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5403701/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5403701/)

---

# Intuition
To solve the problem of counting the number of complete components in a graph, where each complete component is a subgraph where every vertex is connected to every other vertex, we can approach it using Depth-First Search (DFS) to explore each connected component. Here's how you can implement the solution:

# Approach:
1. *Graph Representation:*

* Use an adjacency list to represent the graph. Initialize graph as an array of arrays, where each index represents a vertex and contains an array of its adjacent vertices.

2. DFS Traversal:

* Implement a DFS function (`dfs`) that starts from a given vertex, marks all reachable vertices as visited, and counts the number of vertices (`vertCount`) and edges (`edgeCount`) in that component.
* Use an array `visited` to keep track of visited vertices.

3. Complete Component Check:

* After performing DFS for an unvisited vertex, check if the component is complete:
    * A component is complete if the number of vertices (`vertCount`) times (`(vertCount - 1)`) equals the number of edges (`edgeCount`). This checks if every vertex in the component is connected to every other vertex.

4. Main Function:

* Initialize res to count the number of complete components.
* Iterate through all vertices. For each vertex that hasn't been visited, initiate a DFS to explore its component.
* If the component is complete, increment res.

5. Return:

* Return res, which will be the total count of complete components in the graph.

# Complexity:

* **Time Complexity:** $$O(n + e)$$ where $$n$$ is the number of vertices and $$e$$ is the number of edges. This is because we perform a DFS for each vertex and iterate through its adjacent edges.
* **Space Complexity:** $$O(n + e)$$ due to the adjacency list (`graph`), `visited` array, and recursive stack space used by DFS.

# Code
```
var countCompleteComponents = function (n, edges) {
    let graph = new Array(n).fill(null).map(() => []);
    let res = 0;

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Array(n).fill(false);
    function dfs(u) {
        visited[u] = true;
        ++vertCount;

        for (let v of graph[u]) {
            ++edgeCount;
            if (!visited[v]) {
                dfs(v);
            }
        }
    }

    for (let i = 0; i < n; ++i) {
        if (!visited[i]) {
            vertCount = 0;
            edgeCount = 0;
            dfs(i);
            if (vertCount * (vertCount - 1) === edgeCount) {
                ++res;
            }
        }
    }



    return res;
};

```

