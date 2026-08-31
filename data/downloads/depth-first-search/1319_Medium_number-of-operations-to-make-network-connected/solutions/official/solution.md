# Official Solution

**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solution/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an undirected graph with `n` nodes which are referred to as computers from `1` to `n` and edges referred to as `connections` in the description.

Any edge that connects two nodes can be replaced and placed between any two disconnected nodes.

Our task is to return the minimum number of edges that must be replaced in order to connect the entire graph. If there is no way to connect the entire graph, we must return `-1`.

---

### Approach 1: Depth First Search

#### Intuition

A connected graph with the fewest edges is a tree with `n - 1` edges connecting `n` nodes. So, in order for a graph with `n` nodes to be connected, the graph must have at least `n - 1` edges. It is impossible to connect a graph that has fewer than `n - 1` edges. Otherwise, it is always possible to connect the graph.

We return `-1` if the number of edges in the graph (as determined by the size of `connections`) is less than `n - 1`.

Otherwise, we can connect the entire graph if we have at least `n - 1` edges. Let's say that our graph has `c` different connected components. If we have at least `n - 1` edges, then some components **must** have "extra" edges. We would replace these edges to connect all the components together.

How many edges do we need to replace? Imagine that each connected component is simplified to just a single node. Now, to connect this simplified graph, we know we need a minimum of  `c - 1` edges. Therefore, the answer is `c - 1`. We can imagine these `c - 1` edges connecting the original connected components.

**So, if there are at least `n - 1` edges, the solution is the number of connected components minus one. Otherwise, we return `-1`.**

Consider the following visual example, in which we have three components and replace two edges (`3 - 1 = 2`) to connect the entire graph:

![img](../Figures/1319/1319-1.png)

The graph above has seven nodes. We needed at least six edges to connect the entire graph (which we have), so we could form a connected graph. As you can see, the component with four nodes has "extra" edges which we replaced to connect the entire graph.

We can use a graph traversal algorithm such as depth-first search (DFS) to determine the number of different connected components in the graph.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

To figure out how many connected components there are in the graph, we first mark all nodes as unvisited. We create a variable called `numberOfConnectedComponents` to count the number of connected components in the graph and initialize it to `0`.

We iterate through all the nodes from `0` to `n - 1`, checking whether each `node` has been visited or not. If `node` is not visited, we begin a DFS traversal from `node` and increment `numberOfConnectedComponents` by `1` (a new connected component is discovered). The DFS traversal would visit all of the nodes in the component to which `node` belongs.

As an answer, we return `numberofConnectedComponents - 1`.

#### Algorithm

1. Check the size of `connections`. If it is less than `n - 1`, we don't have enough edges to connect the entire graph . We return `-1` in this case.
2. Create an adjacency list using `connections` where `adj[x]` contains all the neighbors of node `x`.
3. Create an integer `numberOfConnectedComponents` which stores the number of connected components in the graph. Initialize it to `0`.
4. Create a `visit` array of length `n` to keep track of nodes that have been visited.
5. Iterate through all of the nodes, and for each node `i` check if it has been visited or not. If node `i` is not visited, we increment `numberOfConnectedComponents` by `1` and start a DFS traversal:
    - We use the `dfs` function to perform the traversal. For each call, pass `node`, `edges`, and `visit` as the parameters. We start with node `i`.
    - We mark `node` as visited.
    - We iterate over all the neighbors of `node`. If any `neighbor` has not yet been visited, we recursively call `dfs` with `neighbor` as the node.
6. Return `numberOfConnectedComponents - 1`.

#### Implementation

<iframe src="https://leetcode.com/playground/ChwxPf7q/shared" frameBorder="0" width="100%" height="500" name="ChwxPf7q"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number edges (determined by size of `connections`).

* Time complexity: $O(n + e)$.
    - We need $O(e)$ time to initialize the adjacency list and $O(n)$ to initialize the `visit` array.
    - The `dfs` function visits each node once, which takes $O(n)$ time in total. Because we have undirected edges, each edge can only be iterated twice (by nodes at the end), resulting in $O(e)$ operations total while visiting all nodes.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n + e)$.
    - Building the adjacency list takes $O(e)$ space.
    - The `visit` array takes $O(n)$ space.
    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case. 

---

### Approach 2: Breadth First Search

#### Intuition

As we just have to find the number of connected components in the graph, another method is to use a breadth-first search (BFS).

