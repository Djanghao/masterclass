# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087851/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087851/)

---

![image.png](./images/0.png)

---

### Intuition
The problem involves finding the shortest distances in a directed graph and updating them dynamically as new edges are added through queries. The idea is to maintain the shortest path from a specific source (node 0) to all other nodes and recalculate distances after each query. This requires efficient propagation of distance updates throughout the graph.

---

### Approach
1. **Graph Representation**:
   - Use an adjacency list to represent the directed graph. Initially, the graph is structured such that each node `i` is connected to the previous node `i-1`.

2. **Distance Initialization**:
   - Start with an array of distances where `distances[i]` holds the shortest distance from node 0 to node `i`. Initially, these distances are based on the default graph structure.

3. **Query Handling**:
   - For each query `(source, target)`, add a directed edge from `source` to `target` in the graph.
   - Update the distances from the source node by recursively propagating the distance changes through its neighbors if the new distance is smaller than the current one.

4. **Distance Update Function**:
   - The function `updateDistances` recursively updates the shortest distances using a Depth-First Search (DFS) approach. It ensures that any change in distance is propagated through the graph.

5. **Result Tracking**:
   - After processing each query, store the updated distance from node 0 to node `n-1` (or any specific target) in the results array.

---

### Complexity
- **Time Complexity**:
  - For each query, the `updateDistances` function processes nodes and edges, which in the worst case can take \\(O(V + E)\\), where \\(V\\) is the number of nodes and \\(E\\) is the number of edges.
  - If there are \\(Q\\) queries, the overall complexity is \\(O(Q \\cdot (V + E))\\).
  
- **Space Complexity**:
  - Storing the graph as an adjacency list takes \\(O(V + E)\\).
  - The `distances` array and recursion stack require \\(O(V)\\) space.
  - Total: \\(O(V + E)\\).

---

### Code

```dart []
class Solution {
  void updateDistances(
      List<List<int>> graph, int current, List<int> distances) {
    int newDist = distances[current] + 1;

    for (int neighbor in graph[current]) {
      if (distances[neighbor] <= newDist) continue;

      distances[neighbor] = newDist;
      updateDistances(graph, neighbor, distances);
    }
  }

  List<int> shortestDistanceAfterQueries(int n, List<List<int>> queries) {
    // Initialize distances
    List<int> distances = List.generate(n, (i) => i);

    // Create the graph as an adjacency list
    List<List<int>> graph = List.generate(n, (_) => []);

    // Add edges for the initial graph
    for (int i = 0; i + 1 < n; ++i) {
      graph[i].add(i + 1);
    }

    List<int> answer = List.filled(queries.length, 0);
    int queryIdx = 0;

    // Process each query
    for (List<int> query in queries) {
      int source = query[0];
      int target = query[1];

      graph[source].add(target);
      distances[target] = distances[target].clamp(0, distances[source] + 1);
      updateDistances(graph, target, distances);

      answer[queryIdx++] = distances[n - 1];
    }

    return answer;
  }
}
```

```java []
import java.util.*;

class Solution {
    public List<Integer> shortestDistanceAfterQueries(int n, List<int[]> queries) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        // Initialize distances
        int[] distances = new int[n];
        Arrays.fill(distances, n - 1);

        for (int i = 1; i < n; i++) {
            graph.get(i).add(i - 1);
        }

        List<Integer> answer = new ArrayList<>();
        for (int[] query : queries) {
            int source = query[0], target = query[1];
            graph.get(target).add(source);
            distances[source] = Math.min(distances[source], distances[target] + 1);
            updateDistances(graph, source, distances);
            answer.add(distances[0]);
        }

        return answer;
    }

    private void updateDistances(List<List<Integer>> graph, int current, int[] distances) {
        int newDist = distances[current] + 1;
        for (int neighbor : graph.get(current)) {
            if (distances[neighbor] <= newDist) continue;
            distances[neighbor] = newDist;
            updateDistances(graph, neighbor, distances);
        }
    }
}
```

```python []
from collections import defaultdict

class Solution:
    def shortestDistanceAfterQueries(self, n, queries):
        graph = defaultdict(list)
        distances = list(range(n))
        result = []

        # Add edges for the initial graph
        for i in range(1, n):
            graph[i].append(i - 1)

        def update_distances(node):
            new_dist = distances[node] + 1
            for neighbor in graph[node]:
                if distances[neighbor] <= new_dist:
                    continue
                distances[neighbor] = new_dist
                update_distances(neighbor)

        # Process queries
        for source, target in queries:
            graph[target].append(source)
            distances[source] = min(distances[source], distances[target] + 1)
            update_distances(source)
            result.append(distances[0])

        return result
```

```cpp []
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

class Solution {
public:
    vector<int> shortestDistanceAfterQueries(int n, vector<vector<int>>& queries) {
        vector<vector<int>> graph(n);
        vector<int> distances(n);
        iota(distances.begin(), distances.end(), 0); // Initialize distances

        // Build the initial graph
        for (int i = 1; i < n; ++i) {
            graph[i].push_back(i - 1);
        }

        vector<int> result;
        for (auto& query : queries) {
            int source = query[0], target = query[1];
            graph[target].push_back(source);
            distances[source] = min(distances[source], distances[target] + 1);
            updateDistances(graph, source, distances);
            result.push_back(distances[n - 1]);
        }

        return result;
    }

private:
    void updateDistances(vector<vector<int>>& graph, int current, vector<int>& distances) {
        int newDist = distances[current] + 1;
        for (int neighbor : graph[current]) {
            if (distances[neighbor] <= newDist) continue;
            distances[neighbor] = newDist;
            updateDistances(graph, neighbor, distances);
        }
    }
};
```

```go []
func shortestDistanceAfterQueries(n int, queries [][]int) []int {
    graph := make([][]int, n)
    distances := make([]int, n)
    for i := range distances {
        distances[i] = i
    }

    // Build the initial graph
    for i := 1; i < n; i++ {
        graph[i] = append(graph[i], i-1)
    }

    result := []int{}

    for _, query := range queries {
        source, target := query[0], query[1]
        graph[target] = append(graph[target], source)
        if distances[source] > distances[target]+1 {
            distances[source] = distances[target] + 1
            updateDistances(graph, source, distances)
        }
        result = append(result, distances[n-1])
    }

    return result
}

func updateDistances(graph [][]int, current int, distances []int) {
    newDist := distances[current] + 1
    for _, neighbor := range graph[current] {
        if distances[neighbor] <= newDist {
            continue
        }
        distances[neighbor] = newDist
        updateDistances(graph, neighbor, distances)
    }
}
```

---
![image.png](./images/1.png) {:style='width:250px'}
