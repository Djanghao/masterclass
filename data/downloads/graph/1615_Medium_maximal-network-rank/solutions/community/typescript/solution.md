# 🔥🔥🔥🔥🔥Acc. 100% | js | ts | java | c | C++ | C# | python | python3 | php | kotlin | 🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximal-network-rank/solutions/3925016/](https://leetcode.com/problems/maximal-network-rank/solutions/3925016/)

---

---
![header_.png](./images/0.png)

---
```Python3 []
from collections import defaultdict
from typing import List

class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        # Create a dictionary to store the count of roads for each city
        road_count = defaultdict(int)
        
        # Create a set to store pairs of connected cities
        connected_cities = set()
        
        # Iterate through the roads and update the road count for each city
        for road in roads:
            road_count[road[0]] += 1
            road_count[road[1]] += 1
            connected_cities.add(tuple(road))
        
        maximal_rank = 0
        
        # Calculate the maximal network rank
        for i in range(n):
            for j in range(i + 1, n):
                rank = road_count[i] + road_count[j]
                # If there is a road between cities i and j, subtract 1 from the rank
                if (i, j) in connected_cities or (j, i) in connected_cities:
                    rank -= 1
                maximal_rank = max(maximal_rank, rank)
        
        return maximal_rank
```
```python []
class Solution(object):
    def maximalNetworkRank(self, n, roads):
        # Create an adjacency matrix to represent connections between cities
        adjacency_matrix = [[0] * n for _ in range(n)]
        for road in roads:
            city1, city2 = road
            adjacency_matrix[city1][city2] = 1
            adjacency_matrix[city2][city1] = 1
        
        max_rank = 0
        
        # Iterate through all pairs of cities
        for city1 in range(n):
            for city2 in range(city1 + 1, n):
                # Calculate network rank for the current pair of cities
                rank = sum(adjacency_matrix[city1]) + sum(adjacency_matrix[city2])
                if adjacency_matrix[city1][city2] == 1:
                    rank -= 1  # Deduct one count for the common road
                max_rank = max(max_rank, rank)
        
        return max_rank
```
```Javascript []
var maximalNetworkRank = function(n, roads) {
    // Create an adjacency list to represent city connections
    const graph = new Array(n).fill(0).map(() => []);
    for (const [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    let maxNetworkRank = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Calculate the network rank for the pair (i, j)
            const networkRank = graph[i].length + graph[j].length;
            if (graph[i].includes(j) || graph[j].includes(i)) {
                // If there is a direct road between the cities, subtract 1
                maxNetworkRank = Math.max(maxNetworkRank, networkRank - 1);
            } else {
                maxNetworkRank = Math.max(maxNetworkRank, networkRank);
            }
        }
    }
    
    return maxNetworkRank;
};
```
```Typrscript []
function maximalNetworkRank(n, roads) {
    // Create adjacency matrix
    const adj = Array.from({ length: n }, () => Array(n).fill(0));
    
    // Fill in the adjacency matrix
    for (const [a, b] of roads) {
        adj[a][b] = 1;
        adj[b][a] = 1;
    }
    
    let maxRank = 0;
    
    // Iterate through all pairs of cities
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const rank = countDegree(adj, i) + countDegree(adj, j) - adj[i][j];
            maxRank = Math.max(maxRank, rank);
        }
    }
    
    return maxRank;
}

// Helper function to count the degree of a city
function countDegree(adj, city) {
    return adj[city].reduce((acc, val) => acc + val, 0);
}
```
```Java []
class Solution {
    public int maximalNetworkRank(int n, int[][] roads) {
        // Create an adjacency list to represent the graph
        List<Integer>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        
        // Populate the adjacency list based on the roads
        for (int[] road : roads) {
            int city1 = road[0];
            int city2 = road[1];
            graph[city1].add(city2);
            graph[city2].add(city1);
        }
        
        int maxRank = 0;
        
        // Iterate through all pairs of cities
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int rank = graph[i].size() + graph[j].size();
                // If there is a road directly between the two cities, reduce the rank by 1
                if (graph[i].contains(j)) {
                    rank--;
                }
                maxRank = Math.max(maxRank, rank);
            }
        }
        
        return maxRank;
    }
}
```
```PHP []
class Solution {
    function maximalNetworkRank($n, $roads) {
        // Create a graph representation using an adjacency list
        $graph = array_fill(0, $n, []);
        foreach ($roads as $road) {
            $graph[$road[0]][] = $road[1];
            $graph[$road[1]][] = $road[0];
        }
        
        $maxRank = 0;
        // Iterate over all pairs of cities
        for ($i = 0; $i < $n; $i++) {
            for ($j = $i + 1; $j < $n; $j++) {
                // Calculate the network rank for this pair of cities
                $rank = count($graph[$i]) + count($graph[$j]);
                // If there is a direct road between these cities, subtract 1 from rank
                if (in_array($j, $graph[$i]) || in_array($i, $graph[$j])) {
                    $rank--;
                }
                // Update the maximum network rank
                $maxRank = max($maxRank, $rank);
            }
        }
        
        return $maxRank;
    }
}
```
```Kotlin []
class Solution {
    fun maximalNetworkRank(n: Int, roads: Array<IntArray>): Int {
        val adjMatrix = Array(n) { IntArray(n) }
        
        for (road in roads) {
            val a = road[0]
            val b = road[1]
            adjMatrix[a][b]++
            adjMatrix[b][a]++
        }
        
        var maxRank = 0
        
        for (i in 0 until n) {
            for (j in i + 1 until n) {
                val networkRank = adjMatrix[i].sum() + adjMatrix[j].sum() - adjMatrix[i][j]
                maxRank = maxOf(maxRank, networkRank)
            }
        }
        
        return maxRank
    }
}
```
```C []
int maximalNetworkRank(int n, int** roads, int roadsSize, int* roadsColSize) {
    int adjacencyMatrix[n][n];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            adjacencyMatrix[i][j] = 0;
        }
    }
    
    for (int i = 0; i < roadsSize; i++) {
        int city1 = roads[i][0];
        int city2 = roads[i][1];
        adjacencyMatrix[city1][city2] = 1;
        adjacencyMatrix[city2][city1] = 1;
    }
    
    int maxNetworkRank = 0;
    
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int networkRank = 0;
            
            for (int k = 0; k < n; k++) {
                if (k != i && k != j) {
                    networkRank += adjacencyMatrix[i][k] + adjacencyMatrix[j][k];
                }
            }
            
            // Consider the case when the cities i and j are directly connected
            networkRank += adjacencyMatrix[i][j];
            
            maxNetworkRank = networkRank > maxNetworkRank ? networkRank : maxNetworkRank;
        }
    }
    
    return maxNetworkRank;
}
```
```C++ []
class Solution {
public:
    int maximalNetworkRank(int n, vector<vector<int>>& roads) {
        // Create an adjacency list to represent the graph
        vector<vector<int>> adjList(n);
        for (const auto& road : roads) {
            adjList[road[0]].push_back(road[1]);
            adjList[road[1]].push_back(road[0]);
        }
        
        int maximalRank = 0;
        
        // Iterate through all pairs of cities
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int rank = adjList[i].size() + adjList[j].size();
                
                // If there is a road directly connecting these two cities, reduce rank
                for (int neighbor : adjList[i]) {
                    if (neighbor == j) {
                        rank--;
                        break;
                    }
                }
                
                maximalRank = max(maximalRank, rank);
            }
        }
        
        return maximalRank;
    }
};
```
```C# []
public class Solution {
    public int MaximalNetworkRank(int n, int[][] roads) {
        // Create and initialize the adjacency matrix
        int[][] adjacencyMatrix = new int[n][];
        for (int i = 0; i < n; i++) {
            adjacencyMatrix[i] = new int[n];
        }
        
        // Populate the adjacency matrix based on the roads
        foreach (var road in roads) {
            int city1 = road[0];
            int city2 = road[1];
            adjacencyMatrix[city1][city2]++;
            adjacencyMatrix[city2][city1]++;
        }
        
        int maxNetworkRank = 0;
        
        // Calculate and update the maximum network rank
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int networkRank = SumRow(adjacencyMatrix, i) + SumRow(adjacencyMatrix, j) - adjacencyMatrix[i][j];
                maxNetworkRank = Math.Max(maxNetworkRank, networkRank);
            }
        }
        
        return maxNetworkRank;
    }
    
    // Helper method to calculate the sum of a row in the adjacency matrix
    private int SumRow(int[][] matrix, int row) {
        int sum = 0;
        for (int col = 0; col < matrix.Length; col++) {
            sum += matrix[row][col];
        }
        return sum;
    }
}
```

---
![download.jpg](./images/1.jpeg)

---