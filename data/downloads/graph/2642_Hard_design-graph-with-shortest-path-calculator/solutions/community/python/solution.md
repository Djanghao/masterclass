# 🚀 Dijkstra's Algorithm || Explained Intuition 🚀

**Author:** MohamedMamdouh20
**Votes:** 98
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274432/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274432/)

---

# Problem Description

The task today is implementing a **Graph** class to handle a directed **weighted** graph consisting of `n` nodes `(numbered from 0 to n - 1)`and a set of initial edges. The edges are represented by a given array edges, where `edges[i] = [fromi, toi, edgeCosti]` indicates that there is an edge **from** node `fromi` **to** node `toi` with a **cost** of `edgeCosti`.

- The Graph class have the following **functionalities**:
    - **Initialization**: `Graph(int n, int[][] edges)`: Initializes the graph with `n` nodes and the provided set of edges.
    - **Edge Addition**: `addEdge(int[] edge):` **Adds** a new edge to the graph. The parameter edge is of the form `[from, to, edgeCost]`. 
    - **Shortest Path Calculation**: `int shortestPath(int node1, int node2)`: Returns the **minimum** cost of a path from node `node1` to node `node2`. If no path exists between the specified nodes, the function should return `-1`. 


- **Constraints:**
    - The graph is **directed** and **weighted**.
    - There is **no duplicated** edge between any two node and **no self-loops**.
    - The **cost** of a path is defined as the sum of the costs of the edges in that path.
    - $1 <= n <= 100$
    - $0 <= edges.length <= n * (n - 1)$
    - $edges[i].length == edge.length == 3$
    - $0 <= fromi, toi, from, to, node1, node2 <= n - 1$
    - $1 <= edgeCosti, edgeCost <= 10^6$

---


# Intuition

Hello There\uD83D\uDE04
Let's take a look\uD83D\uDC40 on our interesting problem\uD83D\uDE80

Our problem says that we have a special class called **Graph** and we want to **implement** its methods to `make a graph`, `add edges` freely to it and `calculate shortest path` between any two nodes.
our **bottleneck** function will be to find the shortest path between any two node.\uD83E\uDD14

But for my I don't think it is a hard problem.\uD83D\uDE03\uD83D\uDCAA

- Let's focus on **two important** things:\uD83E\uDD29
    - We want to find a **path** between two nodes.
    - We want to **minimize** the cost of the path.

It looks like something that **Dijkstra's Algorithm** can solve, our hero today\uD83E\uDDB8\u200D\u2642\uFE0F!

But what is **DIJKSTRA** ?!!\uD83E\uDD28
Dijkstra's Algorithm is an algorithm to find the **shortest** path between two nodes in a **graph** or two cells in a **matrix** or any problem that can be represented as a graph.\uD83D\uDCC8
  
It's part of a **family** of algorithms designed to uncover the shortest path between nodes or cells **like** BFS, Bellman-Ford Algorithm, Floyd-Warsahll Algorithm. Each algorithm has its **unique** applications.

- Let's focus on Dijkstra's Algorithm:
    - **Nature:** It's a single-source, multiple-destination algorithm. In simpler terms, it pinpoints the shortest path from a starting node to any other node in our graph.
    - **Constraints:** Dijkstra's Algorithm is suitable for graphs or problems featuring **positive** weights. If we encounter **negative** weights, we'd choose alternative algorithms such as `Bellman-Ford`.
    
And there you have it! Dijkstra's Algorithm is the **key** \uD83D\uDDDDto our problem, well-known for tackling precisely these types of challenges.

We will **construct** our graph simply like any other graph problem and when we are required to **calculate** shortest path between two nodes we will call our svaior **Dijkstra's Algorithm**.

And this is the solution for our today'S problem I hope that you understood it\uD83D\uDE80\uD83D\uDE80


---

# Approach
1. **Graph Initialization:**
    - Initializes the adjacency list by resizing it to the number of nodes and populates it with edges.
2. **Adding an Edge:**
   - Appends a new edge to the adjacency list based on the input vector `edge` representing the edge information.
3. **Finding Shortest Path:**
   - Calls the private `dijkstra` method to find the shortest path between two nodes (`node1` and `node2`) using **Dijkstra's algorithm**.
4. **Dijkstra's Algorithm Implementation:**
   - Uses a **priority queue** to efficiently retrieve the node with the **minimum** distance.
   - The algorithm **updates** distances and **explores** neighbors until it finds the target node or completes the traversal.
   - Returns the **minimum** distance or `-1` if no path exists.


---


## Complexity
### Time complexity:
- **Graph(int n, int[][] edges):** $O(E)$
    - Initialization will require to loop over the edges to add them to the adjacent list which cost `O(E)`.
- **addEdge(int[] edge):** $O(1)$
    - It is only constant time since we simply add the edge to the adjacent list.
- **Shortest Path Calculation:** $O(V + E * log(E))$
    - Since initializing the `distances` vector is **linear** operation with length `V` for all the elements and priority queue will cost `log(E)` in the single time to be called since it can have atmost `E` edges and at worst complexity it will be called for `E` time. 

### Space complexity:
- **The graph class:** $O(V + E)$
    - Since the class will store **adjacency list** all the time for the graph which contains of `N` vectors for each node and all vectors have `E` elements.
- **Graph(int n, int[][] edges):** $O(1)$
    - Doesn't require any additional space than the adjacency list to be called.
- **addEdge(int[] edge):** $O(1)$
    - Doesn't require any additional space to add an edge.
- **Shortest Path Calculation:** $O(E)$
    - The** priority queue** of the Dijkstra Algorithm will store at most `E` edges in it so the space complexity when calling this function is `O(E)`. 


