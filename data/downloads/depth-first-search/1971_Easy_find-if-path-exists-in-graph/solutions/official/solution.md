# Official Solution

**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solution/](https://leetcode.com/problems/find-if-path-exists-in-graph/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a bi-directional graph in this problem, the task is: for the two nodes `source` and `destination` in this graph, we need to check if there exists a path from `source` to `destination`.

![img](../Figures/1971/ex.png)

As shown in the pictures above:
- In the first graph, there exists a path from `0` to `2`.
- In the second graph, we can't find a path from `0` to `5`.

Now, we have to check if there exists a path between two given nodes. This hints to us that **this is a graph traversal problem**, where we have to start **traversal from one node and check if we can reach the other one.**                 
There exist two methods, breadth-first search (BFS) and depth-first search (DFS) for graph traversals.

One more thing to notice, as we have to check if there exists a path between two given nodes, this also hints that **two nodes must be connected** thus, this **problem can also be solved using Disjoint Set Union (DSU)**, where we check if both nodes belong to the same group (thus are connected via some path) or not.
 
Let's look at all these methods in detail one by one.

---

### Approach 1: Breadth First Search (BFS)

#### Intuition 

If you are not much familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/) and have some knowledge of it beforehand!

In BFS, we explore the nodes in the order of their depth. Assuming that the starting node has a depth of `0`, we will explore all nodes at the present depth (`d`) before moving on to all nodes at the next depth (`d + 1`). 

Here is an example of the order in which we visit the nodes using BFS, the starting node is colored in red and has a depth of `0`. The numbers stand for the depth of each node. Regardless of the specific structure, we always visit the node of `depth = 0`, then all nodes of `depth = 1`, all nodes of `depth = 2`, and so forth.

![img](../Figures/1971/bfs.png)

Back to this problem, we start with the node `source` with `depth = 0`, then we mark all its unvisited neighbor nodes with `depth = 1` to be visited soon, once we visit a node with `depth = 1`, we mark all its unvisited neighbor nodes with `depth = 2` as well. 

We can use a queue `queue` as a container to store all nodes to be visited without mixing the order. Since the operation on the queue is done in First In, First Out (FIFO) order, so it allows us to explore all nodes with the current depth, before moving on to the nodes with larger depth!

Once we add a node to `queue`, we immediately mark it as **visited** to prevent it from being added to `queue` again by some other nodes later.

If we encounter the node `destination` during the process, it means that there exists a path from `source` to `destination`. Otherwise, it indicates that we can't find such a path. 

![img](../Figures/1971/b2.png)

As shown in the figure above, the node `0` is **visited** while the node `5` is **unvisited**. Thus there is no path from `0` to `5`.


<br>

#### Algorithm

1) Initialize an empty queue (`queue`) to store the nodes to be visited. 
2) Use one bool array `seen` to mark all visited nodes and hash map `graph` to store all edges.
3) Add the starting node `0` to `queue` and mark it as **visited**.
4) If `queue` has nodes, get the first node `curr_node` from `queue`. Return `true` if `curr_node` is `destination`, otherwise, go to step 5.
5) Add all **unvisited** neighbor nodes of `curr_node` to `queue` and mark them as **visited**, then repeat step 4.
6) If we emptied `queue` without finding `destination`, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/RPdLhfCU/shared" frameBorder="0" width="100%" height="500" name="RPdLhfCU"></iframe>


#### Complexity Analysis

Let $$n$$ be the number of nodes and $$m$$ be the number of edges.

* Time complexity: $$O(n + m)$$

    - In a typical BFS search, the time complexity is $$O(V + E)$$ where $$V$$ is the number of vertices and $$E$$ is the number of edges. There are $$n$$ nodes and $$m$$ edges in this problem.
        - We build adjacent list of all `m` edges in `graph` which takes $$O(m)$$.
        - Each node is added to the queue and popped from queue once, it takes $$O(n)$$ to handle all nodes. 
    - The time complexity is $$O(n + m)$$.
    

