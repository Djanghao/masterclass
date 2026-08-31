# C# DFS with Backtracking Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/5861438/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/5861438/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Graph Traversal: Since the problem involves finding paths from node 0 back to node 0, a natural way to explore the graph is using DFS. DFS allows us to explore all possible paths while keeping track of the time taken.

- Maximizing Quality: The quality of a path is determined by the sum of the values of unique nodes visited. Therefore, we need to ensure that each node is only added to the total quality once, even if it is revisited later.

- Backtracking: To explore different paths, backtracking is essential. After exploring a particular path, we need to "unvisit" nodes and undo any changes made to the current quality. This allows us to try other paths that might lead to better results.

- Pruning Paths: Since we are constrained by the maximum allowed time (maxTime), we prune paths that exceed the allowed time by returning early from the DFS function.

- Tracking Visits: The visited array tracks how many times a node has been visited. This is important for determining whether a node\u2019s value should be added to the current quality when visiting it for the first time.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Build the Graph: Represent the graph using an adjacency list for efficient traversal.
//  Depth-First Search (DFS): Implement a DFS starting from node 0. Keep track of:
//  *Time Used: Total time taken so far.
//  *Current Quality: Sum of unique node values visited.
//  *Visited Nodes: An array to track whether a node has been visited to prevent adding its value multiple times.
//  Backtracking: Since nodes and edges can be revisited, we need to backtrack after exploring each path to reset the state for the next path.
//  Prune Paths Exceeding maxTime: If the time used exceeds maxTime, we prune that path.
//  Update Maximum Quality: Whenever we return to node 0, we check if the current quality is greater than the maximum found so far.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(V + E), where 'V' is the number of vertices (nodes) in the graph. and 'E' is the number of edges.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(V + E), primarily due to the space required for the recursion stack in the DFS, The visited array to track visited nodes, and the adjacency list, which takes O(V + E) space.
___

# Code
```csharp []
public class Solution {
    int maxQuality;
    int[] values;
    List<(int neighbor, int time)>[] adjList;
    int[] visited;
    int maxTime;
    public int MaximalPathQuality(int[] values, int[][] edges, int maxTime) {
        this.values = values;
        this.maxTime = maxTime;
        int n = values.Length;
        adjList = new List<(int, int)>[n];
        for(int i = 0; i < n; i++) adjList[i] = new List<(int, int)>();
        foreach(var edge in edges) {
            int u = edge[0];
            int v = edge[1];
            int time = edge[2];
            adjList[u].Add((v, time));
            adjList[v].Add((u, time));
        }
        visited = new int[n];
        int currentQuality = values[0];
        visited[0] = 1;
        maxQuality = values[0];
        dfs(0, 0, currentQuality);
        return maxQuality;
    }
    void dfs(int node, int timeUsed, int currentQuality) {
        if(timeUsed > maxTime) return;
        if(node == 0) {
            if(currentQuality > maxQuality) maxQuality = currentQuality;
        }
        foreach(var (neighbor, time) in adjList[node]) {
            int newTimeUsed = timeUsed + time;
            if(newTimeUsed > maxTime) continue;
            bool firstVisit = visited[neighbor] == 0;
            if(firstVisit) currentQuality += values[neighbor];
            visited[neighbor]++;
            dfs(neighbor, newTimeUsed, currentQuality);
            visited[neighbor]--;
            if(firstVisit) currentQuality -= values[neighbor];
        }
    }
}
```