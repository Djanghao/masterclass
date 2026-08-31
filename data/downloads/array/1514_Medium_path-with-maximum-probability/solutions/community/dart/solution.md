# [Dart] Dijkstra's Algorithm

**Author:** MaratTazhetdinov
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/5696605/](https://leetcode.com/problems/path-with-maximum-probability/solutions/5696605/)

---

# Approach
1) Graph Representation:

The problem can be represented as a weighted, undirected graph where each node represents a position, and each edge has a probability associated with it.
I used an adjacency list (Map<int, List<(int, double)>>) to store the graph, where each node maps to a list of its neighbors and the corresponding edge probabilities.

2) Priority Queue for Maximum Probability Path:

To find the maximum probability path from the start node to the end node, I utilized a priority queue (max-heap) to always expand the most promising path first.
I initialized the priority queue with the start node and a probability of 1 (since starting at the start node has a probability of 1).

3) Processing Nodes:

In a loop, I extracted the node with the highest probability from the queue and checked if it's the end node. If so, the probability is returned as the result.
If not, I explored all its neighbors. For each unvisited neighbor, I calculated the cumulative probability of reaching that neighbor through the current path and added it to the priority queue.

4) Termination:

The loop continues until the priority queue is empty. If the end node is never reached, I returned 0, indicating there's no path from the start node to the end node.
<!-- Describe your approach to solving the problem. -->

# Complexity
E - number of edges, V - number of vertices.
- Time complexity: O((V+E)logV)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(V+E)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
import 'package:collection/collection.dart';

class Solution {
  double maxProbability(int n, List<List<int>> edges, List<double> succProb,
      int start_node, int end_node) {
    final Map<int, List<(int, double)>> map = {};

    for (int i = 0; i < edges.length; i++) {
      map.update(
        edges[i].first,
        (value) {
          value.add((edges[i].last, succProb[i]));
          return value;
        },
        ifAbsent: () => [(edges[i].last, succProb[i])],
      );

      map.update(
        edges[i].last,
        (value) {
          value.add((edges[i].first, succProb[i]));
          return value;
        },
        ifAbsent: () => [(edges[i].first, succProb[i])],
      );
    }

    final prQueue =
        HeapPriorityQueue<(int, double)>((a, b) => b.$2.compareTo(a.$2));
    prQueue.add((start_node, 1));

    final Set<int> visited = {};

    while (prQueue.isNotEmpty) {
      final (node, probability) = prQueue.removeFirst();

      visited.add(node);

      if (node == end_node) {
        return probability;
      }

      for (final (neigbor, edgeProb) in (map[node] ?? <(int, double)>[])) {
        if (!visited.contains(neigbor)) {
          prQueue.add((neigbor, edgeProb * probability));
        }
      }
    }

    return 0;
  }
}
```