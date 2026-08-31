# Official Solution

**Link:** [https://leetcode.com/problems/number-of-closed-islands/solution/](https://leetcode.com/problems/number-of-closed-islands/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a 2D `grid`. Each cell of `grid` represents a land or water cell denoted by `0` and `1` respectively.


Our task is to return the number of closed islands where a closed island is an island totally (all left, top, right, bottom) surrounded by `1s`.

---

### Approach 1: Breadth First Search

#### Intuition

The problem states that an island is formed by connecting all of the '0s' in all four directions (left, top, right, and bottom), which leads us to model the problem as a graph.

We can treat the 2D grid as an undirected graph. A land cell in `grid` corresponds to a node in such a graph with an undirected edge between horizontally or vertically adjacent land cells.

Let's see what forms an island in such a graph. So, we begin at any node and proceed to its neighbors, i.e., all nodes one edge away. From the nodes 1 edge away, we move to their neighbors, i.e., all the nodes 2 edges away from the starting node, and so on. If we keep traversing until we can't anymore, all the nodes that are visited in this traversal together form an island.

While traversing the island, we look to see if any node in the graph corresponds to a cell at the `grid`'s boundary. The island does not form a closed island if any node on it is on the `grid`'s boundary. Otherwise, a closed island is formed if there is no node on the `grid`'s boundary.

We can use a graph traversal algorithm like breadth-first search (BFS) to traverse over the islands. BFS is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `l`) are explored before moving on to the nodes at the next level (`l + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

We perform a BFS from every unvisited land cell, treating it as a node. While traversing the island, we check if any node in the island is present on the `grid`'s boundary. If we have such a node, the island is not a closed island. Otherwise, we have a closed island if we never visit a cell at the `grid`'s edge. As a result, we add one to our answer variable.

It is important to note that we will not stop the BFS traversal if we come across a node on the boundary. We will perform the complete BFS traversal to cover the entire island so that we can mark all the nodes of the island and not visit any of its nodes again.

Here's a visual step-by-step example:

!?!../Documents/1254/1254_number_of_closed_islands.json:601,301!?!

#### Algorithm

1. Create two variables, `m` and `n`, to store the number of rows and columns in the given `grid`.
2. Create an answer variable `count` to keep track of the number of closed islands in `grid`. We initialize it with `0`.
3. Create a 2D array called `visit` to keep track of visited cells.
4. Iterate over all the cells of `grid` and for every cell `(i, j)` check if it is a land cell or not. If it is a land cell and it has not been visited yet, begin a BFS traversal from `(i, j)` cell:
    - We use the `bfs` function to perform the traversal. For each call, pass `x`, `y`, `m`, `n`, `grid` and `visit` as the parameters. The `x` and `y` parameters represent the row and column of the cell from which BFS should begin. We start with `(i ,j)` cell.
    - We initialize a queue `q` of pair of integers and push `(x, y)` into it. We also mark `(x, y)` as visited.
    - Create a boolean variable `isClosed` that stores whether or not the current island is a closed island or not. We initialize it to `true` because we haven't found any nodes in the island that are on the `grid` boundary yet.
    - While the queue is not empty, we dequeue the first pair `(x, y)` from the queue and iterate over all its neighbors. If any neighboring cell is not in bounds of `grid`, it means the current `(x, y)` cell is present at the boundary of `grid`. We do not have a closed island, and we mark `isClosed = false`. For each neighboring cell, we check if it is a land cell or not. If it is a land cell and has not been visited yet, we mark it as visited and push `(r, c)` into the queue.
    - After the queue is empty, we return `isClosed`.
    - If `bfs` returns `true`, we increment `count` by 1 .
5. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/kUdyBASY/shared" frameBorder="0" width="100%" height="500" name="kUdyBASY"></iframe>

#### Complexity Analysis

Here, $m$ and $n$ are the number of rows and columns in the given grid.

* Time complexity: $O(m \cdot n)$

    - Initializing the `visit` array takes $O(m \cdot n)$ time.
    - We iterate over all the cells and find unvisited land cells to perform BFS traversal from those. This takes $O(m \cdot n)$ time.
    - Each queue operation in the BFS algorithm takes $O(1)$ time, and a single node can be pushed once, leading to $O(m \cdot n)$ operations for $m \cdot n$ nodes. We iterate over all the neighbors of each node that is popped out of the queue. So for every node, we would iterate four times to iterate over the neighbors, resulting in $O(4 \cdot m \cdot n) = O(m \cdot n)$ operations total for all the nodes.

* Space complexity: $O(m \cdot n)$

    - The `visit` array takes $O(m \cdot n)$ space.
    - The BFS queue takes $O(m \cdot n)$ space in the worst-case because each node is added once.

---

### Approach 2: Depth First Search

#### Intuition

As we have to traverse over `grid` modeled as a graph to find the closed islands, another method is to use a depth-first search (DFS).

In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.

Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

#### Algorithm

1. Create two variables, `m` and `n`, to store the number of rows and columns in the given `grid`.
2. Create an answer variable `count` to keep track of the number of closed islands in `grid`. We initialize it with `0`.
3. Create a 2D array called `visit` to keep track of visited cells.
4. Iterate over all the cells of `grid` and for every cell `(i, j)` check if it is a land cell or not. If it is a land cell and it has not been visited yet, begin a DFS traversal from `(i, j)` cell:
    - We use the `dfs` function to perform the traversal. For each call, pass `x`, `y`, and `grid` as the parameters. The `x` and `y` parameters represent the row and column of the cell from which DFS should begin. We start with `(i ,j)` cell.
   - If the cell `(x, y)` is out of bounds, it means there was a land cell at the boundary of `grid` whose neighbor is `(x, y)`. So, we return `false` to indicate that this island is not closed.
    - Else if it is a water cell or an already visited cell, we return `true`.
    - Otherwise, we visit this cell and mark it as visited. We create a boolean variable `isClosed` that stores whether or not the current island is a closed island or not. We initialize it to `true` because we haven't found any nodes in the island that are on the `grid` boundary yet.
    - We then call `dfs` recursively from each of the neighbors of `(x, y)`.
    - If any of the directions leads to a cell in the island at the `grid` boundary, the island is not closed, and we mark `isClosed = false`. As discussed above, it is worth noting that in order to mark all the cells of the island, we called `dfs` individually over each of the four neighbors. We can't simply use `dfs(x - 1, y, m, n, grid, visit) && dfs(x + 1, y, m, n, grid, visit) && dfs(x, y - 1, m, n, grid, visit) && dfs(x, y + 1, m, n, grid, visit)` because if the first `dfs` call returns `false`, the next three `dfs` calls will not be executed.
    - If `dfs` returns `true`, we increment `count` by 1.
4. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/HsudNnFS/shared" frameBorder="0" width="100%" height="500" name="HsudNnFS"></iframe>

#### Complexity Analysis

Here, $m$ and $n$ are the number of rows and columns in the given grid.

* Time complexity: $O(m \cdot n)$

    - Initializing the `visit` array takes $O(m \cdot n)$ time.
    - We iterate over all the cells and find unvisited land cells to perform DFS traversal from those. This takes $O(m \cdot n)$ time.
    - The `dfs` function visits each node once, leading to $O(m \cdot n)$ operations for $m \cdot n$ nodes. We iterate over all the neighbors of each node that is popped out of the queue. So for every node, we would iterate four times to iterate over the neighbors, resulting in $O(4 \cdot m \cdot n) = O(m \cdot n)$ operations total for all the nodes.

* Space complexity: $O(m \cdot n)$

    - The `visit` array takes $O(m \cdot n)$ space.
    - The recursion stack used by `dfs` can have no more than $O(m \cdot n)$ elements in the worst-case scenario. It would take up $O(m \cdot n)$ space in that case.