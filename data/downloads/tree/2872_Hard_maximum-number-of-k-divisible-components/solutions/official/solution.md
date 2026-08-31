# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solution/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given an undirected tree with `n` nodes (labeled from `0` to `n - 1`) and an array `values`, representing the value of each node. We are also provided with an integer `k`.

A valid split of the tree occurs by removing some (or possibly none) edges, such that the sum of node values in each resulting component is divisible by `k`. The goal is to determine the maximum number of components in any valid split.

Let's consider an example where `n = 4`, `edges = [[0, 1], [1, 2], [1, 3]]`, `values = [10, 10, 10, 10]`, and `k = 10`.

In this case, the entire tree can be viewed as a single component, as the sum of all node values (40) is divisible by `k` (10). However, by removing certain edges, the tree can be divided into multiple components, where the sum of the node values in each component is also divisible by `k`. Below is a visual representation of the valid splits.

![valid Splits](../Figures/2872/Edge_Cuts.png)

> Note: The goal is to maximize the number of components, not to find the exact split.

We will explore three different approaches, with a primary focus on their practical application. Although the fundamental concept underlying each approach remains the same, the difference lies in how they are implemented.

---

### Approach 1: Depth-First-Search (DFS)

#### Intuition   

To solve this problem, let’s consider how the structure of a tree can help us.

A tree consists of nodes connected by edges, and each edge connects a parent node to one of its children. Once we pick a node as the root, we can break the tree down into smaller parts, called subtrees, based on the parent-child relationships. The tree is undirected, so we can choose any node to be the root without affecting the result.

Now, let’s think about how we can use recursion to solve this. We want to calculate the sum of each subtree. After calculating the sum, we need to check: *Is this sum divisible by $k$?* If it is, we can detach the subtree at that point because it forms a valid component.

But what if the sum isn’t divisible by $k$? In that case, we need to "carry over" the remainder (the leftover part when divided by $k$) to the parent node. This way, the parent node can combine its remainder with its children's remainders to check if the total sum becomes divisible by $k$. This recursive process naturally fits a Depth-First Search (DFS) approach:
1. Start from the leaves of the tree (the smallest subtrees) and compute their sums.
2. Propagate the results up to their parent nodes, adding up the remainders modulo $k$.
3. Whenever a subtree's sum is divisible by $k$, count it as a valid component.

> For a more comprehensive understanding of depth-first search, check out the [DFS Explore Card 🔗](https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/). This resource provides an in-depth look at DFS, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- `maxKDivisibleComponents` function:
  - Initialize an adjacency list `adjList` to represent the graph.
  - Populate `adjList` using the given `edges`.
  - Initialize `componentCount` to `0`, which will store the count of k-divisible components.
  - Call `dfs(0, -1, adjList, values, k, componentCount)` starting from node `0` with no parent (`-1`).
  - Return `componentCount` as the result.

- `dfs` function:
  - Initialize `sum` to `0`, representing the sum of node values in the current subtree.
  - For each `neighborNode` of `currentNode`:
    - If `neighborNode` is not equal to `parentNode`, recursively call `dfs` for `neighborNode` with `currentNode` as its parent.
    - Add the result of the recursive call to `sum` and take modulo `k`.
  - Add the value of `currentNode` (`nodeValues[currentNode]`) to `sum` and take modulo `k`.
  - If `sum` is `0`, increment `componentCount` because the current subtree forms a k-divisible component.
  - Return `sum` to allow the parent node to incorporate the result.

#### Implementation

<iframe src="https://leetcode.com/playground/Ke4MinBu/shared" frameBorder="0" width="100%" height="500" name="Ke4MinBu"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the graph, and the number of edges in the tree is $n - 1$.

- Time complexity: $O(n)$

    The algorithm involves creating an adjacency list from the edges, which takes $O(n - 1)$ time. The depth-first search (DFS) traversal visits each node and edge exactly once, resulting in a time complexity of $O(n)$. The operations within the DFS (such as summing values and checking divisibility) are constant time operations, so they do not affect the overall time complexity.

- Space complexity: $O(n)$

    The space complexity is determined by the storage used for the adjacency list, which requires $O(n - 1)$ space, and the recursion stack during the DFS, which can go up to $O(n)$ in the worst case (for a skewed tree). Additionally, the `values` array and other variables consume $O(n)$ space. Therefore, the total space complexity is $O(n)$.
 
---

### Approach 2: Breadth-First Search (BFS)

#### Intuition   

Instead of using Depth-First Search (DFS) to build the solution from the bottom up, we can approach the problem in a different way: what if we process the tree layer by layer? This means we start with the simplest parts of the tree — the leaf nodes — and work our way up.

A leaf node is a node that has only one neighbor, which makes it easy to handle because it doesn’t depend on any other parts of the tree once it’s processed. If a leaf node’s value is divisible by $k$, it can immediately form a valid component. If it’s not, its value is added to its parent’s sum. This leads to the insight that:
- We can iteratively remove processed leaf nodes, reducing the tree layer by layer.
- As we remove a leaf node, we update its parent with the carry-over sum (modulo $k$).

This iterative process naturally fits a Breadth-First Search (BFS) approach:
1. Start with all the leaf nodes, as they are the simplest to process.
2. Remove each leaf node, updating its parent node’s value with the carry-over sum.
3. If the parent node becomes a new leaf (i.e., it now has only one remaining neighbor), add it to the processing queue and repeat the process.

