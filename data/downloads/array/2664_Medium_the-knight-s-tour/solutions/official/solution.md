# Official Solution

**Link:** [https://leetcode.com/problems/the-knights-tour/solution/](https://leetcode.com/problems/the-knights-tour/solution/)

---

[TOC]

## Solution

---

### Overview

Given the dimensions of a chessboard (`m`, `n`) and a knight’s starting position (`r`, `c`), our task is to find a sequence of moves that allows the knight to visit every square on the chessboard exactly once. A knight moves in an 'L' shape: two squares in one direction (either vertically or horizontally) and then one square perpendicular to that.

![A knight's moves](../Figures/2664/knightmoves.png)

We need to output a 2-D array of size `m * n` where each cell indicates the order in which it was visited during the knight’s traversal.

Here's what the traversal looks like for Example 2 of the problem description:

!?!../Documents/2664/slideshow.json:562,424!?!

---

### Approach 1: Backtracking

#### Intuition

Since the board size is limited to $5 \times 5$ or smaller, a brute force approach is feasible within these constraints. The simplest solution is to generate all possible move orders and check each for validity.

However, we can often detect invalid sequences early. For example, if a knight lands on a square with no unvisited squares to move to, it’s clear the sequence can't form a valid solution, so we can stop. This technique, known as pruning, is achieved through backtracking. If you're unfamiliar with backtracking, refer to this [LeetCode Explore Card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/) for more details.

To implement this, we recursively fill the board. At each step, if there are no remaining moves, we've found a valid solution and return true.

We then examine all potential knight moves from the current cell, checking if each resulting cell is valid (within bounds and unvisited). If so, we mark the cell with the current move number and proceed with a recursive call to find the next move. If the recursive call returns true, we have a valid solution and return immediately. Otherwise, we unmark the cell and try the next knight move.

The recurrence relation for the function `solveKnightsTour` can be described as follows:

$$
T(r, c, k) = 
\begin{cases} 
1 & \text{if } k = 0 \\
\sum_{(r', c') \in \text{ValidMoves}(r, c)} T(r', c', k-1) & \text{if } k > 0
\end{cases}
$$

Where:
- $T(r, c, k)$ is the number of ways to complete the tour with `k` remaining cells unvisited from position `(r, c)`.
- $\text{ValidMoves}(r, c)$ represents all the valid knight moves from position `(r, c)`.

Finally, we call this recursive function with an empty board from the main function. The board will contain the correct move order when recursion completes, providing our required answer.

#### Algorithm

- Initialize a 2D integer array `chessboard` with dimensions `m * n` to represent the board.
- Mark the starting position `(r, c)` on the `chessboard` with -1 as a temporary placeholder.
- Invoke the recursive function `solveKnightsTour` with initial parameters: board dimensions, starting position, the `chessboard`, and a `moveCount` of 1.
- After the tour is completed, reset the starting position on the `chessboard` to 0.
- Return the completed chessboard.
  
- Define a function `solveKnightsTour` with parameters: the board dimensions, `currentRow`, `currentCol`, the `chessboard`, and `moveCount`:
  - Check if `moveCount` equals the total number of cells (`rows * cols`). If so, return `true`.
  - Iterate through all possible positions on the board using nested loops for rows and columns.
    - For each position, call `isValidMove` to check if it's a legal knight's move from the current position.
    - If the move is valid, mark the new position on the chessboard with the current move count.
    - Recursively call `solveKnightsTour` for the new position and an incremented `moveCount`.
    - If the recursive call returns true, it means a solution has been found, so return `true`.
    - Else, backtrack by resetting the position to 0 on the `chessboard`.
  - If no valid moves lead to a solution, return `false`.

- Define a function `isValidMove` with parameters: the `chessboard`, `fromRow`, `fromCol`, `toRow`, and `toCol`:
  -  Verify that the new position (`toRow, toCol`) is within the board boundaries (non-negative and less than board dimensions).
  - Check if the move follows the knight's L-shaped pattern: the minimum of the absolute differences in rows and columns should be 1, and the maximum should be 2.
  - Ensure the destination cell hasn't been visited before by checking if its value is 0.
  - Return `true` only if all these conditions are satisfied.

#### Implementation

<iframe src="https://leetcode.com/playground/34hnfav6/shared" frameBorder="0" width="100%" height="500" name="34hnfav6"></iframe>

#### Complexity Analysis

- Time complexity: $O(8^{(m \times n)})$

    The algorithm uses a depth-first search approach to explore all possible knight's tours. In the worst case, it might need to examine every possible sequence of moves before finding a valid tour or concluding that no tour exists.

    For each cell, the knight has up to 8 possible moves. The algorithm explores each of these moves recursively. The depth of this recursion can go up to the total number of cells on the board, which is $m \times n$.

    This leads to a time complexity of $O(8^{(m \times n)})$, which is exponential. It's worth noting that this is a loose upper bound, as the algorithm employs backtracking and prunes invalid moves, which can significantly reduce the actual number of explored paths in practice. 

- Space complexity: $O(m \times n)$

    In the worst case, the recursion can go as deep as the number of cells on the board, which is again $m \times n$. The algorithm does not use any additional space proportional to the input size.

    > Note: The size of the chessboard is not considered in our space complexity analysis since it is part of the output space.   

---

### Approach 2: Warnsdorff’s Rule

#### Intuition

The knight's tour is a well-known problem that has no general solution with polynomial complexity. In fact, it's classified as an NP(Nondeterministic Polynomial time)-hard problem. This means it's not realistic to try reducing its big-O complexity from an exponential one. However, we can make the decision-making process within the recursion more efficient, which can significantly decrease the average runtime of the solution. One of the most famous strategies for this is called the Warnsdorff's Rule.

Warnsdorff's Rule states that the best move is the one where the knight goes to the square with the fewest onward moves. This reduces the chance of the knight getting stuck in the future by leaving more paths open for future moves. If you are interested in a formal proof and a deeper understanding of the logic behind Warnsdorff’s Rule, take a look at this [paper](https://sites.science.oregonstate.edu/math_reu/proceedings/REU_Proceedings/Proceedings2004/2004Ganzfried.pdf).

Consider this position from the knight's tour in Example 2 of the problem description:

![](../Figures/2664/warnsdorff.png)

For the second move, there are two possible onward moves (#2.1 and #2.2), whereas the first move has only one option (#1.1). Following Warnsdorff's Rule, the knight should choose the first move (#1.0) since it leads to fewer future possibilities.

The basic recursion follows the previous approach, with added efficiency. At each knight position, we loop over all possible moves and calculate the "degree" of each move, defined as the number of reachable positions after that move. We store each move along with its degree in a list, which we then sort in ascending order based on degrees. This ensures that we evaluate the moves with the lowest degree first, increasing the likelihood of success. Once we find a successful move, we'll return from the recursion as before.

#### Algorithm

- Define an array `knightMoves` containing eight possible knight move patterns as (row, column) pairs.

- In the main `tourOfKnight` function:
  - Initialize a 2D array `chessboard` with dimensions `m * n`.
  - Mark the starting position `(r, c)` on the chessboard with -1.
  - Call the recursive function `solveKnightsTour` with initial parameters: board dimensions, starting position, the `chessboard`, and a `moveCount` of 1.
  - After the tour is completed, reset the starting position on the `chessboard` to 0.
  - Return the completed `chessboard`.

- Define a function `solveKnightsTour` with parameters: the board dimensions, the current position, the `chessboard`, and `moveCount`:
  - Check if the move count equals the total number of cells (`rows * cols`). If so, return `true`.
   - Call `getNextMovesWarnsdorff` to get a sorted list of possible next moves.
   - Iterate through `nextMoves`:
     - Calculate the next position by adding the knight's move offsets to the current position.
     - Check if the move is valid using the `isValidMove` function. If not valid, continue with the next iteration.
     - Mark the new position on the `chessboard` with the current `moveCount`.
     - Recursively call `solveKnightsTour` for the new position, incrementing the move count.
     - If the recursive call returns true, return `true` to propagate this success upwards.
     - Else, backtrack by resetting the position to 0 on the `chessboard`.
  - If no valid moves lead to a solution, return `false`.

- Define a function `getNextMovesWarnsdorff` with parameters: the `chessboard`, and the current position:
  - Initialize a list `nextMoves` to store possible moves and their accessibility scores.
  - For each of the eight possible `knightMoves`:
    - Calculate the next position by applying the move offsets.
    - Call `countAccessibleMoves` to determine the number of onward moves from this new position.
    - Add a pair `(accessibilityScore, moveIndex)` to the `nextMoves` list.
  - Sort the `nextMoves` list based on accessibility scores in ascending order.
  - Return the sorted list of moves.

Define a function `countAccessibleMoves` with parameters: the `chessboard`, and the current position:
  - Initialize a counter for accessible moves to 0.
  - For each of the eight possible `knightMoves`:
    - Calculate the next position by applying the move offsets.
    - If the move is valid (checked using `isValidMove`), increment the counter.
  - Return the total count.

Define a function `isValidMove` with parameters: the `chessboard`, and the current position:
  - Check if the given position `(row, col)` is within the board boundaries (non-negative and less than board dimensions).
  - Verify if the position has not been visited before by checking if its value on the `chessboard` is 0.
  - Return `true` if both conditions are satisfied; otherwise, `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/4WuXVepF/shared" frameBorder="0" width="100%" height="500" name="4WuXVepF"></iframe>

#### Complexity Analysis

* Time complexity: $O(8^{(m \times n)})$

    This algorithm employs Warnsdorff's heuristic, which significantly improves the average-case performance compared to the naive backtracking approach. However, the worst-case time complexity remains exponential, which $O(8^{(m \times n)})$.

* Space complexity: $O(m \times n)$

    The recursion takes up to $m \times n$ space in the worst case. 

    The `nextMoves` list in the `getNextMovesWarnsdorff` function contains at most 8 elements at any given time, so its complexity is constant.

    Thus, the overall space complexity remains $O(m \times n)$.

    > Note: The size of the chessboard is not considered in our space complexity analysis since it is part of the output space.  

---