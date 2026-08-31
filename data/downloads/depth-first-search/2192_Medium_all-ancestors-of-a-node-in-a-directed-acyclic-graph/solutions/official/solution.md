# Official Solution

**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solution/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a directed acyclic graph of `n` nodes, and our task is to return a list where each sub-list contains the ancestors of the node at that index, sorted in ascending order.

A [Directed Acyclic Graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph) is a graph where each edge has a defined direction from one vertex to another and following these edges will never create a closed loop.

A prerequisite for solving this problem is knowledge of graph traversals, namely depth-first search and breadth-first search. If you are not familiar with popular graph traversal techniques, we strongly encourage you to check out this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/graph/).
    
---

### Approach 1: Depth First Search (Reversed Graph)

#### Intuition

A node `u` is an ancestor of node `v` if we can reach `v` by following a series of directed edges from `u`. Thus, all nodes from which we can reach `v` are its ancestors. But how can we efficiently find all ancestors for each node?

The brute force strategy to determine if node `u` is an ancestor of node `v` involves performing a graph traversal from `u` to check if `v` can be reached. However, this approach has a time complexity of $O(n^3)$, which is too slow for our constraints. We need a more optimized technique.

The key insight lies in reversing the traversal direction. By starting from each node and tracing back to all its ancestors directly, we can simplify our task. This is achieved by reversing the edges of the graph, flipping parent-child connections to child-parent. Consequently, nodes reachable from a given node in the reversed graph were its ancestors in the original graph. Have a look at the slides below:

!?!../Documents/2192/reversed_slideshow.json:1162,1142!?!

To find the descendants of a node `v`, we start a depth-first traversal from `v` in the reversed graph, using a `visited` set to track nodes. After the traversal, we collect all nodes in `visited` (except `v`) in a list, representing the ancestors of `v` in the original graph. Performing this traversal for each node provides the required ancestors for all nodes.

#### Algorithm

1. Main method `getAncestors`:
   - Initialize `adjacencyList` to store the graph representation.
   - Add the edges to the `adjacencyList` but reverse their direction.
   - Initialize a list of lists `ancestorsList` to store the ancestors of each node.
   - Iterate through each node:
     - Initialize:
       - An empty list `ancestors` to store ancestors of the current node.
       - A set `visited` to store the nodes already visited in the traversal.
     - Call the `findChildren` method to perform DFS and find all descendants of the current node.
     - Add all nodes present in the `visited` set to `ancestors`.
     - Add `ancestors` to `ancestorsList`.
   - Return `ancestorsList` containing the ancestors for each node.
  
2. Helper method `findChildren`:
   - Define the `findChildren` method with parameters: `currentNode`, `adjacencyList` and the `visited` set for the current traversal.
   - Add `currentNode` to the `visited` set.
   - Iterate through the neighbors of `currentNode`. If `neighbor` has not been visited yet:
     - Recursively call `findChildren` on `neighbor`.

#### Implementation

<iframe src="https://leetcode.com/playground/TMApG9fd/shared" frameBorder="0" width="100%" height="500" name="TMApG9fd"></iframe>

#### Complexity Analysis

Let $n$ be the number of vertices in the graph and $m$ be the length of the `edges` array. 

- Time complexity: $O(n^2 + n \cdot m)$

    Initializing and populating the adjacency list requires $O(n + m)$ time.

    The algorithm calls the the DFS method a total of $n$ times. The depth-first search has a worst-case time complexity of $O(n + m)$. Thus, finding the ancestors take a total of $O(n^2 + n \cdot m)$. 

    Forming the list of ancestors requires $O(n)$ time, which also occurs $n$ times. This equates to a $O(n^2)$ complexity.

    Thus, the total time complexity is $O(n + m)$ + $O(n^2 + n \cdot m)$ + $O(n^2)$, which simplifies to $O(n^2 + n \cdot m)$.

