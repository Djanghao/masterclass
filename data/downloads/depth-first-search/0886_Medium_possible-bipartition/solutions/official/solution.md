# Official Solution

**Link:** [https://leetcode.com/problems/possible-bipartition/solution/](https://leetcode.com/problems/possible-bipartition/solution/)

---

[TOC]

## Solution

---

### Overview

The problem asks us to divide the given people into two groups such that no two people in the same group dislike each other.

We can represent this problem in the form of a graph, with people being the nodes and disliked pairs being the edges. Our task is to figure out whether we can divide the nodes into two sets such that there aren't any edges between nodes of the same set.

A graph satisfying the above condition is said to be a [bipartite graph](https://en.wikipedia.org/wiki/Bipartite_graph). The following is an example of such a graph:

![img](../Figures/886/bipartite.png)

In the above image, the nodes are split into groups of blue and red nodes, and within each group, there are no connecting edges.

---

### Approach 1: Breadth First Search

#### Intuition

Our task is to figure out whether we can divide the nodes (i.e., people) into two sets such that there aren't any edges between nodes in the same set. Intuitively, we can think of starting a traversal over such a graph. We can put the first node into the first set and all the neighbors of the node into the second set. Now, we can move one step further to the neighbours and put their neighbours in the first set. We can perform the same process to keep alternating sets between neighbors. We can use a breadth-first search traversal to assign the set to each of the nodes.

A breadth-first search (BFS) is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `l`) are explored before moving on to the nodes at the next level (`l + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

Our task is to split the nodes into two sets such that there aren't any edges between the nodes of the same set. Let's start by giving a unique identification/color to both groups. To distinguish them, we can use two colors, say, `RED` and `BLUE`. We need to assign a color to each node in such a way that all its neighbors (nodes that share an edge) do not have that color. Otherwise, it would result in a conflict.

To solve this problem, we can start a BFS traversal over the graph of people and start assigning the colors. We can assign `RED` to the starting node (it doesn't matter which color we choose for the first node). The color `BLUE` should then be assigned to all of the neighbors. Neighbors of `BLUE` nodes should have the color `RED`, and so on (keep alternating colors between neighbors). In the implementation, we can use a number to identify each color. Let's use `0` for `RED` and `1` for `BLUE`. 

To flip the colors, we can use the formula `1 - color`. If we are at a `RED` node, then `1 - color = 1 - 0 = 1 = BLUE`. If we are at a `BLUE` node, then `1 - color = 1 - 1 = 0 = RED`.

There can be multiple connected components in the graph. We need to visit all of them to make sure we visit every node. In a single BFS traversal, we will visit all the nodes present in one connected component and color each of them accordingly. Here's an example of a successful split and an unsuccessful split of a graph having three components each:

![img](../Figures/886/bfs1.png)


#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X`.
2. Initialize an array `color`, storing the color assigned to each node. Initialize it to `-1` for all nodes to indicate no colors have been assigned yet.
3. Run a loop over all the nodes and check if there is any node `i` which is uncolored.
4. If a node `i` has not been colored (`color[i] = -1`), start a BFS traversal which will cover all the nodes present in the same component as node `i`.
    - Initialize a queue with `i` in the queue.
    - Assign a color to the source node `i`, let's say `RED = 0`.
5. Then, while the queue is not empty:
    - Dequeue the first `node` from the queue.
    - Iterate over all the neighbors of `node` and check if any `neighbor` has the same color as `node`. If any neighbor matches, then we have a conflict, so return false.
    - If a color is not yet assigned to the `neighbor`, assign the opposite color to it. Then, put the neighbor onto the queue.
6. If any BFS traversal has a conflict, we return `false` as the answer. Otherwise, we return `true` if we get through every node without conflict.

Here's a visual example of the BFS traversal:

![img](../Figures/886/bfs2.png)


#### Implementation

<iframe src="https://leetcode.com/playground/LdL9PWrq/shared" frameBorder="0" width="100%" height="500" name="LdL9PWrq"></iframe>


#### Complexity Analysis

Let $E$ be the size of `dislikes` and $N$ be the number of people.

* Time complexity: $O(N + E)$

    - Each node is only queued once, which takes $O(1)$ time for each node. We also iterate over the edges of every node once (since we only visit each node once, we won't iterate over a node's edges multiple times), which adds $O(E)$ time.
    - We also need $O(E)$ to initialize the adjacency list and $O(N)$ to initialize the `color` array.

* Space complexity: $O(N + E)$

    - In the worst case, the queue can grow to a size linear with `N`.
    - We also require $O(E)$ and $O(N)$ space for the adjacency list and the `color` array respectively.

---

### Approach 2: Depth First Search

#### Intuition

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the next branch and continue exploring.

Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

Similar to BFS, we can also do a DFS traversal over the graph and assign colors in the same manner. We start by assigning `RED` to the starting node, then alternate colors between neighbors.

Just like with BFS, in a single DFS traversal, we will visit all the nodes present in one connected component and color each of them accordingly. However, there can be multiple connected components in the graph, so we should do a DFS traversal on each of them.

#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X`.
2. Intialize an array `color`, storing the color assigned to each node. We would intialize it `-1` for all the nodes to indicate no color has been assigned yet.
3. Run a loop over all the nodes and check if there is any node `i` which is uncolored.
4. If a node `i` has not been colored (`color[i] = -1`), start a DFS traversal using node `i` as the `source` node. A DFS traversal will cover all the nodes present in the same component as node `source`.
    - We will use a function `dfs` to perform the traversal. For each call, pass the `node` and the `color` it should be. For the first node, we can use `RED = 0`.
    - Iterate over the neighbors of `node` and check if the `neighbor` has the same color as `node`. If any neighbor matches, we have a conflict, so return false.
    - If a color is not yet assigned to the `neighbor`, recursively call `dfs` with the `neighbor`, passing the opposite color.
5. If any DFS traversal has a conflict, we return false as the answer. Otherwise, we can return true if we get through all nodes without conflict.

#### Implementation

<iframe src="https://leetcode.com/playground/oHBcCXiZ/shared" frameBorder="0" width="100%" height="500" name="oHBcCXiZ"></iframe>

#### Complexity Analysis

Let $E$ be the size of `dislikes` and $N$ be the number of people.

* Time complexity: $O(N + E)$

    - Each node is visited by the `dfs` function once, which takes $O(N)$ time in total. We also iterate over the edges of every node once (since we don't visit a node more than once, we don't iterate its edges more than once), which adds $O(E)$ time.
    - We also need $O(E)$ to initialize the adjacency list and $O(N)$ to initialize the `color` array.

* Space complexity: $O(N + E)$

    - The recursion call stack used by `dfs` can have no more than $N$ elements in the worst-case scenario. It would take up $O(N)$ space in that case.
    - We also require $O(E)$ and $O(N)$ space for the adjacency list and the `color` array respectively.

---

### Approach 3: Union-Find

#### Intuition

A disjoint-set data structure, also called a union–find data structure or merge–find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. It does implements two useful operations:

a) `Find`: Determine which subset a particular element is in. This can be used to determine if two elements are in the same subset.
b) `Union`: Join two subsets into a single subset.

