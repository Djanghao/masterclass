# Official Solution

**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solution/](https://leetcode.com/problems/build-a-matrix-with-conditions/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an integer `k` and two 2D integer arrays `rowConditions` and `colConditions`. The constructed matrix's size should be `k x k` containing each value from `1` to `k` exactly once. `rowConditions` contains tuples of the form: `[above, below]` for every index `i`, which denotes that the integer `above` should appear in a row strictly above the integer `below`. Similarly, in `colConditions`, the tuples are of the form `[left, right]` and denote that `left` should appear in a column strictly to the left of `right`. We need to return any matrix that satisfies these conditions.

Let's say that `rowConditions` is given by `[1,2],[2,3],[3,4]` for `k=4`. This implies that 1 should appear above 2, 2 should appear above 3, and 3 should appear above 4 in the matrix. Therefore, `[1,2,3,4]` is the only solution possible for the row arrangement. Now, observe that any possible column arrangement can be used to create this row solution i.e. if we have found the solution arrays for rows and columns we can merge them to create the desired matrix.

Therefore, we can solve this problem for rows and columns, by calculating their solutions independently and then merging those solutions in a matrix as given above. Let's try to calculate the solution array for `rowConditions` first by representing the information in the form of a graph:

- Let `G(V,E)` represent directed, unweighted graphs.
- Each value from `1` to `k` would represent a vertex in the graph.
- The edges are modeled after the prerequisite relationship between the numbers. So, a pair `[a,b]` in the `rowConditions` array means `a` must appear before `b`. The graph represents this as a directed edge `a ➔ b`.
- If the graph would be acyclic, then an ordering would always be possible. Since it's mentioned that such an ordering may not always be possible, we may have a cyclic graph.

We are trying to order nodes based on the edges such that if `a->b` is an edge, `a` must appear before `b` in the ordering. Such an ordering of subjects is referred to as a [Topological Sorted Order](https://en.wikipedia.org/wiki/Topological_sorting). There are two approaches that we will be looking at in this article to solve this problem.

---

### Approach 1: Depth-First Search

#### Intuition

During depth-first traversal in a graph, starting from node `A`, DFS explores all paths stemming from `A` before completing its recursion for `A` and moving to other nodes. Consequently, all nodes in these paths have `A` as an ancestor, making `A` a prerequisite for all paths originating from it.

Now, we know how to get all the integers that have a particular integer as a prerequisite. If a valid ordering of integers is possible, the node `A` would come before all the other sets of integers that have it as a prerequisite. This idea for solving the problem can be explored using a depth-first search.

Initialize a recursive function given by `dfs` where the recursive stack will contain the topologically sorted order of the nodes in our graph.

For each node in our graph, we will run a depth-first search in case that node was not already visited in some other node's DFS traversal. Once the processing of all the neighbors is done, we will add this node to the stack. We are using the recursion stack to simulate the ordering we need.

Once all the nodes have been processed, we will return the nodes as they are returned in the recursion stack from top to bottom.

Now that we have topologically sorted arrays for both `rowConditions` and `colConditions`, how can we utilize them to construct the matrix? Each row and column should correspond to their respective sorted arrays. Therefore, the value at position `matrix[i][j]` is derived from `rowConditions[i]` and `colConditions[j]`.

#### Algorithm

**Main function - `buildMatrix(k, rowConditions, colConditions)`**

1. Create two arrays given by `orderRows` and `orderColumns` to store the topological sorted sequence.
2. Store the values of `topoSort(rowConditions,k)` and `topoSort(colConditions,k)` in them.
3. If either of the arrays is empty, return `{}`.
4. Create a `matrix` of size `k x k` and initialize all values with 0.
5. Iterate `i` through all values from `0` to `k`:
    - Iterate `j` through all values from `0` to `k`:   
        - If `orderRows[i] == orderColumns[j]`, store `orderRows[i]` in `matrix[i][j]`.
6. Return the `matrix`.

**`topoSort(edges,n)`**

1. Initialize an adjacency matrix `adj` with `n+1` rows, and an empty array `order`. Also, initialize a `visited` array and a boolean `hasCycle` variable with `false`.
2. Store all the `edges` in `adj` by pushing `b` in `adj[a]` denoting an edge from `a` to `b`.  
4. For all nodes with an index from `1` to `n`:
    - If the current node is not visited, perform `dfs(i, adj, visited, order, hasCycle)`. If the `hasCycle` value is `true`, return an empty array.
5. Reverse the `order` array.
6. Return `order`.  

**`dfs(node, adj, visited, order, hasCycle)`**

1. Set `visited[node]` to `1`.
2. Iterate over all neighbors of `node`:
    - If `visited[neighbor] == 0`, perform `dfs(neighbor, adj, visited, order, hasCycle)`. If `hasCycle` is true, return.
    - If `visited[neighbor] == 1`, set `hasCycle` to true, return.
4. Set `visited[node]` as `2`.
5. Push `node` in `order` array.

#### Implementation

<iframe src="https://leetcode.com/playground/HcR3PUwv/shared" frameBorder="0" width="100%" height="500" name="HcR3PUwv"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `rowConditions` and `colConditions` array.

- Time complexity: $O(max(k\cdot k,n))$

   Since the total edges in the graph are $n$ and all the nodes are visited exactly once, the time complexity of the depth-first search operation is $O(n)$. 
   
   The time complexity of creating and filling the values of a $k \cdot k$ sized matrix is $O(k\cdot k)$. Both these operations are performed independently. 
   
   Therefore, the time complexity is given by $O(max(k\cdot k,n))$.

- Space complexity: $O(max(k\cdot k,n))$

   Since the total edges in the graph are $n$, the space complexity of the depth-first search operation is $O(n)$. The space complexity of creating a $k \cdot k$ sized matrix is $O(k\cdot k)$. Both these operations are performed independently. 
   
   Therefore, the space complexity is given by $O(max(k\cdot k,n))$.

---

### Approach 2: Kahn's Algorithm

#### Intuition

Kahn’s algorithm works by keeping track of the number of incoming edges into each node (in-degree). It works by repeatedly visiting the nodes with an in-degree of zero and deleting all the edges associated with it leading to a decrement of in-degree for the nodes whose incoming edges are deleted. This process continues until no elements with zero in-degree can be found.

If you are not familiar with Kahn's algorithm, we suggest you read our [LeetCode Explore Card](https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3886/).

After constructing the graph, we can push all the nodes with in-degree 0 to a queue. These nodes represent integers that are not constrained by the position of other integers. In a queue, push these integers first, since they can be completed without any prerequisites.

Now, iterate over all the queue elements, push them in the topologically sorted array, and reduce the in-degree by 1 of each direct neighbor of the current node. If the in-degree of the direct neighbor becomes 0, push it in the queue. Repeat the process till you have visited all the nodes with zero in-degree.

For example, let's say the given graph has three edges: `1 -> 2`, `2 -> 3`, and `1 -> 3`. In this graph, the in-degree of each node represents the number of prerequisites that must be completed before reaching that node:

- Node `1` has an in-degree of `0`
- Node `2` has an in-degree of `1`
- Node `3` has an in-degree of `2`

We start with node `1`, as it has no prerequisites. We add it to our queue and process it first. Node `1` is a direct prerequisite for both nodes `2` and `3`, so we decrement their in-degrees:

- Node `2`'s in-degree becomes `0`
- Node `3`'s in-degree becomes `1`

Now we can add node `2` to our queue, as its in-degree is `0`. Processing node `2`, we decrement the in-degree of its neighbor, node `3`:

- Node `3`'s in-degree becomes `0`

Finally, we add node `3` to our queue and process it.

The resulting topologically sorted order is `1 -> 2 -> 3`.

#### Algorithm

**Main function - `buildMatrix(k, rowConditions, colConditions)`**

1. Create two arrays given by `orderRows` and `orderColumns` to store the topological sorted sequence.
2. Store the values of `topoSort(rowConditions, k)` and `topoSort(colConditions, k)` in them.
3. If either of the arrays is empty, return `{}`.
4. Create `matrix` of size `k x k` and initialize all values with 0.
5. Iterate `i` through all values from `1` to `k`:
    - Iterate `j` through all values from `1` to `k`:
        - If `orderRows[i] = orderColumns[j]`, store `orderRows[i]` in `matrix[i][j]`.
6. Return the `matrix`.

**`topoSort(edges, n)`**

1. Initialize an adjacency matrix `adj` with `n+1` rows, an array `deg` with size `n+1`, and an empty array `order`.
2. Store all the `edges` in `adj` by pushing `b` in `adj[a]` (denoting an edge from `a` to `b`). Also, increment the in-degree of `b` in the `deg` array.
3. Initialize a queue `q` and push all nodes with in-degree values 0 to the queue.
4. While `q` is not empty:
    - Store the front element of `q` in `f` and pop it.
    - Push `f` in `order`.
    - Decrement `n` by 1.
    - Iterate through each neighbor of `f`:
        - Decrement the in-degree of the neighbor. If the in-degree becomes 0, push it in `q`.
5. If `n` is not equal to 0, return an empty array.
6. Return `order`.

!?!../Documents/2392/slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/7Ckf6TjR/shared" frameBorder="0" width="100%" height="500" name="7Ckf6TjR"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `rowConditions` and `colConditions` array.

- Time complexity: $O(max(k\cdot k,n))$

   Since the total edges in the graph are $n$ and all the nodes are visited exactly once, the time complexity of the breadth-first search operation is $O(n)$. 
   
   The time complexity of creating and filling the values of a $k \cdot k$ sized matrix is $O(k\cdot k)$. Both these operations are performed independently. 
   
   Therefore, the time complexity is given by $O(max(k\cdot k,n))$.

- Space complexity: $O(max(k\cdot k,n))$

   Since the total edges in the graph are $n$, the space complexity of the breadth-first search operation is $O(n)$. 
   
   The space complexity of creating a $k \cdot k$ sized matrix is $O(k\cdot k)$. Both these operations are performed independently. 
   
   Therefore, the space complexity is given by $O(max(k\cdot k,n))$.

---