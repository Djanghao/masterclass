# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solution/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solution/)

---

[TOC]

## Solution

---

### Overview

We are given` n` cities connected by bidirectional highways, each incurring a toll. We also have a limited number of discounts that can reduce the toll on any highway by half. Our goal is to determine the minimum total cost to travel from city `0` to city `n−1`.

> Note: This problem has a lot of commonalities with [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/editorial/). After reading through this editorial, you can test yourself by solving it.

We can transform this problem into a graph problem where: 

* Cities are the nodes in the graph.
* Highways that connect cities are the edges in the graph.
* The toll associated with each highway is the weight of the corresponding edge in the graph.

In the absence of discounts, this problem is exactly equivalent to finding the shortest path between two points in a weighted graph. Because we are only interested in finding the minimum distance from a single node (node `0`), we often call this problem a "single source shortest path" problem. 

BFS is ideal for finding the shortest path in an unweighted graph, as it guarantees that the first time a node is reached, it has the minimum distance from the source. However, in a weighted graph, this isn't necessarily true since a path with more edges can have a lower total weight than a path with fewer edges.

To address this, we use a dynamic programming approach, recording the minimum distance from the source to each node in an array as we progress through the graph. To account for discounts on edge weights, we employ a 2D array `DP`, where `DP[v][d]` represents the minimum distance from the source to node `v` using exactly `d` discounts.

At each step, we can either use a discount on the current edge or not. If we use a discount, we update `DP[v][d + 1]` with the halved toll cost. If we don't use a discount, we update `DP[v][d]` with the full toll cost, ensuring our array captures the minimum distances for both scenarios.

Ultimately, the minimum cost to reach the target node with any number of discounts will be the smallest value in `DP[target][d]` for all valid `d`. While this approach works for smaller graphs, it may cause a Time Limit Exceeded (TLE) error for larger graphs due to the exhaustive checking of every node and discount combination. To avoid this, we need a more efficient method to reduce the number of explorations and speed up the process, which we will discuss next.

---

### Approach 1: Dijkstra's Algorithm using Priority Queue

#### Intuition

Dijkstra's algorithm is used to find the shortest paths from a source node to all other nodes in a weighted graph where edge weights are positive. It uses a priority queue (heap) to decide which edges to investigate first, exploring the graph more efficiently than the brute-force BFS approach by greedily choosing which node to explore next.

A priority queue is used to select the node with the lowest cost, pruning less promising paths early. This way, Dijkstra's algorithm always expands the most promising node, leading to faster convergence to the optimal solution. We can think of Dijkstra's algorithm as an enhanced version of BFS, where the queue is prioritized by the current minimum cost instead of simply the order in which nodes are discovered (FIFO).

The main logic of the algorithm involves updating the minimum cost to reach each node:

- **Without Using a Discount:** For each neighbor node of the current node, calculate the total cost to reach that node without using a discount. If this cost is less than the previously recorded cost for that neighbor, update the distance table and push the new state into the priority queue.
- **Using a Discount:** If discounts are available, calculate the total cost with a discount on the current toll. If this discounted cost is less than the previously recorded cost for that neighbor, update the distance table and push the new state into the priority queue.

Dijkstra's algorithm guarantees that when a node is processed, it has the lowest possible cost among all paths to that node with the given number of discounts. The priority queue processes nodes in order of increasing cost, ensuring no cheaper path from the source to the current node exists when it is visited. Therefore, we can use a visited array to track nodes with their specific number of discounts used, skipping reprocessing and preventing redundant work.

To gain a deeper understanding of Dijkstra's algorithm and the single-source shortest path problems in general, we encourage you to study our [LeetCode Explore Card](https://leetcode.com/explore/featured/card/graph/622/single-source-shortest-path-algorithm/).

#### Algorithm