- Space complexity: $O(n + m)$

    The adjacency list takes $O(n + m)$ space, while the `ancestors` list and the `visited` set each require $O(n)$ space. The recursion call stack can go as deep as $O(n)$ in the worst case. Thus, the total space complexity of the algorithm is $O(n + m) + 3 \cdot O(n)$, which simplifies to $O(n + m)$.

    > Note: We are not considering the space required by `ancestorsList` in our analysis, since it is part of the output space. If we do consider it, `ancestorsList` would have a worst-case space complexity of $O(n^2)$, making the space complexity of the algorithm $O(n^2 + m)$.

---

### Approach 2: Depth First Search (Optimized)

#### Intuition

We can solve this problem without reversing the edges. Observe that a vertex `v` will be an ancestor for all nodes reachable from it. Therefore, we can initiate a depth-first traversal from each vertex and designate that vertex as an ancestor to all nodes it can reach.

Our depth-first search would be very similar to Approach 1; but with a key difference: we add the given node as an `ancestor` to all children of the node we're currently exploring. We then recursively call our depth-first search function on each child until all descendants of `ancestor` are marked with its presence. 

Have a look at this slideshow to better understand this process:

!?!../Documents/2192/ancestors_slideshow.json:1742,1310!?!

Another optimization we can implement is eliminating the `visited` set. In each traversal, we add `ancestor` to the list of ancestors for each node. To determine if a node has been visited, we check if its last ancestor matches the current ancestor. If it does, the node has been visited and can be safely skipped from further exploration.

#### Algorithm

1. Main method **getAncestors**:
   - Initialize: 
     - A list of lists `adjacencyList` to store the adjacency list of the graph.
     - A list of lists `ancestors` to store the ancestors of each node.
   - Populate `adjacencyList` with edges from the input.
   - For each node, use depth-first search (DFS) to find all its ancestors.
   - Return `ancestors` containing the ancestors of each node.
  
2. Helper method **findAncestorsDFS**:
   - Define a method `findAncestorsDFS` that takes four parameters: the `ancestor` node, `adjacencyList`, the current node being visited, and `ancestors`.
   - Loop through each child node `childNode` of the current node in the adjacency list:
     - Check if `ancestor` is already added to the child node's ancestor list. If not:
       - Add `ancestor` to the child node's ancestor list.
       - Recursively call `findAncestorsDFS` for `childNode`.

#### Implementation

<iframe src="https://leetcode.com/playground/ejRveq7U/shared" frameBorder="0" width="100%" height="500" name="ejRveq7U"></iframe>

#### Complexity Analysis

Let $n$ be the number of vertices in the graph and $m$ be the length of the `edges` array. 

- Time complexity: $O(n^2 + n \cdot m)$

    Initializing and populating the adjacency list requires $O(n + m)$ time.
    
    The depth-first search (DFS) has a time complexity of $O(n + m)$ and is executed $n$ times. Therefore, the total time complexity of this section is $O(n^2 + n \cdot m)$.
    
    The overall time complexity of the algorithm combines $O(n + m)$ for initialization and $O(n^2 + n \cdot m)$ for the DFS, resulting in $O(n^2 + n \cdot m)$ complexity.

- Space complexity: $O(n + m)$

    The adjacency list representation of the graph takes $O(n + m)$ space. The call stack for the DFS could go as deep as the height of the graph, which in the worst case is $O(n)$. Thus, the total space complexity of the algorithm is $O(n + m) + O(n)$, simplifying to $O(n + m)$.

    > Note: We have not considered the space required by `ancestors` in our analysis, since it is part of the output space.

---

### Approach 3: Topological Sort (BFS)

#### Intuition

The problem revolves around the nature of the graph as a Directed Acyclic Graph (DAG). In a DAG, cycles are absent, and each path progresses clearly from a starting point to an endpoint. This characteristic implies that by processing nodes in a specific order, we can systematically determine each node's ancestors.

