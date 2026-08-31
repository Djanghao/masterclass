# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solution/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a `grid` of size `m x n`, where each cell `(r, c)` can either be land or water. The grid is represented by an integer matrix where: 
- A land cell is denoted by `0`.
- A water cell contains a number of fish, indicated by a value greater than `0`.

We need to find the largest number of fish that a fisher can collect by starting at an optimal water cell and moving to connected water cells. The fisher can collect fish from any water cell they start from, and then they can move to any adjacent water cell to continue collecting more fish. The fisher can repeat this operation as many times as needed, moving between connected water cells to collect fish.

This problem is closely related to the "[Max Area of Island](https://leetcode.com/problems/max-area-of-island/description/)" problem, which also deals with connected regions in a grid. However, the key difference here is that in this problem, the value in each water cell is not simply `1`, but rather the number of fish in that cell, which adds an extra layer of complexity.

---

### Approach 1: Depth-First Search

#### Intuition

We can think of the grid as a map of a graph, where each water cell is a node connected to other water cells around it, either up, down, left, or right. The water cells are grouped together, forming distinct regions that are separated by land cells. The goal is to find the largest group of connected water cells, which represents the region with the most fish.

To solve this, we can use a [Depth-First Search (DFS)](https://leetcode.com/explore/learn/card/queue-stack/232/practical-application-stack/). DFS works by exploring every connected node (in this case, the water cells) starting from a given cell. When we find a water cell, we start a DFS from that cell. The DFS will look at all neighboring water cells (in all four directions), marking them as visited to ensure we don’t count them again.

As we traverse each connected water region, we also keep a running total of the number of fish in that region. This means that for every new DFS call, we add up all the fish in that group of connected cells.

After exploring all the water cells in one region, we move on to the next unvisited water cell and repeat the process. While doing this, we always track the greatest number of fish encountered in any of the regions. By the time we finish going through the whole grid, we will have found the region with the most fish and that will be our result.

#### Algorithm

Main Function: `findMaxFish(vector<vector<int>>& grid)`

1. Initialize `m` and `n` to represent the number of rows and columns in `grid`.
2. Create a 2D vector `visited` of size `m x n` to track visited cells, initialized to `false`.
3. Initialize `result` to `0`, which will store the maximum fish count from any connected component.
4. Iterate through each cell `(i, j)` in the grid:
   - If the cell is a water cell (`grid[i][j] > 0`) and has not been visited, call `countFishes(grid, visited, i, j)` to calculate the total fish in the connected component starting from `(i, j)`.
   - Update `result` to the maximum of `result` and the fish count returned by `countFishes`.
5. Return `result`.

Helper Function: `countFishes(vector<vector<int>>& grid, vector<vector<bool>>& visited, int r, int c)`

1. If the current cell `(r, c)`, is out of bounds, is a land cell (`grid[r][c] == 0`), or, has already been visited (`visited[r][c] == true`), return `0`.
2. Mark the current cell `(r, c)` as visited by setting `visited[r][c] = true`.
3. Recursively calculate the total fish count from all connected water cells:
   - Call `countFishes` for the cells to the right, left, bottom, and top.
4. Return the sum of fish in the current cell (`grid[r][c]`) and the fish counts from all valid neighboring cells.

#### Implementation

<iframe src="https://leetcode.com/playground/VHJhrpCk/shared" frameBorder="0" width="100%" height="500" name="VHJhrpCk"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the `grid`.

- Time Complexity: $O(m \cdot n)$

    In the worst case, where the `grid` is completely filled with water cells, the algorithm iterates through all `m x n` cells. For each cell, it performs a depth-first search (DFS) to calculate the total fish in the connected region. Therefore, the overall time complexity is $O(m \cdot n)$.

- Space Complexity: $O(m \cdot n)$

    The algorithm uses a `visited` matrix of size `m x n` to track visited cells. Additionally, the depth-first search (DFS) can recurse to explore all connected cells, contributing to the space complexity. Hence, the overall space complexity is $O(m \cdot n)$.

---

### Approach 2: Breadth-First Search

#### Intuition

Similar to Depth-First Search (DFS), we can also use a [Breadth-First Search (BFS)](https://leetcode.com/explore/learn/card/queue-stack/231/practical-application-queue/) to explore the grid and find the connected water regions. BFS works by exploring all neighboring cells at the present depth level before moving on to cells at the next level. This means that BFS explores level by level, starting from a water cell and expanding outward to its neighboring water cells.

We start by iterating through the grid and whenever we encounter a water cell that hasn't been visited yet, we initiate a BFS. From that cell, we explore its four neighboring cells (up, down, left, right), checking if they are also water cells and marking them as visited. This continues until all water cells in the current region have been explored.

While performing the BFS, we accumulate the number of fish in the connected region by adding up the values of all the visited water cells. This ensures that we get the total number of fish in that region.

After exploring all neighboring water cells in the current region, we move on to the next unvisited water cell and repeat the BFS process. Throughout the BFS traversal, we keep track of the largest fish count encountered. By the end of the grid traversal, we will have identified the connected water region with the most fish and return that as our result.

#### Algorithm

Main Function: `findMaxFish(vector<vector<int>>& grid)`

1. Initialize Variables:
   - `numRows` and `numCols` to represent the number of rows and columns in `grid`.
   - `result` to store the maximum fish count found in any connected component. Initialized to `0`.
   - `visited` as a 2D matrix of size `numRows x numCols` to track visited cells, initialized to `false`.

2. Iterate through the Grid:
   - For each cell `(i, j)` in the grid:
     - If the cell contains water (`grid[i][j] > 0`) and has not been visited, call `countFishes(grid, visited, i, j)` to calculate the total fish in the connected component starting from `(i, j)`.
     - Update `result` to the maximum of `result` and the fish count returned by `countFishes`.

3. Return Result:
   - After iterating through all cells, return the `result`.

Helper Function: `countFishes(vector<vector<int>>& grid, vector<vector<bool>>& visited, int row, int col)`

1. Initialize Variables:
   - `numRows` and `numCols` to represent the dimensions of the grid.
   - `fishCount` to accumulate the number of fish in the connected component, initialized to `0`.
   - `q` as a queue for BFS traversal starting from the initial cell `(row, col)`.

2. BFS Traversal:
   - Push the initial cell `(row, col)` onto the queue and mark it as visited.
   - While the queue is not empty:
     - Dequeue the front element to get current coordinates `(row, col)`.
     - Add the fish count from the current cell to `fishCount`.
     - Explore all four directions (up, down, left, right) for connected water cells:
       - If the neighboring cell is within bounds, contains water, and hasn't been visited, add it to the queue and mark it as visited.

3. Return Fish Count:
   - After exploring all possible connected cells, return `fishCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/afuZyzJQ/shared" frameBorder="0" width="100%" height="500" name="afuZyzJQ"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the `grid`.

- Time Complexity: $O(m \cdot n)$

    In the worst case, where the `grid` is completely filled with water cells, the algorithm iterates through all `m \cdot n` cells. For each cell, it performs a Breadth-first search (BFS) to calculate the total fish in the connected region. Therefore, the overall time complexity is $O(m \cdot n)$.

- Space Complexity: $O(m \cdot n)$

    The algorithm uses a `visited` matrix of size `m \cdot n` to track visited cells. Hence, the overall space complexity is $O(m \cdot n)$.

---

### Approach 3: Union Find Algorithm

#### Intuition

Another approach to solving problems based on graph connectivity is the union-find data structure.

A disjoint-set data structure also called a union-find data structure or merge-find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them by their union), and finding a representative member of a set. More specifically, it allows us to perform two main operations:

1. **Find**: This operation helps us determine which set a particular element belongs to. In our case, it will help us check if two water cells are part of the same connected region.
2. **Union**: This operation merges two sets into one. It allows us to combine two connected water cells into the same region.

For this problem, we can think of each water cell as an individual set, and the goal is to merge them into larger sets based on their connectivity. As we perform the "Union" operation, we also need to keep track of the total number of fish in each connected component (group of connected water cells).

If you are new to Union-Find, we suggest you read our [LeetCode Explore Card](https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3881/). We will not talk about implementation details in this article, but only about the interface to the data structure.

Our task, as with the previous approaches, is to count the maximum sum of fishes among all the connected components formed in the graph with water cells acting as nodes and an edge between directly connected cells.

First, we treat each water cell as its own separate component, initializing a structure to store the number of fish in each component. Initially, each water cell holds its own fish count.

We then iterate over all the cells in the grid. For each water cell, we check its four neighbors (up, down, left, right). If a neighboring cell is also water, we perform a "Union" operation to merge their components, effectively connecting the two cells. As we do this, we update the fish count for the newly merged component by adding the fish counts from both cells.

After merging the cells, we keep track of the maximum fish count encountered in any connected component. This can be done by maintaining a separate array (let's call it `fishes`) where each entry corresponds to the total fish count of a particular connected component.

At the end of this process, the largest value in the `totalFish` array will give us the largest sum of fish in any connected component.

#### Algorithm

Main Function: `findMaxFish(vector<vector<int>>& grid)`

- Initialize Variables:
   - Determine the number of rows (`rows`) and columns (`cols`) in the grid.
   - Compute the total number of cells (`totalCells`) which is `rows * cols`.

- Union-Find Initialization:
   - Create arrays `parent`, `componentSize`, and `totalFish`:
     - `parent` keeps track of the root for each cell.
     - `componentSize` tracks the size of the component (number of cells) each root represents.
     - `totalFish` tracks the total fish count in the connected component represented by each root.
   - Use `iota(parent.begin(), parent.end(), 0)` to initialize `parent` such that each cell is its own parent initially.

- Setting Initial Fish Count:
   - Traverse the grid and populate the `totalFish` array with the fish count of each cell.

- Union Operation:
   - Use direction vectors `dRow` and `dCol` to explore neighboring cells (right, left, down, up).
   - For each water cell (`grid[row][col] > 0`), union its connected neighbors using the `unionComponents` function.

- After processing all cells and merging components, iterate through the `totalFish` array to find the maximum fish count among all components that have a unique root.

- Return the maximum fish count found.

Helper Function: `unionComponents(vector<int>& parent, vector<int>& componentSize, vector<int>& totalFish, int x, int y)`

- Find the root of `x`: Use `findParent` to get the root of component containing `x`.

- Find the root of `y`: Use `findParent` to get the root of component containing `y`.

- Union by size: If the roots are different, attach the smaller tree under the root of the larger tree, ensuring optimization.

- Update Component Size and Fish Count: After merging, update the size of the new component and the total fish count accordingly.

Helper Function: `findParent(vector<int>& parent, int x)`

- If `parent[x]` equals `x`, then `x` is its own root. Otherwise, recursively find the parent of `parent[x]`.

#### Implementation

<iframe src="https://leetcode.com/playground/goJL6dcH/shared" frameBorder="0" width="100%" height="500" name="goJL6dcH"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the `grid`.

- Time Complexity: $O((n \cdot m) \cdot \alpha(n \cdot m))$

    The outer loop iterates over all cells in the grid, which takes $O(n \cdot m)$ time.
    
    For each cell, the algorithm checks its four neighbors (right, left, down, up), which is a constant $O(4)$ operation.
    
    The `findParent` and `unionComponents` operations are performed using the Union-Find data structure with path compression and union by size. These operations have an amortized time complexity of $O(\alpha(n \cdot m))$, where $\alpha$ is the inverse Ackermann function, which is very small and can be considered almost constant.

    Therefore, the overall time complexity is $O((n \cdot m) \cdot \alpha(n \cdot m))$.

- Space Complexity: $O(n \cdot m)$

    The algorithm uses three auxiliary arrays: `parent`, `componentSize`, and `totalFish`, each of size $n \cdot m$.
    
    The space required for these arrays is $O(n \cdot m)$.
    
    Additionally, the recursion stack for the `findParent` function is bounded by the height of the Union-Find tree, which is $O(\alpha(n \cdot m))$ due to path compression. However, this is negligible compared to the space used by the arrays.
    
    Therefore, the overall space complexity is $O(n \cdot m)$.

---