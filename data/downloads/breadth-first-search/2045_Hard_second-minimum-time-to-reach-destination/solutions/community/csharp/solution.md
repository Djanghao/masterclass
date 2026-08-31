# C# Solution for Second Minimum Time To Reach Destination Problem

**Author:** Aman_Raj_Sinha
**Votes:** 7
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5546059/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5546059/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the second minimum time to travel from vertex 1 to vertex n in a graph where traffic lights affect the travel time. Using a Breadth-First Search (BFS) approach helps in exploring the shortest paths incrementally. The BFS is modified to track both the minimum and second minimum distances to each vertex by adjusting for traffic light changes.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Graph Representation:
	\u2022	Use an adjacency list to store the graph\u2019s edges.
2.	Distance Arrays:
	\u2022	Use two arrays, dist1 and dist2, to store the shortest and second shortest distances to each vertex from the start vertex (1). Initialize these arrays with -1 to indicate unvisited nodes.
3.	Queue for BFS:
	\u2022	Use a queue to facilitate BFS. Each element in the queue is a tuple of the form {node, visitType} where visitType indicates whether it\u2019s the first (1) or second (2) visit to the node.
4.	Processing Nodes:
	\u2022	For each node, calculate the next possible distance considering the traffic light state.
	\u2022	Update the distance arrays and enqueue neighbors based on whether it\u2019s the first or second visit.
	\u2022	Adjust the time based on whether the current traffic light is red or green when reaching the node.
5.	Return the Second Minimum Distance:
	\u2022	Return the second minimum distance to vertex n when it is reached for the second time.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Graph Construction: O(E) where E is the number of edges.
\u2022	BFS Traversal: Each node can be visited at most twice (once for dist1 and once for dist2), and each edge is processed a limited number of times. Hence, the BFS traversal is O(E + V).
\u2022	Overall: O(E + V)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Adjacency List: O(E + V)
\u2022	Distance Arrays: O(V)
\u2022	Queue for BFS: O(V) (in the worst case, all nodes could be in the queue simultaneously).
\u2022	Overall: O(E + V)

# Code
```
public class Solution {
    public int SecondMinimum(int n, int[][] edges, int time, int change) {
        // Create adjacency list for the graph
        var adj = new Dictionary<int, List<int>>();
        for (int i = 1; i <= n; i++) {
            adj[i] = new List<int>();
        }
        foreach (var edge in edges) {
            adj[edge[0]].Add(edge[1]);
            adj[edge[1]].Add(edge[0]);
        }

        // Initialize distance arrays
        int[] dist1 = new int[n + 1];
        int[] dist2 = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            dist1[i] = -1;
            dist2[i] = -1;
        }

        // Queue for BFS
        Queue<int[]> queue = new Queue<int[]>();
        queue.Enqueue(new int[] { 1, 1 }); // Start with node 1, with its minimum distance
        dist1[1] = 0;

        while (queue.Count > 0) {
            var temp = queue.Dequeue();
            int node = temp[0];
            int freq = temp[1];

            int timeTaken = freq == 1 ? dist1[node] : dist2[node];

            // If the current light is red, wait till the path turns green
            if ((timeTaken / change) % 2 == 1) {
                timeTaken = change * (timeTaken / change + 1) + time;
            } else {
                timeTaken = timeTaken + time;
            }

            foreach (var neighbor in adj[node]) {
                if (dist1[neighbor] == -1) {
                    dist1[neighbor] = timeTaken;
                    queue.Enqueue(new int[] { neighbor, 1 });
                } else if (dist2[neighbor] == -1 && dist1[neighbor] != timeTaken) {
                    if (neighbor == n)
                        return timeTaken;
                    dist2[neighbor] = timeTaken;
                    queue.Enqueue(new int[] { neighbor, 2 });
                }
            }
        }
        return 0; // If the second minimum distance is not found
    }
}
```