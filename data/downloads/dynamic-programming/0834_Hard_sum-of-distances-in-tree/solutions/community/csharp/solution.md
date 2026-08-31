# 💥 C# | Runtime beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 12
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5752275/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5752275/)

---

# Intuition
To solve the problem of finding the sum of distances in a tree efficiently, we can use a two-pass Depth-First Search (DFS) strategy

# Approach
Initial DFS to Compute Subtree Sizes and Initial Distances:

Compute the size of each subtree and the total distance of all nodes from the root node (node 0). This will help in determining the number of nodes in each subtree and their distances from the root.
Second DFS to Compute Distances for All Nodes:

Use the results from the first DFS to compute the sum of distances for all nodes. We use the fact that if you know the distance for a parent node, you can compute the distance for its children based on subtree sizes.

# Complexity
- Time complexity:
O(n), as each node and edge is processed a constant number of times.

- Space complexity:
O(n), for storing the graph, subtree sizes, and distance sums. This is the minimal space required given the problem constraints.

# Code
```csharp []
public class Solution
{
    public int[] SumOfDistancesInTree(int n, int[][] edges)
    {
        var graph = new List<int>[n];
        for (int i = 0; i < n; i++)
        {
            graph[i] = new List<int>();
        }
        
        foreach (var edge in edges)
        {
            int u = edge[0];
            int v = edge[1];
            graph[u].Add(v);
            graph[v].Add(u);
        }
        
        var subtreeSize = new int[n];
        var distanceSum = new int[n];
        
        void Dfs1(int node, int parent)
        {
            subtreeSize[node] = 1;
            foreach (var neighbor in graph[node])
            {
                if (neighbor == parent) continue;
                Dfs1(neighbor, node);
                subtreeSize[node] += subtreeSize[neighbor];
                distanceSum[node] += distanceSum[neighbor] + subtreeSize[neighbor];
            }
        }
        
        void Dfs2(int node, int parent)
        {
            foreach (var neighbor in graph[node])
            {
                if (neighbor == parent) continue;
                distanceSum[neighbor] = distanceSum[node] - subtreeSize[neighbor] + (n - subtreeSize[neighbor]);
                Dfs2(neighbor, node);
            }
        }
        
        Dfs1(0, -1);
        Dfs2(0, -1);
        
        return distanceSum;
    }
}

```