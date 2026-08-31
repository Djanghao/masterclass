# Official Solution

**Link:** [https://leetcode.com/problems/redundant-connection/solution/](https://leetcode.com/problems/redundant-connection/solution/)

---

## Solution

---

### Overview

We are given a graph consisting of $N$ nodes and $N − 1$ edges, which means the graph initially forms a tree. A tree is a special type of graph that is connected (there is a path between any two nodes) and acyclic (it does not contain any cycles). However, a new edge is added to the tree, connecting two nodes that are already part of the graph. This new edge creates a cycle because there are now two distinct paths between some pairs of nodes. As a result, the graph is no longer a tree but a single-cycle graph.

Our goal is to identify the edge that, if removed, will restore the graph to its original state as a tree. Since the tree must be connected and acyclic, removing any edge from the cycle will break the cycle and turn the graph into a tree. However, if there are multiple edges that can be removed to achieve this, we are required to return the edge that appears last in the given list of edges.

---

### Approach 1: Depth-First Search - Brute Force

#### Intuition

The key idea is that we can safely discard an edge if it connects two nodes that are already part of the same connected component. In simple terms, this means that if there's already a path between the two nodes (even without the current edge), adding this edge would create a cycle, making it redundant.

To check if a path exists between two nodes, we can use graph traversal techniques such as Depth-First Search (DFS) or Breadth-First Search (BFS). In this approach, we will use DFS to verify whether the two nodes of each edge are already connected. If you're unfamiliar with DFS, you can explore this helpful [DFS guide](https://leetcode.com/explore/featured/card/graph/).

Now, as we go through the edges, we examine each one. For every edge, we use DFS to determine if the two nodes it connects are already part of the same connected component. If a path already exists, that means the nodes are connected, and we can safely discard the edge because it would create a cycle. If there’s no existing path, we know that the edge is essential for connecting the nodes, so we add it to our graph.

One important thing to remember is that we process the edges in the order they appear in the input list. This ensures that if multiple redundant edges are present, the last one we process will be the one that forms the cycle.

#### Algorithm

1. Define the function `isConnected` that takes the source node `src`, target node `target`, boolean array `visited`, and the adjacency list `adjList`. This returns true if there's a path between `src` and `target` with the edges in the list `adjList` using DFS:
    - Mark the current node `src` as visited.
    - Initialize the variable `isFound` to `false`, this is going to denote the answer.
    - Recursively traverse to the unvisited adjacent nodes and check if the `target` node is found.
    - Return `isFound` in the end.
2. Iterate over the list `edges` from left to and right and for each `edge`:
    - Initialize an empty array `visited` with all indices as `false`.
    - Call the method `isConnected` and if it returns `true` return `edge`
    - Otherwise, add the edge to the adjacency list `adjList`.
3. If the input is valid, this part of the code should be unreachable. Return an empty list `{}` in such cases.

#### Implementation

<iframe src="https://leetcode.com/playground/Ydw6rbYM/shared" frameBorder="0" width="100%" height="500" name="Ydw6rbYM"></iframe>

#### Complexity Analysis

Here, $N$ is the number of nodes and edges in the given graph.

- Time complexity: $O(N^2)$.

    Iterating over each of the $N$ edges and performing a DFS to check if the nodes are already connected would result in $N \times N$ operations. The time complexity of a DFS is $O(V+E)$, where $V$ is the number of vertices and $E$ is the number of edges. In this problem, both $V$ and $E$ are equal to $N$. Therefore, the total time complexity is $O(N^2)$.

- Space complexity: $O(N)$

    The adjacency list `adjList` will store $N$ edges, and the size of the `visited` array is $N$. Additionally, space is required for the active stack calls in the DFS, which can be as large as one per node. Therefore, the total space complexity is $O(N)$.

---

### Approach 2: Depth-First Search - Single Traversal

#### Intuition

We cannot remove just any edge from the graph, as doing so might disconnect the graph. The edge we remove must be part of the cycle. If we can identify the edges or nodes involved in the cycle, we can choose to remove the edge that appears last in the input edge list.

To detect the cycle in the graph, we need to identify at least one node that belongs to it. This can be accomplished using DFS while keeping track of the parent of each node, where the parent represents the node from which we reached the current node. If we encounter a node that has already been visited and the node we are coming from is different from its parent, we can conclude that the node is part of the cycle.

Once we identify a node in the cycle, we can backtrack through the parent array to find all the other nodes that are part of the cycle, until we return to the starting node. We will mark all these cycle nodes in an unordered map. Then, we iterate over the edges in reverse order, and if both nodes of an edge are marked in the map, we can discard this edge as it forms the cycle. Finally, we can return this redundant edge.

![fig](../Figures/684/684A.png)

#### Algorithm

1. Initialize Variables:

    - Set `cycleStart` to `-1` to mark the start of the cycle.
    - Create a `visited` array to keep track of visited nodes.
    - Create a `parent` array to store the parent of each node in the DFS traversal.
    - Initialize an adjacency list `adjList` to represent the graph.

2. Build the Graph:

    - Loop through each edge in the input `edges` list.
    - For each edge `[u, v]`, add `v` to `adjList[u]` and `u` to `adjList[v]` to make the graph undirected.

3. Start a DFS from node `0` (or any node, as the graph is connected).

    - In the DFS function:
        - Mark the current node as visited.
        - For each adjacent node, check if it's visited:
            - If not visited, recursively call DFS on the adjacent node, and update its parent.
            - If the node is visited and its parent is different from the previous one, mark it as `cycleStart` to identify the cycle.

4. Track Cycle Nodes:

    - Using the `parent` array, backtrack from `cycleStart` to collect all nodes in the cycle.
    - Store these nodes in the `cycleNodes` map for quick lookup.

5. Identify the Redundant Edge:

    - Iterate through the edges in reverse order.
    - For each edge, check if both nodes of the edge are in the `cycleNodes` map:
        - If both nodes are in the cycle, return this edge as the redundant connection.

#### Implementation

<iframe src="https://leetcode.com/playground/5URgLFer/shared" frameBorder="0" width="100%" height="500" name="5URgLFer"></iframe>

#### Complexity Analysis

Here, $N$ is the number of nodes and edges in the given graph.

- Time complexity: $O(N)$.

    We perform the DFS starting from node `0` only once, which has a time complexity of $O(N)$. Then, we iterate over the cycle nodes using the `parent` array, with a maximum of $N$ iterations if all nodes are part of the cycle. Finally, we iterate over all edges and check the map in $O(1)$ time for each edge. Therefore, the total time complexity is $O(N)$.

- Space complexity: $O(N)$

    The adjacency list `adjList` will store $N$ edges, and the size of the visited array is $N$. Additionally, space is required for the active stack calls during DFS, which can be as large as one per node. The map `cycleNodes` can contain at most $N$ entries. Therefore, the total space complexity is $O(N)$.

---

### Approach 3: Disjoint Set Union (DSU)

#### Intuition

We’re still working with the same core idea as in the first approach: an edge can be discarded if the nodes it connects are already part of the same component. In the previous approach, we used DFS to check if a path existed between the nodes. However, there's an alternative and more efficient way to do this using a data structure called Disjoint Set Union (DSU).

> If you are not familiar with DSU, please go through our [Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/). We will not talk about implementation details here and assume you are already familiar with the interface of DSU.

The idea behind DSU is that each node is in its own a separate set. As we go through the edges, we perform a union operation that merges the sets of the two connected nodes. This helps us track which nodes are in the same component. If, during this process, we encounter an edge where the two nodes are already in the same component (i.e., they share the same representative), we know that adding this edge would create a cycle, so it’s redundant and can be safely discarded.

The great thing about DSU is that it can check whether two nodes are in the same component in nearly constant time, specifically in $O(α(N))$, where $α(N)$ is the inverse Ackermann function (which grows extremely slowly). This makes DSU much faster than DFS for this type of problems.

In this approach, we treat each node as its own component at the start. As we process each edge, we perform the union operation to merge the components of the two nodes connected by the edge. If the nodes are in different components, we unite them and update their representatives. If the nodes are already in the same component, we’ve found a redundant edge and return it as the result.

#### Algorithm

1. Define DSU (Disjoint Set Union):

    - Initialize two arrays:
        - `size[]` to store the size of each component (starts with 1 for each node).
        - `representative[]` to track the representative (or root) of each component (initially, each node is its own representative).
        - Find Operation (`find`):
            - For each node, find its ultimate representative (root of the component).
            - Path Compression: During the recursive search, update the representative of each visited node to directly point to the root, speeding up future lookups.
        - Union Operation (`doUnion`):
            - Check if the two nodes belong to the same component:
            - If they already share the same representative, they are part of the same component, so adding this edge would form a cycle. Return `false`.
            - If the nodes belong to different components, union them:
            - Attach the smaller component to the larger one (union by size), ensuring the tree remains balanced to minimize depth.

2. Iterate Through Edges:

    - Process each edge in the list of edges:
        - Convert the 1-based indices from the input to 0-based for array indexing.
        - Use `doUnion` to attempt connecting the nodes of the edge.
        - If `doUnion` returns `false`, it means adding this edge would form a cycle, so return the current edge as the redundant edge.

3. If the input is valid, this part of the code should be unreachable. Return an empty list `{}` in such cases.

#### Implementation

<iframe src="https://leetcode.com/playground/JWuYpx4d/shared" frameBorder="0" width="100%" height="500" name="JWuYpx4d"></iframe>

#### Complexity Analysis

Here, $N$ is the number of nodes and edges in the given graph.

- Time complexity: $O(N \cdot \alpha(N))$

    We iterate over all edges, and for each edge, we invoke the `doUnion` function, which has a time complexity of $O(\alpha(N))$, given that both union by size and path compression are employed. Consequently, the overall time complexity of the algorithm is $O(N \cdot \alpha(N))$. It is important to note that $\alpha(N)$ represents the inverse Ackermann function, which grows so slowly that it is often considered asymptotically constant, or $O(1)$.

- Space complexity: $O(N)$

    The list `representative`, used to store the representatives, and the list `size`, used to store the size of each component, will each contain $N$ entries. Therefore, the total space complexity is $O(N)$.

---