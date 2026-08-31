# Official Solution

**Link:** [https://leetcode.com/problems/bomb-enemy/solution/](https://leetcode.com/problems/bomb-enemy/solution/)

---

[TOC]

## Solution

---
### Approach 1: Brute-force Enumeration

**Intuition**

Arguably the most intuitive solution is to _try out_ all empty cells, _i.e._ placing a bomb on each empty to see how many enemies it will kill.

![explosion](../Figures/361/361_explosion.png)

As naïve as it might sound, this approach can pass the test on the online judge.

**Algorithm**

- We enumerate each cell in the grid from left to right and from top to bottom.
For each **empty** cell, we calculate how many enemies it will kill if we place a bomb on the cell.

- We define a function named `killEnemies(row, col)` which returns the number of enemies we kill if we place a bomb on the coordinate of `(row, col)`.

- In order to implement the `killEnemies(row, col)` function, starting from the position of empty cell `(row, col)`, we move away from the cell in four directions (_i.e._ left, right, up, down), until we run into a wall or the boundary of the grid.

- At the end of enumeration, we return the maximum value among all the return values of `killEnemies(row, col)`.

<iframe src="https://leetcode.com/playground/3J4yA8Zp/shared" frameBorder="0" width="100%" height="500" name="3J4yA8Zp"></iframe>



**Complexity Analysis**

Let $$W$$ be the width of the grid and $$H$$ be the hight of the grid.

- Time Complexity: $$\mathcal{O}\big(W \cdot H \cdot (W+H)\big)$$
    - We run an iteration over each element in the grid. In total, the number of iterations would be $$W \cdot H$$.

    - Within each iteration, we need to calculate how many enemies we will kill if we place a bomb on the given cell.
    In the worst case where there is no wall in the grid, we need to check $$(W - 1 + H - 1)$$ number of cells.

    - To sum up, in the worst case where all cells are empty, the number of checks we need to perform would be $$W \cdot H \cdot (W-1+H-1)$$.
    Hence the overall time complexity of the algorithm is $$\mathcal{O}\big(W \cdot H \cdot (W+H)\big)$$.


- Space Complexity: $$\mathcal{O}(1)$$

    - The size of the variables that we used in the algorithm is constant, regardless of the input.


---
### Approach 2: Dynamic Programming

**Intuition**

As one might notice in the above brute-force approach, there are some **redundant calculations** during the iteration.
More specifically, for any row or column that does not have any wall in-between, the number of enemies that we can kill remains the same for any empty on that particular row or column.
While in our brute-force approach, we would iterate the same row or column over and over, regardless the situation of the cells.

In order to _reduce_ or even eliminate the redundant calculation, one might recall one of the well-known techniques called [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming).

>The basic principal of **dynamic programming** is that we store the immediate results which are intended to be reused later, to avoid the recalculation.

However, the key to apply dynamic programming technique lies on how we can **_decompose_** the problem into a set of subproblems.
The solutions of subproblems would then be kept as intermediate results, in order to calculate the final result.

Now let us get back to our problem.
Given an empty cell located at `(row, col)`, if we place a bomb on the cell, as we know, its influence zone would extend over the same row and column.
Let us define the number of enemies that the bomb kills as `total_hits`, and the number of enemies it kills along the row and column as `row_hits` and `col_hits` respectively.
As one might figure, we can obtain the equation of `total_hits = row_hits + col_hits`.

It now boils down to how we calculate the `row_hits` and `col_hits` for each cell, and moreover how we can **_reuse_** the results.

Let us take a look at some examples.

![examples](../Figures/361/361_illustration.png)

In order to calculate the `row_hits`, we can break it down into two cases:

- **case 1).** if the cell is situated at the beginning of the row, we then can scan the entire row until we run into a wall or the boundary of the grid.
The number of enemies that we encounter along the scan would be the value for `row_hits`.
And the `row_hits` value that we obtained would remain _**valid**_ until the next obstacle.
For example, as we can see the top-left cell in the above graph, its `row_hits` would be one and it remains valid for the rest of the cells on the same row.

- **case 2).** if the cell is situated right after a wall, which indicates that the previous `row_hits` that we calculated becomes invalid.
As a result, we need to recalculate the value for `row_hits` starting from this cell.
For example, for the enemy cell that is located on the column of index `2`, right before the cell, there is a wall, which invalidates the previous `row_hits` value.
As a result, we run another scan starting from this cell, to calculate the `row_hits` value.

>We can calculate the value for `col_hits` in the **same sprit**, but with one small difference.

For the `row_hits` value, it suffices to use one variable for all the cells on the same row, since we iterate over the grid from left to right and we don't need to memorize the `row_hits` value for the previous row.

As to the `col_hits` value, we need to use an _**array**_ to keep track of all the `col_hits` values, since we need to go over all the columns for each row.

**Algorithm**

The overall algorithm is rather similar with the brute-force approach, where we still run an iteration over each cell in the grid.

Rather than recalculating the hits for each cell, we **_store_** the intermediate results such as `row_hits` and `col_hits` and **_reuse_** them whenever possible.

Here are some sample implementations, which are inspired from the post by [StefanPochmann](https://leetcode.com/problems/bomb-enemy/discuss/83387/Short-O(mn)-time-O(n)-space-solution) in the discussion forum.

<iframe src="https://leetcode.com/playground/eW2WXcAx/shared" frameBorder="0" width="100%" height="500" name="eW2WXcAx"></iframe>


**Complexity Analysis**

Let $$W$$ be the width of the grid and $$H$$ be the hight of the grid.

- Time Complexity: $$\mathcal{O}(W \cdot H)$$

    - One might argue that the time complexity should be $$\mathcal{O}\big(W \cdot H \cdot (W + H)\big)$$, judging from the detail that we run nested loop for each cell in grid.
    If this is the case, then the time complexity of our dynamic programming approach would be the same as the brute-force approach.
    Yet this is contradicted to the fact that by applying the dynamic programming technique we reduce the redundant calculation.

    - To estimate overall time complexity, let us take another perspective.
    Concerning each cell in the grid, we assert that it would be visited **exactly three times**.
    The first visit is the case where we iterate through each cell in the grid in the outer loop.
    The second visit would occur when we need to calculate the `row_hits` that involves with the cell.
    And finally the third visit would occur when we calculate the value of `col_hits` that involves with the cell.

    - Based on the above analysis, we can say that the overall time complexity of this dynamic programming approach is $$\mathcal{O}(3 \cdot W \cdot H) = \mathcal{O}(W \cdot H)$$.

- Space Complexity: $$\mathcal{O}(W)$$

    - In general, with the dynamic programming approach, we gain in terms of time complexity, in trade of a lost in space complexity.

    - In our case, we allocate some variables to hold the intermediates results, namely `row_hits` and `col_hits[*]`.
    Therefore, the overall space complexity of the algorithm is $$\mathcal{O}(W)$$, where $$W$$ is the number of columns in the grid.

---