> Where V is number of nodes and E is number of edges.

---



# Code
```C++ []
class Graph {
public:
    // Adjacency list to represent the graph
    vector<vector<pair<int, int>>> adjacencyList;

    // Constructor to initialize the graph with nodes and edges
    Graph(int n, vector<std::vector<int>>& edges) {
        adjacencyList.resize(n);
        for (auto edge : edges)
            adjacencyList[edge[0]].emplace_back(edge[1], edge[2]);
    }

    // Add a new edge to the graph
    void addEdge(vector<int> edge) {
        adjacencyList[edge[0]].emplace_back(edge[1], edge[2]);
    }

    // Find the shortest path between two nodes using Dijkstra's algorithm
    int shortestPath(int node1, int node2) {
        return dijkstra(node1, node2);
    }

private:
    // Dijkstra's algorithm to find the shortest path
    int dijkstra(int start, int end) {
        int n = adjacencyList.size();
        vector<int> distances(n, INT_MAX);
        distances[start] = 0;

        // Priority queue to efficiently retrieve the node with the minimum distance
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> priorityQueue;
        priorityQueue.push({0, start});

        while (!priorityQueue.empty()) {
            int currentNode = priorityQueue.top().second;
            int currentCost = priorityQueue.top().first;
            priorityQueue.pop();

            // Skip if a shorter path has already been found
            if (currentCost > distances[currentNode])
                continue;

            // If found the target node then return the cost
            if(currentNode == end)
                return currentCost ;

            // Explore neighbors and update distances
            for (auto edge : adjacencyList[currentNode]) {
                int neighbor = edge.first, edgeLength = edge.second;
                int newRouteCost = edgeLength + distances[currentNode];

                // Update distance if a shorter route is found
                if (distances[neighbor] > newRouteCost) {
                    distances[neighbor] = newRouteCost;
                    priorityQueue.push({newRouteCost, neighbor});
                }
            }
        }

        // Return the minimum distance or -1 if no path exists
        return ((distances[end] == INT_MAX) ? -1 : distances[end]);
    }
};
```
```Java []
class Graph {

    private List<List<int[]>> adjacencyList;

    public Graph(int n, int[][] edges) {
        adjacencyList = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            adjacencyList.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            addEdge(edge);
        }
    }

    public void addEdge(int[] edge) {
        int[] edgeArray = {edge[1], edge[2]};
        adjacencyList.get(edge[0]).add(edgeArray);
    }

    public int shortestPath(int node1, int node2) {
        return dijkstra(node1, node2);
    }

    private int dijkstra(int start, int end) {
        int n = adjacencyList.size();
        int[] distances = new int[n];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[start] = 0;

        // Priority queue to efficiently retrieve the node with the minimum distance
        PriorityQueue<int[]> priorityQueue = new PriorityQueue<>(Comparator.comparingInt(o -> o[0]));
        priorityQueue.add(new int[]{0, start});

        while (!priorityQueue.isEmpty()) {
            int[] current = priorityQueue.poll();
            int currentNode = current[1], currentCost = current[0];

            // Skip if a shorter path has already been found
            if (currentCost > distances[currentNode])
                continue;

            // If found the target return the cost
            if(currentNode == end)
                return currentCost;

            // Explore neighbors and update distances
            for (int[] edge : adjacencyList.get(currentNode)) {
                int neighbor = edge[0], edgeLength = edge[1];
                int newRouteCost = edgeLength + distances[currentNode];

                // Update distance if a shorter route is found
                if (distances[neighbor] > newRouteCost) {
                    distances[neighbor] = newRouteCost;
                    priorityQueue.add(new int[]{newRouteCost, neighbor});
                }
            }
        }

        // Return the minimum distance or -1 if no path exists
        return ((distances[end] == Integer.MAX_VALUE) ? -1 : distances[end]);
    }
}
```
```Python []
class Graph:
    def __init__(self, n: int, edges: List[List[int]]):
        # Adjacency list to represent the graph
        self.adjacencyList = [[] for _ in range(n)]

        # Constructor to initialize the graph with nodes and edges
        for edge in edges:
            self.adjacencyList[edge[0]].append((edge[1], edge[2]))

    # Add a new edge to the graph
    def addEdge(self, edge: List[int]):
        self.adjacencyList[edge[0]].append((edge[1], edge[2]))

    # Find the shortest path between two nodes using Dijkstra's algorithm
    def shortestPath(self, node1: int, node2: int) -> int:
        return self.dijkstra(node1, node2)

    # Dijkstra's algorithm to find the shortest path
    def dijkstra(self, start: int, end: int) -> int:
        n = len(self.adjacencyList)
        distances = [float('inf')] * n
        distances[start] = 0

        # Priority queue to efficiently retrieve the node with the minimum distance
        priorityQueue = [(0, start)]

        while priorityQueue:
            currentCost, currentNode = heapq.heappop(priorityQueue)

            # Skip if a shorter path has already been found
            if currentCost > distances[currentNode]:
                continue

            # If found the target node then return the cost
            if currentNode == end:
                return currentCost

            # Explore neighbors and update distances
            for edge in self.adjacencyList[currentNode]:
                neighbor, edgeLength = edge
                newRouteCost = edgeLength + distances[currentNode]

                # Update distance if a shorter route is found
                if distances[neighbor] > newRouteCost:
                    distances[neighbor] = newRouteCost
                    heapq.heappush(priorityQueue, (newRouteCost, neighbor))

        # Return the minimum distance or -1 if no path exists
        return -1 if distances[end] == float('inf') else distances[end]
```




![HelpfulJerry.jpg](./images/0.jpeg)