BFS is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `l`) are explored before moving on to the nodes at the next level (`l + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

#### Algorithm

1. Check the size of `connections`. If it is less than `n - 1`, we don't have enough edges to connect the entire graph . We return `-1` in this case.
2. Create an adjacency list using `connections` where `adj[x]` contains all the neighbors of node `x`.
3. Initialize an integer `numberOfConnectedComponents` which stores the number of connected components in the graph. Initialize it to `0`.
4. Create a `visit` array of length `n` to keep track of nodes that have been visited.
5. Iterate through all of the nodes and for each node `i` check if it has been visited or not. If node `i` is not visited, we increment `numberOfConnectedComponents` by `1` and start a BFS traversal:
    - We use the `bfs` function to perform the traversal. For each call, pass `node`, `edges`, and `visit` as the parameters. We start with node `i`.
    - We create an integer queue `q` and push `node` into it. We also mark `node` as visited.
    - We now loop until the queue is empty. The queue's first element, `node`, is popped out. We iterate over all the neighbors of `node`. If any `neighbor` has not yet been visited, we mark it as visited and push it into the queue.
6. Return `numberOfConnectedComponents - 1`.

#### Implementation

<iframe src="https://leetcode.com/playground/gxs8rUiq/shared" frameBorder="0" width="100%" height="500" name="gxs8rUiq"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number edges (determined by size of `connections`).

* Time complexity: $O(n + e)$.
    - Each queue operation in the BFS algorithm takes $O(1)$ time, and a single node can only be pushed once, leading to $O(n)$ operations for $n$ nodes. We iterate over all the neighbors of each node that is popped out of the queue, so for an undirected edge, a given edge could be iterated at most twice (by nodes at both ends), resulting in $O(e)$ operations total for all the nodes.
    - We also need $O(e)$ time to initialize the adjacency list and $O(n)$ to initialize the `visit` array.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n + e)$.
    - Building the adjacency list takes $O(e)$ space. 
    - The BFS queue takes $O(n)$ because each node is added at most once.
    - The `visit` array takes $O(n)$ space as well.

---

### Approach 3: Union-find

#### Intuition

Another approach to solving questions based on graph connectivity is the union-find data structure.

A disjoint-set data structure also called a union–find data structure or merge–find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. It implements two useful operations:

1. `Find`: Determine which subset a particular element is in. This can be used to determine if two elements are in the same subset.
2. `Union`: Join two subsets into a single subset.

If you are new to Union-Find, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/). We will not talk about implementation details in this article, but only about the interface to the data structure.

Similar to the previous approaches, we check if we have sufficient edges to connect the entire graph. We return `-1` if the number of edges in the graph (as determined by the size of `connections`) is less than `n - 1`.

In the union-find data structure, we initialize all nodes as separate components. We declare a variable called `numberOfConnectedComponents` to count the number of connected components in the graph and initialize it to `n`. We iterate over all the edges, and for each `edge`, we decrement `numberOfConnectedComponents` by `1` whenever two different components are merged into a single one using `edge`.

We iterate through all of the edges, and for each edge that connects `node1` and `node2`, we use the `find` operation to check the components to which both of them belong. If they belong to different components, i.e., `find(node1) != find(node2)`, we perform a `union` operation on both nodes, which merges the two different connected components into a single connected component. We also decrement `numberOfConnectedComponents` by `1`. If `node1` and `node2` belong to the same component, we don't do anything.

As an answer, we return `numberofConnectedComponents - 1`.

#### Algorithm

1. Check the size of `connections`. If it is less than `n - 1`, we don't have enough edges to connect the entire graph . We return `-1` in this case.
2. Create an instance of `UnionFind` of size `n`.
3. Initialize an integer `numberOfConnectedComponents` which stores the number of connected components in the graph. Initialize it to `n`.
4. Iterate over all the edges and for each `connection` in `connections`: 
    - Using the `find` operation, determine the components of both the nodes connected by `connection`.
    - If both nodes belong to different components, we use the `union` operation over both nodes to combine the two different connected components into a single one. We also decrement `numberOfConnectedComponents` by `1`. 
    - Otherwise, we don't do anything if both nodes already belong to the same component.
5. Return `numberOfConnectedComponents - 1`.

#### Implementation

<iframe src="https://leetcode.com/playground/FHFpWpCB/shared" frameBorder="0" width="100%" height="500" name="FHFpWpCB"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number edges (determined by size of `connections`).

* Time complexity: $O(n + e)$.
    - For $T$ operations, the amortized time complexity of the union-find algorithm (using path compression with union by rank) is $O(alpha(T))$. Here, $\alpha(T)$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $4$ for all reasonable $T$ (approximately $ T < 10^{600}$). You can read more about the complexity of union-find [here](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Time_complexity).  Because the function grows so slowly, we consider it to be $O(1)$.
    - Initializing `UnionFind` takes $O(n)$ time beacuse we are initializing the `parent` and `rank` arrays of size `n` each.
    - We iterate through every edge and use the `find` operation to find the component of nodes connected by each edge. It takes $O(1)$ per operation and takes $O(e)$ time for all the $e$ edges. If nodes from different components are connected by an edge, we also perform `union` of the nodes, which takes $O(1)$ time per operation. Because there are $e$ edges, it may be called $e$ times in the worst-case scenario. It would take $O(e)$ time in that case.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n)$.
    - We are using the `parent` and `rank` arrays, both of which require $O(n)$ space each.