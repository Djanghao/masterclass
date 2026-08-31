# Solved using Djikstra

**Author:** gobindsingh6799
**Votes:** 1
**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solutions/5710522/](https://leetcode.com/problems/modify-graph-edge-weights/solutions/5710522/)

---

# Intuition
When working with a graph where certain edge weights are unknown (`-1`), the goal is to modify these unknown edges to meet a specific condition, such as achieving a target shortest path length between two nodes. The key challenge lies in balancing the graph by adjusting these edges without exceeding or falling short of the target.

# Approach
1. **Initial Dijkstra's Calculation:** 
   - Begin by constructing the graph while ignoring edges with unknown costs (`-1`). Use Dijkstra's algorithm to compute the shortest path from the source to the destination.
   
2. **Edge Adjustment:**
   - If the calculated shortest path is already less than the target, it means that even with minimum edge values, we cannot achieve the target, so return an empty list.
   - If the shortest path equals the target, then modify all `-1` edges to a large value (`INF`) to ensure they do not decrease the path length further.
   - Otherwise, iteratively adjust the edges with `-1` cost to achieve the target shortest path. For each `-1` edge, temporarily set it to `1` and run Dijkstra's algorithm again to see if the new path is within the target. If yes, adjust the edge weight to exactly match the target path length.

3. **Final Check:**
   - If a valid graph configuration is found that meets the target, return the modified edges; otherwise, return an empty list.

# Complexity
- **Time complexity:** 
  - The time complexity is dominated by Dijkstra's algorithm, which runs in $$O(E \\log V)$$, where `E` is the number of edges and `V` is the number of vertices. Since Dijkstra's may run multiple times depending on the number of `-1` edges, the overall complexity can be considered as $$O(k \\cdot E \\log V)$$, where `k` is the number of `-1` edges.
  
- **Space complexity:** 
  - The space complexity is $$O(V + E)$$ due to storing the adjacency list and the distance array.

# Code
```dart
import 'package:collection/collection.dart';

class Solution {
  static const int INF = 2000000000; // Constant representing infinity for unbounded edges

  int dijkstra(int n, int source, int destination, List<List<List<int>>> adj) {
    List<int> distance = List.filled(n, INF); // Initialize distances to all nodes as INF (instead of infinity)
    distance[source] = 0; // Distance from source to itself is 0

    PriorityQueue<List<int>> pq = PriorityQueue<List<int>>((a, b) => a[0].compareTo(b[0])); // Min-heap priority queue
    pq.add([0, source]); // Push the source node into the queue

    while (pq.isNotEmpty) {
      List<int> current = pq.removeFirst(); // Get the node with the smallest distance
      int cost = current[0];
      int node = current[1];

      // If we've reached the destination, we can stop the search
      if (node == destination) {
        break;
      }

      // Explore all adjacent nodes of the current node
      for (List<int> next in adj[node]) {
        int ccost = next[0];
        int cnode = next[1];

        // If a shorter path to the adjacent node is found
        if (cost + ccost < distance[cnode]) {
          distance[cnode] = cost + ccost; // Update the distance
          pq.add([distance[cnode], cnode]); // Add the updated distance to the queue
        }
      }
    }

    return distance[destination]; // Return the shortest distance to the destination
  }

  List<List<int>> modifiedGraphEdges(int n, List<List<int>> edges, int source, int destination, int target) {
    List<List<List<int>>> adj = List.generate(n, (_) => []); // Adjacency list representation of the graph

    // Construct the adjacency list, ignoring edges with a cost of -1
    for (List<int> e in edges) {
      if (e[2] == -1) {
        continue; // Skip edges with unknown cost
      }
      adj[e[0]].add([e[2], e[1]]); // Add edge to the adjacency list
      adj[e[1]].add([e[2], e[0]]); // Undirected graph: add both directions
    }

    // Get the shortest distance from source to destination using Dijkstra's algorithm
    int sortedDistance = dijkstra(n, source, destination, adj);

    // If the shortest distance is less than the target, return an empty list
    if (sortedDistance < target) {
      return [];
    }

    bool isEqual = sortedDistance == target; // Check if current distance equals target

    // Modify edges with cost of -1 to find a valid configuration
    for (List<int> e in edges) {
      if (e[2] != -1) {
        continue; // Skip edges with a known cost
      }

      // Set a temporary cost for the edge
      e[2] = isEqual ? INF : 1; // If distances equal target, set to infinity; otherwise, set to 1
      adj[e[0]].add([e[2], e[1]]); // Add modified edge to adjacency list
      adj[e[1]].add([e[2], e[0]]); // Add reverse edge

      // If the shortest path is not equal to the target
      if (!isEqual) {
        // Calculate the new shortest path with the modified edge
        int newSortedPath = dijkstra(n, source, destination, adj);
        // If the new path is less than or equal to the target, adjust the edge cost
        if (newSortedPath <= target) {
          isEqual = true; // Mark that we have found a valid path
          e[2] += target - newSortedPath; // Adjust the edge cost to reach the target
        }
      }
    }

    // If a valid configuration is found, return the modified edges
    if (isEqual) {
      return edges;
    }
    return []; // If no valid configuration is found, return an empty list
  }
}
