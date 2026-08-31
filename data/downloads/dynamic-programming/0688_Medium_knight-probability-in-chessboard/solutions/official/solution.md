# Official Solution

**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solution/](https://leetcode.com/problems/knight-probability-in-chessboard/solution/)

---

[TOC]

## Solution

--- 

### Overview

>**Note.** For this problem, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this article.

---

### Approach 1: Bottom-up Dynamic Programming

#### Intuition

We need to find the probability that the knight will remain on the chessboard after $k$ moves, that is it will be in one of the cells $(i, j)$ such that $0 \le i < n, 0 \le j < n$.

The first observation: the probability of the knight being on the board after $k$ moves equals the sum of probabilities of being in the cell $(i, j)$ over all $0 \le i < n, 0 \le j < n$.

We reduce our problem to finding the probability of the knight being in the cell $(i, j)$ after $k$ moves for each $0 \le i < n, 0 \le j < n$.

Where the knight locates at the $k^\text{th}$ move depends on where it was at the previous $(k - 1)^\text{th}$ move which in turn depends on where it was at the $(k - 2)^\text{th}$ move and so on.

The transition from the current $k^\text{th}$ move to the previous $(k - 1)^\text{th}$ one is essentially the reduction to the smaller subproblem. When we have a reduction to the smaller problem, it is worth thinking of dynamic programming.

Let's think about what we need to completely describe the knight's state.

The knight makes the first move, then the second one, the third one, and so on until the last $k^\text{th}$ move. The first parameter that describes the state is $\text{moves}$ – how many moves has the knight already made. One can think of it as of time passed since the beginning of the knight's journey.

Also, we need the knight's location on the chessboard, which we can describe with two integers $i$ and $j$ – the cell's coordinates.

Three parameters $\text{moves}$, $i$, and $j$ are enough to fully describe the knight's state.

To solve the problem using dynamic programming, we define $\text{dp}[\text{moves}][i][j]$ as the probability of the knight being at cell $(i, j)$ on the chessboard after $\text{moves}$ moves.

Here is an example of the DP table for $n = 8, \text{row} = 4, \text{column} = 4, 0 \le \text{moves} \le 2$.

![Example of a DP table](../Figures/688/688_dp_example.drawio.png)

The base case is when $\text{moves} = 0$, representing the starting position of the knight. In this case, the probability of being at cell $(\text{row}, \text{column})$ is 100%. We set $\text{dp}[0][\text{row}][\text{column}] = 1$, and all other cells have a probability of $0$.

Now, let's consider the transitions for the dynamic programming solution. We will compute the DP table in increasing order of $\text{moves}$ – $\text{dp}[0]$ is already calculated, after that we find $\text{dp}[1]$, then $\text{dp}[2]$ and so on. For each $\text{moves}$ from $1$ to $k$, we want to calculate the probability for each cell $(i, j)$ based on the previous moves.

To determine the probability for each cell after $\text{moves}$ moves, we iterate over all cells $(i, j)$ on the chessboard. For each cell, we consider all possible moves the knight can make to reach that cell.

![Knight's moves](../Figures/688/688_knight_moves.drawio.png)

For a given cell $(i, j)$, we iterate over the possible directions, calculating the probability of reaching cell $(i, j)$ from neighboring cells $(i', j')$ in the previous move. The variables $i'$ and $j'$ represent the coordinates of the neighboring cells (in the sense of knight's moves).

We consider all eight possible directions that a knight can move. Each direction corresponds to a movement pattern of two steps in one direction and one step in the perpendicular direction, or vice versa. For example, one possible direction is moving two steps vertically up and one step horizontally to the right. We use a list of $\text{directions}$ to represent these possible moves: $\text{directions} = [(1, 2), (1, -2), (-1, 2), (-1, -2), (2, 1), (2, -1), (-2, 1), (-2, -1)]$.

For each direction, we calculate the probability of reaching cell $(i, j)$ from the neighboring cell $(i', j')$ in the previous move. We sum up the probabilities for all eight neighboring cells and divide the result by $8$ since there are eight possible moves for the knight.

By considering all possible directions and summing up the probabilities from the neighboring cells, we obtain the probability of being at cell $(i, j)$ after $\text{moves}$ moves:

$\Large{\text{dp}[\text{moves}][i][j] = \frac{1}{8} \sum_{(i', j')} \text{dp}[\text{moves} - 1][i'][j']}$

![1/8 factor](../Figures/688/688_1_8_factor.drawio.png)

This probability takes into account all the possible paths and movements of the knight up to that point.

Finally, to calculate the total probability of the knight remaining on the board after $k$ moves, we sum up the probabilities for all cells $(i, j)$ on the chessboard.

Let $\text{total\_probability}$ represent the overall probability that the knight remains on the chessboard after $k$ moves. To calculate this probability, we need to consider each cell on the chessboard.

We iterate over all the cells $(i, j)$ on the chessboard, starting from the top-left cell and moving row by row. For each cell, we sum up $\text{dp}[k][i][j]$. These $\text{dp}$ values represent the probabilities of the knight being at that cell after $k$ moves.

By summing up these probabilities for all cells on the chessboard, we obtain the $\text{total\_probability}$. This value reflects the cumulative likelihood that the knight will remain on the chessboard after $k$ moves. The higher the $\text{total\_probability}$, the greater the chance that the knight will still be on the board.

One can write this in mathematical notation: $$\text{{total\_probability}} = \sum_{i=0}^{n-1} \sum_{j=0}^{n-1} \text{dp}[k][i][j]$$.

The $\text{total\_probability}$ represents the probability that the knight remains on the board after $k$ moves, and you can return this value as the result.

#### Algorithm

1. Define possible directions for the knight's moves in $\text{directions}$.
2. Initialize the dynamic programming table $\text{dp}$ with zeros.
3. Set $\text{dp}[0][\text{row}][\text{column}]$ to $1$, representing the starting position of the knight.
4. Iterate $\text{moves}$ from $1$ to $k$.
    - Iterate $i$ from $0$ to $n-1$ (rows on the chessboard).
        - Iterate $j$ from $0$ to $n-1$ (columns on the chessboard).
            - Iterate over possible directions:
                - Calculate $i'$ as $i$ minus the vertical component of the direction.
                - Calculate $j'$ as $j$ minus the horizontal component of the direction.
                - Check if $i'$ and $j'$ are within the range $[0, n-1]$.
                    - If within range, add $\frac{1}{8} \text{dp}[\text{moves} - 1][i'][j']$ to $\text{dp}[\text{moves}][i][j]$.
5. Calculate the total probability by summing all values in $\text{dp}[k]$.
6. Return the total probability.

#### Implementation

In code, the variables $i'$ and $j'$ are denoted as $\text{prev\_i}$ and $\text{prev\_j}$, respectively.

<iframe src="https://leetcode.com/playground/4gnHU7CH/shared" frameBorder="0" width="100%" height="500" name="4gnHU7CH"></iframe>


#### Complexity Analysis

* Time complexity: $O(k \cdot n^2)$.

We have four nested for-loops: `for moves`, `for i`, `for j`, and `for direction`. The outer loop `for moves` runs $k$ times, the second and third loops `for i` and `for j` iterate over all cells on the $n \times n$ chessboard, and the innermost loop `for direction` iterates over the possible directions. As there are a constant number of directions ($8$), this loop can be considered as $O(1)$ iterations.

Within each state $(\text{moves}, i, j)$, the time complexity is constant, as we perform simple calculations and update the dynamic programming table.

The total number of iterations is determined by the product of the number of iterations in each loop: $O(k \cdot n^2)$.

* Space complexity: $O(k \cdot n^2)$.

We use a three-dimensional dynamic programming table $\text{dp}$ of size $(k+1) \times n \times n$ to store the probabilities of being at each cell after a certain number of moves. Therefore, the space complexity is $O(k \cdot n^2)$.

---

### Approach 2: Bottom-up Dynamic Programming with Optimized Space Complexity

In the original approach, we used a 3D dynamic programming table $\text{dp}$ to store the probabilities of being at each cell after a certain number of moves. However, this approach requires $O(k \cdot n^2)$ space complexity.

To reduce the space complexity, we can observe that we only need the probabilities from the previous move $\text{moves} - 1$ to calculate the probabilities for the current move $\text{moves}$. Therefore, we can maintain two 2D arrays $\text{prev\_dp}$ and $\text{curr\_dp}$, each of size $n \times n$, to store the probabilities for the previous move and the current move, respectively.

During the iteration, we update the values in $\text{curr\_dp}$ based on the values in $\text{prev\_dp}$. After each iteration, we swap the arrays $\text{prev\_dp}$ and $\text{curr\_dp}$ to reuse the space for the next iteration.

This way, we only need $O(n^2)$ space to store the probabilities for the current and previous moves, resulting in an optimized space complexity of $O(n^2)$.

By using this optimized memory approach, we can solve the problem efficiently while reducing the space required for storage.

#### Algorithm

1. Define possible directions for the knight's moves in $\text{directions}$.
2. Initialize the dynamic programming tables $\text{prev\_dp}$ and $\text{curr\_dp}$ with zeros.
3. Set $\text{prev\_dp}[\text{row}][\text{column}]$ to $1$, representing the starting position of the knight.
4. Iterate $\text{moves}$ from $1$ to $k$.
    - Iterate $i$ from $0$ to $n-1$ (rows on the chessboard).
        - Iterate $j$ from $0$ to $n-1$ (columns on the chessboard).
	    - Reset the probability for the current square before calculating it $\text{curr\_dp}[i][j] = 0$.
            - Iterate over possible directions:
                - Calculate $i'$ as $i$ minus the vertical component of the direction.
                - Calculate $j'$ as $j$ minus the horizontal component of the direction.
                - Check if $i'$ and $j'$ are within the range $[0, n-1]$.
                    - If within range, add $\frac{1}{8} \text{prev\_dp}[i'][j']$ to $\text{curr\_dp}[i][j]$.
    - Swap $\text{prev\_dp}$ and $\text{curr\_dp}$.
5. Calculate the total probability by summing all values in $\text{prev\_dp}$.
6. Return the total probability.

#### Implementation

<iframe src="https://leetcode.com/playground/CK5WYbtD/shared" frameBorder="0" width="100%" height="500" name="CK5WYbtD"></iframe>

#### Complexity Analysis

* Time complexity: $O(k \cdot n^2)$.

It is the same as in the previous approach.

* Space complexity: $O(n^2)$.

We use two dynamic programming tables: $\text{prev\_dp}$ and $\text{curr\_dp}$, each of size $n \times n$. Therefore, the space complexity is $O(n^2)$. The space complexity does not depend on the number of moves $k$, as we only keep track of the probabilities of being at each cell after the previous and current moves.

---

### Approach 3: Top-down Dynamic Programming (Memoization)

#### Intuition

In this approach, we will calculate the same DP table using the same recurrence relation as in the first one, but the manner of organizing computations will differ.

We will use the recursive function $\text{calculateDP}(\text{moves}, i, j)$ that returns the value of $\text{dp}[\text{moves}][i][j]$.

The base case of the recursive function is $\text{moves} = 0$: $\text{calculateDP}(0, \text{row}, \text{column})$ returns $1$, and $\text{calculateDP}(0, i, j)$ returns $0$ for all cells $(i, j) \ne (\text{row}, \text{column})$.

One can rewrite the DP recurrence relation as follows in terms of $\text{calculateDP}$: $\text{calculateDP}(\text{moves}, i, j)$ returns the sum of $\frac{1}{8} \text{calculateDP}(\text{moves} - 1, i', j')$ over the neighboring cells $(i', j')$. It is the same relation as in the first approach.

The answer to the problem is the sum of $\text{calculateDP}(k, i, j)$ over all cells $(i, j)$.

In the function $\text{calculateDP}(\text{moves}, i, j)$, we check if the value $\text{dp}[\text{moves}][i][j]$ has already been calculated and stored in the DP table. If it has, we directly return the stored value. Otherwise, we calculate the probability using the same recurrence relation as in the first approach.

To use this function, we need to initialize the DP table $\text{dp}$ with $-1$ values to indicate that the probabilities have not been calculated yet.

After calculating the probabilities for each cell, we can calculate the total probability by summing up the probabilities for all cells $(i, j)$ on the chessboard.

#### Algorithm

The function $\text{calculateDP}$ takes three parameters: $\text{moves}$, $i$, and $j$.

1. If $\text{moves}$ equals $0$, return $1$ if $i$ equals $\text{row}$ and $j$ equals $\text{column}$, otherwise return $0$.
2. If $\text{dp}[\text{moves}][i][j]$ is not equal to $-1$, return $\text{dp}[\text{moves}][i][j]$.
3. Initialize $\text{dp}[\text{moves}][i][j]$ to $0$.
4. Iterate over possible directions:
    - Calculate $i'$ by subtracting the vertical component of the direction from $i$.
    - Calculate $j'$ by subtracting the horizontal component of the direction from $j$.
    - Check if $i'$ and $j'$ are within the chessboard boundaries:
        - If so, add $\frac{1}{8} \text{calculateDP}(\text{moves} - 1, i', j')$ to $\text{dp}[\text{moves}][i][j]$.
5. Return $\text{dp}[\text{moves}][i][j]$.

To solve the problem:
- Initialize the $\text{dp}$ table with $-1$ values.
- Calculate the total probability by summing $\text{calculateDP}(k, i, j)$ for all $i$, $j$.
- Return the total probability.

#### Implementation

<iframe src="https://leetcode.com/playground/fdSjWkfm/shared" frameBorder="0" width="100%" height="500" name="fdSjWkfm"></iframe>


#### Complexity Analysis

* Time complexity: $O(k \cdot n^2)$.

Even though we changed the order in which we calculate DP, the time complexity is the same as in the previous approach: for each state $(\text{moves}, i, j)$, we calculate $\text{dp}[\text{moves}][i][j]$ in $O(1)$. Since we store the results in the memory, we will compute $\text{dp}[\text{moves}][i][j]$ only once.

* Space complexity: $O(k \cdot n^2)$.

We store the DP table of size $[k + 1][n][n]$.