# Official Solution

**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solution/](https://leetcode.com/problems/regions-cut-by-slashes/solution/)

---

[TOC]

## Solution

---

### Overview

Many have found this problem to be a difficult medium problem, so if that is how you are feeling, you are not alone. [Number of Islands](https://leetcode.com/problems/number-of-islands/description/) is a good starter problem if you find yourself struggling with this one.  

We are given an array of strings called `grid`, which contains three types of characters: forward slash `/`, backslash `\\`, and space `' '`. Each slash divides its cell into two contiguous sections, as shown in the following image:

![examples to show how the grid is formed](../Figures/959__re/image_1.png)

Our objective is to determine the total number of distinct regions formed within the grid as a result of these slash divisions.

---

### Approach 1: Expanded Grid

#### Intuition

When a cell in the grid contains a slash, it effectively divides it into two parts. A forward slash divides the cell into top-left and bottom-right sections, while a backslash divides it into top-right and bottom-left sections. As you can see in Example 2 of the problem, counting the regions directly is challenging since a divided cell does not always lead to an additional region. 

To address this, we can magnify the grid by expanding each cell into a $3 \times 3$ sub-grid, with slashes represented by diagonal cells marked as barriers:

![](../Figures/959__re/image_2.png)

This transformation simplifies our task. If we treat the slashes and grid boundaries as water, and the remaining cells as land, the problem becomes analogous to the [Number of Islands](https://leetcode.com/problems/number-of-islands/description/).

We can solve this using the [flood-fill algorithm](https://en.wikipedia.org/wiki/Flood_fill) to visit each connected region in the grid. We iterate over each cell of the grid and invoke `floodfill` whenever we encounter an unvisited land cell. The `floodfill` function explores all reachable land cells from the current cell and marks them as visited.  Then, we continue to iterate over each cell in the grid until we reach the next unvisited cell, which signifies the next land region. The total number of `floodfill` calls corresponds to the number of regions in the grid, which is our desired answer.

> Note: In our implementation, we use Breadth-First Search (BFS) for the flood-fill algorithm. Alternatively, Depth-First Search (DFS) can also be employed, yielding similar time and space complexities.

#### Algorithm

- Initialize an array `DIRECTIONS` to specify traversal directions: right, left, down, and up.

Main method `regionsBySlashes`:

- Set `gridSize` as the size of the original grid.
- Create a new 2D array `expandedGrid` with dimensions three times the original grid size.
- Iterate through each cell `(i, j)` in the original `grid`:
  - Calculate `baseRow` and `baseCol` as three times of `i` and `j`.
  - Check the character in the current cell:
    - If it is a backslash (`\\`):
      - Mark the cells in the main diagonal `(baseRow, baseCol)`, `(baseRow+1, baseCol+1)`, `(baseRow+2, baseCol+2)` as `1`.
    - If it is a forward slash (`/`): 
      - Mark the other diagonal `(baseRow, baseCol+2)`, `(baseRow+1, baseCol+1)`, `(baseRow+2, baseCol)` as `1`. 
- Initialize a counter `regionCount` to `0`.
- Iterate through each cell `(i, j)` in `expandedGrid`:
  - If the cell is unvisited (value `0`):
    - Call the `floodfill` method to fill the region.
    - Increment `regionCount`.
- Return `regionCount` as the total number of distinct regions.

Helper method `floodfill`:

- Define a method `floodfill` with parameters: `expandedGrid` and the `row` and `col` indices.
- Initialize a queue and add the starting cell `(row, col)` to it.
- Mark the starting cell as visited by setting `expandedGrid[row][col]` to `1`.
- While the `queue` is not empty:
  - Dequeue `currentCell`.
  - For each `direction` in `DIRECTIONS`:
    - Set `newRow` as `currentCell[0] + direction[0]`.
    - Set `newCol` as `currentCell[1] + direction[1]`.
    - Check if the new cell is valid and unvisited using the `isValidCell` method:
      - If valid, mark the cell as visited and add it to the `queue`.

Helper method `isValidCell`.

- Define a method `isValidCell` with parameters: `expandedGrid`, `row`, and `col`.
- Return `true` if the cell `(row, col)` is within bounds and unvisited.
- Otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/MHLtBUxW/shared" frameBorder="0" width="100%" height="500" name="MHLtBUxW"></iframe>

#### Complexity Analysis

Let $n$ be the height and width of the grid.

- Time complexity: $O(n^2)$

    The algorithm populates the expanded grid by iterating over the original grid, which takes $O(n^2)$ time. 

    In the worst case, the flood fill algorithm will visit every cell in the expanded grid once. The expanded grid is $3n \times 3n$, resulting in $O((3n)^2) = O(9n^2) = O(n^2)$ operations.

    Thus, the overall time complexity of the algorithm is $2 \cdot O(n^2)$, which simplifies to $O(n^2)$.

- Space complexity: $O(n^2)$

    The expanded grid has dimensions $3n \times 3n$, which requires $O(n^2)$ space. 
    
    In the flood fill algorithm, the queue can store all $9n^2$ cells of the expanded grid in the worst case. This results in a space complexity of $O(9n^2) = O(n^2)$.

    Thus, the total time complexity of the algorithm is $O(n^2) + O(n^2) = O(n^2)$.

---

### Approach 2: Disjoint Set Union (Triangles)

#### Intuition

Our previous approach involved magnifying each cell into a $3 \times 3$ grid, increasing the number of unit cells by a factor of 9. We can further optimize this process by reconceptualizing how regions are formed and connected. Instead of viewing the grid as squares, let's envision each cell divided into four triangles. This allows for a more precise representation of slashes.

![cell divided into four triangles](../Figures/959__re/image_3.png)

Initially, each triangle is considered its own region. As we traverse the grid, we can group together all triangles not separated by slashes as belonging to one component (region). The total number of these groups will be our required answer.

A widely used data structure for grouping connected components is the Disjoint Set Union (DSU). A DSU assigns each component (a unit triangle) a parent, which is initially itself. To connect or union two components, we assign them to the same parent, meaning units with the same parent belong to the same connected component. To learn more about how the disjoint set union data structure is implemented, refer to this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/).

We iterate over the grid and perform two main types of operations:
1. Union adjacent components:

   Regardless of whether a cell contains a forward slash or backslash, the top triangle of a cell will always connect to the bottom triangle of the cell above it. The same principle applies to the left triangle of a cell and the right triangle of the cell to its left. 

   ![connecting top and left cells](../Figures/959__re/image_4.png)

2. Union intra-cell components:

   A slash divides the cell diagonally, allowing us to combine the two adjacent triangles on each side of the diagonal.

We begin with the total number of triangles as our initial region count. Each successful union operation indicates that two distinct components have been merged into one, reducing the total number of regions by one. After processing all cells, the remaining count represents the number of distinct regions.

#### Algorithm
 
Main method `regionsBySlashes`:

- Set `gridSize` as the size of the `grid`.
- Calculate `totalTriangles` in the grid as `gridSize * gridSize * 4`.
- Create a `parentArray` to represent the disjoint sets of triangles and initialize each element to `-1`.
- Initialize `regionCount` to `totalTriangles`, assuming each triangle is initially a separate region.
- Iterate through each cell of `grid`:
  - If there is a cell above the current cell, union the bottom triangle of the above cell with the top triangle of the current cell.
  - If there is a cell to the left of the current cell, union the right triangle of the left cell with the left triangle of the current cell.
  - If the current cell is not `/`:
    - Union the top triangle with the right triangle.
    - Union the bottom triangle with the left triangle.
  - If the current cell is not `\\`:
    - Union the top triangle with the left triangle.
    - Union the bottom triangle with the right triangle.
- Return `regionCount` as our answer.

Helper method `getTriangleIndex`:

- Define a method `getTriangleIndex` with parameters: `gridSize`, the `row` and `col` indices, and the `triangleNum`.
- Return `(gridSize * row + col) * 4 + triangleNum`.

Helper method `unionTriangles`:

- Define a method `unionTriangles` with parameters: `parentArray` and the two indices `x` and `y`.
- Find `parentX` and `parentY` using the `findParent` method.
- If `parentX` is not equal to `parentY`:
  - Set `parentArray[parentX]` to `parentY` and return `1`.
- Return `0`. 

Helper method `findParent`:

- Define a method `findParent` with parameters: `parentArray` and the index `x`.
- If `parentArray[x]` is equal to `-1`:
  - `x` has no parent. Return `x`.
- Set `parentArray[x]` to the parent of `parentArray[x]` using `findParent`. Return `parentArray[x]`.

#### Implementation

<iframe src="https://leetcode.com/playground/gejLBoVS/shared" frameBorder="0" width="100%" height="500" name="gejLBoVS"></iframe>

#### Complexity Analysis

Let $n$ be the height and width of the grid. 

* Time complexity: $O(n^2 \cdot \alpha (n))$

    Initializing the `parentArray` takes $O(4 \cdot n^2)$ time.

    The main loop iterates over all $n^2$ cells in the grid. In each iteration, it calls the `unionTriangles` method which includes `findPath` operations. With path compression, the amortized time complexity of `findPath` is denoted as $\alpha(n)$, where $\alpha$ is the inverse Ackermann function. Thus, the time complexity of the loop comes out to be $O(n^2 \cdot \alpha (n))$.

    Thus, the overall time complexity of the algorithm is $O(4 \cdot n^2) + O(n^2 \cdot \alpha (n)) = O(n^2 \cdot \alpha (n))$

* Space complexity: $O(n^2)$

    The only additional data structure used by the algorithm is the `parentArray`, which takes $O(n^2)$ space.

    The recursive `find` operation can have a call stack of size $O(\log n)$ in the worst case.

    Thus, the overall space complexity is $O(n^2)$.

---

### Approach 3: Disjoint Set Union (Graph)

#### Intuition

Let's shift our perspective and consider slashes as connectors rather than dividers. Imagine each cell as a graph with four vertices at its corners, with slashes acting as edges between these vertices. The following diagram illustrates this concept:

![cell as a graph](../Figures/959__re/image_5.png)

In this paradigm, a slash can be represented as follows:
- A `/` slash connects the top-right point of a cell to the bottom-left point.
- A `\` slash connects the top-left point to the bottom-right point.
- An empty space doesn't add any new connections.

The edges of the grid form the boundaries of the graph, creating an initial region. As we connect vertices (slashes), cycles may form, indicating the creation of new regions within the graph. By tracking the total number of cycles formed while iterating over all slashes, we determine the final count of regions.

To manage connected components, we use a DSU (Disjoint Set Union) data structure. We start by connecting the boundary points as the first region. As we process each cell, we treat each slash as an edge and union the corresponding vertices. If a union operation reveals that the vertices already share the same parent, it indicates a cycle, prompting us to increment our counter.

#### Algorithm
 
Main method `regionsBySlashes`:

- Initialize variables:
  - `gridSize` to the length of `grid`.
  - `pointsPerSide` to `gridSize + 1`.
  - `totalPoints` to `pointsPerSide * pointsPerSide`.
- Create an array `parentArray` to represent the disjoint set, initialized with `-1`.
- Loop over the each point:
  - If the point lies on the border, set its `parent` to `0`.
- Set `parent[0]` (top-left corner) to `-1` to make it the root.
- Initialize `regionCount` to `1`, accounting for the border region.
- Iterate through each cell `(i, j)` in the `grid`:
  - If it's a forward slash (`/`):
    - Calculate the `topRight` and `bottomLeft` indices.
    - Call `union` on these points and add the result to `regionCount`.
  - If it's a backslash (`\\`):
    - Calculate the `topLeft` and `bottomRight` indices.
    - Call `union` on these points and add the result to `regionCount`.
- Return the final `regionCount`. 

Helper method `find`:

- Define a method `find` with parameters: `parentArray` and the `node`.
- If `parentArray[node]` is equal to `-1`:
  - `node` does not have any parent. Return `node`.
- Set `parentArray[node]` to the parent of `parentArray[node]` using the `find` method. Return `parentArray[node]`.

Helper method `union`:

- Define a method union with parameters: `parentArray` and nodes `node1` and `node2`.
- Set `parent1` to `parent2` to the parents of `node1` and `node2` respectively. 
- If `parent1` is equal to `parent2`, return `1`.
- Set `parentArray[parent2]` to `parent1`.
- Return `0`.

#### Implementation

<iframe src="https://leetcode.com/playground/C84Mt6ZN/shared" frameBorder="0" width="100%" height="500" name="C84Mt6ZN"></iframe>

#### Complexity Analysis

Let $n$ be the height and width of the `grid`.

* Time complexity: $O(n^2 \cdot \alpha (n^2))$

    Filling the parent array requires $O((n+1) \cdot (n+1))$ time, which can be simplified to $O(n^2)$. Connecting the border points requires another $O(n^2)$ time. 

    As the algorithm iterates over the grid, it potentially performs two `union` operations for each cell. The time complexity of a single `find`/`union` operation is $O(\alpha (n^2))$, where $\alpha$ is the inverse Ackermann function. We perform at most $O(n^2)$ union operations, making the complexity of this part $O(n^2 \cdot \alpha (n^2))$.

    Thus, the overall time complexity is $2 \cdot O(n^2) + O(n^2 \cdot 2 \alpha (n^2)) = O(n^2 \cdot \alpha (n^2))$

* Space complexity: $O(n^2)$

    The algorithm creates an array of size $(n+1)^2$, which is $O(n^2)$.

    The recursive call stack for `find` operation is $O(\log n)$ in the worst case.

    Thus, the total time complexity of the algorithm is $O(n^2)$. 

---