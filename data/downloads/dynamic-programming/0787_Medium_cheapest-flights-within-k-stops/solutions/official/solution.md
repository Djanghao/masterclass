# Official Solution

**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solution/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solution/)

---

[TOC]

## Solution

---

### Overview

We can treat this as a graph problem where:
* Cities can be thought of as nodes in a graph.
* The connections between each of the cities can be treated as the edges, and finally,
* The cost of going from one city to another would be the weight of the edges in the graph.

The problem is to find the shortest path from a source to a destination with a constraint of `k` stops. This is a very good problem to practice various graph algorithms.

---

### Approach 1: Breadth First Search

#### Intuition

A breadth-first search is a good algorithm to use if we want to find the shortest path in an unweighted graph. The property of BFS is that the first time a node is reached during the traversal, it is reached at the minimum distance from the source. The same cannot be said for a weighted graph. For a weighted graph, a path having more edges does not necessarily mean the path is more expensive. Thus, we cannot employ a normal breadth-first search for weighted graphs.

A breadth-first search has no way of knowing if a particular discovery of a node would give us the cheapest path to that node. The only possible way for BFS (or DFS) to find the shortest path in a weighted graph is to search the entire graph and keep recording the minimum distance from the source to the destination node.

However, our problem limits the number of stops to `k`. As a result, we need not search the paths with lengths greater than `k + 1`. A breadth-first search can be used for this problem because the number of levels to be explored by the algorithm is bounded by `k`.

In this approach, we will perform a level-wise iteration over the nodes. We will explore all the nodes at the present level (say `l`) before moving on to the nodes at the next level (`l + 1`). This level would correspond to the number of stops that would be limited by `k`. When we move from a level of `l` to `l + 1`, we will increase the stops by `1`. We are allowed a maximum of `k` stops, which means we could go up to a maximum level of `k + 1` from the `src` node, trying to reach `dst` at the minimum price. 

We can maintain an array `dist` which stores the minimum price to reach each node. When we want to move to a `node`, we will only consider edges where the total price after traversing the edge is less than the currently calculated `dist[node]`. This optimization helps us avoid TLE.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1376/).

> In this article, we will use the terms price and distance interchangeably. You can imagine the prices as miles between airports, and we want the shortest distance.

<br>

#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X` and the corresponding price it takes to move to a neighbor.
2. Intialize `dist` array, storing the minimum price to reach a node from the `src` node. Intialize it with large values.
3. Initialize a queue storing `{node, distance}` pairs. Initially, the queue should have only `{src, 0}`.
4. Create a variable called `stops` and set its value to `0`.
5. Perform BFS until the queue is empty or `stops > k`:
    - Iterate over all the nodes at a particular level. This will be done by starting a nested loop and visiting all the nodes currently present in the queue.
    - At each pair `{node, distance}`, iterate over all the neighbors of `node`. For each neighbour, check if `dist[neighbor]` is less than `distance` + the price of the edge. If it is, then update `dist[neighbor]` and push `{neighbor, dist[neighbor]}` onto the queue.
    - After iterating over all the nodes in the current level, increase `stops` by one. We've visited all the nodes at a particular level and are ready to visit the next level of nodes.
6. Once we reach a condition where either the queue is empty or `stops == k`, we have our answer as `dist[dst]`. If `dist[dst]` hasn't changed from the initial large value, then we never reached it, so return `-1`.

Below is a visual example of how the algorithm works. The left side arrays represents the previous level and the right side arrays represent the current level.

!?!../Documents/787_cheapest_flights_slideshow.json:960,540!?!

<br>

#### Implementation

<iframe src="https://leetcode.com/playground/mMU7PBtF/shared" frameBorder="0" width="100%" height="500" name="mMU7PBtF"></iframe>

#### Complexity Analysis

Let $E$ be the number of flights and $N$ be the number of cities.

* Time complexity: $O(N + E \cdot K)$

    - Depending on improvements in the shortest distance for each node, we may process each edge multiple times. However, the maximum number of times an edge can be processed is limited by $K$ because that is the number of levels we will investigate in this algorithm. In the worst case, this takes $O(E \cdot K)$ time. We also need $O(E)$ to initialize the adjacency list and $O(N)$ to initialize the `dist` array.

* Space complexity: $O(N + E \cdot K)$

    - We are processing at most $E \cdot K$ edges, so the queue takes up $O(E \cdot K)$ space in the worst case. We also need $O(E)$ space for the adjacency list and $O(N)$ space for the `dist` array.

---

### Approach 2: Bellman Ford

#### Intuition

If you are new to Bellman Ford, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/622/single-source-shortest-path-algorithm/3864/) for more information on it!

Bellman Ford's algorithm is used to find the shortest paths from the source node to all other vertices in a weighted graph. It depends on the idea that the shortest path contains at most `N - 1` edges (where `N` is the number of nodes in the graph) because the shortest path cannot have a cycle.

This algorithm takes as input a directed weighted graph and a starting node. It produces all the shortest paths from the starting node to all other vertices. It initially sets the distance from the starting node to all other vertices to infinity. The distance of the starting node is set to `0`. The algorithm loops through each edge `N - 1` times. If it finds an edge through which the distance of a node is smaller than the previously stored value, it uses this edge and stores the new value. This is called **relaxing** an edge.

