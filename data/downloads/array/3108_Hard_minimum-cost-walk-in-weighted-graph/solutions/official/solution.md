# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solution/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an undirected weighted graph, represented by an array `edges`, where `edges[i] = [u, v, w]` indicates an edge between vertices `u` and `v` with weight `w`. Additionally, we are given an array `queries`, where `queries[i] = [s, t]` represents a pair of nodes in the graph.

For each query, our task is to determine the minimum *cost* of a *walk* that starts at node `s` and ends at node `t`. If no such walk exists, the answer is `-1`. Let's first define the two key terms involved in this task:

-   A *walk* in a graph is a sequence of connected vertices and the edges that connect them. Unlike a path, a walk allows both edges and vertices to be repeated.
-   The *cost* of a walk is defined as the bitwise AND of the weights of all edges encountered in the walk. 

First, recall that the bitwise AND operation compares the bits of all the numbers involved and keeps a bit as `1` only if it is `1` in every number; otherwise, the bit becomes `0`. Now, consider the smallest number in the group. It already has some bits set to `0`. Since the AND operation can only turn bits off (changing `1` to `0`, but never `0` to `1`), the result can never have more `1`s than the smallest number. This means the result is always less than or equal to the smallest number.

In this problem, that tells us that adding more edges to a walk can only keep the cost the same or make it smaller. So, to find the minimum cost, we should try to include as many edges as possible in the walk. 

Notice that since `w AND w = w`, revisiting the same edge multiple times does not change the total cost. This can be useful if we need to backtrack to take a different path, in order to visit more edges.

---

### Approach 1: Disjoint-Set (Union-Find)

#### Intuition

First, let's determine when the answer to a query is `-1`. This happens when no walk exists between the two nodes, meaning they belong to different connected components.

> A connected component in an undirected graph is a group of nodes where there is a path between any pair of nodes.

Now, suppose the two nodes belong to the same connected component. What is the minimum cost of a walk connecting them? As mentioned, the optimal walk includes as many edges as possible. Since revisiting an edge does not affect the total score, we can freely traverse the edges of the component, meaning that we can move back and forth to reach all of them. Therefore, the best way to achieve the lowest cost is to visit every edge in the component.

To efficiently find and process the connected components of the graph, we use the Disjoint Set (Union-Find) data structure. This approach relies on two main operations: Union and Find. Each connected component has a representative node, known as its root, which is returned by the Find operation for any node in the group. When we Union two nodes, we merge their entire groups, as now a path exists between every node in one group and every node in the other. To maintain efficiency, the root of the larger group is chosen as the representative of the merged group. This minimizes the time needed for future Find operations by reducing the number of steps required to reach the current representative.

> **Disjoint Set (Union-Find)**: For a more comprehensive understanding of the Disjoint Set data structure, check out the [Disjoint Set/Union-Find Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/). This resource provides an in-depth look at Union-Find, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

Once the nodes are grouped into connected components, we calculate the total cost for each component as the bitwise AND of all its edge weights. In the end, the minimum cost of a walk between any two nodes in the same component will be the same and equal to the component's total cost.

#### Algorithm

##### Main Function: `minimumCost(n, edges, queries)`

- Initialize three arrays of size `n`:
    -   `parent`, with all values set to `-1`, meaning that each node initially forms its own connected component.
    -   `depth`, with all values initialized to `0`.
    -   `componentCost`, with all values set to the largest integer (`2^32 - 1`), which is the neutral value for the AND operation, as it contains only `1`s in its binary representation.
-   Construct the connected components of the graph:
    -   For each `edge = [node1, node2, weight]` in `edges`:
        -   `Union(node1, node2)`.
-   Calculate the cost of each component:
    -   For each `edge = [node1, node2, weight]` in `edges`:
        -   Find the root of the edge's component: `root = find(node1)`.
        -   Update the component cost by performing a bitwise AND: `componentCost[root] &= weight`. 
-   Initialize an array `answer` to store the answer for each query.
    -   For each `query = [start, end]` in `queries`:
        -   If the two nodes belong to different connected components, i.e. `find(start) != find(end)`, push `-1` into `answer`.
        -   Otherwise:
            -   Find the root of their component: `root = find(start)`.
            -   Push `componentCost[root]` into `answer`.
-   Return `answer`.

##### `find(node)` function:
- If `parent[node] = -1`, `node` is the representative of its group, so return `node`.
- Otherwise, return `find(parent[node])` and store the result in `parent[node]` (path compression).

##### `Union(node1, node2)` function:
- Find the root of each node's component: set `root1 = find(node1)` and `root2 = find(node2)`.
- If the two nodes already belong to the same component, i.e. `root1 == root2`, return.
- Otherwise, if `depth[root1] < depth[root2]`, swap the two roots to ensure that `root1` has greater depth.
- Merge the two groups, by setting `parent[root2] = root1`.
- If the groups had the same depth, increment the depth of the merged group by `1` (`depth[root1]++`).

