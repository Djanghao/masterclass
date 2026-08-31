# Official Solution

**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solution/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solution/)

---

[TOC]

## Solution

--- 

### Overview

In the given tree, each node only has pointers to its left and right child nodes, making the typical tree traversal approach only applicable to the subtree rooted at the target node. We cannot access other parts of the tree beyond the subtree as we can't access the parent, which implies the need to establish additional connections beyond the child node pointers.


![img](../Figures/863/1.png)

---

### Approach 1: Implementing Parent Pointers

#### Intuition   

> If you are not familiar with depth-first (DFS) search, please refer to our explore cards [Depth-First Search Explore Card](https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/). We will focus on the usage in this article and not the implementation details.

In this problem, nodes in the given binary tree only have pointers to the left and right children and we can't search in the ancestor nodes of `target`. We will implement a parent pointer to each node (apart from the root node) recursively.

![img](../Figures/863/2.png)

> In Python, we can add attributes (in our case a parent pointer) to an instance of a class at any time, even if the attribute is not defined in the class. However, this can also lead to mistakes and hard-to-debug errors. Consequently, **this approach does not reflect good coding practices**, but we have included it for completeness.


Now, we have created an undirected graph. We define a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of the current branch, we backtrack to the next possible branch and continue exploring. Once we encounter an unvisited node, we take one of its neighbor nodes (left child, right child, or parent) as the next node on this branch. Recursively call the function to the next node and solve the subproblem. If we reach the end of this branch, we backtrack to the previous node and visit the next neighbor node, and repeat the process. If we reach a node with a distance of `k` to `target`, it denotes that this node is one of the destination nodes. Since continuing on with this branch leads to nodes with a distance larger than `k`, we will also backtrack to the previous node and try visiting the next neighbor node.


![img](../Figures/863/3.png)

We can use a hash set to keep track of all the visited nodes. Whenever we find an unvisited neighbor node, we add it to the hash set so it won't be visited anymore.

<br>

#### Algorithm

1) Define a recursive function `add_parent(cur, parent)` to recursively add a parent pointer to node `cur`: If `cur` is not empty, add a pointer from `cur` to `parent`: `cur.parent = parent`. Then recursively call `add_parent` on the left and right children of `cur`:
    - `add_parent(cur.left, cur)`
    - `add_parent(cur.right, cur)`

2) Call `add_parent(root, None)` to add all parent pointers, note that the root node does not have a parent node.

3) Initialize an empty array `answer` and an empty hash set `visited`.

4) Define another recursive function `dfs(cur, distance)` to recursively find all nodes with a distance of `k` to node `target`:
    - If `root` is empty or has been visited before, return.
    - Add `cur` to `visited` so it won't be revisited later.
    - If `distance = k`, it means `cur` is one of the destination nodes, add it to `answer`, and return.
    - Recursively call `dfs` on the children and parent of `cur`.

5) Call `dfs(target, 0)` to find all destination nodes with a distance of `k`.

6) Return `answer` when the DFS is complete.

#### Implementation

<iframe src="https://leetcode.com/playground/KESSoTta/shared" frameBorder="0" width="100%" height="500" name="KESSoTta"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the binary tree.

* Time complexity: $O(n)$

    - Both `add_parent` and `dfs` recursively call themselves to process the left and right subtrees of the current node `cur`. Each node is visited once by each function.
    
* Space complexity: $O(n)$
    - `visited` stores a maximum of $O(n)$ visited nodes.
    - The recursive solution uses the call stack to keep track of the current subtree being processed. The maximum depth of the call stack is equal to the height of the given tree. In the worst-case scenario, the given binary tree may be a degenerate binary tree and the stack can hold up to $n$ calls, resulting in a space complexity of $O(n)$.


<br/>

---

### Approach 2: Depth-First Search on Equivalent Graph

#### Intuition   

The previous approach of dynamically adding attributes is not a recommended practice. A safer method is to transform the given binary tree into an equivalent graph, where each pointer is treated as an undirected edge. Hence, the graph retains all the connected nodes from the original binary tree, including the pointers from children to parents. Consequently, we can perform a regular search in this graph, starting with depth-first search algorithm as an example.

![img](../Figures/863/5.png)

In the equivalent graph, we only need to recursively visit all unvisited neighboring nodes of the current node, which include nodes that are equivalent to the left and right children and the parent in the original tree.

Similarly, we can use a hash set to keep track of all the visited nodes. Whenever we find an unvisited neighbor node, we add it to the hash set so it won't be visited anymore.

<br>

#### Algorithm

1) We will build a hash map `graph`. Define a recursive function `build_graph(cur, parent)` to recursively build the equivalent graph: If both `cur` and `parent` are not empty, add an edge that connects `cur` and `parent` in the hash map `graph`. Then recursively call `build_graph` on the left and right children of `cur`:

    - If `cur.left` is not empty, call `build_graph(cur.left, cur)`
    - If `cur.right` is not empty, call `build_graph(cur.right, cur)`