It first calculates the shortest distances with at-most one edge in the path from the source. Then, it calculates the shortest paths with at-most `2` edges, and so on. After the `i-th` iteration over the edges, the shortest paths with at most `i` edges are calculated. There can be a maximum `N – 1` edges in any simple path (not a negative cycle), and that is why the algorithm iterates `N – 1` times over the edges.

Since we are limited to `k` stops, we can modify this algorithm to restrict the maximum number of edges that can be in a path to `k + 1`.

#### Algorithm

1) Intialize the `dist` array, storing the minimum price to reach a node from the `src` node. Intialize it with large values.
2) Set the distance to the source as `0`.
3) Run an outer loop `k + 1` times.
4) In each iteration, make a copy of `dist` named `temp` and loop over all the edges in the graph trying to relax each one of them.
    - At each edge `{x, y}`, if the cost of reaching `x` (which is `dist[x]`) plus the cost of the edge is less than `dist[y]`, then we can relax this edge by updating `temp[y]`.
    - We need to use another array `temp` so that the distances from the previous iteration stored in `dist` don't change.
5) After finishing an iteration, copy the `temp` array to the `dist` array.
6) Our answer should be in `dist[dst]` at the end of the outer loop. If `dist[dst]` hasn't changed from the initial large value, then we never reached it, so return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/TMcFuA6M/shared" frameBorder="0" width="100%" height="429" name="TMcFuA6M"></iframe>

#### Complexity Analysis

Let $E$ be the number of flights and $N$ be number of cities.

* Time complexity: $O((N + E) \cdot K)$

    - We are iterating over all the edges $K + 1$ times which takes $O(E \cdot K)$. At the start and end of each iteration, we also swap distance arrays, which take $O(N \cdot K)$ time for all the iterations. This gives us a time complexity of $O(E \cdot K + N \cdot K) = O((N + E) \cdot K)$

* Space complexity: $O(N)$

    - We are using `dist` and `temp` arrays, which each require $O(N)$ space.

---

### Approach 3: Dijkstra

#### Intuition

If you are new to Dijkstra's algorithm, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/622/single-source-shortest-path-algorithm/3862/) for more information on it!

Dijkstra's algorithm is used to find the shortest paths from a source node to all the other nodes in a weighted graph where the edge weights are positive numbers. It makes use of a priority queue (heap) to decide which edges to use.

Dijkstra's works by greedily choosing which node to investigate next. A priority queue is used to select the node that currently has the lowest price. In the previous two approaches, we used an array `dist` that made sure we only traversed an edge to node `x` if we could make an improvement on `dist[x]`. In this approach, we will instead use an array `stops` which tracks the minimum number of stops needed to reach each node instead of the minimum price. Then, we will only traverse an edge to a node `x` if `x` has not already been visited with fewer stops. Because we are greedily choosing the node with the lowest total price, the first time we reach `dst`, we will have the answer.

As per the problem, we also need to restrict the number of stops to `k` i.e., we can take at most `k + 1` steps from the source node, so we will store the current number of stops along with each node since we aren't iterating level by level anymore.

#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X` and the corresponding price it takes to move to a neighbor.
2. Intialize the `stops` array, storing the steps required to reach a node from the `src` node. We would intialize it with large values to indicate we've not reached any nodes yet.
3. Initialize a min-heap that stores a triplet `{dist_from_src_node, node, number_of_stops_from_src_node}`. Insert `{0, src, 0}` as the first triplet into the queue.
4. Perform Dijkstra's until the heap is empty:
    - Pop `{dist, node, steps}` from the heap
    - If `steps > stops[node]`, then we already visited this node with fewer steps earlier, so ignore the current triplet and move on.
    - If `steps > k + 1`, then we have taken too many stops, so ignore the current triplet and move on.
    - Otherwise, check if we are at `dst`. If we are, then return `dist` as the answer.
    - If not, iterate over the neighbors of `node` and for each neighbor, push `{dist + price, neighbor, steps + 1}` onto the heap.
5. If we reach the end of the loop without returning the answer, it means we cannot reach the destination. Our answer would be `-1` in this case.

#### Implementation

<iframe src="https://leetcode.com/playground/Ag6kDvsc/shared" frameBorder="0" width="100%" height="500" name="Ag6kDvsc"></iframe>

#### Complexity Analysis

Let $E$ be the number of flights and $N$ be number of cities in the given problem.

* Time complexity: $O(E \cdot K \cdot (E + log({E \cdot K})))$

    - Let's assume any node `A` is popped out of the queue in an iteration. If the `steps` taken to visit `A` are more than `stops[node]`, we do not iterate over the neighbors of `A`. However, we will iterate over neighbors of `A` if the `steps` are less than `stops[A]`, which can be true $K$ times. `A` can be popped the first time with `K` steps, followed by `K-1` steps, and so on until `1` step. The same argument would be valid for any other node like `A`. As a result, each edge can only be processed $K$ times, resulting in $O(E \cdot K)$ elements being processed.
    - It will take the priority queue $O(E \cdot K \cdot (E + log({E \cdot K})))$ time to push or pop $O(E \cdot K)$ elements.

* Space complexity: $O(N + E \cdot K)$

    - We are using the `adj` array, which requires $O(E)$ memory. The `stop` array would require $O(N)$ memory. As previously stated, the priority queue can only have $O(E \cdot K)$ elements.