* Space complexity: $$O(n + m)$$

    - We used a hash map `neighbors` to store all edges, which requires $$O(m)$$ space for $$m$$ edges.
    - We use `seen`, either a hash set or an array to record the visited nodes, which takes $$O(n)$$ space.
    - There may be up to $$n$$ nodes stored in `queue` and $$O(n)$$ space is required.
    - Therefore, the space complexity is $$O(n + m)$$.

<br/>



---

### Approach 2: Depth First Search (DFS): Recursive

#### Intuition   

If you are new to Depth First Search, see our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/) for more information on it!


In DFS, we explore nodes as far as possible along each branch. Upon reaching the end of the current branch, we backtrack to the next possible branch and continue exploring.

![img](../Figures/1971/dfs.png)

Once we encounter an unvisited node, we take one of its neighbor nodes (if it exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem. If we reach the end of this branch, we backtrack to the previous node and visit the next neighbor node (if it exists), and repeat the process. Similarly, we also use a bool array `seen` to record every visited node, so they won't be visited by other nodes anymore.


<br>

#### Algorithm

- Create an empty adjacency list `graph` to represent the undirected graph.
- Iterate through each edge in `edges`:
  - For each edge `(a, b)`, add `b` to the list of neighbors for `a`, and `a` to the list of neighbors for `b`.
  - This builds a bidirectional connection for each node since the graph is undirected.

- Initialize a `seen` array of size `n` with all values set to `false` to keep track of visited nodes during DFS.

- Call the `dfs` function starting from the `source` node and aiming to reach the `destination`.

- In the `dfs` function:
  - If the current node `currNode` is equal to `destination`, return `true` because the path is found.
  - Mark `currNode` as visited in the `seen` array to avoid cycles or repeated processing.
  - For each neighbor `nextNode` of `currNode` in the graph:
    - If `nextNode` has not been visited:
      - Recursively call `dfs` on `nextNode` to continue exploring the path.
      - If any recursive call returns `true`, propagate that result upwards and return `true`.
  - If all paths have been explored and `destination` was not found, return `false`.

- The final result returned by `validPath` indicates whether a valid path exists between `source` and `destination`.

#### Implementation

<iframe src="https://leetcode.com/playground/dB8TVcBR/shared" frameBorder="0" width="100%" height="500" name="dB8TVcBR"></iframe>


#### Complexity Analysis

Let $$n$$ be the number of nodes and $$m$$ be the number of edges.

* Time complexity: $$O(n + m)$$

    - In typical DFS search, the time complexity is $$O(V + E)$$ where $$V, E$$ are the number of vertices and edges. More specifically, there are $$n$$ nodes and $$m$$ edges in this problem:
        - We build adjacent list of all `m` edges in `graph` which takes $$O(m)$$.
        - Each node is only visited once, it takes $$O(n)$$ to traverse all nodes. 
    - The overall time complexity is $$O(n + m)$$. 
    

* Space complexity: $$O(n + m)$$

    - We use a hash map to store `m` edges, which takes $$O(m)$$ space.
    - We use a bool array `seen` to keep track of the visited nodes, which requires $$O(n)$$ space.
    - The recusive function takes $$O(n)$$ space.
    - Therefore, the overall space complexity is $$O(n + m)$$.

<br/>



---

### Approach 3: Depth First Search (DFS): Iterative

#### Intuition   

We can also implement DFS iteratively using a stack to replicate recursive self calls. Since the operations on a stack are performed in First In, Last Out (FILO) order. Therefore, the top node on the stack always leads to the next branch: whenever we reach the end of the current branch, we can get the node on the top of the stack and move along the branch that starts from it.

Similarly, we can use a bool array `seen` to record the status of each node, we mark the visited nodes as **visited** so we don't need to take them into account. Once we add an unvisited node to `stack`, we immediately mark it as **visited** to prevent it from being revisited later.

Take the following picture as an example:

![img](../Figures/1971/stack.png)

<br>

#### Algorithm

1) Initialize an empty stack `stack` to store the nodes to be visited.
2) Use one bool array `seen` to mark all visited nodes and a hash map `graph` to store all edges.
3) Add the starting node `source` to `stack` and mark it as **visited**.
4) While `stack` has nodes, get the top node `curr_node` from `stack`. 
    - If `curr_node` equals `destination`, return `true`.
    - Otherwise, add **unvisited** neighbor nodes of `curr_node` to `stack` and mark them as **visited** and repeat step 4.
