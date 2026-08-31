# Official Solution

**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solution/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an undirected graph with `n` nodes numbered from `0` to `n - 1`.

Our task is to return the total number of pairs of different nodes that are unreachable from each other.

---

### Approach 1: Depth First Search

#### Intuition

A connected component of an undirected graph, as we know, is a subgraph in which each pair of nodes is connected to each other by a path. It means that nodes in a connected component can reach all other nodes in the same connected component.

However, if two nodes belong to different components, it is impossible to reach one node from the other.

Let's revisit the second example from the problem statement. 

![img](../Figures/2316/2316-1.png)

There are three components in it. We can see that there is no path between any two nodes from different components.

The first component consists of four nodes. Except for the nodes in their components, these four nodes cannot reach any other nodes. As a result, selecting any of the four nodes from the first component and any other node from the remaining components results in a pair of nodes that are unreachable to each other.

The total number of pairs of nodes with one node in the first component and the other node in any of the remaining components would be equal to the number of nodes in the first component multiplied by the total number of nodes except the first component's nodes, i.e., `4 * (7 - 4) = 12` pairs. This means that there are `12` pairs of nodes that are unreachable from each other, where one of the two nodes are in the first component.

Let's move on to the second component, which has only one node. So, the number of unreachable pairs of nodes with one node in the second component would be the total number of nodes in the second component multiplied by the total number of nodes except the current component and the first component (we already covered pairs formed using nodes in the first component). It is `1 * (7 - 4 - 1) = 2` pairs.

We have now covered all of the pairs formed with one node in the first component, as well as all of the pairs formed with one node in the second component. Because we only have a third component left, no more pairs of unreachable nodes can be formed. The total number of pairs required is `12 + 2 = 14`.

So, to find the total number of pairs that are unreachable from each other, we must iterate over the graph and determine the size of each component. Then we multiply the number of nodes in the current component by the total number of nodes in the graph, ignoring nodes in the current component and previously visited components (we already covered pairs of nodes formed with one of the nodes in the previous components). To get the required answer, we add these number of pairs of nodes while iterating over all the components one by one, as calculated in the preceding example.

A depth-first search (DFS) traversal can be used to determine the number of nodes in each component.

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.

Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X`.
2. Create a long variable `numberOfPairs` to count the number of unreachable node pairs. We initialize it with `0`.
3. Create another long variable `sizeOfComponent` to store the number of nodes in the current component. It is initialized with `0`.
4. Create a third long variable `remainingNodes` to keep track of the number of unvisited nodes in the graph after each DFS traversal. We initialize it with `n`.
5. Create a `visit` array of length `n` to keep track of nodes that have been visited.
6. Iterate through all of the nodes and for each node `i` check if it is visited or not. If node `i` is not visited, begin the DFS traversal:
    - We use the `dfs` function to perform the traversal. For each call, pass `node`, `adj`, and `visit` as the parameters. We start with node `i`.
    - Mark the `node` as visited and create a variable `count` to keep track of the number of nodes in this component. We initialize `count` to `1` to count `node` itself.
    - We iterate over all the neighbors of `node`. If any `neighbor` is unvisited, we recursively call `dfs` passing `neighbor` as `node`. We add the number of nodes visited by this `dfs` call to `count`.
    - We return `count` after iterating over all the neighbors and store it in `sizeOfComponent`.
    - The number of unreachable pairs of nodes with one node in the current component and the other node in any other component except the current component and the previously visited components is `sizeOfComponent * (remainingNodes - sizeOfComponent)`. It is added to `numberOfPairs`.
    - We decrement `remainingNodes` by `sizeOfComponent` because we have added all the required pairs of nodes with one of the nodes being in the current component and we don't want to add them again. As a result, we assume they are no longer present.
7. Return `numberOfPairs`.

#### Implementation

<iframe src="https://leetcode.com/playground/3SLmkpPz/shared" frameBorder="0" width="100%" height="500" name="3SLmkpPz"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number of edges.

* Time complexity: $O(n + e)$.
    - We need $O(e)$ time to initialize the adjacency list and $O(n)$ time to initialize the `visit` array.
    - The `dfs` function visits each node once, which takes $O(n)$ time in total. Because we have undirected edges, each edge can only be iterated twice (by nodes at the end), resulting in $O(e)$ operations total while visiting all nodes.
    - As a result, the total time required is $O(n + e)$

* Space complexity: $O(n + e)$.
    - Building the adjacency list takes $O(e)$ space. 
    - The `visit` array takes $O(n)$ space.
    - The recursion call stack used by `dfs` can have no more than $n$ elements in the worst-case scenario. It would take up $O(n)$ space in that case. 

---

### Approach 2: Breadth First Search

#### Intuition

As we just have to find the count of nodes in each component and using it we compute the required number of pairs, another method is to use a breadth-first search (BFS).

BFS is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `l`) are explored before moving on to the nodes at the next level (`l + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