#### Implementation

<iframe src="https://leetcode.com/playground/MuYneAW2/shared" frameBorder="0" width="100%" height="500" name="MuYneAW2"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the graph, $m$ the number of edges, and $q$ the number of queries.

-   Time complexity: $O(n + m + q)$

    First, we must account for the time needed for the initialization of the `parent` and `size` arrays, which is equal to $O(n)$. The rest of the program consists of three loops. In the first loop, we iterate over all edges to construct the connected components of the graph. With the union-by-rank and path compression optimizations, both Find and Union operations take $O(1)$ time on average (or $a(n)$ time, where $a$ is the inverse Ackermann function that grows really slowly and is considered practically constant), so the time complexity of this loop is $O(m)$. In the second loop, we call the Find method and update the component's cost in $O(1)$ time for each iteration, making the time complexity of this loop also $O(m)$. Finally, we answer each query in $O(1)$ time, as it only involves checking if the two nodes belong to the same component and returning a precomputed value if they do. Thus, the total time complexity of the algorithm is $O(n + m + q)$.

-   Space complexity: $O(n)$

    We create three arrays: `parent`, `depth`, and `componentCost`, each of size $n$. The `answer` array is the output of the algorithm and doesn't contribute to the auxiliary space complexity, which is therefore equal to $O(n)$.

---

### Approach 2: Breadth-First Search (BFS)

#### Intuition

In this approach, we use Breadth-First Search (BFS) to find the connected components of the graph and calculate their costs. Each component is assigned a unique ID, allowing us to later check if two nodes belong to the same component and retrieve the precomputed cost.

We start a BFS traversal from each unvisited node, marking it as part of a new component with a unique `componentId`. During the traversal, we mark every node we visit as part of the current component by setting `components[node] = componentId`. As we explore, we calculate the component's cost by performing a bitwise AND on the weights of the edges we visit. After finishing the traversal of all nodes and edges in the component, we store the calculated cost in a map, where the key is the `componentId` and the value is the component's cost.

In the worst case—when each node forms its own connected component—we will need exactly `n` distinct `componentId` values. By setting the `componentId` to the number of already explored components (starting at `0`), we can assign a unique number to each component in the range `[0, n - 1]`. This allows us to use an array instead of a map to store the component costs, optimizing both runtime and memory usage.

Finally, for each query, we compare the `componentId` values of the two nodes in the `components` array. If they have the same ID, indicating they belong to the same component, we return the precomputed cost; otherwise, we return `-1` to show they are not connected.

> **Breadth-First Search**: For a more comprehensive understanding of the Breadth-First Search, check out the [BFS Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/). This resource provides an in-depth look at BFS, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

##### Main Function: `minimumCost(n, edges, queries)`
-   Construct the adjacency list (`adjList`) of the graph:
    -   For each `edge = [node1, node2, weight]` in edges:
        -   Push `[node2, weight]` to `adjList[node1]`.
        -   Push `[node1, weight]` to `adjList[node2]`.
-   Initialize:
    -   a `visited` array of size `n`.
    -   an array, called `components` of size `n`, to store the component ID of the component each node belongs to.
    -   an empty array, called `componentCost`.
    -   `componentId` to `0`.
-   Find the connected components of the graph:
    -   For each `node` from `0` to `n - 1`:
        -   If `node` is not visited, meaning that it belongs to a new component:
            -   Push the result of `getComponentCost(node, adjList, visited, components, componentId)` into `componentCost`.
            -   Increment `componentId` by `1`.
-   Initialize an empty array `answer` to store the answer to each query.
-   For each `query = [start, end]` in `queries`:
    -   If `components[start] == components[end]`, meaning that the two nodes belong to the same component:
        -   Push the cost of the component (`componentCost[components[start]]`) into `answer`.
    -   Otherwise, the two nodes are not connected, so push `-1` into `answer`.
-   Return `answer`.

##### `getComponentCost(source, adjList, visited, components, componentId)` function:
-   Initialize:
    -   a queue, called `nodesQueue`.
    -   `componentCost` to a number where all bits are set to 1 in its binary representation.
-   Push `source` into `nodesQueue` and mark it as visited.
-   While `nodesQueue` is not empty:
    -   Pop the top node of the queue as `node`.
    -   Mark that `node` belongs to this component by setting `components[node] = componentId`.
    -   For each `[neighbor, weight]` in `adjList[node]`:
        -   Update the component cost by performing a bitwise AND: `componentCost &= weight`.
        -   If `neighbor` is visited, continue.
        -   Otherwise, mark it as visited and push it into the queue.
-   Return `componentCost`.

#### Implementation

