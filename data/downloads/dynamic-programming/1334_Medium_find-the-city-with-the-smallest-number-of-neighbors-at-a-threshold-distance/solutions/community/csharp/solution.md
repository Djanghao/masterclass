# C# Solution for Find the City With the Smallest Number of Neighbors at a Threshold Distance Problem

**Author:** Aman_Raj_Sinha
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536903/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536903/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to identify the city with the fewest number of other cities reachable within a specified distance threshold. If there are multiple such cities, we return the one with the highest index. The solution leverages the Floyd-Warshall algorithm to compute shortest paths between all pairs of nodes, allowing us to efficiently determine reachability within the distance constraint.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Graph Representation:
	\u2022	Use a 2D array dist to represent the graph\u2019s distances. Initialize it with a large value (10001) to signify infinity, and set the diagonal values to 0 (distance to self).
2.	Initialize Edges:
	\u2022	Populate the distance matrix with the weights from the given edges. For each edge (from, to, weight), set dist[from, to] and dist[to, from] to the weight.
3.	Floyd-Warshall Algorithm:
	\u2022	Iterate over all pairs of nodes to update the shortest path distances. For each pair (i, j), check if a path through an intermediate node k offers a shorter distance: dist[i, j] = min(dist[i, j], dist[i, k] + dist[k, j]).
4.	Determine Reachability:
	\u2022	For each city, count the number of other cities reachable within the distance threshold. Track the city with the smallest count of reachable cities, preferring the city with the highest index in case of ties.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Floyd-Warshall Algorithm:
	\u2022	The algorithm has a time complexity of O(n^3), as it involves three nested loops, each iterating over all n nodes.
\u2022	Counting Reachable Cities:
	\u2022	After computing the shortest paths, iterating through the distance matrix to count reachable cities for each city takes O(n^2).

Combining these, the total time complexity is O(n^3) + O(n^2) = O(n^3). Given n <= 100, this is efficient.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Distance Matrix:
	\u2022	The distance matrix requires O(n^2) space to store the shortest path distances between all pairs of nodes.
\u2022	Additional Space:
	\u2022	No additional significant space is used beyond the distance matrix.

Thus, the overall space complexity is O(n^2).

# Code
```
public class Solution {
    public int FindTheCity(int n, int[][] edges, int distanceThreshold) {
        // Initialize the distance matrix with a large value (infinity)
        int[,] dist = new int[n, n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j) {
                    dist[i, j] = 0; // Distance to self is 0
                } else {
                    dist[i, j] = 10001; // Use 10001 as a value larger than the maximum possible distanceThreshold
                }
            }
        }
        
        // Populate the initial distances based on the edges
        foreach (var edge in edges) {
            int from = edge[0];
            int to = edge[1];
            int weight = edge[2];
            dist[from, to] = weight;
            dist[to, from] = weight;
        }
        
        // Floyd-Warshall algorithm to find shortest paths between all pairs of nodes
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (dist[i, k] + dist[k, j] < dist[i, j]) {
                        dist[i, j] = dist[i, k] + dist[k, j];
                    }
                }
            }
        }
        
        // Find the city with the smallest number of reachable cities within the distance threshold
        int minReachableCities = int.MaxValue;
        int city = -1;
        
        for (int i = 0; i < n; i++) {
            int reachableCities = 0;
            for (int j = 0; j < n; j++) {
                if (dist[i, j] <= distanceThreshold) {
                    reachableCities++;
                }
            }
            
            // Check for the city with the smallest number of reachable cities
            // Prefer the city with the greatest index in case of ties
            if (reachableCities <= minReachableCities) {
                minReachableCities = reachableCities;
                city = i;
            }
        }
        
        return city;
    }
}
```