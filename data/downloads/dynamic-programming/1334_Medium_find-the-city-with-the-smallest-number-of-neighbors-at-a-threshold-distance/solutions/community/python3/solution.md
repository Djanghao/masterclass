# Beats 96.85% users...

**Author:** Success_Code
**Votes:** 74
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536450/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5536450/)

---


## No Bot Upvote, I am true to what I deserve... #No Misunderstandings 


## This is my result:
![image.png](./images/0.png)



# Code

```python3 []
from typing import List

class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        # Initialize the distance matrix with infinity
        dist = [[float('inf')] * n for _ in range(n)]
        
        # Distance to itself is 0
        for i in range(n):
            dist[i][i] = 0
        
        # Populate the distance matrix with the given edges
        for u, v, w in edges:
            dist[u][v] = w
            dist[v][u] = w
        
        # Floyd-Warshall algorithm
        for k in range(n):
            for i in range(n):
                for j in range(n):
                    if dist[i][j] > dist[i][k] + dist[k][j]:
                        dist[i][j] = dist[i][k] + dist[k][j]
        
        # Find the city with the smallest number of reachable cities
        # and if there is a tie, choose the city with the greatest number.
        minReachableCities = float('inf')
        bestCity = -1
        
        for i in range(n):
            reachableCities = 0
            for j in range(n):
                if dist[i][j] <= distanceThreshold:
                    reachableCities += 1
            
            if reachableCities <= minReachableCities:
                minReachableCities = reachableCities
                bestCity = i
        
        return bestCity
```
```javascript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    // Initialize the distance matrix with infinity
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    
    // Distance to itself is 0
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }
    
    // Populate the distance matrix with the given edges
    for (const [u, v, w] of edges) {
        dist[u][v] = w;
        dist[v][u] = w;
    }
    
    // Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    // Find the city with the smallest number of reachable cities
    // and if there is a tie, choose the city with the greatest number.
    let minReachableCities = Infinity;
    let bestCity = -1;
    
    for (let i = 0; i < n; i++) {
        let reachableCities = 0;
        for (let j = 0; j < n; j++) {
            if (dist[i][j] <= distanceThreshold) {
                reachableCities++;
            }
        }
        
        if (reachableCities <= minReachableCities) {
            minReachableCities = reachableCities;
            bestCity = i;
        }
    }
    
    return bestCity;
};
```
```C++ []
#include <vector>
#include <limits>
#include <algorithm>

using namespace std;

class Solution {
public:
    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
        // Initialize the distance matrix with infinity
        vector<vector<int>> dist(n, vector<int>(n, numeric_limits<int>::max()));
        
        // Distance to itself is 0
        for (int i = 0; i < n; ++i) {
            dist[i][i] = 0;
        }
        
        // Populate the distance matrix with the given edges
        for (const auto& edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            dist[u][v] = w;
            dist[v][u] = w;
        }
        
        // Floyd-Warshall algorithm
        for (int k = 0; k < n; ++k) {
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < n; ++j) {
                    if (dist[i][k] != numeric_limits<int>::max() && dist[k][j] != numeric_limits<int>::max()) {
                        dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                    }
                }
            }
        }
        
        // Find the city with the smallest number of reachable cities
        // and if there is a tie, choose the city with the greatest number.
        int minReachableCities = numeric_limits<int>::max();
        int bestCity = -1;
        
        for (int i = 0; i < n; ++i) {
            int reachableCities = 0;
            for (int j = 0; j < n; ++j) {
                if (dist[i][j] <= distanceThreshold) {
                    reachableCities++;
                }
            }
            
            if (reachableCities <= minReachableCities) {
                minReachableCities = reachableCities;
                bestCity = i;
            }
        }
        
        return bestCity;
    }
};

```



