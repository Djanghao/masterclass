# Official Solution

**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solution/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solution/)

---

[TOC]

## Solution

---

### Overview

Imagine we're city planners analyzing the connectivity of cities in a region. We have:

1. A network of `n` cities, numbered from `0` to `n-1`.
2. A list of roads (edges) connecting these cities, with each road having a certain length (weight).
3. A maximum travel distance (`distanceThreshold`) we're willing to consider.

Our goal is to find the most isolated city — the one that can reach the fewest other cities within the `distanceThreshold`. If there's a tie, we choose the city with the highest number.

This is a graph problem where we calculate the reachability of each city within the given distance constraint and then select the optimal city accordingly.

In this article, we'll cover applications of four different graph algorithms to provide a comprehensive guide on the main traversal techniques used in [graphs for finding the shortest path](https://leetcode.com/explore/featured/card/graph/). If you are completely unaware of these algorithms, it is recommended to check them out first. Users can treat this as a template and refer back whenever they need clarification on shortest path algorithms. We will maintain a consistent main function throughout the article, changing only the specific algorithm logic. This article will help keep the focus on the dynamic parts that vary according to different algorithms, without overwhelming you with a wall of text.

The four algorithms we'll discuss are:

1. Dijkstra's Algorithm
2. Bellman-Ford Algorithm
3. Shortest Path First Algorithm (SPFA)
4. Floyd-Warshall Algorithm

---

### Approach 1: Dijkstra Algorithm

#### Intuition

Dijkstra's algorithm is a graph search algorithm that finds the shortest paths between nodes in a graph. It is particularly effective for finding the shortest path from a single source node to all other nodes in graphs with non-negative edge weights. 

The algorithm uses a greedy strategy, maintaining a set of vertices whose shortest distance from the source is known. At each step, it selects the vertex with the minimum distance value from the set of unvisited vertices.

We initialize distances to all vertices as infinity, except for the source vertex, which is set to zero. A priority queue is used to efficiently select the vertex with the minimum distance in each iteration, ensuring that the most promising paths are processed first and saving unnecessary computations.

For each neighbor of the current vertex, we calculate the distance through the current vertex. If this calculated distance is less than the previously known distance to that neighbor, the distance is updated — a process known as relaxation. Dijkstra's algorithm performs relaxation efficiently by always processing the most promising vertex next.

After computing all shortest paths, we count reachable cities and select the most isolated ones.

In summary, the algorithm involves three main steps:

1. **Initialization:** Set the distance to the source city as zero and all others as infinity. Use a priority queue to process cities based on their shortest distance.

2. **Relaxation:** Extract the city with the smallest distance from the priority queue. Update the distances to their neighboring cities, adding them back to the queue if their distances are updated.

3. **Result Computation:** Compute the shortest paths from each city. Count the number of reachable cities within the distance threshold. Choose the city with the fewest reachable cities or, in case of ties, the city with the greatest number.

#### Algorithm
 
- Create an adjacency list `adjacencyList` to store the graph.
- Create a 2D array `shortestPathMatrix` with dimensions `n x n` to store shortest path distances between all pairs of cities.

- For each city `i`:
  - Set all distances in `shortestPathMatrix[i]` to the maximum integer value.
  - Set the distance from the city `i` to itself (`shortestPathMatrix[i][i]`) to `0`.
  - Initialize `adjacencyList[i]` as an empty list.

- Iterate through each edge in `edges`:
  - Extract `start`, `end`, and `weight` from each edge.
  - Add `(end, weight)` to `adjacencyList[start]`.
  - Add `(start, weight)` to `adjacencyList[end]`.

- For each city `i`:
  - Call `dijkstra(n, adjacencyList, shortestPathMatrix[i], i)`, where `i` is the source city and `shortestPathMatrix[i]` is the array that will hold the shortest path distances from city `i`.

- Return the city identified by calling `getCityWithFewestReachable(n, shortestPathMatrix, distanceThreshold)` as having the fewest number of reachable cities within the given distance threshold.

**`dijkstra(n, adjacencyList, shortestPathDistances, source)` Function:**

- Use a priority queue to process nodes with the smallest distance first:
  - Initialize the priority queue with the `source` city.
  - Set all distances in `shortestPathDistances` to `Integer.MAX_VALUE`.
  - Set the distance to the `source` city itself (`shortestPathDistances[source]`) to `0`.
  
