# C# | Runtime beats 100.00%, Memory beats 53.06% [EXPLAINED]

**Author:** r9n
**Votes:** 4
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/5801696/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/5801696/)

---

# Intuition
To find critical connections in a network (also known as bridges), we need to identify connections that, if removed, would disrupt the network\u2019s connectivity. These connections are crucial because they connect different parts of the network in such a way that removing them would isolate some nodes.

# Approach
Graph Representation: First, represent the network using an adjacency list, where each node points to its neighbors.

DFS Traversal: Use Depth-First Search (DFS) to explore the network. While exploring:

Track the discovery time of each node.
Track the lowest discovery time reachable from each node.
An edge is a bridge if there\u2019s no other path to reach its destination node from its subtree.
Update and Check: During DFS, update the lowest discovery times and check if an edge meets the bridge criteria.

# Complexity
- Time complexity:
O(V+E), where V is the number of vertices and E is the number of edges. This is because each node and edge is processed once.

- Space complexity:
O(V + E), for storing the graph and auxiliary arrays used in the DFS.

# Code
```csharp []
public class Solution
{
    private List<int>[] graph;
    private int[] discovery;
    private int[] low;
    private bool[] visited;
    private List<IList<int>> bridges;
    private int time;

    public IList<IList<int>> CriticalConnections(int n, IList<IList<int>> connections)
    {
        // Initialize data structures
        graph = new List<int>[n];
        for (int i = 0; i < n; i++)
            graph[i] = new List<int>();

        discovery = new int[n];
        low = new int[n];
        visited = new bool[n];
        bridges = new List<IList<int>>();
        time = 0;

        // Build the graph
        foreach (var conn in connections)
        {
            int u = conn[0];
            int v = conn[1];
            graph[u].Add(v);
            graph[v].Add(u);
        }

        // Perform DFS from each node
        for (int i = 0; i < n; i++)
        {
            if (!visited[i])
            {
                DFS(i, -1);
            }
        }

        return bridges;
    }

    private void DFS(int u, int parent)
    {
        visited[u] = true;
        discovery[u] = low[u] = ++time;

        foreach (var v in graph[u])
        {
            if (v == parent) continue; // Skip the edge to the parent node

            if (!visited[v])
            {
                DFS(v, u);

                // Check if the subtree rooted at v has a connection back to an ancestor of u
                low[u] = Math.Min(low[u], low[v]);

                // If the lowest vertex reachable from subtree under v is below u in DFS tree, then u-v is a bridge
                if (low[v] > discovery[u])
                {
                    bridges.Add(new List<int> { u, v });
                }
            }
            else
            {
                // Update low value of u for parent function calls
                low[u] = Math.Min(low[u], discovery[v]);
            }
        }
    }
}

```