> For a more comprehensive understanding of breadth-first search, check out the [BFS Explore Card 🔗](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/). This resource provides an in-depth look at BFS, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- If `n` is less than 2, return `1` (only one node forms one component).

- Initialize `componentCount` to `0` to track the number of components where the sum of node values is divisible by `k`.

- Build the graph's adjacency list:
  - For each edge `[node1, node2]`, add `node2` to the neighbors of `node1` and vice versa.

- Initialize a queue with all leaf nodes (nodes with only one neighbor):
  - Iterate through the graph, adding nodes with exactly one neighbor to the queue.

- While the queue is not empty:
  - Pop a node (`currentNode`) from the queue.
  - Identify its only neighbor (`neighborNode`), if it exists. If the graph for `currentNode` is empty, set `neighborNode` to `-1`.

  - If `neighborNode` exists:
    - Remove `currentNode` from the neighbors of `neighborNode`.

  - Check if the value of `currentNode` is divisible by `k`:
    - If divisible, increment `componentCount` by `1`.
    - Otherwise, add the value of `currentNode` to `values[neighborNode]`.

  - If `neighborNode` exists and becomes a leaf node (only one connection remains), add it to the queue.

- Return `componentCount`, which represents the number of valid components found.

#### Implementation

<iframe src="https://leetcode.com/playground/NrHQKQSQ/shared" frameBorder="0" width="100%" height="500" name="NrHQKQSQ"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the graph, and the number of edges in the tree is $n - 1$.

- Time complexity: $O(n)$

    The algorithm involves building the graph using an adjacency list, which takes $O(n - 1)$ time.. The BFS traversal processes each node and edge exactly once, resulting in a time complexity of $O(n)$. The operations within the BFS (such as checking divisibility and updating values) are constant time operations, so they do not affect the overall time complexity.

- Space complexity: $O(n)$

    The space complexity is determined by the storage used for the adjacency list, which requires $O(n - 1)$ space, and the BFS queue, which can store up to $O(n)$ nodes in the worst case (when all nodes are leaf nodes or when the graph is a star graph). Additionally, the `longValues` array and other variables consume $O(n)$ space. Therefore, the total space complexity is $O(n)$.

---

### Approach 3: Topological Sort / Onion Sort

#### Intuition

Building on the BFS idea, we can refine it further by introducing the concept of dependencies (in-degrees) between nodes. In a tree, dependencies can be represented by the number of connections (or edges) each node has. For instance, a leaf node has exactly one connection, and as we process it, its parent loses one dependency.

This observation allows us to think about the problem in terms of topological sorting:
1. Start with nodes that have only one connection (leaves) since they have no unresolved dependencies.
2. Process each node by reducing the dependencies of its neighbors (its parent in this case).
3. If a node’s value is divisible by $k$, count it as a component; otherwise, propagate its remainder to its parent.

> For a more comprehensive understanding of graph algorithms, check out the [Graph Theory Explore Card 🔗](https://leetcode.com/explore/learn/card/graph/). This resource provides an in-depth look at graph theory, topological sorting, and various techniques, explaining key concepts and applications with a variety of problems to solidify your understanding of the pattern.

#### Algorithm

- If `n` is less than 2, return `1` (a single node graph has one component).

- Initialize `componentCount` to `0` to count the number of components divisible by `k`.

- Build the graph's adjacency list and calculate in-degrees for each node:
  - For each edge `(node1, node2)`:
    - Add `node2` to the adjacency list of `node1` and vice versa.
    - Increment the in-degrees of both nodes.

- Initialize a queue with all leaf nodes (nodes with an in-degree of `1`).

- While the queue is not empty:
  - Dequeue a `currentNode`.
  - Decrement the in-degree of `currentNode` by `1`.
  - Initialize `addValue` to `0`.

  - Check if the value of `currentNode` is divisible by `k`:
    - If yes, increment `componentCount`.
    - Otherwise, set `addValue` to the value of `currentNode`.

  - For each `neighborNode` of `currentNode`:
    - If `inDegree[neighborNode]` is already `0`, skip it (processed nodes).
    - Decrement the in-degree of `neighborNode` by `1`.
    - Add `addValue` to `values[neighborNode]` to propagate the contribution of `currentNode`.
    - If the in-degree of `neighborNode` becomes `1`, enqueue `neighborNode`.

- Return `componentCount` as the number of connected components where the sum of node values is divisible by `k`.

#### Implementation

<iframe src="https://leetcode.com/playground/kxp4mjbi/shared" frameBorder="0" width="100%" height="500" name="kxp4mjbi"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the graph, and the number of edges in the graph is $n - 1$ (for a tree).

- Time complexity: $O(n)$

    The algorithm involves building the adjacency list and calculating in-degrees, which takes $O(n - 1)$ time. The queue initialization step iterates over all nodes, taking $O(n)$ time. The main loop processes each node and edge exactly once, as nodes are added to the queue only when their in-degree becomes 1. The operations within the loop (such as updating values and checking divisibility) are constant time operations. Therefore, the overall time complexity is $O(n)$.

- Space complexity: $O(n)$

    The space complexity is determined by the storage used for the adjacency list, which requires $O(n - 1)$ space, and the in-degree array, which requires $O(n)$ space. The queue can store up to $O(n)$ nodes in the worst case (when all nodes are leaf nodes). Additionally, the `longValues` array and other variables consume $O(n)$ space. Therefore, the total space complexity is $O(n)$.
 
---