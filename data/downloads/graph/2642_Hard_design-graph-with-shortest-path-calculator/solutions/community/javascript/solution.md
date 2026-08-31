# ✅Beats 100% ✅Explained with [ Video ] - Legendary Floyd-Warshall Algorithm

**Author:** millenium103
**Votes:** 42
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274924/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274924/)

---


![Screenshot 2023-11-11 105935.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/aYSZFvPpO9E](https://youtu.be/aYSZFvPpO9E)

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Current Subscribers: 216*
*Subscribe Goal: 250 Subscribers*
# Intuition
The problem involves implementing a class to represent a directed weighted graph and performing operations such as initializing the graph, adding edges, and finding the shortest path between nodes. The Floyd-Warshall algorithm is used to compute the shortest paths between all pairs of nodes.

# Approach
1. **Initialization:**
   - Initialize the graph with the number of nodes and given edges.
   - Create an adjacency matrix to represent the graph.
   - Set initial distances based on the given edges.
   - Apply the Floyd-Warshall algorithm to compute shortest paths.

2. **Adding Edges:**
   - Add a new edge and update the distance matrix if a shorter path is found.

3. **Shortest Path:**
   - Return the precomputed shortest path between two nodes.

# Complexity
- **Initialization:**
   - Time Complexity: O(n^3) - The Floyd-Warshall algorithm dominates the time complexity.
   - Space Complexity: O(n^2) - The adjacency matrix has a space complexity of O(n^2).

- **Adding Edges:**
   - Time Complexity: O(n^2) - Updating the distance matrix.
   - Space Complexity: O(1) - Constant space.

- **Shortest Path:**
   - Time Complexity: O(1) - Accessing precomputed values.
   - Space Complexity: O(1) - Constant space.

**Overall:**
- The time complexity is mainly influenced by the Floyd-Warshall algorithm during initialization.
- The space complexity is determined by the adjacency matrix.
- Edge addition and shortest path queries have reasonable time complexities.

# Code
## Java
```
class Graph {
    int[][] distance;
    int n;
    final int MAX_VALUE = 500_000_000;

    public Graph(int n, int[][] edges) {
        this.n = n;
        distance = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                distance[i][j] = MAX_VALUE;
            }
            distance[i][i] = 0;
        }

        for (int[] edge : edges) {
            distance[edge[0]][edge[1]] = edge[2];
        }

        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    distance[i][j] = Math.min(
                        distance[i][j],
                        distance[i][k] + distance[k][j]
                    );
                }
            }
        }
    }
    
    public void addEdge(int[] edge) {
        if (distance[edge[0]][edge[1]] <= edge[2]) {
            return;
        }
        distance[edge[0]][edge[1]] = edge[2];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                distance[i][j] = Math.min(
                    distance[i][j],
                    distance[i][edge[0]] + edge[2] + distance[edge[1]][j]
                );
            }
        }
    }
    
    public int shortestPath(int node1, int node2) {
        if (distance[node1][node2] == MAX_VALUE) {
            return -1;
        }
        return distance[node1][node2];
    }
}
```
## C++
```
class Graph {
private:
    vector<vector<int>> distance;
    int n;
    const int MAX_VALUE = 500'000'000;
public:
    Graph(int n, vector<vector<int>>& edges) {
        this->n = n;
        distance = vector<vector<int>>(n, vector<int>(n, MAX_VALUE));

        for (int i = 0; i < n; i++) {
            distance[i][i] = 0;
        }

        for (auto& edge : edges) {
            distance[edge[0]][edge[1]] = edge[2];
        }

        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    distance[i][j] = min(
                        distance[i][j],
                        distance[i][k] + distance[k][j]
                    );
                }
            }
        }
    }
    
    void addEdge(vector<int> edge) {
        if (distance[edge[0]][edge[1]] <= edge[2]) {
            return;
        }
        distance[edge[0]][edge[1]] = edge[2];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                distance[i][j] = min(
                    distance[i][j],
                    distance[i][edge[0]] + edge[2] + distance[edge[1]][j]
                );
            }
        }
    }
    
    int shortestPath(int node1, int node2) {
        if (distance[node1][node2] == MAX_VALUE) {
            return -1;
        }
        return distance[node1][node2];
    }
};
```
## Python
```
class Graph(object):
    def __init__(self, n, edges):
        self.n = n
        self.distance = [[float('inf')] * n for _ in range(n)]

        for i in range(n):
            self.distance[i][i] = 0

        for edge in edges:
            self.distance[edge[0]][edge[1]] = edge[2]

        for k in range(n):
            for i in range(n):
                for j in range(n):
                    self.distance[i][j] = min(
                        self.distance[i][j],
                        self.distance[i][k] + self.distance[k][j]
                    )

    def addEdge(self, edge):
        if self.distance[edge[0]][edge[1]] <= edge[2]:
            return

        self.distance[edge[0]][edge[1]] = edge[2]

        for i in range(self.n):
            for j in range(self.n):
                self.distance[i][j] = min(
                    self.distance[i][j],
                    self.distance[i][edge[0]] + edge[2] + self.distance[edge[1]][j]
                )

    def shortestPath(self, node1, node2):
        if self.distance[node1][node2] == float('inf'):
            return -1
        return self.distance[node1][node2]
```
## JavaScript
```
var Graph = function(n, edges) {
    this.n = n;
    this.distance = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));

    for (let i = 0; i < n; i++) {
        this.distance[i][i] = 0;
    }

    for (const edge of edges) {
        this.distance[edge[0]][edge[1]] = edge[2];
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                this.distance[i][j] = Math.min(
                this.distance[i][j],
                this.distance[i][k] + this.distance[k][j]
                );
            }
        }
    }
};
Graph.prototype.addEdge = function(edge) {
    if (this.distance[edge[0]][edge[1]] <= edge[2]) {
            return;
        }
        this.distance[edge[0]][edge[1]] = edge[2];

        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                this.distance[i][j] = Math.min(
                    this.distance[i][j],
                    this.distance[i][edge[0]] + edge[2] + this.distance[edge[1]][j]
                );
            }
        }
};
Graph.prototype.shortestPath = function(node1, node2) {
    if (this.distance[node1][node2] === Number.MAX_SAFE_INTEGER) {
            return -1;
        }
        return this.distance[node1][node2];
};
```
![upvote1.jpeg](./images/1.jpeg)