1. Initialize `graph` as an adjacency list of pairs.
2. For each highway in the `highways` array:
   - Extract the endpoints `u` and `v`, and the toll `toll`.
   - Add `v` with toll `toll` to the adjacency list of `u`.
   - Add `u` with toll `toll` to the adjacency list of `v`.
3. Initialize a 2D array `dist` of size `n x (discounts + 1)` with all elements set to infinity.
4. Set `dist[0][0]` to 0.
5. Initialize a min heap `pq` and push a tuple `(0, 0, 0)` representing (cost, city, discounts used).
6. Initialize a 2D array `visited` of size `n x (discounts + 1)` with all elements set to false.
7. While `pq` is not empty:
   - Dequeue the front tuple into `currentCost`, `city`, and `discountsUsed`.
   - If `(city, discountsUsed)` is already visited, continue to the next iteration.
   - Mark `(city, discountsUsed)` as visited.
   - For each neighbor pair `(neighbor, toll)` in the adjacency list of `city`:
     - If traveling to `neighbor` without using a discount results in a lower cost:
       - Update `dist[neighbor][discountsUsed]` to `currentCost + toll`.
       - Push `(currentCost + toll, neighbor, discountsUsed)` into `pq`.
     - If `discountsUsed` is less than `discounts` and using a discount results in a lower cost:
       - Calculate `discountedCost` as `currentCost + toll / 2`.
       - Update `dist[neighbor][discountsUsed + 1]` to `discountedCost`.
       - Push `(discountedCost, neighbor, discountsUsed + 1)` into `pq`.
8. Find the minimum value in `dist[n-1]` to determine the minimum cost to reach city `n-1` with any number of discounts used.
9. If the minimum cost is still infinity, return -1. Otherwise, return the minimum cost.

#### Implementation

<iframe src="https://leetcode.com/playground/QpTPSuzx/shared" frameBorder="0" width="100%" height="500" name="QpTPSuzx"></iframe>

#### Complexity Analysis

Let $N$ be the number of nodes (cities) and $E$ be the number of edges (highways). Let $K$ be the number of discounts.

- Time Complexity: $O((N \cdot K + E) \cdot \log(N \cdot K))$

    Constructing the graph representation involves iterating over the `highways` array, where each highway is processed in constant time. Thus, this step takes $O(E)$ time.

    The priority queue operations involve inserting and extracting elements. Each element can be inserted and extracted up to $N \cdot (K + 1)$ times, and each operation takes $O(\log(N \cdot (K + 1)))$ time. Therefore, the priority queue operations take $O((N \cdot K) \log(N \cdot K))$ time.

    The relaxation of edges happens for each node and each discount state, leading to $O(E \cdot K)$ relaxation operations. Each operation involves updating the priority queue, taking $O(\log(N \cdot K))$ time. Thus, relaxation operations take $O(E \log(N \cdot K))$ time.

    Combining these steps, the overall time complexity is:
    $
    O(E + (N \cdot K) \log(N \cdot K) + E \log(N \cdot K)) = O((N \cdot K + E) \cdot \log(N \cdot K))
    $

- Space Complexity: $O(N \cdot K + E)$

    The graph is stored as an adjacency list, requiring space equal to the number of highways $E$.

    The distance table `dist` and the `visited` arrays are 2D arrays of size $N \times (K + 1)$.

    The priority queue used can contain up to $N \times (K + 1)$ elements in the worst case, corresponding to each city with each possible number of discounts used.

    Therefore, the space complexity is $O(E + N \cdot K)$

---

### Approach 2: Space Optimized Dijkstra's Algorithm

#### Intuition

We can avoid using an array to store visited nodes and further optimize our implementation. Instead, we leverage the fact that any node expansion can be pruned if the current accumulated cost to reach a node is already higher than the recorded minimum cost for that node and discount state.

> Note: Recall that in Dijkstra's algorithm, we choose the nodes with the lowest accumulated cost to expand at each iteration. 