If you are new to Union-Find, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/). We will not talk about implementation details in this article, but only about the interface to the data structure.

We want to place the people that do not like each other into two different sets. It means we need to place all the neighbors of any node in a different set from the one the current node is in. This can be done by taking a union of all the neighbors so that they reside in a single set. Like in the previous approaches, if any neighbor is in the same set as the current node, it means we've got a conflict and the partition cannot be done.

There is also an interesting observation to think about. In a connected component of a graph, there can be at most two disjoint sets if we perform a union operation on all the neighbors of every node. Let us begin with node `A` which is pushed to set `S1` and then push all of `A`'s neighbors to another set, `S2`. Assume that we have now arrived at one of `A`'s neighbors, `B`. `B` will push all its neighbors to the same set as `A`. So all neighbors of `B` will be in set `S1`. Assume that we have now arrived at one of `B`'s neighbors, `C.` `C` will push all its neighbors to `S2`, and so on. We can see that each node can belong to either of the two sets, implying that the union-find approach would assist us in dividing the group of people into two disjoint sets. Just like in the previous two approaches, we can alternate between the two sets for each neighbor.

#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X`.
2. Create a class `UnionFind` defining standard methods `find` and `union_set`.
3. Create an instance of `UnionFind`, passing the size as `n+1` (because the nodes are 1-indexed).
4. Iterate over each node. For a particular node, we will visit all its neighbors.
5. We have a conflict if we notice that a `node` and any of its `neighbor` are in the same set. We return `false` in such a case.
6. Otherwise, we take the `union` of all the neighbors of the `node` with the first `neighbor`. This would move all the neighbors into a single set.
7. If we do not encounter any conflict, we return `true` at the end.

#### Implementation

<iframe src="https://leetcode.com/playground/9t4UmE7Z/shared" frameBorder="0" width="100%" height="500" name="9t4UmE7Z"></iframe>

#### Complexity Analysis

Let $E$ be the size of `dislikes` and $N$ be the number of people.

* Time complexity: $O(N + E)$

    - For $T$ operations, the amortized time complexity of the union-find algorithm (using path compression with union by rank) is $O(alpha(T))$. Here, $\alpha(T)$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $4$ for all reasonable $T$ (approximately $ T < 10^{600}$). You can read more about the complexity of union-find [here](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Time_complexity).  Because the function grows so slowly, we consider it to be $O(1)$. Thus, the $E$ operations (iterating over each edge) we perform results in $O(E)$ time.
    - We are initializing `parent` and `rank` arrays, which each need $O(N)$ time.
    - We also loop through all of the nodes, which takes $O(N)$ time.

* Space complexity: $O(N + E)$

    - We are using `parent` and `rank` arrays, which take up $O(N)$ space each.
    - $O(E)$ space is also required for the adjacency list.