- Process nodes in priority order:
  - For each node, update distances to neighboring cities if a shorter path is found.

**`getCityWithFewestReachable(n, shortestPathMatrix, distanceThreshold)` Function:**

- Initialize `cityWithFewestReachable` to `-1` and `fewestReachableCount` to `n`.

- For each city `i`:
  - Count how many cities are reachable from the city `i` within the `distanceThreshold`:
    - For each city `j`, check if `shortestPathMatrix[i][j]` is less than or equal to `distanceThreshold`.
    - Increment `reachableCount` if city `j` is reachable within the threshold.

  - Update `cityWithFewestReachable` if the current city `i` has fewer reachable cities compared to previously evaluated cities.

The algorithm is visualized below:

!?!../Documents/1334/approach1.json:975,490!?!

#### Implementation

<iframe src="https://leetcode.com/playground/We2utpec/shared" frameBorder="0" width="100%" height="500" name="We2utpec"></iframe>

#### Complexity Analysis

Let `n` refer to the number of cities, where the constraints are $2 <= n <= 100$, and `m` refer to the number of edges, with $1 <= edges.length <= \frac{n \cdot (n - 1)}{2}$. This means that `m` can be at most $\frac{n \cdot (n - 1)}{2}$, representing the maximum number of edges in an undirected graph where every city is connected to every other city with a unique edge. 

* Time complexity: $O(n^3 \log n)$

    For one source, Dijkstra's algorithm using a priority queue runs in $O(m \cdot \log n)$. With the maximum number of edges `m`, this becomes $O(n \cdot (n - 1) / 2 \cdot \log n) = O(n^2 \log n)$. Running Dijkstra's algorithm for each city (source), the overall time complexity is $O(n \cdot n^2 \log n) = O(n^3 \log n)$.

* Space complexity: $O(n^2)$

    The space complexity is $O(n^2)$ for the `shortestPathMatrix` and $O(m + n)$ for the adjacency list and auxiliary data structures. Since $m = O(n^2)$ in the worst case, the overall space complexity simplifies to $O(n^2)$.

---

### Approach 2: Bellman-Ford Algorithm

#### Intuition

The Bellman-Ford algorithm is a graph search algorithm that finds the shortest paths from a single source vertex to all other vertices in a weighted graph. Unlike Dijkstra's algorithm, Bellman-Ford can handle graphs with negative edge weights, making it more versatile but potentially slower.

We start by initializing distances to all vertices as infinity, except the source vertex, which is set to zero. This initialization represents our initial state of knowledge - we don't know any paths yet, so we assume they're infinitely long, except for the trivial path from a vertex to itself.

Next, we perform the key operation, relaxation. For each edge in the graph, we check if the distance to the destination vertex can be improved by going through the source vertex of that edge. We repeat this relaxation step for V-1 times, where V is the number of vertices. In the worst case, where vertices form a line, it might take V-1 steps for changes to propagate from one end to the other.

In our implementation, we apply Bellman-Ford from each city as a source, giving us the shortest paths from every city to every other city. We could have used a single source and run Bellman-Ford once, then repeated for other sources, but running it independently for each source simplifies our code structure.

After computing all shortest paths, we count how many cities are reachable from each city within the distance threshold, and then select the city that can reach the fewest others, breaking ties by choosing the higher-numbered city.