2) Call `build_graph(root, None)` to build the equivalent graph, note that the root node does not have a parent node.

3) Initialize an empty array `answer` and an empty hash set `visited`.

4) Define another recursive function `dfs(cur, distance)` to recursively find all nodes with a distance of `k` to node `target`:
    - Add `cur` to `visited` so it won't be revisited later.
    - If `distance = k`, it means `cur` is one of the destination nodes, add it to `answer`, and return.
    - Recursively call `dfs` on the unvisited neighbors of `cur`.

5) Add `target.val` to `visited`. Call `dfs(target.val, 0)` to find all destination nodes with a distance of `k` to the target node.

6) Return `answer` when the DFS is complete.

#### Implementation

<iframe src="https://leetcode.com/playground/PWV39PPN/shared" frameBorder="0" width="100%" height="500" name="PWV39PPN"></iframe>


#### Complexity Analysis

Let $n$ be the number of nodes in the binary tree.

* Time complexity: $O(n)$
    - `build_graph` recursively calls itself to process the left and right subtrees of the current node `cur`. Each node is visited once.
    - `dfs` recursively calls itself to process the unvisited neighbors of the current node `cur`. Each node is visited once.
    

* Space complexity: $O(n)$
    - We use a hash map `graph` to store all edges, which requires $O(n)$ space for $n - 1$ edges.
    - We use a hash set `visited` to record the visited nodes, which takes $O(n)$ space.
    - The recursive solution uses the call stack to keep track of the current subtree being processed. The maximum depth of the call stack is equal to the height of the given tree. In the worst-case scenario, it may be a degenerate binary tree and the stack can hold up to $n$ calls, resulting in a space complexity of $O(n)$.


<br/>



---

### Approach 3: Breadth-First Search on Equivalent Graph

#### Intuition   

> If you are not familiar with breadth-first search, please refer to our explore cards [Breadth-First Search Explore Card](https://leetcode.com/explore/learn/card/graph/620/breadth-first-search-in-graph/). We will focus on the usage in this article and not the implementation details.

Back to this problem, we start with the node `target` with `distance = 0`, then we mark all its unvisited neighbor nodes with `distance = 1` to be visited soon, once we visit a node with `distance = 1`, we mark all its unvisited neighbor nodes with `distance = 2` as well. 

We can use a queue `queue` as a container to store all nodes to be visited without mixing the order. Since the operation on the queue is done in First In, First Out (FIFO) order, it allows us to explore all nodes with the current distance to the target node, before moving on to the nodes with larger distances.

![img](../Figures/863/6.png)

Similarly, we use a hash set to keep track of all the visited nodes. Whenever we find an unvisited neighbor node, we add it to the hash set so it won't be visited anymore.

<br>

#### Algorithm

1) Define a recursive function `build_graph(cur, parent)` to recursively build the equivalent graph: If both `cur` and `parent` are not empty, add an edge that connects `cur` and `parent` in the hash map `graph`. Then recursively call `build_graph` on the left and right children of `cur`:
    - If `cur.left` is not empty, call `build_graph(cur.left, cur)`
    - If `cur.right` is not empty, call `build_graph(cur.right, cur)`

2) Call `build_graph(root, None)` to build the equivalent graph, note that the root node does not have a parent node.

3) Initialize an empty array `answer` and an empty hash set `visited`.

4) Initialize an empty queue `queue` to store the nodes to be visited. Enqueue the target node, in the format of `(target.value, distance = 0)`

5) If `queue` has nodes, dequeue the first node `(cur, distance)`. If `distance` is equal to k, add it to `answer`. Otherwise, enqueue all **unvisited** neighbor nodes of `cur` to `queue` in the format of `(neighbor, distance + 1)`, and mark them as **visited**, then repeat step 5.

6) Return `answer` when the BFS is complete.

#### Implementation

<iframe src="https://leetcode.com/playground/jYKxCFa5/shared" frameBorder="0" width="100%" height="500" name="jYKxCFa5"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes.

* Time complexity: $O(n)$
    - `build_graph` recursively calls itself to process the left and right subtrees of the current node `cur`. Each node is visited once.
    - In a typical BFS search, the time complexity is $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges. There are $n$ nodes and $n - 1$ edges in this problem. Each node is added to the queue and popped from the queue once, it takes $O(n)$ to handle all nodes. 
    
* Space complexity: $O(n)$

    - We use a hash map `graph` to store all edges, which requires $O(n)$ space for $n - 1$ edges.
    - We use a hash set `visited` to record the visited nodes, which takes $O(n)$ space.
    - There may be up to $n$ nodes stored in `queue` and $O(n)$ space is required.
    - Therefore, the space complexity is $O(n)$.

<br/>