# Official Solution

**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solution/](https://leetcode.com/problems/where-will-the-ball-fall/solution/)

---

[TOC]

## Solution

---

### Overview

It is an interesting problem.  We can visualize it as a zig-zag bowling game where the grid represents the bowling surface. Every column is a different lane. 


The balls thrown from the first row of every lane, travel in a zig-zag direction based on the walls in the grid. 

![Problem Visualisation](../Figures/1706/problem_visualization.png)

The question is, where will each of these balls fall at the end?  

There could be one of the two consequences. 

- The ball reaches the last row of the grid and drops out from some lane. In this case, we have to return the lane number(in other words, column number) from which the ball drops out of the grid.

  ![Ball Drops Out At The End Example](../Figures/1706/Ball_drops_out_example.png)

- The ball reaches a certain point where it is stuck and cannot move ahead. In this case, we have to return -1.

  ![Ball Stuck In Grid Example](../Figures/1706/ball_is_stuck_example.png)

Now that we understand the problem, let's look at different approaches to solving this problem.

---

### Approach 1: Depth First Search (DFS)

#### Intuition

Using [Depth First Search(DFS)](https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/) algorithm is an intuitive approach to solve this problem by simulating the actual flow of the ball. It is followed for every ball thrown from the first row of every column.

Then, it follows the direction in which the ball would travel in a depth-first search manner. This process is repeated until either of the two conditions are satisfied:

Condition 1:
The ball reaches a point where it can no longer move ahead. In this case, we will return -1.
Condition 2:
The ball reaches the last row. In this case, we will return the column in which the ball will drop.

Now, the problem narrows down to finding when either of these 2 conditions is satisfied as this will be the terminating condition for the depth first search. 

Let's understand how will we find if a ball can move ahead or is stuck. Let's look at the following few examples.

![Six examples Illustration](../Figures/1706/6_example_scenarios.png)

From the above illustrations, can you decode the pattern for either of the cases?
>Try to think of it on your own before reading ahead.

The first thing to note is that the ball always moves in **diagonal** direction. 
> Ball moves diagonally in the right direction if the value of the current cell is `1` and left direction if the value of the current cell is `-1`. 

Let's first look at the case where the ball has to move in _right_ diagonal. (Value of current cell is 1)

![Ball Falls In Right Diagonal](../Figures/1706/ball_first_position_right_diagonal.png)

Now, for the ball to fall in the next row from the current cell, the adjacent cell should provide the way for the ball to go ahead.
There could be 2 possible scenarios here,
> Carefully look at the value of an adjacent cell in the right direction in both scenarios. 

![Ball Next Movement In 2 Scenarios](../Figures/1706/ball_movement_2_scenarios.png)

In scenario 1, the ball can go ahead because the adjacent column does not block the way. Here, the value of the adjacent cell is the same as the current cell.
In scenario 2, the ball cannot go ahead because the adjacent column blocks its way. In this case, it forms a V shape. Here, the value of the adjacent cell is different from the current cell.

_Similar intuition is applicable if the ball moves on the left diagonal._

From this, we can establish that,
"The ball can move into the next row from the current cell if and only if the adjacent column has the same value".

> Note: The adjacent cell to be checked will differ based on the direction in which the ball will fall. If the ball positioned a cell(`row`, `col`) has to move in the left direction(value of the cell is `1`), the adjacent cell would be the left cell (`row`, `col - 1`). And, if the current ball has to move in the right direction(value of the cell is `-1`), the adjacent cell would be the right cell (`row`, `col - 1`).

![Adjacent Cells Example](../Figures/1706/adjacent_cells_example.png)

  Condition: Adjacent cell value must be the same as the current cell.

#### Algorithm

- The depth first search algorithm is implemented by using a `recursive` function that identifies the next position of the ball from the current cell. 
  
   Let the current position of the ball be at a cell(`row`, `col`). There could be 2 possible values of any cell in the grid that will decide the next move of the ball. 

   Case 1: The value of the current cell in the grid  (`row`, `col`) is `1`. The ball must move in the right direction.

       Adjacent Cell is `row` `column + 1`
       Condition to check = grid[row][column] must be equal to grid[row][column + 1]
       If the condition is satisfied,
       Next Row = row + 1
       Next Column = column + 1

     Case 2: The value of the current cell in the grid (`row`, `col`) is -1. The ball must move in the left direction.

      Adjacent Cell is `row` `column - 1`
      Condition to check = grid[row][column] must be equal to grid[row][column - 1]
      If the condition is satisfied,
      Next Row = row + 1
      Next Column = col - 1

   If at any point, the conditions mentioned above are not satisfied, it would imply that the ball is stuck at its current position. Return `-1` in such cases.


   Let's define the function `findBallDropColumn(row, column, grid)` to recursively compute the result for the ball at cell (row, column) in the grid.

The algorithm can be written as,

```java
if (grid[row][col] == 1) {
    int nextColumn = col + 1;
    if (col != grid[0].length - 1 && grid[row][col] == grid[row][nextColumn])
        return findBallPath(row + 1, nextColumn, grid);
    else
        return -1;
}
if (grid[row][col] == -1) {
    int nextColumn = col - 1;
    if (col != 0 && grid[row][col] == grid[row][nextColumn])
        return findBallPath(row + 1, nextColumn, grid);
    else
        return -1;
}
```

Additionally, we can simplify the above implementation. Note the common pattern to find the next column in both cases,

`nextColumn = current Column + Value of current cell in the grid. `

Base Case:
The recursive depth-first search is terminated under the following conditions,
- We hit a V shape wall, and there is no way to move forward. This case is taken care of in the above algorithm.

- We reach the last row, and the ball drops out. In this case, we will return the column where the ball will eventually end up.

```java

       if(row == grid.length)
            return col;
```

#### Implementation

<iframe src="https://leetcode.com/playground/SjwamD6d/shared" frameBorder="0" width="100%" height="429" name="SjwamD6d"></iframe>

#### Complexity Analysis

Let $M$ be the number of rows and $N$ be the number of columns in the `grid`.

Time Complexity: $\mathcal{O}(M \cdot N)$ The recursive method `findBallDropColumn` to find ball position is called for each of the $N$ columns.

For each recursive call for `findBallDropColumn` the row number starts with `0` and increments by `1` in every recursive call. In the worst case, if the ball is not stuck at any cell in the middle of the grid, the recursion will continue for $M$ rows.

Thus, the time complexity is $\mathcal{O}(M \cdot N)$.

Space Complexity: $\mathcal{O}(M)$ The maximum depth of recursive call stack will be equal to number of rows that is, $M$.

---
### Approach 2: Dynamic Programming Approach

#### Intuition

There is yet another way to solve the problem. Let's try to answer the following question,

> What information is required to compute the result for a ball positioned at a cell(`row`, `column`)"?

The answer is that to compute the result for the current cell, we require the values of the _next_ column in `row + 1`.
Can we implement the solution, such that values required for the current cell are pre-computed and can be referred to by the current cell?

Yes, if we find the result for every cell of the grid in a bottom-up fashion, that is, starting from the last row to the first row, we will always have the result of `row + 1` while computing the result for `row`. 

![Dp Solution Example](../Figures/1706/dp_solution_example.png)

#### Algorithm

1. Build an additional 2-dimensional array `dp` of the size of the grid. Iteratively compute the result of every column starting from the last row to the first row. 

2. The result is computed by referring to the results of the next column in the `dp` array. 
     
    For the last row,
    ```
    dp[row][col] = nextColumn
    ```
    For the remaining rows, 
   ```
    int nextColumn = currentColumn + grid[currentRow][currentColumn]
    dp[row][col] = dp[row+1][nextColumn]
    ```

   This works because the result for `row + 1` is already computed and stored in dp. 


3. On reaching row `0`, copy the values in all the columns in the result array.

#### Implementation

<iframe src="https://leetcode.com/playground/4vkMjty4/shared" frameBorder="0" width="100%" height="500" name="4vkMjty4"></iframe>

#### Complexity Analysis

Let $M$ be the number of rows and $N$ be the number of columns in the `grid`.

Time Complexity: $\mathcal{O}(M \cdot N)$ In the nested `for` loop, the outer loop iterates $M$ times for each row and the inner loop iterates $N$ times for every column in that row. 

Thus, the time complexity is $\mathcal{O}(M \cdot N)$.

Space Complexity: $\mathcal{O}(M \cdot N)$ The space is for the additional 2-dimensional array `memo` of size $(M \cdot N)$.

---

### Approach 3: Iterative Approach, Simulation

#### Intuition

This approach simulates the flow of the ball iteratively (_Approach 1_ followed the recursive approach). 
The flow of the ball can be described as,

"A ball starts moving from a column, say `col` of the first row (`row 0`). On every move, the ball falls into the next row and column. The next row is always `row + 1`. But, the next column is computed based on the value of the current cell (`row`, `col`). "

This flow is simulated for every ball starting from columns and moving from the first row to the last row.

Using this analysis, let's look at the algorithm to implement this approach.

#### Algorithm

1. Start by picking up a ball starting from every column `col`, iterating from the `0th` column to the last column. Initialize the current column as `col`.

2. For every such ball, simulate its movement in every row ranging from the `0th` to the `nth` row.
     The next column is calculated as, 
      ```
      nextColumn = Value of Current column + Value of current cell. 
      ```
   > To understand the intuition behind this calculation, refer to the Intuition section of _Approach 1_.

3. Update the value of `nextColumn` in the result array for every row. 
  In the end, the `result` will store the column number where the ball will fall after the last row.


#### Implementation

<iframe src="https://leetcode.com/playground/695k7pZp/shared" frameBorder="0" width="100%" height="429" name="695k7pZp"></iframe>

#### Complexity Analysis

Let $M$ be the number of rows and $N$ be the number of columns in the `grid`.

Time Complexity: $\mathcal{O}(M \cdot N)$ In the nested `for` loop, the outer loop iterates $N$ times for each column and inner loop iterates $M$ times for every row in that column. 

Thus, the time complexity is $\mathcal{O}(M \cdot N)$.

Space Complexity: $\mathcal{O}(1)$ The algorithm uses constant extra space.

---