# Official Solution

**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solution/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solution/)

---

[TOC]

## Solution

---

### Overview

We are asked to build a house with the shortest total travel distance to all other houses. To do so, we must be able to find the shortest distance between two cells (one empty land and a house). This process will then be repeated for every pair of empty land and house.
As such, an intuitive first step is to record the location of all houses (1-valued cells) and empty land (0-valued cells) in separate vectors.

Then, for each empty land, traverse all houses, and add the Manhattan Distance:  
`distance = |x1 - x2| + |y1 - y2|`, where `(x1, y1)` are the coordinates of empty land and `(x2, y2)` are the coordinates of a house.

But the problem here is that we have some blocked cells.
For example, in the below configuration the formula does not give the correct distance between P1 and P2. This is because there are **obstacles between the two points**.

![blocked paths](../Figures/317/Slide1.PNG)

<br />

Since obstacles preclude us from using the formula, we will instead perform a level-wise Breadth-First Search (BFS) for each cell, where each level is 1 distance further away from the starting cell (traversing 4-directionally). As we expand our Breadth-First Search, we will not visit any cell that is blocked or any cell that has already been visited.

<br />

_Why did we choose to use BFS?_

> Our graph is not weighted. We can consider each edge to have the same weight of 1.
> Since the graph is unweighted, BFS can be used to find the shortest path between a starting cell and any other reachable cell.

> The actual distance calculation measures grid distance in terms of only horizontal and vertical movements. Since we can only move up, down, left, and right, we can apply BFS to calculate the actual distance.  At each iteration in the BFS, we will only consider expanding our search in the horizontal or vertical direction.

</br>

---

### Approach 1: BFS from Empty Land to All Houses

**Intuition**

Our goal is to find the empty land cell with the shortest total distance to all houses, so we must first find the shortest total distance to all houses from each empty land cell.
As previously mentioned, this can be accomplished using BFS. For each empty cell (cell value equals 0) in the grid, start a BFS and sum all the distances to houses (cell value equals 1) from this cell. We will also keep track of the number of houses we have reached from this source cell (empty cell).
If we cannot reach all the houses from the current empty cell, then it is not a valid empty cell. Furthermore, we can be certain that any cell visited during this BFS also cannot reach all of the houses. So we will mark all cells visited during this BFS as obstacles to ensure that we do not start another BFS from this region.

**Algorithm**

1. For each empty cell (`grid[i][j]` equals 0), start a BFS:
    - In the BFS, traverse all 4-directionally adjacent cells that are not blocked or visited and keep track of the distance from the start cell. Each iteration adds 1 to the distance.
    - Every time we reach a house, increment houses reached counter `housesReached` by 1, and increase the total distance `distanceSum` by the current distance (i.e., the distance from the start cell to the house).
    - If `housesReached` equals `totalHouses`, then return the total distance. 
    - Otherwise, the starting cell (and every cell visited during this BFS) cannot reach all of the houses.  So set every visited empty land cell equal to 2 so that we do not start a new BFS from that cell and return `INT_MAX`.
2. Each time a total distance is returned from a BFS call, update the minimum distance (`minDistance`).
3. If it is possible to reach all houses from any empty land cell, then return the minimum distance found. Otherwise, return `-1`.

!?!../Documents/317/317_shortest_distance_from_all_buildings_1.json:960,540!?!

<br />

**Implementation**

<iframe src="https://leetcode.com/playground/9rEfVC72/shared" frameBorder="0" width="100%" height="500" name="9rEfVC72"></iframe>

**Complexity Analysis**

Let $$N$$ and $$M$$ be the number of rows and columns in `grid` respectively.

