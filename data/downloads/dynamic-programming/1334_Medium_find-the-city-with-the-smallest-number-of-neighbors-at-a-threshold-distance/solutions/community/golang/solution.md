# Floyd-Warshall Solution |  Beats 98 % Java | Python | C++ | JavaScript | Beats 100 % Go

**Author:** kartikdevsharma_
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536817/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536817/)

---

# Intuition

The problem at hand is essentially a graph problem where we need to find the city that has the fewest number of reachable cities within a given distance threshold. If multiple cities have the same number of reachable cities, we need to return the city with the highest number.

The key insight here is that we need to find the shortest paths between all pairs of cities and then count how many cities are reachable from each city within the given distance threshold. This immediately brings to mind the Floyd-Warshall algorithm, which is an efficient method for finding shortest paths between all pairs of vertices in a weighted graph.

The reason Floyd-Warshall is particularly suitable for this problem is that:
1. It works well for dense graphs (we can have up to n * (n-1) / 2 edges).
2. It can handle negative edge weights (though not relevant for this problem).
3. It's simpler to implement compared to running Dijkstra's algorithm from each node.

Once we have the shortest paths, we can easily count the number of reachable cities for each city and determine the answer.

# Approach

Let's break down our approach into several steps:

1. **Initialize the distance matrix:**
   We start by creating a 2D array `dist` of size n x n, where n is the number of cities. We initialize this matrix with a value slightly larger than the maximum possible distance (10001 in this case, as the distance threshold is at most 10^4). We set the distance from a city to itself as 0.

   ```java
   int[][] dist = new int[n][n];
   for (int i = 0; i < n; i++) {
       Arrays.fill(dist[i], 10001);
       dist[i][i] = 0;
   }
   ```

2. **Build the initial graph:**
   We populate the distance matrix with the given edge weights. Since the graph is bidirectional, we set the distance for both directions.

   ```java
   for (int[] edge : edges) {
       dist[edge[0]][edge[1]] = edge[2];
       dist[edge[1]][edge[0]] = edge[2];
   }
   ```

3. **Apply Floyd-Warshall algorithm:**
   This is the core of our solution. The algorithm considers each vertex as an intermediate vertex and updates the shortest paths accordingly. After this step, `dist[i][j]` will contain the shortest distance from city i to city j.

   ```java
   for (int k = 0; k < n; k++) {
       for (int i = 0; i < n; i++) {
           for (int j = 0; j < n; j++) {
               dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
           }
       }
   }
   ```

4. **Find the city with the fewest reachable cities:**
   We iterate through all cities, counting the number of reachable cities for each (including itself) within the distance threshold. We keep track of the city with the minimum number of reachable cities, updating our result if we find a better candidate or a city with the same number of reachable cities but a higher number.

   ```java
   int minReachableCities = n;
   int result = -1;
   for (int i = 0; i < n; i++) {
       int reachableCities = 0;
       for (int j = 0; j < n; j++) {
           if (dist[i][j] <= distanceThreshold) {
               reachableCities++;
           }
       }
       if (reachableCities <= minReachableCities) {
           minReachableCities = reachableCities;
           result = i;
       }
   }
   ```

5. **Return the result:**
   The variable `result` now contains the number of the city that meets our criteria, so we return it.

This approach is efficient because:
- It uses the Floyd-Warshall algorithm, which is well-suited for dense graphs and finding all-pairs shortest paths.
- It combines the distance calculation and the counting of reachable cities into a single pass through the data.
- It avoids unnecessary data structures, working directly with a 2D array for distances.

The use of 10001 as an "infinity" value is a small optimization. Since we know the maximum distance threshold is 10^4, we can use any value larger than this as our infinity. This allows us to avoid potential integer overflow issues that might occur if we used Integer.MAX_VALUE.

# Complexity

- **Time complexity: O(n^3)**

The time complexity of this solution is dominated by the Floyd-Warshall algorithm, which has three nested loops each running n times, resulting in O(n^3) time complexity.

Breaking it down:
1. Initializing the distance matrix: O(n^2)
2. Building the initial graph from edges: O(E), where E is the number of edges. In the worst case, E can be O(n^2).
3. Floyd-Warshall algorithm: O(n^3)
4. Finding the city with fewest reachable cities: O(n^2)

The overall time complexity is therefore O(n^2 + n^2 + n^3 + n^2) = O(n^3).

While this might seem high, it's actually quite efficient for this problem, especially given the constraint that n \u2264 100. For larger graphs, other algorithms like Dijkstra's might be more suitable, but for this problem size, Floyd-Warshall provides a good balance of simplicity and efficiency.

- **Space complexity: O(n^2)**

The space complexity is determined by the size of our distance matrix, which is n x n. Therefore, the space complexity is O(n^2).

This space usage is necessary and optimal for this problem because we need to store the distances between all pairs of cities. There's no way to reduce this space complexity without fundamentally changing the approach to the problem.

