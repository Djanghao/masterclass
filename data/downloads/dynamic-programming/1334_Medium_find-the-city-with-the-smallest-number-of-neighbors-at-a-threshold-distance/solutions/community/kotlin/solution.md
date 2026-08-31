# Solution in Kotlin | Beats 84% ✅📈🔥

**Author:** Malaia
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5537715/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5537715/)

---

# Intuition
To solve the problem of finding the city with the smallest number of reachable cities within a given distance threshold, we can use the Floyd-Warshall algorithm. This algorithm computes the shortest paths between all pairs of vertices in a graph and is suitable for dense graphs. Given that the problem constraints are 2 \u2264 \uD835\uDC5B \u2264 100, the Floyd-Warshall algorithm, which has a time complexity of `\uD835\uDC42(\uD835\uDC5B^3)`, is appropriate.

# Approach
1. **Initialize the Distance Matrix:** Create an \uD835\uDC5B\xD7\uD835\uDC5B matrix dist where dist[i][j] represents the shortest distance from city i to city j. Initialize this matrix with a large number (infinity) except for the diagonal elements, which should be 0 (since the distance from any city to itself is 0).
2. **Fill the Initial Distances:** Populate the matrix with the given edge weights.
3. **Apply Floyd-Warshall Algorithm:** Update the matrix with the shortest distances between all pairs of cities.
4. **Count Reachable Cities:** For each city, count the number of cities that can be reached within the distanceThreshold.
5. **Find the Result:** Identify the city with the smallest number of reachable cities within the distance threshold. If there are multiple such cities, return the one with the greatest index.

# Complexity
![image.png](./images/0.png)


# Code
```
class Solution {
    fun findTheCity(n: Int, edges: Array<IntArray>, distanceThreshold: Int): Int {
        // Step 1: Initialize the distance matrix
        val dist = Array(n) { IntArray(n) { Int.MAX_VALUE / 2 } } // Use INT_MAX / 2 to prevent overflow
        for (i in 0 until n) {
            dist[i][i] = 0
        }

        // Step 2: Fill the initial distances from the edges
        for (edge in edges) {
            val u = edge[0]
            val v = edge[1]
            val w = edge[2]
            dist[u][v] = w
            dist[v][u] = w
        }

        // Step 3: Apply Floyd-Warshall algorithm
        for (k in 0 until n) {
            for (i in 0 until n) {
                for (j in 0 until n) {
                    if (dist[i][j] > dist[i][k] + dist[k][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j]
                    }
                }
            }
        }

        // Step 4: Count reachable cities within the distanceThreshold for each city
        var minReachableCities = Int.MAX_VALUE
        var resultCity = -1
        
        for (i in 0 until n) {
            var reachableCities = 0
            for (j in 0 until n) {
                if (i != j && dist[i][j] <= distanceThreshold) {
                    reachableCities++
                }
            }
            // Step 5: Determine the city with the smallest number of reachable cities
            // If there's a tie, choose the city with the greater index
            if (reachableCities < minReachableCities || (reachableCities == minReachableCities && i > resultCity)) {
                minReachableCities = reachableCities
                resultCity = i
            }
        }

        return resultCity
    }
}
```