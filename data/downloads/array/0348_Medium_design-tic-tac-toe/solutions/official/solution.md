# Official Solution

**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solution/](https://leetcode.com/problems/design-tic-tac-toe/solution/)

---

[TOC]

## Solution

---
### Overview

Tic Tac Toe is one of the classic games most of us have played in our childhood. The game rules are pretty simple. There are 2 players that take turns marking a position on an `n * n` board. The first player that makes `n` marks horizontally, vertically, or diagonally, wins the game.

The brute force approach to solve this problem is to iterate over the entire board of size `n * n` and check if the current player has marked any row, column, diagonal or anti-diagonal.

This approach is exhaustive and requires $$O(n^2)$$ time for every move. Let's look at other more efficient approaches to solve the problem.

---
### Approach 1: Optimized Brute Force

**Intuition**

The simplest and most intuitive approach is to check on every move if the current player has won. Each player makes a move by marking a cell on the board. The given cell is located at row `row` and column `col`. The 4 ways in which a player can win are as follows:

- Player has marked the entire row given by `row`.
- Player has marked the entire column given by `col`.
- Player has marked the diagonal beginning at the top left corner of the board and ending at the bottom right corner.
- Player has marked the anti-diagonal beginning at the top right corner of the board and ending at the bottom left corner.

The following figure illustrates the 4 winning conditions.

![img](../Figures/348/basicIdea.png)

> How do we identify which cells lie on the diagonal or anti-diagonal?
>
>Every cell on the main diagonal has a unique property; the row index equals the column index.
Similarly, for every cell on the anti-diagonal, the value of the column index is equal to `n - row - 1`.

![img](../Figures/348/identifyDiag.png)

Every move, we will check if any of the above conditions are true. If yes, we declare the current player as the winner and finish the game.

**Algorithm**

1) For a given `n`, initialize a 2-dimensional array `board` of size `n * n` with the values of all elements set to `0`.

2) Every move, mark the `row` and `col` on the `board` with the current player's id `player`.

3) Now, we will check the following conditions to see if the current player has won.

    - Check if all of the cells for the given `row` are marked by the current player. To do so, we must iterate over all the columns ranging from index `0` to `n - 1`, keeping the `row` index constant.

    - Check if all of the positions for the given `col` are marked by the current player. To do so, we must iterate over all the rows ranging from index `0` to `n - 1`, keeping the `col` index constant.

   - Check if the main diagonal is completely marked by the current player.

     From the above intuition, we know that for each cell on the main diagonal, the `row` and `col` indices are equal. Thus, every cell on the diagonal can be given by `board[row][row]`.

    - Check if the anti-diagonal is completely marked by the current player.

      From the above intuition for each cell in the anti-diagonal, the value of the `col` index is equal to `n - row - 1`. Thus, every cell in the anti-diagonal could be given by `board[row][n - row - 1]`.

4) If the current player wins the game, then return `player`. Otherwise, return `0` indicating that no one has won the game.

**Implementation**

<iframe src="https://leetcode.com/playground/Mhqqdsrn/shared" frameBorder="0" width="100%" height="500" name="Mhqqdsrn"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n)$$, as for every move we are iterating over `n` cells $$4$$ times to check for each of the column, row, diagonal row, and anti-diagonal. This gives us time complexity of $$O(4 \cdot n)$$ which is equivalent to $$O(n)$$.

* Space Complexity: $$O(n^2)$$, as we are using 2-dimensional array `board` of size `n * n`.

---
### Approach 2: Optimised Approach

**Intuition**

Our goal is to find if a player has won by marking an entire row, column, diagonal, or anti diagonal cells. Can we find this in constant time without iterating over each of the horizontal, vertical, and diagonal rows on every move? Yes! Let's find out how.

Let's break the problem into 2 parts,
- First, on every move, we must determine whether a player has marked all of the cells in a row or column. In other words, we could say that, if there are `n` rows and `n` columns on a board, the player must have marked a certain row or column `n` times.

  > From the given conditions, we know that a move is always valid and placed on an empty cell. Hence, we can be certain that if a player has marked any row n times, they must have marked a different column each time.

