# Official Solution

**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solution/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an undirected graph with `n` nodes which are referred to as cities from `1` to `n`. The graph has weighted edges referred to as roads in the description.

The score of a path between two nodes is defined as the minimum weight edge in this path.

Our task is to return the minimum possible score of a path from `1` to `n`. It is also given that we can visit any edge or node multiple times in a path.

---

### Approach 1: Breadth First Search

#### Intuition

According to the problem statement, the given graph may or may not be connected, and it may have multiple connected components. It is also stated that there is at least one path connecting node `1` to node `n`. It means that these nodes `1` and `n` are part of the same component. We also know that in a connected component of an undirected graph, we can reach any node from any other node.

Consider the following examples, where the highlighted red color edge is the minimum weight edge in the component containing nodes `1` and `n`. Now the path with the minimum score will be any path from node `1` to `n` that includes this red edge.

![img](../Figures/2492/2492-1.png)

In both of these examples, we see that we begin at node `1`, proceed to cover the red color edge, and then proceed to node `n`. The answer is the weight of the red edge. It demonstrates that we can go to the red edge wherever it is in the component. The path definition in the problem statements allows us to visit any node or edge multiple times, allowing us to always traverse over the red edge.

**So this suggests that our task is to find the edge with the lowest weight among all the edges in the component containing nodes `1` and `n`.**

To figure it out, we can use a breadth-first search (BFS) traversal algorithm. BFS is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `l`) are explored before moving on to the nodes at the next level (`l + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

We begin a BFS traversal from node `1` and visit all the nodes and edges in node `1`'s component. We create the `answer` variable and initialize it with `infinity`.

We update `answer` as the minimum of `answer` or the edge weight while iterating over all the edges.

We obtain the minimum weight edge in `answer` after completing the traversal.

#### Algorithm

1. Create an adjacency list `adj` that contains a list of pairs of integers such that `adj[node]` contains all of node's neighbors in the form of `(neighbor, weight)` where `neighbor` is the neighboring node of `node` and `weight` denotes the weights of the edge that connects `node` and `neighbor`.
2. Return `bfs(n, adj)`, which works as following:
    - Create a `visit` array to keep track of visited nodes. We also create an integer queue `q` and a variable `answer` set to the maximum integer value.
    - We begin by pushing node `1` and marking it as visited.
    - We now loop until the queue is empty. The queue's first element, `node`, is popped out. We iterate over all the edges connected to `node` and for each `edge`, update `answer` to the minimum of `answer` and `edge` weight. We also check whether or not the node connected to the other end of the `edge` is visited. If it has not been visited, we visit it and add it to the queue.
    - In the end, we return the weight of the lowest weight edge `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/ZYFbYQoc/shared" frameBorder="0" width="100%" height="500" name="ZYFbYQoc"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number edges.

* Time complexity: $O(n + e)$.
    - Each queue operation in the BFS algorithm takes $O(1)$ time, and a single node can only be pushed once, leading to $O(n)$ operations for $n$ nodes. We iterate over all the neighbors of each node that is popped out of the queue, so for an undirected edge, a given edge could be iterated at most twice (by nodes at both ends), resulting in $O(e)$ operations total for all the nodes.
    - We also need $O(e)$ time to initialize the adjacency list and $O(n)$ to initialize the `visit` array.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n + e)$.
    - Building the adjacency list takes $O(e)$ space. 
    - The BFS queue takes $O(n)$ because each node is added at most once.
    - The `visit` array takes $O(n)$ space as well.

---

### Approach 2: Depth First Search

#### Intuition

As we just have to find the minimum weight edge in our component containing node `1`, another method is to use a depth-first search (DFS).

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.

Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

#### Algorithm