5) If we finish the iteration without finding `destination`, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/TdQBPCKd/shared" frameBorder="0" width="100%" height="500" name="TdQBPCKd"></iframe>


#### Complexity Analysis

Let $$n$$ be the number of nodes and $$m$$ be the number of edges.

* Time complexity: $$O(n + m)$$

    - In a typical DFS search, the time complexity is $$O(V + E)$$ where $$V, E$$ is the number of vertices and edges. In this problem, there are $$n$$ nodes and $$m$$ edges:
        - We build adjacent list of all `m` edges in `graph` which takes $$O(m)$$.
        - Each node is added to the stack and popped from stack once, it takes $$O(n)$$ to handle all nodes. 
    - Therefore, the time complexity is $$O(n + m)$$.

* Space complexity: $$O(n + m)$$

    - We use a hash map to store `m` edges, it takes $$O(m)$$ space.
    - We use one bool array `seen` to record visited nodes, which also takes $$O(n)$$ space.
    - We use a stack `stack` to store all nodes to be visited, in the worst-case scenario, there may be $$O(n)$$ nodes in `stack`.
    - To sum up, the space complexity is $$O(n + m)$$.


<br/>




---

### Approach 4: Disjoint Set Union (DSU)

#### Intuition   


If you are not much familiar with Disjoint Set Union, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/)!

In short, DSU data structure stores disjoint subsets and provides operations for adding new sets and merging sets. It also allows us to find out if any two given elements are in the same group of not. Back to this problem: if there exists a path connecting `source` and `destination`, these two nodes must be in the same group. Considering DSU allows us to verify if two nodes are in the same group or not efficiently, it is a promising approach to this problem!

Let's first assume that there is no edge in the graph and that all these nodes are isolated. Then we connect them using edges from `edges`, for each edge `edge = [node_a, node_b]`, we connect `node_a` with `node_b`, represents that these two nodes belong to the same group. After we finish adding all edges, check if `source` and `destination` are in the same group.

Please refer to the picture below. Given `source = 0`, `destination = 5`, the two nodes are not in the same group, thus there is no path from `source` to `destination`.

![img](../Figures/1971/uf.png)


<br>

#### Algorithm

1) Initialize the DSU data structure `UnionFind` containing all nodes. Each node `i` has:
    - a distinct root, which means each point is individual.
    - a group size of 1, which means each set only contains one node.

    the DSU structure also supports:
    - `find(x)`: find the root of the node `x`.
    - `union(x, y)`: if two given nodes `x` and `y` are not in the same group, we modify one of the roots as the other root, which means that the two groups containing `x` and `y` are merged into one group. Note that we use the union-by-rank method to optimize the time complexity, basically, we modify the root of the smaller group as the root of the larger group, please see [Disjoint Set - Union by Rank](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3879/) for more information!

2) Iterate over all edges. For each edge `edge = [node_a, node_b]`, use the DSU data structure we initialized to connect `node_a` and `node_b`.
3) Check if node `source` and node `destination` are in the same group.

#### Implementation

<iframe src="https://leetcode.com/playground/8MQiWVrP/shared" frameBorder="0" width="100%" height="500" name="8MQiWVrP"></iframe>


#### Complexity Analysis

Let $$n$$ be the number of nodes and $$m$$ be the number of edges.

* Time complexity: $$O(m\cdot \alpha(n))$$

    - The amortized complexity for performing $$m$$ union find operations is $$O(m\cdot \alpha(n))$$ time where $$\alpha$$ is the [Inverse Ackermann Function](https://en.wikipedia.org/wiki/Ackermann_function#Inverse).
    - To sum up, the overall time complexity is $$O(m\cdot \alpha(n))$$.

* Space complexity: $$O(n)$$

    - We used two arrays `root` and `rank` to save the root and rank of each node in the DSU data structure, each of them takes $$O(n)$$ space.
    - To sum up, the overall time complexity is $$O(n)$$.


<br/>