Additional space usage is minimal:
- A few integer variables for loop counters and tracking the result: O(1)
- The input `edges` array is not counted in our space complexity as it's part of the input.

It's worth noting that while O(n^2) space complexity might seem high, it's actually quite reasonable for this problem. Given the constraint that n \u2264 100, the maximum space used by our distance matrix would be 100 * 100 * 4 bytes (assuming 32-bit integers) = 40,000 bytes, or about 39 KB. This is a very small amount of memory by modern standards.

# Code
```java []
class Solution {
    public int findTheCity(int n, int[][] edges, int distanceThreshold) {
        int[][] dist = new int[n][n];
        
        // Initialize distance matrix
        for (int i = 0; i < n; i++) {
            Arrays.fill(dist[i], 10001); // Use 10001 as infinity (constraint: distanceThreshold <= 10^4)
            dist[i][i] = 0;
        }
        
        // Build initial graph
        for (int[] edge : edges) {
            dist[edge[0]][edge[1]] = edge[2];
            dist[edge[1]][edge[0]] = edge[2];
        }
        
        // Floyd-Warshall algorithm
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
        
        int minReachableCities = n;
        int result = -1;
        
        // Find the city with the smallest number of reachable cities
        for (int i = 0; i < n; i++) {
            int reachableCities = 0;
            for (int j = 0; j < n; j++) {
                if (dist[i][j] <= distanceThreshold) {
                    reachableCities++;
                }
            }
            if (reachableCities <= minReachableCities) {
                minReachableCities = reachableCities;
                result = i;
            }
        }
        
        return result;
    }
}
```
```c++ []
class Solution {
public:
    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
        vector<vector<int>> dist(n, vector<int>(n, 10001));
        
        // Initialize distance matrix
        for (int i = 0; i < n; i++) {
            dist[i][i] = 0;
        }
        
        // Build initial graph
        for (const auto& edge : edges) {
            dist[edge[0]][edge[1]] = edge[2];
            dist[edge[1]][edge[0]] = edge[2];
        }
        
        // Floyd-Warshall algorithm
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
        
        int minReachableCities = n;
        int result = -1;
        
        // Find the city with the smallest number of reachable cities
        for (int i = 0; i < n; i++) {
            int reachableCities = 0;
            for (int j = 0; j < n; j++) {
                if (dist[i][j] <= distanceThreshold) {
                    reachableCities++;
                }
            }
            if (reachableCities <= minReachableCities) {
                minReachableCities = reachableCities;
                result = i;
            }
        }
        
        return result;
    }
};

```
```Python []

class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        dist = [[10001] * n for _ in range(n)]
        
        # Initialize distance matrix
        for i in range(n):
            dist[i][i] = 0
        
        # Build initial graph
        for u, v, w in edges:
            dist[u][v] = dist[v][u] = w
        
        # Floyd-Warshall algorithm
        for k in range(n):
            for i in range(n):
                for j in range(n):
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
        
        min_reachable_cities = n
        result = -1
        
        # Find the city with the smallest number of reachable cities
        for i in range(n):
            reachable_cities = sum(1 for j in range(n) if dist[i][j] <= distanceThreshold)
            if reachable_cities <= min_reachable_cities:
                min_reachable_cities = reachable_cities
                result = i
        
        return result
```



```Go []
func findTheCity(n int, edges [][]int, distanceThreshold int) int {
    dist := make([][]int, n)
    for i := range dist {
        dist[i] = make([]int, n)
        for j := range dist[i] {
            dist[i][j] = 10001
        }
        dist[i][i] = 0
    }
    
    // Build initial graph
    for _, edge := range edges {
        dist[edge[0]][edge[1]] = edge[2]
        dist[edge[1]][edge[0]] = edge[2]
    }
    
    // Floyd-Warshall algorithm
    for k := 0; k < n; k++ {
        for i := 0; i < n; i++ {
            for j := 0; j < n; j++ {
                if dist[i][k] + dist[k][j] < dist[i][j] {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
    
    minReachableCities := n
    result := -1
    
    // Find the city with the smallest number of reachable cities
    for i := 0; i < n; i++ {
        reachableCities := 0
        for j := 0; j < n; j++ {
            if dist[i][j] <= distanceThreshold {
                reachableCities++
            }
        }
        if reachableCities <= minReachableCities {
            minReachableCities = reachableCities
            result = i
        }
    }
    
    return result
}
```

```JavaScript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    const dist = Array.from({ length: n }, () => new Array(n).fill(10001));
    
    // Initialize distance matrix
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }
    
    // Build initial graph
    for (const [u, v, w] of edges) {
        dist[u][v] = w;
        dist[v][u] = w;
    }
    
    // Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    
    let minReachableCities = n;
    let result = -1;
    
    // Find the city with the smallest number of reachable cities
    for (let i = 0; i < n; i++) {
        const reachableCities = dist[i].filter(d => d <= distanceThreshold).length;
        if (reachableCities <= minReachableCities) {
            minReachableCities = reachableCities;
            result = i;
        }
    }
    
    return result;
};

```