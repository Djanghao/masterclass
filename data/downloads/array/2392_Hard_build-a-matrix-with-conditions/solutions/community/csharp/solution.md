# C# Solution for Build a Matrix With Conditions Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5509265/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5509265/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach involves:

	1.	Topological Sorting: Using Kahn\u2019s algorithm to find the order of elements based on the given constraints.
	2.	Matrix Construction: Filling in the matrix based on the sorted row and column orders.

# Approach
<!-- Describe your approach to solving the problem. -->
The solution is based on the concept of topological sorting and matrix construction:

1.	Topological Sorting:
	\u2022	Intuition: Topological sorting is used to order vertices of a directed graph in such a way that for every directed edge  uv  from vertex  u  to vertex  v ,  u  comes before  v  in the ordering. This is particularly useful for resolving constraints that define ordering (like \u201Cnumber  A  must be above number  B \u201D).
	\u2022	Approach:
	    \u2022	Graph Construction: Build adjacency lists from constraints for rows and columns separately.
	    \u2022	In-Degree Array: Track how many incoming edges each node has.
	    \u2022	Kahn\u2019s Algorithm: Use a queue to process nodes with zero in-degrees and keep track of nodes whose ordering is resolved. Remove edges as you process nodes and update in-degrees of neighbors. If any nodes remain with non-zero in-degrees at the end, a cycle exists, making a valid ordering impossible.
2.	Matrix Construction:
	\u2022	Intuition: Once we have the topological order for rows and columns, the next step is to place numbers into the matrix such that the order constraints are respected.
	\u2022	Approach:
	    \u2022	Matrix Initialization: Create a  k x k  matrix initialized with zeros.
	    \u2022	Placement: For each number, place it in the matrix based on its position in the topological order of rows and columns. The position in the row order determines the row, and the position in the column order determines the column.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Graph Construction:  O(E) , where  E  is the number of edges (constraints). This involves processing each edge once to build the adjacency list and update in-degrees.
\u2022	Topological Sorting:  O(V + E) , where  V  is the number of vertices (numbers) and  E  is the number of edges. The time complexity for Kahn\u2019s algorithm is linear in terms of the number of vertices plus the number of edges.
\u2022	Matrix Filling:  O(k^2) , where  k  is the matrix size. This involves iterating over the matrix to place numbers based on the sorted orders.
Overall Time Complexity:  O(k^2 + E) , since the matrix filling dominates for large  k  compared to the edge operations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Graph Representation:  O(V + E)  for storing adjacency lists and in-degrees.
\u2022	Topological Sorting Storage:  O(V)  for the sorted order and queue.
\u2022	Matrix Storage:  O(k^2)  for the matrix.
Overall Space Complexity:  O(k^2 + k + E) , which simplifies to  O(k^2 + E)  since  k^2  will dominate for large  k .

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public int[][] BuildMatrix(int k, int[][] rowConditions, int[][] colConditions) {
        int[] rowOrder = TopoSort(rowConditions, k);
        int[] colOrder = TopoSort(colConditions, k);
        
        if (rowOrder.Length == 0 || colOrder.Length == 0) {
            return new int[0][];
        }
        
        int[][] matrix = new int[k][];
        for (int i = 0; i < k; i++) {
            matrix[i] = new int[k];
        }
        
        // Fill the matrix based on the orders
        for (int i = 0; i < k; i++) {
            int rowPos = Array.IndexOf(rowOrder, i + 1);
            int colPos = Array.IndexOf(colOrder, i + 1);
            
            if (rowPos >= 0 && rowPos < k && colPos >= 0 && colPos < k) {
                matrix[rowPos][colPos] = i + 1;
            }
        }
        
        return matrix;
    }
    
    private int[] TopoSort(int[][] edges, int n) {
        List<int>[] adj = new List<int>[n + 1];
        for (int i = 0; i <= n; i++) {
            adj[i] = new List<int>();
        }
        
        int[] inDegree = new int[n + 1];
        foreach (var edge in edges) {
            int u = edge[0];
            int v = edge[1];
            adj[u].Add(v);
            inDegree[v]++;
        }
        
        Queue<int> queue = new Queue<int>();
        for (int i = 1; i <= n; i++) {
            if (inDegree[i] == 0) {
                queue.Enqueue(i);
            }
        }
        
        List<int> result = new List<int>();
        while (queue.Count > 0) {
            int node = queue.Dequeue();
            result.Add(node);
            foreach (int neighbor in adj[node]) {
                if (--inDegree[neighbor] == 0) {
                    queue.Enqueue(neighbor);
                }
            }
        }
        
        if (result.Count != n) {
            return new int[0]; // Cycle detected or not all nodes are reachable
        }
        
        return result.ToArray();
    }
}
```