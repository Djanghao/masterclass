# Official Solution

**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solution/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solution/)

---

[TOC]

## Solution

---

### Overview

The problem presents a directed unweighted graph with `n` nodes. Each node can have at most one outgoing edge. Our task is to find the closest node from two given nodes, `node1` and `node2` so that the maximum between the distances from `node1` and `node2` to that node is minimized over all the nodes. If there are multiple answers, we need to return the node with the smallest index, and if no possible answer exists, we need to return `-1`.

---

### Approach 1: Breadth First Search

#### Intuition

We can see intuitively that if we have the distances from `node1` and `node2` to all the nodes, then we can iterate over all the nodes and choose a node that has the smallest maximum value between the distances from `node1` to that node and from  `node2` to that node.

A breadth-first search (BFS) is a good algorithm to use if we want to find the shortest path in an unweighted graph. The path used in BFS traversal always has the least number of edges. The BFS algorithm does a level-wise iteration of the graph. As a result, it first finds all paths that are one edge away from the source node, followed by all paths that are two edges away from the source node, and so on. This allows BFS to find the shortest path in terms of steps from the source node to any other node. It is implemented with a queue.

Here is an example with steps:

![img](../Figures/2359/2359-bfs.png)

In this approach, we begin BFS traversals for both `node1` and `node2` to compute the shortest distances from `node1` and `node2` to all other nodes. We store the results in arrays labeled `dist1` and `dist2`, respectively. We also set two variables: `minDistNode = -1`, which is the answer to our problem, and `minDistTillNow`, which is the maximum between the distances from `node1` to `minDistNode` and from `node2` to `minDistNode`.

Now, we iterate over all of the nodes from `0` to `n - 1`. For each node, say `currNode` we check if the maximum distance from `node1` and `node2` is smaller than the other nodes previously seen. If `minDistTillNow > max(dist1[currNode], dist2[currNode])`, we have a node `currNode` with a smaller maximum value between the distances from `node1` to `currNode` and from `node2` to `currNode`. In this case, we update the `minDistTillNow` to `minDistTillNow = max(dist1[currNode], dist2[currNode])` and update the `minDistNode` to `minDistNode = currNode`.

Otherwise, if `minDistTillNow <= max(dist1[currNode], dist2[currNode])` we do not do anything. We return `minDistNode` at the end of all the iterations over every node. We would never update the variable `currNode` if we couldn't reach any node that is reachable from `node1` and `node2`. In that case, we'd return the `currNode` variable with its original value of `-1`.

#### Algorithm

1. Initialize two arrays, `dist1` and `dist2` storing the shortest distances from `node1` and `node2` to all the nodes. Initialize them with large values.
2. Start a BFS traversal.
    - We use a function `bfs` to perform the traversal. It requires `startNode, edges, dist` as the parameters, where `dist` is the array that stores the shortest distances from `startNode` to all the nodes.
    - Start with `node1, edges, dist1`.
    - Initialize a queue with `startNode` in the queue.
3. Initialize an array `visit`, storing a boolean for each node to indicate if a node is visited. Initialize it with `false` for all the nodes.
4. Then, while the queue is not empty:
    - Dequeue the first `node` from the queue. If it has not been visited, mark it as visited. Otherwise, if it has been visited, repeat step 4.
    - Check if `node` has an outgoing edge. If there is no outgoing edge, we don't do anything.
    - If the `node` has an outgoing edge to another node called `neighbor`, and `neighbor` has not yet been visited, update the `dist[neighbor]` to `dist[neighbor] = 1 + dist[node]` and push the `neighbor` into the queue.
5. Perform another BFS traversal with `node2, edges, dist2` to get the shortest distances from `node2` to every other node in `dist2`.
6. Initialize two variables: `minDistNode = -1`, which is the answer to our problem, and `minDistTillNow`, which is the maximum between the distances from `node1` to `minDistNode` and from `node2` to `minDistNode`.
7. Run a loop over all the nodes and check each node called `currNode`.
    - If `minDistTillNow > max(dist1[currNode], dist2[currNode])`, update `minDistTillNow` to `minDistTillNow = max(dist1[currNode], dist2[currNode])` and update `minDistNode` to `minDistNode = currNode`.
    - Otherwise, we do not update anything.
8. Return `minDistNode`.

#### Implementation

<iframe src="https://leetcode.com/playground/8dxTbBWd/shared" frameBorder="0" width="100%" height="500" name="8dxTbBWd"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes.

* Time complexity: $O(N)$

    - The complexity would be similar to the standard BFS algorithm since we are performing the BFS traversal twice.
    - For the BFS algorithm, each node is only queued once, which takes $O(1)$ time for each node. We also iterate over the edge of every node once (since we only visit each node once, we won't iterate over a node's edge multiple times), which adds $O(n)$ time since we have at most $n$ edges.
    - We also require $O(n)$ time to initialize each `dist1`, the `dist2` and the `visit` arrays.
    - We also require $O(n)$ time to run a loop over all the nodes in the end to compute the answer.