#### Algorithm

1. Create an adjacency list where `adj[X]` contains all the neighbors of node `X`.
2. Create a long variable `numberOfPairs` to count the number of unreachable node pairs. We initialize it with `0`.
3. Create another long variable `sizeOfComponent` to store the number of nodes in the current component. It is initialized with `0`.
4. Create a third long variable `remainingNodes` to keep track of the number of unvisited nodes in the graph after each BFS traversal. We initialize it with `n`.
5. Create a `visit` array of length `n` to keep track of nodes that have been visited.
6. Iterate through all of the nodes and for each node `i` check if it is visited or not. If node `i` is not visited, begin the BFS traversal:
    - We use the `bfs` function to perform the traversal. For each call, pass `node`, `adj`, and `visit` as the parameters. We start with node `i`.
    - We initialize a queue `q` of integers and push `node` into it. We also mark the `node` as visited and and create a variable `count` to keep track of the number of nodes in this component. We initialize `count` to `1` to count `node` itself.
    - While the queue is not empty, we dequeue the first element `node` from the queue and iterate over all its neighbors. If any neighbor is unvisited, we mark it visited, increment `count` by `1`, and push it into the queue.
    - After the queue is empty, we return `count` and store it in `sizeOfComponent`.
    - The number of unreachable pairs of nodes with one node in the current component and the other node in any other component except the current component and the previously visited components is `sizeOfComponent * (remainingNodes - sizeOfComponent)`. It is added to `numberOfPairs`.
    - We decrement `remainingNodes` by `sizeOfComponent` because we have added all the required pairs of nodes with one of the nodes being in the current component and we don't want to add them again. As a result, we assume they are no longer present.
7. Return `numberOfPairs`.

#### Implementation

<iframe src="https://leetcode.com/playground/hkvwpbmJ/shared" frameBorder="0" width="100%" height="500" name="hkvwpbmJ"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number of edges.

* Time complexity: $O(n + e)$.
    - We need $O(e)$ time to initialize the adjacency list and $O(n)$ to initialize the `visit` array.
    - Each queue operation in the BFS algorithm takes $O(1)$ time, and a single node can only be pushed once, leading to $O(n)$ operations for $n$ nodes. We iterate over all the neighbors of each node that is popped out of the queue, so for an undirected edge, a given edge could be iterated at most twice (by nodes at both ends), resulting in $O(e)$ operations total for all the nodes.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n + e)$.
    - Building the adjacency list takes $O(e)$ space.
    - The `visit` array takes $O(n)$ space as well. 
    - The BFS queue takes $O(n)$ space in the worst-case because each node is added once.

---

### Approach 3: Union-find

#### Intuition

The union-find data structure is another approach to answering questions based on graph connectivity. It can determine which connected component a node or an edge belongs to and the size of each component in an efficient way. Because our task is to find the size of each component which we can then use to determine the required number of pairs of nodes, we can use the union-find data structure as well to solve the problem.