The key to identifying this optimal processing order lies in topological sorting. In a DAG, topological sorting arranges nodes such that for every directed edge from node `u` to node `v`, `u` precedes `v` in the ordering. This arrangement is crucial because it ensures that when we process a node `v`, we have already considered all its potential ancestors. To achieve this ordering, we will use Kahn's algorithm.

Kahn's algorithm is a method for topologically sorting a directed acyclic graph. It starts by identifying all nodes without incoming edges and placing them in a queue. At each step, it removes a node from this queue, adds it to the sorted list, and eliminates its outgoing edges from the graph. This process may create new nodes without incoming edges, which are then added to the queue. The algorithm continues until the queue is empty. The resulting list provides a valid topological ordering of the graph. For a more detailed explanation of Kahn's algorithm and its implementation, refer to this [Explore Card](https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3886/).

After establishing the topological order, we process each node sequentially. For each `node`, we iterate through its `neighbors`, designating both the node itself and its ancestors as ancestors of the `neighbor`. To efficiently track each node's ancestors, we use a list of sets. Sets, unlike lists, maintain unique elements, ensuring each ancestor appears only once in a node's ancestor set.

In the final step, we'll convert these sets of ancestors into lists, as required by the problem statement.

#### Algorithm
 
- Initialize a list of lists `adjacencyList` to store the edges of the graph.
- Initialize an array `indegree` to store the in-degree of each node.
- Fill `adjacencyList` and the `indegree` array based on the given edges.
- Initialize a queue `nodesWithZeroIndegree` and add all such nodes to the queue.
- Initialize a list `topologicalOrder` to store the topological order of nodes and process nodes in the queue. For each node:
  - Reduce the in-degree of its neighbors. 
  - Add neighbors with zero in-degree to the queue.
- Initialize a list `ancestorsList` to store the result and a list of sets `ancestorsSetList` to store the ancestors of each node.
- For each `node` in the topological order:
  - Loop over all neighbors `neighbor` of `node`. For each `neighbor`:
    - Add `node` as the immediate parent of `neighbor` to the set `ancestorsSetList[neighbor]`.
    - Add all other ancestors of `node` to the set `ancestorsSetList[neighbor]`.
- Add the contents of each set to it's corresponding list in `ancestorsList` in ascending order.
- Return `ancestorsList`, which contains the ancestors of each node in the graph.

#### Implementation

<iframe src="https://leetcode.com/playground/BGfz4pY8/shared" frameBorder="0" width="100%" height="500" name="BGfz4pY8"></iframe>

#### Complexity Analysis

Let $n$ be the number of vertices in the graph and $m$ be the length of the `edges` array.

* Time complexity: $O(n^2 + m)$

    Creating and filling the adjacency list and in-degree array requires $O(n + m)$ time.
    
    Topological sort on the graph also needs $O(n + m)$ time.
    
    In the worst-case scenario, if the graph forms a chain, the time complexity could be $O(n^2)$. This is because each node in the chain would have a growing number of ancestors. So, the sizes of the ancestor lists would be $0$, $1$, $2$, ..., $n-2$, $n-1$. Forming these lists would take another $O(n^2)$ time.
    
    Thus, the overall time complexity of the algorithm is $O(n^2 + m)$.

* Space complexity: $O(n^2 + m)$

    We use an adjacency list which takes $O(n + m)$ space.

    We store an array of size $n$ to keep track of the indegree of each node, taking $O(n)$ space.

    All nodes are added to the queue once, requiring $O(n)$ space.

    The topological order list requires $O(n)$ space.

    Maintaining a list of sets to store the ancestors requires $O(n^2)$ space in the worst case.

    Considering all individual components, the total space complexity comes out to be $O(n^2 + m)$.

    > Note: As stated in the previous approaches, the space taken by `ancestorsList` is not taken into consideration since it is part of the output space. 

---