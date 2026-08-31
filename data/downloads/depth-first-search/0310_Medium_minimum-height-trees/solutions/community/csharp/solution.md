# C# Solution for Minimum Height Trees Problem

**Author:** Aman_Raj_Sinha
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/5061301/](https://leetcode.com/problems/minimum-height-trees/solutions/5061301/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to iteratively remove the leaf nodes (nodes with only one neighbor) layer by layer until only the roots of minimum height trees remain. This is achieved by using topological sorting.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Create an adjacency list to represent the graph.
2.	Calculate the indegree of each node, which represents the number of incoming edges.
3.	Enqueue all leaf nodes (nodes with an indegree of 1) into a queue.
4.	While there are more than 2 nodes in the graph, dequeue nodes from the queue, decrement the indegree of their neighbors, and enqueue any newly formed leaf nodes.
5.	The remaining nodes in the queue (1 or 2 nodes) are the roots of minimum height trees.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Building the adjacency list and calculating the indegree takes O(n) time, where n is the number of nodes.
\u2022	Performing the topological sorting process takes O(n) time, as each node is processed once.
\u2022	Overall, the time complexity is O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) for storing the adjacency list, indegree array, and the queue.

# Code
```
public class Solution {
    public IList<int> FindMinHeightTrees(int n, int[][] edges) {
        if (n == 1) return new List<int> { 0 };

        List<HashSet<int>> adj = new List<HashSet<int>>(n);
        for (int i = 0; i < n; i++)
            adj.Add(new HashSet<int>());

        foreach (var edge in edges) {
            adj[edge[0]].Add(edge[1]);
            adj[edge[1]].Add(edge[0]);
        }

        var indegree = new int[n];
        Queue<int> queue = new Queue<int>();

        for (int i = 0; i < n; i++) {
            indegree[i] = adj[i].Count;
            if (indegree[i] == 1) queue.Enqueue(i);
        }

        while (n > 2) {
            int size = queue.Count;
            n -= size;
            for (int i = 0; i < size; i++) {
                int node = queue.Dequeue();
                foreach (var neighbor in adj[node]) {
                    indegree[neighbor]--;
                    if (indegree[neighbor] == 1) queue.Enqueue(neighbor);
                }
            }
        }

        List<int> result = new List<int>();
        while (queue.Count > 0) {
            result.Add(queue.Dequeue());
        }

        return result;
    }
}
```