A disjoint-set data structure also called a union–find data structure or merge–find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. It implements two useful operations:
1. `Find`: Determine which subset a particular element is in. This can be used to determine if two elements are in the same subset.
2. `Union`: Join two subsets into a single subset.

If you are new to Union-Find, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/). We will not talk about implementation details in this article, but only about the interface to the data structure.

We iterate through all of the edges, taking the `union` of the two nodes connected by the edge. This generates a graph by inserting all nodes into the components to which they belong.

We then iterate through all the nodes to determine which component each node belongs to using the `find` operation. We create a hash map called `componentSize` that maps the node that uniquely identifies a component (the `find` operation returns this node for all nodes in the component) to the component's size. We increase the size of component `find(node)` by `1` for a node `node`, because `node` belongs in the `find(node)` component. Similarly, we cover all nodes and obtain the sizes of all components in `componentSize`.

After determining the sizes of all components, we perform the same calculations as in the preceding approaches to determine the number of required paths. We iterate through all of the components, adding the number of pairs with one node in the current component by multiplying the size of the current component with the number of nodes, excluding nodes in the current component and previously visited components.

#### Algorithm

1. Create an instance of `UnionFind`, say `dsu(n)`.
2. Iterate over all of the graph's edges, `edges`, and perform a `union` of both nodes connected by an edge.
3. Create a hash map, `componentSize`, to map a node that uniquely identifies a component to the size of the component. `componentSize[x]` returns the number of nodes in the component that contains node `x`.
    - We iterate over all the nodes and for each `node`, we increment `componentSize[find(node)]` by `1`.
4. Create a long variable `numberOfPairs` to count the number of unreachable node pairs. We initialize it with `0`.
5. Create another long variable `remainingNodes` to keep track of the number of nodes that are left after visiting each component. We initialize it with `n`.
6. We iterate over `componentSize` and for each `size` in `componentSize`, we do the following:
    - Add all the pairs of nodes where one node is in the current component and the other node is in any other component except the current one and previously visited components. So, we perform `numberOfPaths += size * (remainingNodes - size)`.
   - We decrement `remainingNodes` by `size` because we have added all the required pairs of nodes with one of the nodes in the current component and we don't want to add it again. As a result, we assume they are no longer present.
7. Return `numberOfPairs`.

#### Implementation

<iframe src="https://leetcode.com/playground/P6kAWzYk/shared" frameBorder="0" width="100%" height="500" name="P6kAWzYk"></iframe>

#### Complexity Analysis

Here $n$ is the number of nodes and $e$ is the total number edges.

* Time complexity: $O(n + e)$.
    - For $T$ operations, the amortized time complexity of the union-find algorithm (using path compression and union by rank) is $O(alpha(T))$. Here, $\alpha(T)$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $4$ for all reasonable $T$ (approximately $ T < 10^{600}$). You can read more about the complexity of union-find [here](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Time_complexity).  Because the function grows so slowly, we consider it to be $O(1)$.
    - Initializing `UnionFind` takes $O(n)$ time because we are initializing the `parent` and `rank` arrays of size `n` each.
    - We iterate through every edge and perform `union` of the nodes connected by the edge which takes $O(1)$ time per operation. It takes $O(e)$ time for $e$ edges.
    - We then iterate through all the nodes and use the `find` operation to find their components. The `find` operation takes $O(1)$ amortized time for each operation.
    - We iterate through the `componentSize` map. There can be no more than $n$ components because there are `n` nodes. In the worst-case scenario, determining the size of all the components would take $O(n)$.
    - As a result, the total time required is $O(n + e)$.

* Space complexity: $O(n)$.
    - We are using the `parent` and `rank` arrays, both of which require $O(n)$ space each.
    - The `componentSize` map would require $O(n)$ space as well in the worst-case.