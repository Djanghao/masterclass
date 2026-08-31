# Official Solution

**Link:** [https://leetcode.com/problems/number-of-islands-ii/solution/](https://leetcode.com/problems/number-of-islands-ii/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a 2D grid of size `m x n`. Each cell of grid represents a water or land denoted by `0` and `1` respectively. Initially, all cells of the grid are marked as `0`.

We are also given an array `positions` where `positions[i]` = [$r_i$, $c_i$] is the position ($r_i$, $c_i$) which is converted from water to land at the $i^{th}$ operation.

Our task is to return an array of integers `answer` where `answer[i]` is the number of islands after turning the cell ($r_i$, $c_i$) into land.

---

### Approach: Union Find

#### Intuition

We can treat the 2D grid as an undirected graph. A land cell corresponds to a node in the graph, and there is an edge between two horizontally or vertically adjacent land cells.

Let's see what forms an island in such a graph. So, we begin at any node and proceed to its neighbors, i.e., all nodes one edge away. From the nodes 1 edge away, we move to their neighbors, i.e., all the nodes 2 edges away from the starting node, and so on. If we keep traversing until we can't anymore, all the nodes that are visited in this traversal together form an island.

In such a graph, a connected component forms one island. Our task now becomes to count the number of connected components formed after converting a cell into land for every cell mentioned in `positions`. A union-find data structure is a good approach to efficiently determining the number of connected components in a graph.

A disjoint-set data structure, also called a union–find data structure or merge–find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. It implements two useful operations:

1. `Find`: Determine which subset a particular element is in. This can be used to determine if two elements are in the same subset.
2. `Union`: Join two subsets into a single subset.

If you are new to Union-Find, we suggest you read our [Leetcode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/). We will not talk about implementation details in this article, but only about the interface to the data structure.

We first perform a linear mapping to convert a 2D grid to a linear array. We map a cell `(x, y)` in the grid to `point = x * n + y`, where `n` is the number of columns.

To our union-find data structure, we add a data member `count` that stores the number of connected components (or disjoint sets) present in the graph. We also include an `addLand` method, which takes an index corresponding to a square as a parameter and adds it as a node in the graph. It also increases `count` by 1 because we added a new node that creates a new component in the graph.

We also include an `isLand` method, which returns a boolean indicating whether there is land at a point given as a parameter. It does so by checking the `parent` of the point. If the point has a valid parent, it is a valid node, and thus it is land. Otherwise, if the point does not have a valid parent, it is water.

The `numberOfIslands` method is also added, which returns `count`, i.e., the number of connected components present in the graph.

To solve this problem, we declare an instance of union-find `UnionFind(m * n)` and then iterate over every `position` in `positions`. We perform a linear mapping of `position` to convert a 2D cell to a linear point. Let's call this linear point `landPosition`.

We perform `addLand(landPosition)` to add a node corresponding to `landPosition`. We then iterate over all four neighbors of `position`. We convert every `neighbor` to a linear index `neighborPosition`. If there is land at `neighborPosition`, which is checked using the `isLand` method, we perform a `union` of `neighborPosition` and `landPosition`. In the `union` method, if two nodes belong to different sets (or components), we merge them, which reduces the number of connected components by 1. Hence, in the `union` method, we decrement `count` by 1 if the given nodes belong to different components.

Finally, for each position, we add `numberOfIslands` as the answer to a list of integers.

Here's a visual step-by-step example:

!?!../Documents/305_number_of_islands_ii_unionfind.json:601,301!?!

<br>

#### Algorithm

1. Initialize arrays `x[] = { -1, 1, 0, 0 }` and `y[] = { 0, 0, -1, 1 }` to be used to find neighbors of a cell.
2. Create an instance of `UnionFind`, say `dsu(m * n)`. Initialize all parents to `-1`. We will use union by rank, so initialize all ranks to `0`. Lastly, initialize `count = 0`.
3. Create a list of integers `answer` where `answer[i]` would store the number of islands formed after converting `position[i]` cell to land.
4. Iterate through `positions` and for every `position` in `positions`;
    - Perform a linear mapping to convert a 2D cell `position` to `landPosition = position[0] * n + position[1]`.
    - Use the `addLand(landPosition)` operation to add `landPosition` as a node to the graph. This function will also increment `count`.
    - Iterate over every neighbor of `position`. A `neighbor` can be determined using `neighborX = position[0] + x[i]` and `neighborY = position[1] + y[i]`, where `neighborX` is the X-coordinate and `neighborY` is the Y-coordinate of the neighboring cell. We perform a linear mapping of the neighboring cell using `neighborPosition = neighborX * n + neighborY`. Now, if there is a land at `neighborPosition`, i.e., `isLand(neighborPosition)` returns `true`, we perform `union` of `neighborPosition` and `landPosition`. In `union` we will decrement the `count` by `1`.
    - Perform the `numberofIslands` operation which returns the number of islands formed after coverting `position` to land. Add it to `answer`.
5. Return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/RFcAqw9h/shared" frameBorder="0" width="100%" height="500" name="RFcAqw9h"></iframe>

#### Complexity Analysis

Here, $m$ and $n$ are the number of rows and columns in the given grid, and $l$ is the size of `positions`.

* Time complexity: $O(m \cdot n + l)$

    - For $T$ operations, the amortized time complexity of the union-find algorithm (using path compression with union by rank) is $O(alpha(T))$. Here, $\alpha(T)$ is the inverse Ackermann function that grows so slowly, that it doesn't exceed $4$ for all reasonable $T$ (approximately $ T < 10^{600}$). You can read more about the complexity of union-find [here](https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Time_complexity).  Because the function grows so slowly, we consider it to be $O(1)$.
    - Initializing `UnionFind` takes $O(m \cdot n)$ time beacuse we are initializing the `parent` and `rank` arrays of size $m * n$ each.
    - For each `position` in `positions`, we perform `addLand` which takes $O(1)$ time. Furthermore, we check all four neighbors of every `position` and if there is land at any neighbor, we perform `union` of `position` and the neighbor. Because there can only be four union operations at a time, each union operation would take $O(4) = O(1)$ time. It would take $O(l)$ time for $l$ positions.
    - Obtaining the number of islands for each position and pushing it to `answer` takes $O(1)$ per position. For $l$ positions, it would take $O(l)$ time.
    - As a result, the total time required is $O(m \cdot n + l)$.

* Space complexity: $O(m \cdot n)$

    - We are using the `parent` and `rank` arrays, both of which require $O(m \cdot n)$ space.
    - Other integers, such as `count`, and arrays, such as `x` and `y` take up $O(1)$ space.