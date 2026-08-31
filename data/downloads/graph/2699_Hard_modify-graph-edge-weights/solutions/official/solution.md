# Official Solution

**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solution/](https://leetcode.com/problems/modify-graph-edge-weights/solution/)

---

[TOC]

## Solution

---

### Overview

We've got a connected graph with `n` nodes, where edges connect pairs of nodes with certain weights. Our goal is to adjust the graph so that the shortest path between two specific nodes, `source` and `destination`, matches a given target distance.

The input provides:

- The number of nodes `n`.
- A list of edges, each described by $[a_i, b_i, w_i]$, where $a_i$ and $b_i$ are the nodes connected by the edge, and $w_i$ is its weight.
- Two nodes, `source` and `destination`.
- A `target` distance that we want the shortest path between `source` and `destination` to exactly match.

Some edges have weights of `-1`, meaning we need to assign them positive weights. Other edges have fixed weights that can’t be changed.

Our task is to find positive weights for the `-1` edges so that the shortest path from `source` to `destination` equals the `target` distance. The new weights should be between `1` and `2 * 10^9`.

If we can adjust the weights to meet the target distance, we return the updated list of edges. If not, we return an empty list. There might be several correct ways to set the weights, and any of them will work.

This problem is similar to designing a road network where some roads have fixed distances and others are planned but not yet constructed. The challenge is to adjust the planned road lengths so that the shortest route between two cities meets the specified distance, all while considering the existing infrastructure.

To fully grasp the solution, it’s a good idea to review [Dijkstra's algorithm](https://leetcode.com/explore/featured/card/graph/) first, as our approach relies heavily on its principles.

---

### Approach 1: Traditional Dijkstra's algorithm 

#### Intuition

The idea behind the solution is to use Dijkstra's algorithm, which is great for finding the shortest paths in a graph with non-negative edge weights. We tweak the algorithm a bit to handle situations where some of the edge weights have to be figured out as we go along.

We start by running Dijkstra's algorithm but ignore any edges with weights of `-1` for now. This first run helps us find the shortest distance from the `source` to the `destination`. We then check how this distance compares to our `target` distance.

1. If the shortest distance matches the `target`, the current positive weights already give us the desired path length. In this case, we can set the `-1` edges to a large value (like `2 × 10^9`) to make sure they don’t change the shortest path.

2. If the shortest distance is less than the `target`, there’s no way to extend the path to reach the `target` just by adjusting the `-1` edges. In this scenario, the graph structure doesn’t support increasing the path length, so we return an empty list.

3. If the shortest distance is more than the `target`, we need to reduce the path length by tweaking the `-1` edges.

We start by setting a high weight on the `-1` edges to ensure they don’t interfere with our initial path calculation. Then, we adjust the weight of each `-1` edge to a smaller value (like `1`) and rerun Dijkstra’s algorithm to see if the shortest path gets closer to the target distance.

If changing an edge’s weight helps get the shortest path closer to the target, we update the weight. We repeat this until we find suitable weights for all `-1` edges that give us the target distance.

If we manage to find weights that achieve the target distance, we return the updated edge list. If not, we return an empty list.

#### Algorithm

- Define `INF` as a large constant representing infinity.

Inside the main function `modifiedGraphEdges`:

- Calculate the initial shortest path from `source` to `destination` using Dijkstra's algorithm(`runDijkstra` helper function), storing the result in `currentShortestDistance`.
- Check if the current distance is less than the target:
  - If yes, return an empty result as it's impossible to achieve the target distance.
- Determine if the current distance matches the target:
  - If it does, set a flag `matchesTarget` to true.
- Iterate through each edge to adjust weights:
  - Skip edges that already have a positive weight since they don't need adjustment.
  - Set edge weight:
    - If `matchesTarget` is true, set the weight to a large value (`INF`).
    - Otherwise, set the weight to 1.
- Check if the current distance matches the target:
  - If not, recompute the shortest distance using Dijkstra's algorithm with the updated edge weights.
  - If the new distance is within the target range, adjust the edge weight to match the target, and update `matchesTarget` to true.
- Return modified edges:
  - If the target distance is achieved (`matchesTarget` is true), return the modified edges.
  - Otherwise, return an empty result.

Inside the helper function `runDijkstra`:

- Initialize adjacency matrix with a large value (`INF`) to represent no direct connection between nodes.
- Initialize distance array to store the minimum distance from the source node to each node, initially set to `INF`.
- Mark the distance to the source node as 0 because the shortest path to itself is zero.
- Fill the adjacency matrix with the weights of the edges from the input.
- Perform Dijkstra's algorithm:
  - Iterate through all nodes to find the shortest path.
  - Find the nearest unvisited node with the smallest distance from the source.
  - Mark the nearest node as visited to avoid reprocessing.
  - Update the minimum distance for each adjacent node based on the newly visited node's distance.
- Return the shortest distance to the destination node as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/4wcKVMHK/shared" frameBorder="0" width="100%" height="500" name="4wcKVMHK"></iframe>

#### Complexity Analysis

Let $V$ be the number of nodes and $E$ be the number of edges.

- Time complexity: $O(E \times V^2)$

    Dijkstra's algorithm runs in $O(V^2)$ time, due to the adjacency matrix representation.
    
    The overall complexity is $O(E \times V^2)$ because we potentially run Dijkstra's algorithm for each modifiable edge.

- Space complexity: $O(V^2)$

    The space complexity is $O(V^2)$ due to the adjacency matrix, with additional space for the distance and visited arrays.

---

### Approach 2: Dijkstra's Algorithm with Min-Heap 

#### Intuition

In the traditional approach, after initializing distances, we repeatedly scan all nodes to find the unvisited node with the smallest tentative distance. This operation takes $O(n)$ time per selection, leading to an overall time complexity of $O(n^2)$ in the worst case.

To optimize this, we use a priority queue (min-heap) to manage and retrieve the node with the smallest tentative distance efficiently. When a node is processed, its neighbors are updated, and if a shorter path is found, the neighbor is pushed onto the priority queue with its updated distance. This ensures that the next node to be processed is always the one with the smallest distance.

Apart from the use of a priority queue, the approach remains largely the same: we construct the graph, ignoring edges with weights of `-1`, as these represent unknown or adjustable weights. We then compute the shortest distance from the source to the destination using the optimized Dijkstra algorithm. If the computed distance is already less than the target, we return an empty result.

If the distance matches the target, we set all `-1` edges to a large value (`INF`) to prevent any further adjustments. If the initial distance exceeds the target, we adjust the `-1` edges to a minimal weight of 1, re-run Dijkstra's algorithm, and fine-tune the last adjusted edge to exactly match the target.

> Here we require additional memory for the priority queue. The queue needs to store nodes and their tentative distances, which slightly increases memory usage, but this is usually a reasonable trade-off for the gained efficiency.


!?!../Documents/2699/modifygraph.json:835,575!?!


#### Algorithm

- Define `INF` as a large constant representing infinity.

Inside the main function `modifiedGraphEdges`:

- Build the graph:
  - Iterate through each edge in the input list.
  - For edges with a positive weight (not `-1`), add them to the adjacency list for both nodes.

- Calculate the initial shortest path from `source` to `destination` using Dijkstra's algorithm (`runDijkstra` helper function), storing the result in `currentShortestDistance`.

- Check if the current shortest distance is less than the target:
  - If true, return an empty result as it is impossible to achieve the target distance with the given edges.

- Determine if the current distance matches the target:
  - If it does, set a flag `matchesTarget` to true.

- Iterate through each edge to adjust weights:
  - Skip edges that already have a positive weight since they don't need adjustment.
  - For each edge with weight `-1`:
    - Set the edge weight to a large value (`INF`) if `matchesTarget` is true.
    - Otherwise, set the edge weight to 1.
    - Update the adjacency list with the new weight.

- Check if the updated shortest distance matches the target:
  - If `matchesTarget` is false, recompute the shortest distance using Dijkstra's algorithm with the updated edge weights.
  - If the new distance is within the target range, adjust the edge weight to match the target distance, and update `matchesTarget` to true.

- Return modified edges:
  - If the target distance is achieved (`matchesTarget` is true), return the modified edges.
  - Otherwise, return an empty result.

Inside the helper function `runDijkstra`:

- Initialize the `minDistance` array to store the minimum distance from the source node to each node, initially set to `INF`.
- Initialize a priority queue to process nodes in order of their current known shortest distance.
- Set the `minDistance` to the source node as 0 because the shortest path to itself is zero.
- Perform Dijkstra's algorithm:
  - Iterate through all nodes to find the shortest path.
  - Extract the node with the smallest distance from the source.
  - Update the minimum distance for each adjacent node based on the extracted node's distance.
  - Push updated distances into the priority queue.

- Return the shortest distance to the destination node as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/GmrtoLsP/shared" frameBorder="0" width="100%" height="500" name="GmrtoLsP"></iframe>

#### Complexity Analysis

Let $V$ be the number of nodes and $E$ be the number of edges.

- Time complexity: $O(E \times (V + E) \log V)$

    Dijkstra's algorithm operates with a time complexity of $O((V + E) \log V)$ when using a priority queue (min-heap). This is because each vertex and edge is processed at most once, and each priority queue operation (insertion and extraction) takes $O(\log V)$ time. 

    Dijkstra's algorithm once executes the shortest path from the source to the destination with the current weights. Then, for each edge that weights `-1`, Dijkstra's algorithm is rerun after modifying the edge weight. In the worst-case scenario, where all edges weigh `-1`, this results in running Dijkstra's up to $E$ times. 
    
    Thus, the overall time complexity for handling all possible edge modifications is $O(E \times (V + E) \log V)$.

- Space complexity: $O(V + E)$
    
    The adjacency list representation of the graph requires $O(V + E)$ space. Each vertex has a list of its adjacent vertices and their corresponding edge weights.
    
    Dijkstra’s algorithm uses an array to store the shortest distance from the source to each vertex, which requires $O(V)$ space.
    
    The priority queue used during Dijkstra's algorithm can hold up to $V$ elements, which also requires $O(V)$ space.

    Summing up these components, the total space complexity is $O(V + E)$.

---