-   Time Complexity: $$O(N^2 \cdot M^2)$$

    For each empty land, we will traverse to all other houses.
    This will require $$O($$number of zeros $$\cdot$$ number of ones$$)$$ time and the number of zeros and ones in the matrix is of order $$N \cdot M$$.
    Consider that when half of the values in grid are 0 and half of the values are 1, the total elements in grid would be $$(M \cdot N)$$ so their counts are $$(M \cdot N)/2$$ and $$(M \cdot N)/2$$ respectively, thus giving time complexity $$(M \cdot N)/2 \cdot (M \cdot N)/2$$, that results in $$O(N^2 \cdot M^2)$$.

> In JavaScript implementation, for simplicity, we have used an array for the queue.
> Since popping elements from the front of an array is an O(n) operation, which is undesirable,
> instead of popping from the front of the `queue`, we will iterate over the `queue` and record cells to be explored in the next level in `next_queue`.
> Once the current `queue` has been traversed, we simply set `queue` equal to the `next_queue`.

-   Space Complexity: $$O(N \cdot M)$$

    We use an extra matrix to track the visited cells, and the queue will store each matrix element at most once during each BFS call.
    Hence, $$O(N \cdot M)$$ space is required.

<br/>

---

### Approach 2: BFS from Houses to Empty Land

**Intuition**

In the previous approach, to get the minimum distance we started a BFS from each empty land (cell value equal to 0) to all the houses (cell value equal to 1), but another way to look at the problem is starting from a house and finding all reachable empty lands.

If we can reach a house from an empty land, then we can also traverse the other way (i.e., reach empty land from a house).

When there are fewer houses than empty lands, then this approach will require less time than the previous approach and vice versa. While, on average, this approach is not an improvement on the previous approach, it will serve as a mental stepping stone to better understand the third approach.

Previously, we were calculating the total minimum distance sum of one empty cell in one BFS traversal, hence we were only returning the distance sum from the BFS function for each cell.
But if we start BFS from a house instead of an empty cell, we will be generating partial distance (i.e., distance from only one house to the current cell and not the sum distance from all the houses to this empty cell), hence we need some extra space to store the sum of the partial distances from each house cell.


We will need to store 2 values at each cell position of empty cells: total distance sum from all houses to this empty land and number of houses that can reach this empty land.

**Algorithm**

1. For each house cell (`grid[i][j]` equals 1), start a BFS:
    - For each empty cell we reach, increase the cell's sum of distances by the steps taken to reach the cell.
    - For each empty cell we reach, also increment the cell's house counter by 1.
2. After traversing all houses, get the minimum distance from all empty cells which have `housesReached` equal to `totalHouses`.
3. If it is possible for all houses to reach a specific empty land cell, then return the minimum distance found. Otherwise, return `-1`.

!?!../Documents/317/317_shortest_distance_from_all_buildings_2.json:960,540!?!

<br />

**Implementation**

<iframe src="https://leetcode.com/playground/DZt4xtHc/shared" frameBorder="0" width="100%" height="500" name="DZt4xtHc"></iframe>

**Complexity Analysis**

Let $$N$$ and $$M$$ be the number of rows and columns in `grid` respectively.

-   Time Complexity: $$O(N^2 \cdot M^2)$$

    For each house, we will traverse across all reachable land.
    This will require $$O($$number of zeros $$\cdot$$ number of ones$$)$$ time and the number of zeros and ones in the matrix is of order $$N \cdot M$$.
    Consider that when half of the values in grid are 0 and half of the values are 1, total elements in grid will be $$(M \cdot N)$$ so their counts are $$(M \cdot N)/2$$ and $$(M \cdot N)/2$$ respectively, thus giving time complexity $$(M \cdot N)/2 \cdot (M \cdot N)/2$$, which results in $$O(N^2 \cdot M^2)$$.

> In JavaScript implementation, for simplicity, we have used an array for the queue.
> However, popping elements from the front of an array is an O(n) operation, which is undesirable.
> So, instead of popping from the front of the `queue`, we will iterate over the `queue` and record cells to be explored in the next level in `next_queue`.
> Once the current `queue` has been traversed, we simply set `queue` equal to the `next_queue`.

