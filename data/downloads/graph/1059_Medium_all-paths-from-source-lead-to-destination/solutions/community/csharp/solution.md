# fastest C# solution (beats 100% of other C# solutions)

**Author:** ferzik
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/5383354/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/5383354/)

---

# Intuition
Do DFS traversal through the graph. If a target node is reachable we should return it back and propogate up to the source node if possible. It is not possible to propogate back to source node when a node has children for which DFS returned something different from the destination (so we just pick any children value different from destination value). Compare the returned value after DFS has finished for the source node with the destination.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(V + E)

<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![C# solution.png](./images/0.png)
# Code
```
public class Solution {
    public  bool LeadsToDestination(int n, int[][] edges, int source, int destination)
    {
        var graph = new Dictionary<int, HashSet<int>>();
        var visited = new Dictionary<int, int>();
        foreach (var edge in edges)
        {
            if (!graph.ContainsKey(edge[0]))
                graph[edge[0]] = new HashSet<int>();
    
            if (edge[0] == edge[1] 
                && edge[1] == destination)
               return false;
    
            graph[edge[0]].Add(edge[1]);        
        }
        return Dfs(graph, source, visited, destination) == destination;
    }

    private int Dfs(Dictionary<int, HashSet<int>> graph, int v, Dictionary<int, int> visited, int destination)
    {
        if (visited.ContainsKey(v))
            return visited[v];
    
        visited[v] = v;
        var result = v;
        if (graph.ContainsKey(v) && graph[v].Count > 0)
        {
            foreach (var c in graph[v])
            {       
                var res = Dfs(graph, c, visited, destination);
                result = res;
                if (res != destination)                
                   break;     
            }
        }
        visited[v] = result;
        return result;
    }
}
```