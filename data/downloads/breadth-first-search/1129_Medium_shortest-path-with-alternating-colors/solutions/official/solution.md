# Official Solution

**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solution/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a directed graph with `n` nodes from `0` to `n-1` having red and blue edges.

Our task is to return an array of integers `answer` where `answer[x]` is the length of the shortest path from node `0` to node `x` such that the edge colors alternate along the path, or `-1` if such a path does not exist.

---

### Approach: Breadth First Search

#### Intuition

A breadth-first search is a good algorithm to use if we want to find the shortest path in an unweighted graph. The property of BFS is that the first time a node is reached during the traversal, it was reached in the minimum possible steps from the source.

The path used in BFS traversal always has the least number of edges. The BFS algorithm does a level-wise iteration of the graph. As a result, it first finds all paths that are one edge away from the source node, followed by all paths that are two edges away from the source node, and so on. This allows BFS to find the shortest path in terms of steps from the source node to any other node. It is implemented with a queue. We can use the BFS algorithm here as well, with some modifications.

![img](../Figures/1129/1129-bfs-1.png)

Here is an example with the steps:

![img](../Figures/1129/1129-bfs-2.png)

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/1376/) and have some knowledge of it beforehand.

The problem introduces a constraint that restricts the traversal to using only alternate color edges along the path. As a result, in our BFS traversal, we must keep track of the color with which we visited the current node. We use it to move to the neighboring nodes by traversing over alternate color edges.

In contrast to a normal traversal where each node is visited only once, here a node can be visited at most twice. It can be visited once from a red edge and once from a blue edge. We get the minimum number of steps required to visit a node the first time we visit it. We may also need to return to the same node using a different color edge than the one used on the first visit. We then proceed to cover other neighbors who may not have been covered during the first visit due to similar color constraints.

We also need to keep track of how many steps it takes to get to each node. We would use it to update the answer for a node when it was first visited.

As a result, the BFS queue will be an integer triplet. The first value would be the node, the second value would be the number of steps used so far, and the third value would be the color of the edge through which the current node was reached. We use this queue to perform a BFS traversal from the current node to the neighboring nodes while adhering to the color constraints.

#### Algorithm

1. Create an adjacency list `adj` that contains a list of pairs of integers such that `adj[node]` contains the neighbors of `node` in the form `(neighbor, color)` where `neighbor` is the neighbor of `node` and `color` denotes the edge color that connects `node` and `neighbor`. We use the number `0` for red and the number `1` for blue.
2. Create a `answer` array with the value `-1` where `answer[i]` is the answer for the $i^{th}$ node.
3. Create a 2D `visit` array in which `visit[node][color]` indicates whether `node` has yet been visited using an edge of `color`.
4. Create a queue of triplets. It will save three integers per triplet: a) the current node, b) the steps taken to visit the node, and c) the color of the previous edge used. The node `0` has `0` steps and no specific color of visit, we can use `-1` as the color. We also set `visit[0][0]` and `visit[0][1]` to `true` because visiting node `0` again is pointless.
5. While the queue is not empty:
    - Remove the first element out of the queue to obtain `[node, steps, prevColor]`.
    - Loop through all `(neighbor, color)` pairs in `adj[node]`. If a `neighbor` has not yet been visited with a `color` edge and `color != prevColor`, we visit `neighbor` with the `color` edge by pushing `[neighbor, steps + 1, color]` in the queue. If this is `neighbor`'s first visit, i.e., `answer[neighbor] == -1`, we set `answer[neighbor] = steps + 1`.
6. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/NaX4dj5Q/shared" frameBorder="0" width="100%" height="500" name="NaX4dj5Q"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number of blue and red edges.

* Time complexity: $O(n + e)$.

    - The complexity would be similar to the standard BFS algorithm since we’re iterating at most twice over each node.
    - Each queue operation in the BFS algorithm takes $O(1)$ time, and a single node can only be pushed onto the queue twice, leading to $O(n)$ operations for $n$ nodes. We iterate over all the neighbors of each node that is popped out of the queue, so for an undirected edge, a given edge could be iterated at most twice, resulting in $O(e)$ operations total for all the nodes. As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n + e)$.
    - Building the adjacency list takes $O(e)$ space. 
    - The BFS queue takes $O(n)$ because each vertex is added at most twice in the form of triplet of integers. 
    - The other visit and answers arrays take $O(n)$ space.