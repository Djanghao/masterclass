# C# Solution in All Ancestors of a Node in a Directed Acyclic Graph Problem

**Author:** Aman_Raj_Sinha
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5388757/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5388757/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1.	Graph Representation: Use an adjacency list to represent the graph and an in-degree array to track the number of incoming edges for each node.
2.	Topological Sorting: Use Kahn\u2019s algorithm (BFS) to perform topological sorting on the DAG.
3.	Dynamic Programming: As we process each node in topological order, we propagate the ancestors to its neighbors using a dynamic programming approach.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Build the Graph:
	\u2022	Create an adjacency list from the given edges.
	\u2022	Create an in-degree array to count the incoming edges for each node.
2.	Topological Sort:
	\u2022	Use a queue to process nodes with zero in-degree.
	\u2022	For each node processed, reduce the in-degree of its neighbors and add neighbors with zero in-degree to the queue.
3.	Dynamic Programming:
	\u2022	Maintain an array of sets where each set stores the ancestors of a particular node.
	\u2022	As each node is processed, propagate its ancestors to its neighbors.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Graph Construction: O(E), where E is the number of edges.
\u2022	Topological Sorting: O(N + E) using Kahn\u2019s algorithm.
\u2022	Dynamic Programming Propagation: In the worst case, each node\u2019s ancestor set can be propagated to all its neighbors, leading to O(N x E).
	\u2022	Sorting Ancestors: O(N^2 log N) as each list of ancestors can have up to N-1 elements.

The overall time complexity is O(N x E + N^2 log N).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Graph Representation: O(N + E) for the adjacency list.
\u2022	Ancestors List: O(N^2) in the worst case.
\u2022	Queue and In-Degree Array: O(N).

The overall space complexity is O(N^2 + E).

# Code
```
public class Solution {
    public IList<IList<int>> GetAncestors(int n, int[][] edges) {
        // Initialize the adjacency list for the graph
        List<int>[] graph = new List<int>[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new List<int>();
        }
        int[] inDegree = new int[n];
        foreach (var edge in edges) {
            graph[edge[0]].Add(edge[1]);
            inDegree[edge[1]]++;
        }

        // Initialize the list of sets to store ancestors
        List<HashSet<int>> ancestors = new List<HashSet<int>>(new HashSet<int>[n]);
        for (int i = 0; i < n; i++) {
            ancestors[i] = new HashSet<int>();
        }

        // Perform topological sort using Kahn's algorithm
        Queue<int> queue = new Queue<int>();
        for (int i = 0; i < n; i++) {
            if (inDegree[i] == 0) {
                queue.Enqueue(i);
            }
        }

        while (queue.Count > 0) {
            int node = queue.Dequeue();
            foreach (int neighbor in graph[node]) {
                // Add ancestors of the current node to the neighbor
                ancestors[neighbor].UnionWith(ancestors[node]);
                // Add the current node itself as an ancestor to the neighbor
                ancestors[neighbor].Add(node);
                // Decrease the in-degree of the neighbor
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    queue.Enqueue(neighbor);
                }
            }
        }

        // Convert sets to sorted lists
        IList<IList<int>> result = new List<IList<int>>();
        for (int i = 0; i < n; i++) {
            List<int> sortedAncestors = new List<int>(ancestors[i]);
            sortedAncestors.Sort();
            result.Add(sortedAncestors);
        }

        return result;
    }
}
```