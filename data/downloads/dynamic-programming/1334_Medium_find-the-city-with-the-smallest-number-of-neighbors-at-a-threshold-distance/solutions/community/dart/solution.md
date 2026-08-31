# ✨ | For Loop | BEATS : 100 % | ✨

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5539552/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5539552/)

---

![image.png](./images/0.png)
# Intuition
To find the city with the smallest number of reachable cities within a given distance threshold, we need to determine the shortest path between all pairs of cities. The Floyd-Warshall algorithm is ideal for this task as it can find the shortest paths in a weighted graph. After computing the shortest paths, we can count the reachable cities for each city and determine the one with the smallest count, using the city number as a tiebreaker.

# Approach
1. **Initialize the Distance Matrix**: Create an `n x n` distance matrix with large values (representing infinity), except for the diagonal elements which should be zero (distance from a city to itself).
2. **Populate the Distance Matrix**: Use the given edges to populate the matrix with the direct distances between cities.
3. **Apply Floyd-Warshall Algorithm**: Update the distance matrix to find the shortest paths between all pairs of cities.
4. **Count Reachable Cities**: For each city, count the number of other cities that can be reached within the distance threshold.
5. **Determine the Result**: Identify the city with the smallest number of reachable cities, breaking ties by selecting the city with the larger number.

# Complexity
- **Time complexity**: \\(O(n^3)\\), where \\(n\\) is the number of cities, due to the Floyd-Warshall algorithm.
- **Space complexity**: \\(O(n^2)\\), for the distance matrix.

# Code
```dart
import 'dart:math';

class Solution {
  int findTheCity(int n, List<List<int>> edges, int distanceThreshold) {
    // Step 1: Initialize the distance matrix
    List<List<int>> dist = List.generate(n, (_) => List.filled(n, 1000000));
    for (int i = 0; i < n; i++) {
      dist[i][i] = 0;
    }

    // Step 2: Populate the distance matrix with the given edges
    for (var edge in edges) {
      int from = edge[0];
      int to = edge[1];
      int weight = edge[2];
      dist[from][to] = weight;
      dist[to][from] = weight;
    }

    // Step 3: Apply the Floyd-Warshall algorithm
    for (int k = 0; k < n; k++) {
      for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
          if (dist[i][j] > dist[i][k] + dist[k][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }

    // Step 4: Count reachable cities within the distance threshold for each city
    int minReachable = n;
    int resultCity = 0;

    for (int i = 0; i < n; i++) {
      int count = 0;
      for (int j = 0; j < n; j++) {
        if (i != j && dist[i][j] <= distanceThreshold) {
          count++;
        }
      }
      if (count < minReachable) {
        minReachable = count;
        resultCity = i;
      } else if (count == minReachable && i > resultCity) {
        resultCity = i;
      }
    }

    return resultCity;
  }
}
```

This approach ensures that we efficiently compute the shortest paths between all pairs of cities and correctly identify the city with the desired properties.

![image.png](./images/1.png)