<iframe src="https://leetcode.com/playground/ZvmjGS6T/shared" frameBorder="0" width="100%" height="500" name="ZvmjGS6T"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the graph, $m$ the number of edges, and $q$ the number of queries.

-   Time complexity: $O(m + n + q)$

    First, we construct the adjacency list of the graph in $O(m)$ time, as we iterate over the edges and process each of them in constant time. Next, we perform a BFS traversal over the graph, which takes $O(n + m)$ time, as each node and edge is visited exactly once. Finally, we answer each query in constant time, as all component costs are already computed. Overall, the time complexity of the algorithm is $O(m + n + q)$, as the steps are executed sequentially and independently of one another.

-   Space complexity: $O(n + m)$

    The adjacency list contains exactly $2m$ elements, so it takes up $O(m)$ space. The other data structures we use, including the `visited`, `components`, and `componentCost` arrays, grow linearly with the number of nodes in the graph, contributing $O(n)$ to the algorithm's space complexity. Therefore, the overall space complexity is $O(n + m)$.

---

### Approach 3: Depth-First Search (DFS)

#### Intuition

In this approach, we will use the same logic as previously, assigning a unique ID to each component and marking all nodes of the component with this ID. However, we will now use a different type of graph traversal—Depth-First Search (DFS)—to find the connected components and mark the nodes. 

The main difference between the two traversals (BFS and DFS) is that DFS is typically implemented recursively and explores as far along a path as possible before backtracking, while BFS extends paths one layer at a time. In this problem, since we explore the entire graph and visit all nodes and edges exactly once, both DFS and BFS perform equally in terms of time complexity.

> **Depth-First Search**: For a more comprehensive understanding of the Depth-First Search, check out the [DFS Explore Card](https://leetcode.com/explore/featured/card/graph/620/depth-first-search-in-graph/). This resource provides an in-depth look at DFS, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

##### Main Function: `minimumCost(n, edges, queries)`
-   Construct the adjacency list (`adjList`) of the graph:
    -   For each `edge = [node1, node2, weight]` in edges:
        -   Push `[node2, weight]` to `adjList[node1]`.
        -   Push `[node1, weight]` to `adjList[node2]`.
-   Initialize:
    -   a `visited` array of size `n`.
    -   an array, called `components` of size `n`, to store the component ID of the component each node belongs to.
    -   an empty array, called `componentCost`.
    -   `componentId` to `0`.
-   Find the connected components of the graph:
    -   For each `node` from `0` to `n - 1`:
        -   If `node` is not visited, meaning that it belongs to a new component:
            -   Push the result of `getComponentCost(node, adjList, visited, components, componentId)` into `componentCost`.
            -   Increment `componentId` by `1`.
-   Initialize an empty array `answer`, to store the answer to each query.
-   For each `query = [start, end]` in `queries`:
    -   If `components[start] == components[end]`, meaning that the two nodes belong to the same component:
        -   Push the cost of the component (`componentCost[components[start]]`) into `answer`.
    -   Otherwise, the two nodes are not connected, so push `-1` into `answer`.
-   Return `answer`.

##### `getComponentCost(node, adjList, visited, components, componentId)` function:
-   Set `components[node] = componentId` to mark the `node` as part of the current component.
-   Mark `node` as visited.
-   Initialize `currentCost` to a number where all bits are set to 1 in its binary representation.
-   For each `[neighbor, weight]` in `adjList[node]`:
    -   Update the component cost by performing a bitwise AND: `currentCost &= weight`.
    -   If `neighbor` is not visited:
        -   Recursively explore the rest of the component and accumulate its cost by calling `getComponentCost(neighbor, adjList, visited, components, componentId)` and update `currentCost`.
-   Return `currentCost`.

#### Implementation

<iframe src="https://leetcode.com/playground/7m7LDYei/shared" frameBorder="0" width="100%" height="500" name="7m7LDYei"></iframe>

#### Complexity Analysis

Let $n$ be the number of nodes in the graph, $m$ the number of edges, and $q$ the number of queries.

-   Time complexity: $O(m + n + q)$

    Constructing the adjacency list of the graph requires $O(m)$ time, as each edge is processed in constant time. Additionally, the DFS traversal takes $O(m + n)$ time, since each node and each edge is visited exactly once. During the traversal, we calculate and store the costs of the components, so we answer each query in constant time. Therefore, the overall time complexity of the algorithm is $O(m + n + q)$.

-   Space complexity: $O(n + m)$

    The space complexity of the algorithm is determined by the size of the data structures used and the recursion depth. The adjacency list contains two elements for each edge of the graph, taking up $O(m)$ space, while the arrays `visited`, `components`, and `componentCost` have at most $n$ elements, contributing $O(n)$ to the space complexity. Moreover, the recursion depth can grow up to $n$ in the worst case, where all nodes belong to the same connected component and form a list. As a result, the total space complexity of the algorithm is $O(n + m)$.  
    
---