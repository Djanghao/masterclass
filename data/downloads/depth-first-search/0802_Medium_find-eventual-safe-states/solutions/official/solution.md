# Official Solution

**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solution/](https://leetcode.com/problems/find-eventual-safe-states/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a directed graph of `n` nodes with each node labeled from `0` to `n - 1`. The graph is represented by a 2D integer array `graph` where `graph[i]` is an integer array of nodes that have an incoming edge from node `i`.

The problem states that a node is a **terminal node** if there are no outgoing edges. A node is a **safe node** if every possible path starting from that node leads to a terminal node (or another safe node).

Our task is to return a sorted array of all the safe nodes of the graph.

---

### Approach 1: Topological Sort Using Kahn's Algorithm

#### Intuition

To solve the problem, we must first consider when a node is safe or unsafe. If we begin at any node and proceed along any path from that node, we will eventually reach either a terminal node or enter a cycle and continue to loop in it without ever reaching a terminal node.

If there is no path from the node that enters a cycle, we will always be able to reach a terminal node. As a result, such a node is a safe node and should be added to our answer array.

> The problem is reduced to finding the nodes that do not have any paths that lead to a cycle.

Intuitively, we can realize that a node is safe if all of its outgoing edges are to nodes that are also safe. This is due to the fact that if no neighbor leads to a cycle, no path from the node can either.

We know the terminal nodes are safe. As a result, nodes that solely have outgoing edges to terminal nodes are eventually safe nodes. Then we may check the nodes that have just outgoing edges to safe nodes again and keep updating until no new safe node is discovered.

The question is, how do we efficiently traverse from terminal nodes to nodes that only have outgoing edges to terminal nodes? We can reverse the edges of the graph to create a new graph with reversed edges. After we have visited all of the terminal nodes, we can use this new graph to go to the nodes that have edges to the terminal nodes in the original graph by using the reverse edges that we added.

Let's put this new graph to use now. A node is a safe node if all of its incoming edges come from previously identified safe nodes in the graph. If we erase the edges outgoing from the safe node and discover a node with no incoming edges, it is a new safe node. This gives us hints for thinking about Kahn's method, which does a topological sort by removing the edges in the exact way we want. 

A topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge `u -> v` from vertex `u` to vertex `v`, `u` comes before `v` in the ordering.

In a directed acyclic graph, we can use Kahn's algorithm to get the topological ordering. Kahn’s algorithm works by keeping track of the number of incoming edges into each node (indegree). It works by repeatedly visiting the nodes with an indegree of zero and deleting all the edges associated with it leading to a decrement of indegree for the nodes whose incoming edges are deleted. This process continues until no elements with zero indegree can be found.

If you are not familiar with Kahn's algorithm, we suggest you read our [LeetCode Explore Card](https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3886/).

The advantage of using Kahn's technique is that it also aids in the discovery of graph cycles. The Kahn's method does not visit any node in a cycle. As a result, nodes with outgoing edges from nodes in the cycle (in this reversed graph) will never be visited and so will never be marked safe. Nodes with outgoing edges from these unsafe nodes will never be visited as well, and so on. Basically, every node in the original network that has a path to the cycle will never be visited by Kahn's algorithm, which is exactly what we want.

Let's perform Kahn's algorithm on a directed graph having a cycle. Here's a visual step-by-step representation of how it would work:

![img](../Figures/802/802-1.png)

We can see that if there is a cycle, the indegree of nodes in the cycle cannot be set to `0` due to cyclic dependency. We are unable to visit the cycle's nodes. We are also unable to visit any node with an incoming edge from any node in the cycle. Similarly, realize that any node with an incoming edge from nodes `3` or `5` would not have been visited as well.

#### Algorithm

1. Create an integer `n` equal to the length of `graph` to get the number of nodes in the given graph.
2. Create an array `indegree` of length `n` where `indegree[x]` stores the number of edges entering node `x`.
3. We create an adjacency list `adj` in which `adj[x]` contains all the nodes with an incoming edge from node `x`, i.e., neighbors of node `x`. We create this adjacency list by iterating over `graph` and adding the **reverse edges**. For a node `i` which originally has outgoing edges to nodes in `graph[i]`, we push `i` into `adj[node]` to add a reverse edge from `node` to `i`.
3. Initialize a queue of integers `q` and start a BFS algorithm moving from the leaf nodes to the parent nodes. 
4. Begin the BFS traversal by pushing all of the leaf nodes (`indegree` equal to `0`) in the queue.
5. Create a boolean array `safe` of size `n` to track the safe nodes in the graph.
6. While the queue is not empty;
    - Dequeue the first `node` from the queue.
    - Mark `node` as safe.
    - For each `neighbor` (nodes that have an incoming edge from `node`) of `node`, we decrement `indegree[neighbor]`by `1` to delete the `node -> neighbor` edge.
    - If `indegree[neighbor] == 0`, it means that `neighbor` behaves as a leaf node, so we push `neighbor` in the queue.
7. Create an answer array `safeNodes` of size `n`. Iterate over all the nodes from `0` to `n - 1` and add all the safe nodes in `safeNodes`.
8. Return `safeNodes`.

#### Implementation

<iframe src="https://leetcode.com/playground/FWjfs3PY/shared" frameBorder="0" width="100%" height="500" name="FWjfs3PY"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes and $m$ is number of edges in the graph.

* Time complexity: $O(m + n)$

    - Initializing the `adj` list takes $O(m)$ time as we go through all the edges. The `indegree` array take $O(n)$ time.
    - Initializing the boolean `safe` array also takes $O(n)$ time.
    - Each queue operation takes $O(1)$ time, and a single node will be pushed once, leading to $O(n)$ operations for $n$ nodes. We iterate over the neighbors of each node that is popped out of the queue iterating over all the edges once. Since there are total of `m` edges, it would take $O(m)$ time to iterate over the edges.
    - Iterating over all the nodes and pushing only safe nodes into `safeNodes` also takes $O(n)$ time.

* Space complexity: $O(m + n)$

    - The `adj` arrays takes $O(m)$ space. The `indegree` array takes $O(n)$ space.
    - The `safe` array also takes $O(n)$ space.
    - The queue can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case.

---

### Approach 2: Depth First Search

#### Intuition

We can also use a depth-first search (DFS) traversal to detect the nodes that lead to a cycle, i.e., unsafe nodes.

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.

Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

A node remains in the DFS recursion stack until all of its branches (all nodes in its subtree) have not been explored. When we have examined all of a node's branches, i.e. visited all of the nodes in its subtree, the node is removed from the DFS recursive stack.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

To find the unsafe nodes, we must first recognize a cycle in the graph. If we find a cycle, we will mark all of the nodes in the cycle as unsafe and then go back and mark all of the nodes that led to this cycle as unsafe. Let's find a cycle first.

If the graph has a cycle, we must have a **back edge** connecting a node to one of its ancestors while traversing nodes in the DFS manner.

Let's think how we can establish whether or not a node's neighbor is an ancestor when navigating from one node to another. 

If the neighboring node has not yet been visited, it cannot be an ancestor (it is a child node).

Otherwise, if a neighboring node is visited, it may or may not be an ancestor. If the neighboring node is an ancestor, i.e. there is a back edge, it means that we visited this ancestor node first in the DFS traversal, then visited and explored some other nodes, and eventually visited a node that connects back to the ancestor node. As we are still exploring the ancestor node's subtree while iterating over this path, hence this node must be in the current DFS recursive stack.

However, if a neighboring node is visited but not in the recursion stack, it signifies we have previously explored that node in a different branch, and it does not form a cycle in the current branch.

As a result, to detect the cycle we must keep track of the visited nodes (like in a normal DFS) and also the nodes in the function's recursion call stack for DFS traversal. The nodes in the stack store the current path that we are on. There is a cycle in the graph if a node is reached that is already in the recursion stack. We use a boolean array `inStack` of length `n` to track which nodes are in the call stack so we can check if a node exists in $O(1)$. Note that this `inStack` array is emulating the call stack that the computer is using under the hood to execute recursion. We mark an unvisited node in `inStack` when we make a recursive call to it and then unmark it when we return from that call.

Now that we've identified the cycle, let's look for the unsafe nodes. When we get a cycle, all of the nodes in the recursion stack either form or lead to a cycle. If we start a DFS traversal from node `1` in a graph `1 -> 2 -> 3 -> 4 -> 2`, nodes `2`, `3`, and `4` form a cycle. When we discovered this cycle, node `1` was also in the stack. So, when we have a cycle, all the nodes in the recursion stack are unsafe since they form or lead to a loop. 

In addition to detecting cycles, we can use the same `inStack` array to store the unsafe nodes. We do not unmark any of the unsafe nodes from `inStack` to keep track of them. When any `node` has an outgoing edge to any of the unsafe nodes, we can immediately return the DFS call for `node` without unmarking it from `inStack`, i.e, we do not perform `inStack[node] = false`. This is because if any `neighbor` of `node` is marked `inStack`, it signifies that either `neighbor` and `node` are part of a cycle or `neighbor` is a previously detected unsafe node. In both the cases, `node` is also an unsafe node and hence we return the DFS call without unmarking `node` from `inStack`.

We only unmark a node from `inStack`, if we have explored all of its branches and no branch leads to an unsafe node. 

#### Algorithm

> Here, we can use the input graph as the adjacency list `adj`

1. Create two boolean arrays, `visit` and `inStack`, each of size `n`. The `visit` array keeps track of visited nodes and `inStack` keeps track of nodes that are currently in the ongoing DFS stack. It will help us to detect a cycle in the graph and the unsafe nodes.
2. For each node we begin a DFS traversal. We implement the `dfs` method which takes four parameters: an integer `node` from which the current traversal begins, `adj`, `visit`, and `inStack`. It returns a boolean indicating whether `node` is unsafe. We perform the following in this method:
    - If `node` is already present in `inStack`, either we just got a cycle or a previously detected unsafe node. We return `true` in this case as the `node` is unsafe.
    - If `node` is already visited (but not in `inStack`), we return `false` because we already visited this `node` and didn't find it as unsafe node. It is a safe node.
    - We mark `node` as visited and also mark it in `inStack` (`inStack[node] = true`).
    - We iterate over all the outgoing edges of `node` and for each `neighbor`, we recursively call `dfs(neighbor, adj, visit, inStack)`. If we get a cycle from `neighbor` (or `neighbor` is a previously detected unsafe node), we return `true` without unmarking `node` in `inStack`.
    - After we have processed all the outgoing edges of `node`, we mark `inStack[node] = false` to mark `node` as safe. We return `false`.
3. Create an answer array `safeNodes` of size `n`. Iterate over all the nodes from `0` to `n - 1` and add all the safe nodes in `safeNodes`, i.e., the nodes with `inStack[node] == false`.
4. Return `safeNodes`.

#### Implementation

<iframe src="https://leetcode.com/playground/V99UanNc/shared" frameBorder="0" width="100%" height="500" name="V99UanNc"></iframe>

#### Complexity Analysis

Here, $n$ is the number of nodes and $m$ is number of edges in the graph.

* Time complexity: $O(m + n)$

    - Initializing the `visit` and `inStack` arrays take $O(n)$ time each.
    - The `dfs` function handles each node once, which takes $O(n)$ time in total. From each node, we iterate over all the outgoing edges, which further takes $O(m)$ time to iterate over all the edges as there are a total of `m` edges.
    - Iterating over all the nodes and pushing only safe nodes into `safeNodes` also takes $O(n)$ time.

* Space complexity: $O(n)$

    - The `visit` and `inStack` arrays take $O(n)$ space each.
    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case.