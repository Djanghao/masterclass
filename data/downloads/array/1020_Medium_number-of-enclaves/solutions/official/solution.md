# Official Solution

**Link:** [https://leetcode.com/problems/number-of-enclaves/solution/](https://leetcode.com/problems/number-of-enclaves/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a 2D `grid`. Each cell of `grid` represents a water or land cell denoted by `0` and `1` respectively.

Our task is to return the number of land cells for which we cannot walk off the boundary of the grid in any number of moves by moving left, top, right, bottom.

---

### Approach 1: Depth First Search

#### Intuition

The problem states that we can move in all four directions (left, top, right, and bottom), which leads us to model the problem as a graph.

We can treat the 2D grid as an undirected graph. A land cell in `grid` corresponds to a node in such a graph with an undirected edge between horizontally or vertically adjacent land cells.

If we begin to traverse in this graph from the nodes that are land cells on the boundary and keep on traversing as long as we can, we will visit all the land cells from which we can reach the boundary.

The land cells which aren't visited will be the ones from which we cannot reach the boundary in any way. The count of all these unvisited land cells would be our answer.

We can use a graph traversal algorithm like depth-first search (DFS) to traverse over the land cells. In DFS, we use a recursive function to explore nodes as far as possible along each branch. Upon reaching the end of a branch, we backtrack to the previous node and continue exploring the next branches.

Once we encounter an unvisited node, we will take one of its neighbor nodes (if exists) as the next node on this branch. Recursively call the function to take the next node as the 'starting node' and solve the subproblem.

If you are new to Depth First Search, please see our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/619/depth-first-search-in-graph/3882/) for more information on it!

We perform a DFS from every unvisited land cell at the boundary, treating it as a node. We traverse all the nodes that are present in the connected component of the starting node and mark them as visited.

After the completion of DFS traversal, we count the number of land cells that are not visited.

Here's a visual example to show how this approach works:

!?!../Documents/1020/1020-slides.json:601,301!?!

#### Algorithm

1. Create two variables, `m` and `n`, to store the number of columns and rows in the given `grid`.
2. Create a 2D array called `visit` to keep track of visited cells.
3. Iterate over all the cells at the `grid`'s boundary and for every such cell `(i, j)` check if it is a land cell or not. If it is a land cell and it has not been visited yet, begin a DFS traversal from `(i, j)` cell:
    - We use the `dfs` function to perform the traversal. For each call, pass `x`, `y`, and `grid` as the parameters. The `x` and `y` parameters represent the row and column of the cell from which DFS should begin. We start with `(i ,j)` cell.
    - If the cell `(x, y)` is out of bounds of `grid` or is a water cell or is an already visited cell, we don't do anything and return.
    - Otherwise, we visit this cell and mark it as visited.
    - We then call `dfs` recursively from each of the neighbors of `(x, y)`.
4. Create an answer variable `count` to count required number of land cells.
5. Iterate over all the cells of `grid` and count number of unvisited land cells. For each unvisited land cell, increment `count` by `1`.
6. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/5SAycXMD/shared" frameBorder="0" width="100%" height="500" name="5SAycXMD"></iframe>

#### Complexity Analysis

Here, $m$ and $n$ are the number of rows and columns in the given grid.

* Time complexity: $O(m \cdot n)$

    - Initializing the `visit` array takes $O(m \cdot n)$ time.
    - We iterate over the boundary and find unvisited land cells to perform DFS traversal from those. This takes $O(m + n)$ time.
    - The `dfs` function visits each node at most once. Since there are $O(m \cdot n)$ nodes, we will perform $O(m \cdot n)$ operations visiting all nodes in the worst-case scenario. We iterate over all the neighbors of each node that is popped out of the queue. So for every node, we would iterate four times over the neighbors, resulting in $O(4 \cdot m \cdot n) = O(m \cdot n)$ operations total for all the nodes.
    - Counting the number of unvisited land cells also takes $O(m \cdot n)$ time.

* Space complexity: $O(m \cdot n)$

    - The `visit` array takes $O(m \cdot n)$ space.
    - The recursion stack used by `dfs` can have no more than $O(m \cdot n)$ elements in the worst-case scenario where each node is added to it. It would take up $O(m \cdot n)$ space in that case.

---

### Approach 2: Breadth-First Search

#### Intuition

As we have to traverse over `grid` modeled as a graph to find the closed islands, another method is to use a breadth-first search (BFS).

BFS is an algorithm for traversing or searching a graph. It traverses in a level-wise manner, i.e., all the nodes at the present level (say `l`) are explored before moving on to the nodes at the next level (`l + 1`), where a level's number is the distance from a starting node. BFS is implemented with a queue.

If you are not familiar with BFS traversal, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/620/breadth-first-search-in-graph/).

#### Algorithm

1. Create two variables, `m` and `n`, to store the number of columns and rows in the given `grid`.
2. Create a 2D array called `visit` to keep track of visited cells.
3. Iterate over all the cells at the `grid`'s boundary and for every such cell `(i, j)` check if it is a land cell or not. If it is a land cell and it has not been visited yet, begin a BFS traversal from `(i, j)` cell:
    - We use the `bfs` function to perform the traversal. For each call, pass `x`, `y`, `m`, `n`, `grid`, and `visit` as the parameters. The `x` and `y` parameters represent the row and column of the cell from which BFS should begin. We start with `(i ,j)` cell.
    - We initialize a queue `q` of pair of integers and push `(x, y)` into it. We also mark `(x, y)` as visited.
    - While the queue is not empty, we dequeue the first pair `(x, y)` from the queue and iterate over all its neighbors. If any neighboring cell is not in the bounds of `grid`, we don't do anything. Otherwise, if it is a land cell and has not been visited yet, we mark it as visited and push `(r, c)` into the queue.
    - We return after the queue is empty.
4. Create an answer variable `count` to count the required number of land cells.
5. Iterate over all the cells of `grid` and count the number of unvisited land cells. For each unvisited land cell, increment `count` by `1`.
6. Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/FCDGv6Rk/shared" frameBorder="0" width="100%" height="500" name="FCDGv6Rk"></iframe>

#### Complexity Analysis

Here, $m$ and $n$ are the number of rows and columns in the given grid.

* Time complexity: $O(m \cdot n)$

    - Initializing the `visit` array takes $O(m \cdot n)$ time.
    - We iterate over the boundary of `grid` and find unvisited land cells to perform BFS traversal from those. This takes $O(m + n)$ time.
    - Each queue operation in the BFS algorithm takes $O(1)$ time and a single node can be pushed at most once in the queue. Since there are $O(m \cdot n)$ nodes, we will perform $O(m \cdot n)$ operations visiting all nodes in the worst-case scenario. We iterate over all the neighbors of each node that is popped out of the queue. So for every node, we would iterate four times over the neighbors, resulting in $O(4 \cdot m \cdot n) = O(m \cdot n)$ operations total for all the nodes.

* Space complexity: $O(m \cdot n)$

    - The `visit` array takes $O(m \cdot n)$ space.
    - The BFS queue takes $O(m \cdot n)$ space in the worst-case where each node is added once.