1. Create an adjacency list `adj` that contains a list of pairs of integers such that `adj[node]` contains all of node's neighbors in the form of `(neighbor, weight)` where `neighbor` is the neighboring node of `node` and `weight` denotes the weights of the edge that connects `node` and `neighbor`.
2. Create a `visit` array to keep track of visited nodes. We also set the `answer` set to the maximum integer value.
3. Use `dfs(node, adj, visit, answer)` to perform a DFS traversal starting with `node`. We begin with `dfs(1, adj, visit, answer)`:
    - Mark the `node` as visited.
    - Use `adj[node]` to iterate over the neighboring nodes and edges. For each `edge`, update the `answer` to the minimum of `answer` and `edge` weight. If the node at the other end of the `edge` is not visited, we call `dfs` with that node recursively.
4. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/JSjeohp2/shared" frameBorder="0" width="100%" height="500" name="JSjeohp2"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number edges.

* Time complexity: $O(n + e)$.
    - The `dfs` function visits each node once, which takes $O(n)$ time in total. Because we have undirected edges, each edge can only be iterated twice (by nodes at the end), resulting in $O(e)$ operations total while visiting all nodes.
    - We also need $O(e)$ time to initialize the adjacency list and $O(n)$ to initialize the `visit` array.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n + e)$.
    - Building the adjacency list takes $O(e)$ space. 
    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case. 
    - The `visit` array takes $O(n)$ space.

---

### Approach 3: Union-find

#### Intuition

Another approach to solving questions based on graph connectivity is the union-find data structure. It can optimally determine which connected component a node or an edge belongs to. We can use the union-find data structure to solve the problem because our task is to find the minimum weight edge in our component containing node `1`.

A disjoint-set data structure also called a union–find data structure or merge–find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. It implements two useful operations:

1. `Find`: Determine which subset a particular element is in. This can be used to determine if two elements are in the same subset.
2. `Union`: Join two subsets into a single subset.

If you are new to Union-Find, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/). We will not talk about implementation details in this article, but only about the interface to the data structure.

We iterate through all of the edges, taking the `union` of the two nodes connected by the edge. This generates a graph by inserting all nodes into the components to which they belong.

As we know, our task is to find the minimum weight edge in the component containing nodes `1` and `n`. We iterate over all the edges again and for each edge that connects two nodes, say `a` and `b`, we check whether node `a` (or `b`) belongs to the same component as node `1` (or `n`). We don't need to check for node `b` separately because `a` and `b` are connected by an edge and thus both belong to the same component. The `find` operation can be used to inspect a node's component.

If node `a` belongs to the same component as node `1`, we update our `answer` to the minimum of the `answer` till now and the weight of the edge connecting `a` and`b`. Otherwise, if node `a` does not belong to the same component as node `1`, it is ignored.

#### Algorithm

1. Create an instance of `UnionFind` of size `n + 1`. In addition, create the `answer` variable set to the maximum integer value.
2. Iterate over all of the graph's edges, or `roads`, and perform a `union` of both nodes connected by an edge.
3. Iterate over all the edges again and for each `road`: 
    - Determine whether a component of node `1` is the same as one of the ends of `road`. If both nodes belong to the same component, update `answer` to the minimum of `answer` up to this point and the weight of `road`. Otherwise, ignore edge `road`.
4. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/28JYbUdS/shared" frameBorder="0" width="100%" height="500" name="28JYbUdS"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number edges.

* Time complexity: $O(n + e)$.
    - For $T$ operations, the amortized time complexity of the union-find algorithm (using path compression with union by rank) is $O(alpha(T))$. Here, $\alpha(T)$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $4$ for all reasonable $T$ (approximately $ T < 10^{600}$). You can read more about the complexity of union-find [here](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Time_complexity).  Because the function grows so slowly, we consider it to be $O(1)$.
    - Initializing `UnionFind` takes $O(n)$ time beacuse we are initializing the `parent` and `rank` arrays of size `n + 1` each.
    - We iterate through every edge and perform `union` of the nodes connected by the edge which takes $O(1)$ time per operation. It takes $O(e)$ time for $e$ edges.
    - We again iterate through every edge and use `find` operation to find the component of node `1` and a node having one end in the edge. It also takes $O(1)$ per operation and takes $O(e)$ time for all the $e$ edges.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n)$.
    - We are using the `parent` and `rank` arrays, both of which require $O(n)$ space each.