- Second, on every move, we must determine whether a player has marked all of the cells on the main diagonal or anti-diagonal. Irrespective of the size of the board, there can only be one diagonal and one anti-diagonal.

   Also, there are always `n` cells on the diagonal or anti-diagonal. Thus, to win by either of these, a player must have marked the cells on the diagonal or anti-diagonal `n` times.

Let's understand how can we implement this approach.

**Algorithm**

From the above intuition, we understand that we must use a data structure to count how many times a player has marked a particular row, column, or diagonal.

- To implement the first part, for each player, we will build an array `rows` of size `n`, where `rows[i]` stores the number of times a player has marked a cell on the $$i^{th}$$ row. Likewise, for each player, we will also build an array `cols` of size `n`.

  Winning Condition:   The player will win if either `rows[i]` or `cols[j]` is equal to `n` after the player has marked the cell on the $$i^{th}$$ row and $$j^{th}$$ column.

   Let `player1Rows` and `player1Cols` be the `rows` and `cols` array for player 1.  Likewise, let `player2Rows` and `player2Cols` be the `rows` and `cols` for player 2. The following figure illustrates the process for `move(0, 0, 1)` and `move(0, 2, 2)`.

![img](../Figures/348/countRowsAndCols.png)

- To implement the second part, we can use a similar idea as above. Since there is only one diagonal and one anti-diagonal, for each player, we only need 2 integer variables `diagonal` and `antiDiagonal`.  These variables will store how many times a cell has been marked on each of the diagonals.

  Winning Condition: After a player has marked a cell on a diagonal row, we check if the value of variable `diagonal` for that player is equal to `n`. Similarly, after a player has marked a cell on an anti-diagonal row, we check if the value of variable `antiDiagonal` for that player is equal to `n`.  

     Let `player1Diagonal` and `player1AntiDiagonal` be the `diagonal` and `antiDiagonal` variables for player 1. Likewise, let `player2Diagonal` and `player2AntiDiagonal` be the `diagonal` and `antiDiagonal` for player 2. The following figure illustrates the process for `move(1, 1, 1)` and `move(2, 0, 2)`.

![img](../Figures/348/countDiag.png)

> Question - Can we further optimize this algorithm?"

Yes, we can. Since there are only 2 players, when implementing part 1, we can use the same data structure to store the marked row and column values for both players.

One way to implement this is to _increment_ the count when player 1 marks a cell and _decrement_ the count when player 2 marks a cell. With this, we can say that, if the value of `rows[i]` is equal to `n`, player 1 has marked $$i^{th}$$ row `n` times. Similarly, if the value of `rows[i]` is equal to `-n`, then player 2 has marked the $$i^{th}$$ row `n` times.

Similar logic applies to the columns and diagonals.

The following animation illustrates the idea.

!?!../Documents/348_LIS.json:1378,684!?!

The algorithm can be implemented as follows:

1) For a given `n`, initialize arrays `rows` and `cols` of size `n` with the value of every element set to `0`.

2) For each move, we must increment/decrement the row, column, diagonal, and anti-diagonal according to who is the current player and which cell was marked. If the current player is player 1, we _increment_ the value and if it is player 2, we _decrement_ the value.

    > Note: If we apply simple math rules, we can increment or decrement the values irrespective of the player.

   We can use an additional variable `currentPlayer` with the value `1` for player 1 and `-1` for player 2, and add the value of `currentPlayer` to the current row, column, diagonal and anti-diagonal.

  3) As a final step, we must determine whether the current player has won the game. If any row, column, diagonal, or anti-diagonal is equal to `n` (for player 1) or `-n` (for player 2) then the current player has won the game.

     Also, rather than having separate conditions to check whose turn it is, we can check the absolute values.

**Implementation**

<iframe src="https://leetcode.com/playground/dqYDKpMt/shared" frameBorder="0" width="100%" height="500" name="dqYDKpMt"></iframe>

**Complexity Analysis**

Let, $$n$$ be the length of string $$s$$.
* Time Complexity: $$O(1)$$ because for every move, we mark a particular row, column, diagonal, and anti-diagonal in constant time.

* Space Complexity: $$O(n)$$ because we use arrays `rows` and `cols` of size `n`. The variables `diagonal` and `antiDiagonal` use constant extra space.