This approach guarantees correctness even with negative edge weights (though we don't have those here). Its simplicity makes Bellman-Ford a good algorithm, even if it's not the most efficient for our specific problem. We don't need to implement cycle detection or early termination, keeping our code straightforward at the cost of potentially unnecessary computations.

#### Algorithm

- Create a 2D array `shortestPathMatrix` with dimensions `n x n` to store shortest path distances between all pairs of cities.

- For each city `i`:
  - Call `bellmanFord(n, edges, shortestPathMatrix[i], i)`, where `i` is the source city and `shortestPathMatrix[i]` is the array that will hold the shortest path distances from the city `i`.

- Return the city identified by calling `getCityWithFewestReachable(n, shortestPathMatrix, distanceThreshold)` as having the fewest number of reachable cities within the given distance threshold.

**`bellmanFord(n, edges, shortestPathDistances, source)` Function:**

- Initialize the distances from the `source` city:
  - Set all distances in `shortestPathDistances` (initially set to `Integer.MAX_VALUE`, which represents `INF`) to a large value, indicating that the shortest distance is unknown at the start.
  - Set the distance to the `source` city itself (`shortestPathDistances[source]`) to `0`.
  
- Relax edges up to `n-1` times:
  - Iterate through all edges in `edges`:
    - For each edge, extract `start`, `end`, and `weight`.
    - Update the shortest path distances if a shorter path is found. Specifically:
      - If the distance from `start` to `end` can be reduced by taking the current edge, update `shortestPathDistances[end]`.
      - Similarly, update `shortestPathDistances[start]` if a shorter path is found through the `end` city.

**`getCityWithFewestReachable(n, shortestPathMatrix, distanceThreshold)` Function:**

- Initialize `cityWithFewestReachable` to `-1` and `fewestReachableCount` to `n`.

- For each city `i`:
  - Count how many cities are reachable from city `i` within the `distanceThreshold`:
    - For each city `j`, check if `shortestPathMatrix[i][j]` is less than or equal to `distanceThreshold`.
    - Increment `reachableCount` if city `j` is reachable within the threshold.

  - Update `cityWithFewestReachable` if the current city `i` has fewer reachable cities compared to previously evaluated cities.

#### Implementation

> Note: We have introduced an `updated` flag to break out of the loop early (relaxation of edges) if no updates are made in an iteration. This optimization can reduce the number of iterations in some cases, addressing the Time Limit Exceeded (TLE) issues that occur when the algorithm is run without this adjustment in Python implementations. For those implementing this algorithm in C++ or Java, refer to the Python code to see how this simple `updated` flag has been integrated.

<iframe src="https://leetcode.com/playground/gTrh989H/shared" frameBorder="0" width="100%" height="500" name="gTrh989H"></iframe>

#### Complexity Analysis

Let `n` refer to the number of cities, where the constraints are $2 <= n <= 100$, and `m` refer to the number of edges, with $1 <= edges.length <= \frac{n \cdot (n - 1)}{2}$. This means that `m` can be at most $\frac{n \cdot (n - 1)}{2}$, representing the maximum number of edges in an undirected graph where every city is connected to every other city with a unique edge.  

* Time complexity: $O(n^4)$

    For one source, Bellman-Ford runs in $O(n \cdot m)$, where `m` is the number of edges. In the worst case, `m` is $n \cdot (n - 1) / 2$ (checkout the constraints), so the time complexity for one source becomes $O(n \cdot (n \cdot (n - 1) / 2)) = O(n^3)$. Since Bellman-Ford must be run for each city (source), the overall time complexity is $O(n \cdot n^3) = O(n^4)$.

* Space complexity: $O(n^2)$

    The space complexity is dominated by the `shortestPathMatrix`, which stores the shortest path distances between each pair of cities. This matrix requires $O(n^2)$ space.

---

### Approach 3: Shortest Path First Algorithm (SPFA)

#### Intuition

The Shortest Path Faster Algorithm (SPFA) is an improvement of the Bellman-Ford algorithm, designed to work faster on average, especially for sparse graphs, while still handling negative edge weights.

SPFA starts similarly to Bellman-Ford by initializing all distances to infinity except for the source vertex. However, instead of blindly relaxing all edges in each iteration, SPFA uses a queue to keep track of which vertices need to be processed. We begin by adding the source vertex to the queue, then enter a loop that continues as long as the queue is not empty. In each iteration, we remove a vertex from the queue and relax its outgoing edges. If relaxing an edge updates the distance to a neighbor, we add that neighbor to the queue if it's not already there.

This queue-based approach allows SPFA to focus on the parts of the graph where improvements are still possible, potentially skipping large portions of the graph that won't lead to better paths. This targeted processing often makes SPFA faster than Bellman-Ford in practice.

Our implementation includes a cycle detection mechanism. We keep track of how many times each vertex has been processed. If any vertex is processed more than V times (where V is the number of vertices), it indicates a negative weight cycle. While not strictly necessary for our problem (as we're guaranteed no negative weights), this showcases SPFA's ability to handle more general graphs and could be useful if the algorithm is repurposed for other problems.

Like in previous approaches, we run SPFA from each city as a source to build our complete shortest path matrix. After computing all shortest paths, we perform the same counting and selection process to find the most isolated city.

SPFA offers a middle ground between Bellman-Ford and Dijkstra's algorithm. It can handle negative edge weights like Bellman-Ford, but it's often much faster in practice, sometimes approaching the efficiency of Dijkstra's algorithm. It allows for more efficient processing, especially in graphs where only a few edges contribute to the shortest paths. However, it's worth noting that SPFA's worst-case time complexity is still O(VE) like Bellman-Ford, so it's not guaranteed to be faster in all cases.

#### Algorithm
 
- Create an adjacency list `adjacencyList` to store the graph.
- Create a 2D array `shortestPathMatrix` with dimensions `n x n` to store shortest path distances between all pairs of cities.

- For each city `i`:
  - Set all distances in `shortestPathMatrix[i]` to `Integer.MAX_VALUE`.
  - Set the distance from city `i` to itself (`shortestPathMatrix[i][i]`) to `0`.
  - Initialize `adjacencyList[i]` as an empty list.

- Iterate through each edge in `edges`:
  - Extract `start`, `end`, and `weight` from each edge.
  - Add `(end, weight)` to `adjacencyList[start]`.
  - Add `(start, weight)` to `adjacencyList[end]`.

- For each city `i`:
  - Call `spfa(n, adjacencyList, shortestPathMatrix[i], i)`, where `i` is the source city and `shortestPathMatrix[i]` is the array that will hold the shortest path distances from city `i`.

- Return the city identified by calling `getCityWithFewestReachable(n, shortestPathMatrix, distanceThreshold)` as having the fewest number of reachable cities within the given distance threshold.

**`spfa(n, adjacencyList, shortestPathDistances, source)` Function:**

- Use a queue to process nodes with updated shortest path distances:
  - Initialize the queue with the `source` city.
  - Set all distances in `shortestPathDistances` to `Integer.MAX_VALUE`.
  - Set the distance to the `source` city itself (`shortestPathDistances[source]`) to `0`.
  
- Process nodes in queue:
  - For each node, update distances to neighboring cities if a shorter path is found.
  - Track the number of updates for each node.

**`getCityWithFewestReachable(n, shortestPathMatrix, distanceThreshold)` Function:**

- Initialize `cityWithFewestReachable` to `-1` and `fewestReachableCount` to `n`.

- For each city `i`:
  - Count how many cities are reachable from city `i` within the `distanceThreshold`:
    - For each city `j`, check if `shortestPathMatrix[i][j]` is less than or equal to `distanceThreshold`.
    - Increment `reachableCount` if city `j` is reachable within the threshold.
  
  - Update `cityWithFewestReachable` if the current city `i` has fewer reachable cities compared to previously evaluated cities.

#### Implementation

<iframe src="https://leetcode.com/playground/Wc3cKduH/shared" frameBorder="0" width="100%" height="500" name="Wc3cKduH"></iframe>

#### Complexity Analysis

Let `n` refer to the number of cities, where the constraints are $2 <= n <= 100$, and `m` refer to the number of edges, with $1 <= edges.length <= \frac{n \cdot (n - 1)}{2}$. This means that `m` can be at most $\frac{n \cdot (n - 1)}{2}$, representing the maximum number of edges in an undirected graph where every city is connected to every other city with a unique edge.   

* Time complexity: $O(n^4)$

    The average time complexity of SPFA is $Θ(m)$ per source, which is $Θ(n^2)$ in the worst case per source. Running SPFA for each city (source), the overall average time complexity is $Θ(n \cdot m) = Θ(n \cdot n^2) = Θ(n^3)$, and the worst-case time complexity is $O(n \cdot n^3) = O(n^4)$.

* Space complexity: $O(n^2)$

    The space complexity is $O(n^2)$ for the `shortestPathMatrix` and $O(m + n)$ for the adjacency list and auxiliary data structures. Since $m = O(n^2)$ in the worst case, the overall space complexity simplifies to $O(n^2)$.

---


### Approach 4: Floyd-Warshall Algorithm

#### Intuition

The Floyd-Warshall algorithm finds the shortest paths in a weighted graph with positive or negative edge weights, as long as there are no negative cycles. Unlike algorithms that compute shortest paths from a single source, Floyd-Warshall computes the shortest paths between all pairs of vertices in the graph.

This algorithm takes a fundamentally different approach by computing all-pairs shortest paths in one go, rather than separately for each source. We start by initializing a distance matrix where direct connections between cities are filled with their edge weights, and all other distances are set to infinity. The distance from a city to itself is set to zero. This matrix serves both as our working space and our final result.

The core of the our algorithm involves three nested loops. The outermost loop iterates through all vertices, considering each as a potential intermediate point on the shortest path between every other pair of vertices. For each pair of vertices `(i, j)`, we check if passing through the current intermediate vertex `k` offers a shorter path than we currently know. If it does, we update the distance.


This iterative process gradually refines our shortest paths. By the time all vertices have been considered as intermediates, we have determined all shortest paths. After running Floyd-Warshall, our distance matrix contains all the information needed. We can directly count reachable cities for each source and select our answer, similar to previous approaches.

Floyd-Warshall has several advantages: it solves the all-pairs shortest path problem directly with a simple and elegant one-pass implementation. For dense graphs, its time complexity of O(V^3) can be more efficient than running algorithms like Dijkstra’s or SPFA multiple times. However, for sparse graphs or when only a few sources are involved, other algorithms might be more efficient.

#### Algorithm
 
- Define `INF` as a large constant value (e.g., `1e9 + 7`) to represent an infinite distance for initial comparisons.
- Create a 2D array `distanceMatrix` with dimensions `n x n` to store shortest path distances between all pairs of cities.

- For each city `i`:
  - Set all distances in `distanceMatrix[i]` to `INF`.
  - Set the distance from city `i` to itself (`distanceMatrix[i][i]`) to `0`.

- Iterate through each edge in `edges`:
  - Extract `start`, `end`, and `weight` from each edge.
  - Update `distanceMatrix[start][end]` and `distanceMatrix[end][start]` with `weight`.

- Call `floyd(n, distanceMatrix)` to compute shortest paths between all pairs of cities.

- Return the city identified by calling `getCityWithFewestReachable(n, distanceMatrix, distanceThreshold)` as having the fewest number of reachable cities within the given distance threshold.

**`floyd(n, distanceMatrix)` Function:**

- Use three nested loops to update the `distanceMatrix`:
  - Outer Loop: Iterate over each intermediate city `k`.
  - Middle Loop: Iterate over each source city `i`.
  - Inner Loop: Iterate over each destination city `j`.
  
- For each combination of cities `(i, j)` and intermediate city `k`, update the distance if a shorter path is found through `k`:
  - Condition: If `distanceMatrix[i][j] > distanceMatrix[i][k] + distanceMatrix[k][j]`, then update:
    - Update: `distanceMatrix[i][j] = distanceMatrix[i][k] + distanceMatrix[k][j]`
    - Explanation: This means that if the path from city `i` to city `j` is longer than the path from city `i` to city `k` plus the path from city `k` to city `j`, update the shortest distance from `i` to `j` to be the sum of distances `i` to `k` and `k` to `j`.

**`getCityWithFewestReachable(n, shortestPathMatrix, distanceThreshold)` Function:**

- Initialize `cityWithFewestReachable` to `-1` and `fewestReachableCount` to `n`.

- For each city `i`:
  - Count how many cities are reachable from the city `i` within the `distanceThreshold`:
    - For each city `j`, check if `shortestPathMatrix[i][j]` is less than or equal to `distanceThreshold`.
    - Increment `reachableCount` if city `j` is reachable within the threshold.
  
  - Update `cityWithFewestReachable` if the current city `i` has fewer reachable cities compared to previously evaluated cities.

The algorithm is visualized below:

!?!../Documents/1334/approach4_re.json:980,485!?!

#### Implementation

<iframe src="https://leetcode.com/playground/nbkKWfMR/shared" frameBorder="0" width="100%" height="500" name="nbkKWfMR"></iframe>

#### Complexity Analysis

Let `n` refer to the number of cities, where the constraints are $2 <= n <= 100$, and `m` refer to the number of edges, with $1 <= edges.length <= \frac{n \cdot (n - 1)}{2}$. This means that `m` can be at most $\frac{n \cdot (n - 1)}{2}$, representing the maximum number of edges in an undirected graph where every city is connected to every other city with a unique edge.   

* Time complexity: $O(n^3)$

    The Floyd-Warshall algorithm directly computes the shortest paths between all pairs of cities in $O(n^3)$, regardless of the number of edges. This comes from the three nested loops, each iterating `n` times.

* Space complexity: $O(n^2)$

    The space complexity is dominated by the `distanceMatrix`, which requires $O(n^2)$ space to store the shortest path distances between each pair of cities.

---