-   Space Complexity: $$O(N \cdot M)$$

    We use an extra matrix to track the visited cells and another one to store distance sum along with the house counter for each empty cell, and the queue will store each matrix element at most once during each BFS call.
    Hence, $$O(N \cdot M)$$ space is required.

<br/>

---

### Approach 3: BFS from Houses to Empty Land (Optimized)

**Intuition**

Instead of making a new matrix each time to track the visited cells, we can use the input grid matrix for this purpose.
During the first BFS we can change the visited empty land values from `0` to `-1`. Then during the next BFS we will only visit empty lands with a value of `-1`s (meaning they can reach the first house), then change `-1` to `-2` and then perform the next BFS only on `-2`s, and so on...

This approach allows us to avoid visiting any cell that cannot reach all houses.

_Can we also use this decrement in empty land value to denote that the cell has been visited?_

> Imagine we are currently at cell `(2, 3)` with value `-1` and we change its value to `-2`.  
> In the queue the next element is `(2, 4)`, its value is also `-1` and we change its value to `-2`. While exploring paths from `(2, 4)`, we see that the cell `(2, 3)` is adjacent, and has the value `-2`. However, currently, we are checking for `-1` valued cells only. Hence, `(2, 3)` will not be inserted again in the queue, so this decrease in value can be used as a visited cell check because when a cell has been visited, then its value will be 1 less and it will not satisfy the condition to be inserted in the queue.

If there was an empty land cell that was not reachable in the previous iteration, then its value has not been decreased, hence we will not insert that cell in the queue when we start a BFS from another house cell.  
Therefore, this approach prunes many iterations and saves some time since we are not creating a new matrix to track visited cells for each BFS call.

!?!../Documents/317/317_shortest_distance_from_all_buildings_3.json:960,540!?!

<br />

**Algorithm**

1. For each `grid[i][j]` that is equal to 1, start a BFS. During the BFS:
    - All 4-directionally adjacent grid cells with values equal to `emptyLandValue` are valid.
    - Visit them one by one and store the distances of these cells from the source in a `total` matrix.
    - Decrease the value of visited cells by 1.
2. After each BFS traversal, decrement `emptyLandValue` by 1.
3. Before we start a BFS call for a house, we set `minDist` equal to `INT_MAX`.
4. Then we will traverse all of the empty land cells with values equal to `emptyLandValue`
5. After the last BFS traversal, if the minimum distance equals `INT_MAX`, then there has not been any cell that can be reached by all the houses, so return `-1`.
6. Otherwise, return the minimum distance `minDist`.

!?!../Documents/317/317_shortest_distance_from_all_buildings_4.json:960,540!?!

<br />

**Implementation**

<iframe src="https://leetcode.com/playground/f6nhnV4V/shared" frameBorder="0" width="100%" height="500" name="f6nhnV4V"></iframe>

**Complexity Analysis**

Let $$N$$ and $$M$$ be the number of rows and columns in `grid` respectively.

-   Time Complexity: $$O(N^2 \cdot M^2)$$

    For each house, we will traverse across all reachable land.
    This will require $$O($$number of zeros $$\cdot$$ number of ones$$)$$ time and the number of zeros and ones in the matrix is of order $$N \cdot M$$.
    Consider that when half of the values in grid are 0 and half of the values are 1, total elements in grid would be $$(M \cdot N)$$ so their counts are $$(M \cdot N)/2$$ and $$(M \cdot N)/2$$ respectively, thus giving time complexity $$(M \cdot N)/2 \cdot (M \cdot N)/2$$, that results in $$O(N^2 \cdot M^2)$$.

-   Space Complexity: $$O(N \cdot M)$$

    We use an extra matrix to store distance sums, and the queue will store each matrix element at most once during each BFS call.
    Hence, $$O(N \cdot M)$$ space is required.

<br/>

---