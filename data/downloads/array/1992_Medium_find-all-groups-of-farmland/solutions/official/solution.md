# Official Solution

**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solution/](https://leetcode.com/problems/find-all-groups-of-farmland/solution/)

---

## Solution

---

### Overview

We are given a binary matrix of `0s` and `1s` of size `M x N`. The value `0` represents the forest land and `1` represents the farmland. We need to return a list with the top left and bottom right coordinates of each farmland in the matrix. All farmlands are rectangular. We can leverage this fact to make our search for farmland more efficient. From a given farmland cell, we can determine which of the eight neighboring cells is farmland by checking just four neighbors (left, right, up, and down). We don't need to check the diagonal neighbors because we can infer whether they are farmland. For example, if the cells on the right and below a farmland cell are also farmland, then the diagonal cell, as shown below, will have to be a farmland cell for this farmland to be rectangular.

![fig](../Figures/1992/1992B.png)

Therefore, this problem is similar to this [Number of Islands](https://leetcode.com/problems/number-of-islands/) problem, except the components (islands of farmland) here will always be rectangular. We will use this property in our third greedy approach. The first two approaches, DFS & BFS, are similar to the one applied in [Number of Islands soluton](https://leetcode.com/problems/number-of-islands/solution/).

![fig](../Figures/1992/1992A.png)


> Note: In the following two approaches below, we used a separate array to keep track of visited cells; this could be done using the original input matrix. However, in an interview setting, altering the inputs is not recommended. We have applied this input-altering strategy in our last approach to demonstrate how it can be done.

----

### Approach 1: Depth-First Search

#### Intuition

We need to find all the cells in each farmland. We will apply a depth-first search from each of the cells with the value `1` that has not yet been visited. In the depth-first search process, we will traverse each of the four connected neighbors with the value `1` and apply DFS. This way, we can traverse over all the cells in each farmland.

We need a way to find the top left and bottom right cell coordinates of each farmland. Since the order of cell traversal in DFS is not fixed, there is no way to find when the last cell will be visited. To solve this, we can keep the maximum `x` and `y` coordinates we have seen so far. This way the maximum `x` and `y` coordinates will refer to the bottom right coordinates, and the coordinate of the cell with which we started the DFS will be the top left coordinate.

#### Algorithm

1. Iterate over each cell in the matrix `land`, and for each cell `(row1, col1)`, do the following:

    - If the cell is a farmland cell, i.e. `land[row1][col1] = 1`, and hasn't been visited yet (`visited[row1][col1] = 0`), start DFS from `(row1, col1)`. Also, keep two variables `row2` and `col2` as the coordinates of the bottom right corner initialized with `0` each.
    - In the DFS, mark the current coordinates as visited and update the values of `row2` and `col2` to the maximum compared with the current coordinates.
    - Traverse over the four neighbors and apply DFS if the neighbor is within the matrix boundary, a farmland cell, and hasn't been visited yet.
    - When the DFS is complete, store the top left coordinate as `(row1, col1)` and the bottom right as `(row2, col2)` in the list `ans`.

2. Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/Nmdf4uzS/shared" frameBorder="0" width="100%" height="500" name="Nmdf4uzS"></iframe>

#### Complexity Analysis

Here, $M$ is the number of rows in the matrix and $N$ is the number of columns in the matrix.

* Time complexity: $O(M \cdot N)$

  We will iterate over each cell in the matrix at most once because we used the `visited` array to prevent re-processing cells. All other helper functions like `isWithinFarm` are $O(1)$. Hence, the total time complexity is $O(M \cdot N)$.

* Space complexity: $O(M \cdot N)$

  The array `visited` is of size $M \cdot N$; also, there will be stack space consumed by DFS that will be equal to the maximum number of active stack calls, which will be equal to $M * N$ if all cells are `1` in the matrix. Apart from this, there is also array `ans`, but the space used to store the result isn't considered part of space complexity. Hence, the total space complexity is $O(M \cdot N)$.

---

### Approach 2: Breadth-First Search

#### Intuition

Similarly to the previous approach, we will traverse over each farmland and store the top left and bottom right corner coordinates in our answer. We will use the breadth-first search here to iterate over each cell. Iterating over the matrix, we will enqueue the first cell and mark it visited in the array `visited`. In the BFS, we will pop the cell from the queue, iterate over the four neighbors, and add them to the queue if the farmland cells have not been visited yet.

In BFS, the cells are visited in fixed order using a queue, and hence, we can identify the last visited cell in this group of farmland. Therefore, we don't need to keep the maximum coordinates we have seen. We can store the last cell we visit from the current group of farmland in the BFS, which would be the coordinates of the current farmland in the bottom right corner.

#### Algorithm

1. Iterate over each cell in the matrix `land` and for each cell `(row1, col1)` do the following:

    - If the cell is a farmland cell, i.e `land[row1][col1] = 1` and isn't visited yet (`visited[row1][col1] = 0`), enqueue it to the queue start BFS from `(row1, col1)`.
    - Traverse over the four neighbors and add them to the queue for BFS if the neighbor is within the matrix boundary and is a farmland cell and hasn't visited yet. Also, mark these coordinates as visited.
    - When the BFS completes return the last coordinate that was popped from the queue and store the top left coordinate as `(row1, col1)` and the bottom right as the last visited node in the list `ans`.

2. Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/QpeHLgK4/shared" frameBorder="0" width="100%" height="500" name="QpeHLgK4"></iframe>

#### Complexity Analysis

Here, $M$ is the number of rows in the matrix and $N$ is the number of columns in the matrix.

* Time complexity: $O(M \cdot N)$

  We will iterate over each cell in the matrix at most once because of the `visited` array. All other helper functions like `isWithinFarm` are $O(1)$. Hence, the total time complexity is $O(M \cdot N)$.

* Space complexity: $O(M \cdot N)$

  The array `visited` is of size $M \cdot N$, also there will be space consumed by the queue that can be equal to $M * N$ if all cells are `1` in the matrix. Apart from this, there is also array `ans`, but the space used to store the result isn't considered as part of the space complexity. Hence, the total space complexity is $O(M \cdot N)$.

---
### Approach 3: Greedy

#### Intuition

We can solve this problem with a greedy approach because all farmlands will be rectangular. DFS and BFS approaches are able to find irregularly shaped farmland. Since farmlands are rectangular, we can just start from the first farmland cell, the top left corner, and iterate over the cells in the current row until we find a cell with the value `0`. The y-coordinate of this cell will be the `y` coordinate of the bottom right corner. We can then iterate over the cells with this `y` coordinate and increase the `x` coordinate until we find the cell with value `0`, this will be the bottom right corner of the current farmland.

We will also need to keep track of which cells have already been visited. We could use a separate array `visited` as we did in the last two approaches, but we will use the input matrix here to demonstrate another strategy. We mark all cells with values `1` to `0` in the farmland so that we don't visit them again and consider them as separate farmland. Please note that in an interview setting changing the input is generally discouraged.

This way, we will start from the first cell with the value `1` and then find the bottom right corner coordinate using the above strategy, then store the resulting coordinates in the list `ans`.

#### Algorithm

- Initialize dimensions `M` and `N` to represent the number of rows and columns in the `land` grid.
- Create a `res` array to store the top-left and bottom-right coordinates of each farmland plot.

- Iterate through each cell in the grid using nested loops:
  - For every cell `(row1, col1)`, check if it is part of farmland (`land[row1][col1] == 1`).
  - If farmland is found, initialize `x` to `row1` and `y` to `col1`.

- Expand the farmland boundaries:
  - Increment `x` until you find the last row where `land[x][col1] == 1`.
  - For each row in this range, increment `y` until you find the last column where `land[x][y] == 1`.
  - Mark all cells in the identified rectangle as `0` to avoid revisiting them.

- Record the top-left `(row1, col1)` and bottom-right `(x - 1, y - 1)` coordinates of the current farmland plot in `res`.

- Return the `res` array containing the coordinates of all identified farmland plots.

#### Implementation

<iframe src="https://leetcode.com/playground/ADduxYQV/shared" frameBorder="0" width="100%" height="463" name="ADduxYQV"></iframe>

#### Complexity Analysis

Here, $M$ is the number of rows in the matrix and $N$ is the number of columns in the matrix.

* Time complexity: $O(M \cdot N)$

  We will iterate over each cell in the matrix at most once because we mark the visited cells in the `land`  array.  Hence, the total time complexity is $O(M \cdot N)$.

* Space complexity: $O(1)$

  The only space required is `ans` but the space used to store the result isn't considered as part of space complexity. Hence, the total space complexity is constant.

---