For example, consider a graph with nodes `A`, `B`, and `C`, where the edges are as follows: `highways[0] = [A, B, 5]`, `highways[1] = [B, C, 10]`, and `highways[2] = [A, C, 12]`. Suppose we have one discount available.

If we find a path from `A` to `B` to `C` with a total cost of `15` (`5` from `A` to `B` and `10` from `B` to `C`), and record this in `dist[C][0]`, we can later skip expanding any path to `C` with a higher accumulated cost, such as `20`, since it exceeds the recorded minimum cost of `15`.

#### Algorithm

1. Initialize `graph` as an adjacency list of pairs.
2. For each highway in the `highways` array:
   - Extract the endpoints `u` and `v`, and the toll `toll`.
   - Add `v` with toll `toll` to the adjacency list of `u`.
   - Add `u` with toll `toll` to the adjacency list of `v`.
3. Initialize a 2D array `dist` of size `n x (discounts + 1)` with all elements set to infinity.
4. Set `dist[0][0]` to 0.
5. Initialize a min heap `pq` and push a tuple `(0, 0, 0)` representing (cost, city, discounts used).
6. While `pq` is not empty:
   - Dequeue the front tuple into `currentCost`, `city`, and `discountsUsed`.
   - If `currentCost` is already higher than the known minimum cost for `(city, discountsUsed)`, continue to the next iteration.
   - For each neighbor pair `(neighbor, toll)` in the adjacency list of `city`:
     - If traveling to `neighbor` without using a discount results in a lower cost:
       - Update `dist[neighbor][discountsUsed]` to `currentCost + toll`.
       - Push `(currentCost + toll, neighbor, discountsUsed)` into `pq`.
     - If `discountsUsed` is less than `discounts` and using a discount results in a lower cost:
       - Calculate `discountedCost` as `currentCost + toll / 2`.
       - Update `dist[neighbor][discountsUsed + 1]` to `discountedCost`.
       - Push `(discountedCost, neighbor, discountsUsed + 1)` into `pq`.
7. Find the minimum value in `dist[n-1]` to determine the minimum cost to reach city `n-1` with any number of discounts used.
8. If the minimum cost is still infinity, return -1. Otherwise, return the minimum cost.

#### Implementation

<iframe src="https://leetcode.com/playground/NC3k8zcq/shared" frameBorder="0" width="100%" height="500" name="NC3k8zcq"></iframe>

#### Complexity Analysis

Let $N$ be the number of nodes (cities) and $E$ be the number of edges (highways). Let $K$ be the number of discounts.

- Time Complexity: $O((N \cdot K + E) \cdot \log(N \cdot K))$

    Constructing the graph representation involves iterating over the `highways` array, where each highway is processed in constant time. Thus, this step takes $O(E)$ time.

    The priority queue operations involve inserting and extracting elements. Each element can be inserted and extracted up to $N \cdot (K + 1)$ times, and each operation takes $O(\log(N \cdot (K + 1)))$ time. Therefore, the priority queue operations take $O((N \cdot K) \log(N \cdot K))$ time.

    The relaxation of edges happens for each node and each discount state, leading to $O(E \cdot K)$ relaxation operations. Each operation involves updating the priority queue, taking $O(\log(N \cdot K))$ time. Thus, relaxation operations take $O(E \log(N \cdot K))$ time.

    Combining these steps, the overall time complexity is, 
    $O(E + (N \cdot K) \log(N \cdot K) + E \log(N \cdot K)) = O((N \cdot K + E) \log(N \cdot K))$

- Space Complexity: $O(N \cdot K + E)$

    The graph is stored as an adjacency list, requiring space equal to the number of highways $E$.

    The distance table `dist` is a 2D array of size $N \times (K + 1)$.

    The priority queue used can contain up to $N \times (K + 1)$ elements in the worst case, corresponding to each city with each possible number of discounts used.

    Therefore, the space complexity is, $O(E + N \cdot K)$

---