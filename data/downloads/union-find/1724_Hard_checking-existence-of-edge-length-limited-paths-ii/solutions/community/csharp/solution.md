# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/5884364/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/5884364/)

---

# Intuition
The problem is about finding paths between nodes in a graph where each edge has a weight. You want to know if you can travel between two nodes without using edges that exceed a certain weight limit. This involves understanding how the graph is connected based on these weights.

# Approach
Use a disjoint set (union-find) data structure to group connected nodes based on the edges' weights; sort the edges by weight, union nodes while keeping track of the maximum allowed edge weight for each group, and then answer each query by checking if the two nodes belong to the same group under the specified limit.

# Complexity
- Time complexity:
O((E + Q) * \u03B1(N)), where E is the number of edges, Q is the number of queries, N is the number of nodes, and \u03B1 is the inverse Ackermann function (very slow-growing), making it nearly constant for practical input sizes.

- Space complexity:
O(N), for storing the parent, rank, and limit arrays in the disjoint set.

# Code
```csharp []
using System;

public class DistanceLimitedPathsExist {
    private readonly DisjointSet ds;

    // Constructor to initialize the DistanceLimitedPathsExist class
    public DistanceLimitedPathsExist(int n, int[][] edgeList) {
        // Sort the edges based on their weights
        Array.Sort(edgeList, (e1, e2) => e1[2].CompareTo(e2[2]));
        ds = new DisjointSet(n);
        
        // Union all edges into the disjoint set
        foreach (var edge in edgeList) {
            ds.Union(edge[0], edge[1], edge[2]);
        }
    }
    
    // Method to query if a path exists between p and q with edge weights less than limit
    public bool Query(int p, int q, int limit) {
        return ds.Find(p, limit) == ds.Find(q, limit);
    }

    // Inner class for the Disjoint Set (Union-Find)
    private class DisjointSet {
        private readonly int[] parents; // To track the parent of each node
        private readonly int[] ranks; // To track the rank of each node
        private readonly int[] limits; // To track the limit for each node

        // Constructor to initialize the disjoint set
        public DisjointSet(int n) {
            parents = new int[n];
            for (int i = 0; i < n; i++) {
                parents[i] = i; // Each node is its own parent initially
            }

            ranks = new int[n];
            Array.Fill(ranks, 1); // Initialize ranks

            limits = new int[n];
            Array.Fill(limits, 0); // Initialize limits
        }

        // Find the root of the node with path compression
        private int Find(int i) {
            if (parents[i] == i) {
                return i;
            }
            return Find(parents[i]);
        }

        // Find with limit to check if the limit is respected
        public int Find(int i, int limit) {
            if (parents[i] == i || limits[i] >= limit) {
                return i;
            }
            return Find(parents[i], limit);
        }

        // Union method to combine two sets
        public void Union(int i, int j, int limit) {
            int r1 = Find(i);
            int r2 = Find(j);

            if (r1 == r2) {
                return; // They are already in the same set
            }

            // Union by rank
            if (ranks[r1] < ranks[r2]) {
                parents[r1] = r2;
                limits[r1] = limit; // Set limit for the merged node
            } else if (ranks[r1] > ranks[r2]) {
                parents[r2] = r1;
                limits[r2] = limit; // Set limit for the merged node
            } else {
                parents[r2] = r1;
                limits[r2] = limit; // Set limit for the merged node
                ranks[r1]++; // Increase the rank of the root
            }
        }
    }
}

// Example usage:
// DistanceLimitedPathsExist obj = new DistanceLimitedPathsExist(n, edgeList);
// bool param_1 = obj.Query(p, q, limit);

```