* Space complexity: $O(n)$

    - Because each node only has one outgoing edge, the queue size will never exceed `1`. As such, we don't actually need the queue, but we've used it here to show the template code implementation for BFS.
    - However, we still require $O(n)$ space each for the `dist1`, the `dist2` and the `visit` arrays.

---

### Approach 2: Depth First Search

#### Intuition

An interesting property of the graph mentioned in the problem is that each node can have at most one outgoing edge. We can see intuitively that if every node has at most one outgoing edge, there can only be one path from a node to any other node. This is because we only have one way to proceed from one node to another node by using the outgoing edge, if one exists. If there is no outgoing edge or the node has a self-loop (an edge that connects a node to itself), we cannot move ahead. So, if we are able to move, we can only move in one direction. Due to this property, we would be able to use the depth-first search (DFS) algorithm to find the shortest path from a node to all the other nodes in this scenario.

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the next branch and continue exploring. Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

Here is an example with steps:

![img](../Figures/2359/2359-dfs.png)

We can only have one branch as per our problem. So, DFS works for our use case to find the shortest distance from a node to all other nodes.

Note that, we cannot use DFS in a standard unweighted graph to find the shortest distance from a node to any other node. For example, let's take a graph with three edges: `1 -> 2`, `1 -> 3` and `2 -> 3`. Let's say we start with node `1` and mark its distance as `0`. We move forward, visit node `2` and mark its distance as `1`. As mentioned in DFS, we explore nodes as far as possible along the branch, so from node `2` we will go to node `3`. We will mark its distance as `2`, which is incorrect. We can visit node `3` via `1 -> 3` with a distance of `1`. 

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

In this approach, we begin DFS traversals for both `node1` and `node2` to compute the shortest distances from `node1` and `node2` to all other nodes. We will store the results in arrays labelled `dist1` and `dist2`, respectively.

Then, we will iterate over all the nodes and find a node `minDistNode` with the smallest maximum value between the distances from `node1` to `minDistNode` and `node2` to `minDistNode` similar to the BFS approach.

#### Algorithm

1. Initialize two arrays, `dist1` and `dist2` storing the shortest distances from `node1` and `node2` to all the nodes. Initialize them with large values. Set `dist1[node1] = 0` and `dist2[node2] = 0`.
2. Initialize two boolean arrays, `visit1` and `visit2` to indicate if a node is visited or not in a DFS traversal, starting from `node1` and `node2` respectively. Initialize them with false.
3. Start a DFS traversal.
    - We use a function `dfs` to perform the traversal. For each call, pass the `node, edges, dist, visit` as the parameters.
    - Start with `node1, edges, dist, visit1` to get the shortest distances from `node1` to every node in `dist1`.
    - Mark `node` as visited.
    - If the `node` has an outgoing edge to another node called `neighbor`, and `neighbor` has not yet been visited, update the `dist[neighbor]` to `dist[neighbor] = 1 + dist[node]`. We also recursively call the dfs with `neighbor, dges, dist, visit`.
4. Perform another DFS traversal with `node2, edges, dist2, visit2` to get the shortest distances from `node2` to every node. The distances will be stored in `dist2`.
6. Initialize two variables: `minDistNode = -1`, which is the answer to our problem, and `minDistTillNow`, which is the maximum between the distances from `node1` to `minDistNode` and from `node2` to `minDistNode`.
7. Run a loop over all the nodes and check each node called `currNode`.
    - If `minDistTillNow > max(dist1[currNode], dist2[currNode])`, update `minDistTillNow` to `minDistTillNow = max(dist1[currNode], dist2[currNode])` and update `minDistNode` to `minDistNode = currNode`.
    - Otherwise, we do not update anything.
8. Return `minDistNode`.

#### Implementation

<iframe src="https://leetcode.com/playground/kQKyWEuV/shared" frameBorder="0" width="100%" height="500" name="kQKyWEuV"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes.

* Time complexity: $O(n)$

    - The complexity would be similar to the standard DFS algorithm since we’re performing the DFS traversal twice.
    - Each node is visited by the `dfs` function once, which takes $O(n)$ time in total. We also iterate over the edge of every node once (since we only visit each node once, we won't iterate over a node's edge multiple times), which adds $O(n)$ time since we have at most $n$ edges.
    - We also require $O(n)$ time to initialize each `dist1`, the `dist2` and the `visit` arrays.
    - We also require $O(n)$ time to run a loop over all the nodes in the end to compute the answer.

* Space complexity: $O(n)$

    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case.
    - We also require $O(n)$ space each for the `dist1`, the `dist2` and the `visit` arrays.