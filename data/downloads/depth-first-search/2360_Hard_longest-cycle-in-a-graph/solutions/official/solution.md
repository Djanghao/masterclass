# Official Solution

**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solution/](https://leetcode.com/problems/longest-cycle-in-a-graph/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a directed graph with `n` nodes numbered from `0` to `n - 1`. Each node has at most one outgoing edge given by `edges`.

Our task is to return the length of the longest cycle in the graph. If no cycle exists, we need to return `-1`.

---

### Approach 1: Depth First Search

#### Intuition

The problem specifies that each node has no more than one outgoing edge. Let's see what kinds of graphs we can create with this.

Let us consider a node `node` which belongs to a cycle. It would imply that the only outgoing edge of `node` would also be in this cycle. As a result, `node` cannot be a part of any other cycle because it only has one outgoing edge, which is consumed in this cycle. This demonstrates that in a graph with only one outgoing edge, a node cannot be a part of more than one cycle.

We would visit all the nodes in the cycle if we started a graph traversal from any node in the cycle. There is no point in revisiting the nodes in the cycle because they cannot be part of any other cycle.

Also, there is also no point in visiting the nodes that do not form a cycle again. We would have iterated over the only outgoing edge (if they have) during the first visit and there is no point in iterating over it again.

**This implies that visiting each node only once is sufficient.**

Let us now calculate the length of any formed cycle. We begin a depth-first search traversal (DFS) from an unvisited node, `node1`, and iterate over the outgoing edge to go to neighbor, from neighbor to its neighbor, and so on. During the traversal, we keep track of the distance from `node1` while visiting each node. To store the distances, we can use a hash map `dist`.

As we traverse the graph, suppose we need to return to `node2` from `node3` (there is an edge `node3 -> node2`) which has already been visited in this DFS traversal. It denotes the existence of a cycle. `dist[node3] - dist[node2]` would give us the number of edges from `node2` to `node3` because we kept track of distance from the starting node `node1`. We also need to add one for the `node3 -> node2` edge that completes the cycle. As a result, this cycle would be `dist[node3] - dist[node2] + 1` in length. This brings us to our solution.

We create a `answer` variable and initialize it to `-1`. We iterate over all the nodes and if the current node, `node`, is not visited, we start a DFS traversal. For each DFS traversal, we also create a new hash map `dist` and set `dist[node] = 0`.

In the DFS traversal, we check the `neighbor` of `node` using `neighbor = edges[node]`. If `neighbor` is not visited, we update `dist[neighbor] = dist[node] + 1` and recursively perform the DFS traversal starting with `neighbor`.

If `neighbor` is already visited, one of two things can happen. It is either a cycle formation or `neighbor` was visited in a previous DFS traversal and not the current DFS traversal. This can be verified if the `dist` map has the key `neighbor` in it (we create a new map for every traversal).

If `dist` contains `neighbor`, it means we visited `neighbor` during the current DFS traversal itself and it is a formation of cycle. We update `answer = max(answer, dist[node] - dist[neighbor] + 1` in this case.

Otherwise, if `dist` does not contains `neighbor`, it means that `neighbor` was visited in a previous DFS traversal. As previously discussed, there is no point in returning to a node.

We would have our answer in `answer` after visiting all of the nodes.

#### Algorithm

1. Initialize an integer `answer = -1`. This would store the length of the longest cycle in the graph.
2. Initialize another integer `n = edges.length` which stores the number of nodes in the graph.
3. Create a `visit` array of length `n` to keep track of nodes that have been visited.
4. Iterate through all of the nodes and for each node `i` check if it is visited or not. If node `i` is not visited, create a hash map `dist` where `dist.get(x)` would store the distance of node `x` from starting node `i`. Begin the DFS traversal:
    - We use the `dfs` function to perform the traversal. For each call, pass `node`, `edges`, `dist` and `visit` as the parameters. We start with node `i`.
    - Mark `node` as visited and get its neighbor `neighbor` using `edges[node]`.
    - If `neighbor` exists and is not visited, we update `dist[neighbor] = dist[node] + 1` and recursively call `dfs` passing `neighbor` as the node.
    - Otherwise, if `neighbor` exists and is already visited, we check if it is present in `dist`. If it is present, it is a formation of cycle. We perform `answer = max(answer, dist[node] - dist[neighbor] + 1)`. Otherwise, if it not present in `dist`, we ignore it as it was visited in a previous DFS traversal.
5. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/7eVfo5qw/shared" frameBorder="0" width="100%" height="500" name="7eVfo5qw"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes.

* Time complexity: $O(n)$.
    -  Initializing the `visit` array takes $O(n)$ time.
    -  The `dfs` function visits each node once, which takes $O(n)$ time in total. Because we have directed edges, each edge will be iterated once, resulting in $O(n)$ operations in total while visiting all the nodes.
    - Each operation on the `dist` map takes $O(1)$ time. Because we insert a distance for each node when it is visited, it will take $O(n)$ time to insert distances for all of the nodes. It is also used to check the formation of a cycle when a previously visited node is encountered again. Because there are $n$ nodes, it can be checked at most $n$ times. It would also take $O(n)$ time in that case.

* Space complexity: $O(n)$.
    - The `visit` array takes $O(n)$ space.
    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case.
    - The `dist` map can also have no more than $n$ elements and hence it would take up $O(n)$ space as well.

---

### Approach 2: Kahn's Algorithm

#### Intuition

We can also think to solve this problem using a topological sort strategy. A topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge `u -> v` from vertex `u` to vertex `v`, `u` comes before `v` in the ordering.

In a directed acyclic graph, we can use Kahn's algorithm to get the topological ordering. Kahn’s algorithm works by keeping track of the number of incoming edges into each node (indegree). It works by repeatedly visiting the nodes with an indegree of zero and deleting all the edges associated with it leading to a decrement of indegree for the nodes whose incoming edges are deleted. This process continues until no element with zero indegree can be found.

> If you are not familiar with Kahn's algorithm, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3886/).

Let's perform Kahn's algorithm on directed graph having two cycle. Here's a visual step-by-step represenntation of how it would work:

![img](../Figures/2360/2360-1.png)

We can see that if there is a cycle, there is no way of making the indegree of nodes in the cycle to `0` due to the cyclic dependency. We cannot visit nodes in the cycle.

Because each node can only have one outgoing edge, no node in the cycle can have an outgoing edge to a node that is not in the cycle. The only outoging edge of a node in the cycle would be consumed by the cycle itself. This means that there would be no other node that would not be visited because of the unvisited nodes in the cycle. As a result, all the nodes not in the cycle would be visited and only the nodes in the cycle would be not visited using this algorithm.

After completing Kahn's algorithm, we iterate over all the unvisited nodes to determine the length of the longest cycle. For an unvisited node `node`, we begin by traversing from `node` to its neighbor using `edge[node]`, then to its neighbor, and so on, until we return to `node`. We keep track of the number of nodes in the cycle (the number of nodes in the cycle equals the length of the cycle) and mark all of the nodes in this cycle as visited so that we don't visit them again. From all the formed cycles, we chose the one with the longest cycle length.

If all of the nodes are visited during Kahn's algorithm, the graph has no cycle.

#### Algorithm

1. Initialize an integer `n = edges.length` which stores the number of nodes in the graph.
2. Create an array `indegree` of length `n` where `indegree[X]` stores the number of edges with one end at node `X`.
3. Create a `visit` array of length `n` to keep track of nodes that have been visited.
4. Initialize a queue of integers `q` and start a BFS algorithm moving from the leaf nodes to the parent nodes. 
5. Begin the BFS traversal by pushing all of the leaf nodes (`indegree` equal to `0`) in the queue.
6. While the queue is not empty;
    - Dequeue the first `node` from the queue.
    - Mark `node` as visited.
    - Get the neighbor, `neighbor`, of `node` using `edges[node]`. If `neighbor != -1`, we decrement `indegree[neighbor]` by `1`.
    - If `indegree[neighbor] == 0`, it means that `neighbor` behaves as a leaf node, so we push `neighbor` in the queue.
7. Iterate over unvisited nodes and for an unvisited node `i`:
    - Mark node `i` as visited.
    - Fetch neighbor, `neighbor`, of `i` using `edge[i]` and create a variable `count` to count number of nodes in the cycle. Initialize `count = 1` to count node `i` itself.
    - Keep moving forward in the cycle until we reach node `i` (`neighbor != i`). Mark `neighbor` as visited and move to next neighbor `neighbor = edges[neighbor]`. Also, increment `count` by `1` for each node that is being visited in the cycle.
    - Update `answer = max(answer, count)`.
8. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/84gsut9P/shared" frameBorder="0" width="100%" height="500" name="84gsut9P"></iframe>
            

#### Complexity Analysis

Here $n$ is the number of nodes.

* Time complexity: $O(n)$.
    - Initializing the `visit` and `indegree` arrays take $O(n)$ time each.
    - Each queue operation takes $O(1)$ time, and a single node will be pushed once, leading to $O(n)$ operations for $n$ nodes. We iterate over the neighbor of each node that is popped out of the queue iterating over all the edges once. Since there are `n` edges at most, it would take $O(n)$ time in total.
    - We iterate over all the nodes that are in the cycles. There cannot be more than $n$ nodes in all the cycles combined, so it would take $O(n)$ time.

* Space complexity: $O(n)$.
    - The `visit` and `indegree` arrays takes $O(n)$ space each.
    - The queue can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case.