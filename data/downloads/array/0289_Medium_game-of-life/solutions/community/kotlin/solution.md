# In-Place approach using bit manipulation with detailed explanation.

**Author:** hbworld
**Votes:** 6
**Link:** [https://leetcode.com/problems/game-of-life/solutions/3365172/](https://leetcode.com/problems/game-of-life/solutions/3365172/)

---

# Intuition
 **Initial Approach**
- Create a new board of the same size as the input board to hold the next state.
- Iterate over every cell in the input board and apply the rules of the game
- Return the new board containing the next state.

Here time and space complexity will be $$O(mn)$$. But as mentioned in the follow ups we need to solve it using in-place. To do this, we can use a  encoding to represent the current and next states of each cell.

# Approach
**Bit manipulation Approach**

I'am using bit manipulation approach to solve this problem using in-place.
We can encode the current state of a cell using a single bit (i.e., 0 or 1).To represent the next state, we can use a bit in the second position of the same integer. For example - if the current state of a cell is 1 and its next state is also 1, we can represent this as the integer 3 (binary 11).
```
        currentState  nextState    binary    integer
              0          0           00         0
              0          1           01         1
              1          0           10         2
              1          1           11         3
```
With this encoding, we can update each cell based on the current state of its neighbors and once we have updated all the next states of all the cells in the board, we can decode the next state of each cell from its integer representation and use it as the new current state. Here space complexity will be $$O(1)$$ since we are not creating a new board.

**Infinite Board Follow up**

In my opinion this is a subjective problem whose solution can varies based on the environment and use case. 
For example if in some case where this infinitely large board can't be load into the memory, then we can make chunks of it and compute the output using these chunks (since the next state of a cell only depends on left column, right column, above row and below row). 
If this infinitely large board contains a lot of zeros (deads) then we can also use sparse matrix which can significantly reduce the memory usage and improve the efficiency of the algorithm. We can use a hash table to store the coordinates of the live cells only. The keys of the hash table are the coordinates of the live cells and the values are the corresponding cell values. Now we iterate the hash table, and calculate liveNeighbours of a cell. After this update the hash table with the new state, and remove any dead cells from the hash table.

# Complexity
- Time complexity: $$O(mn)$$


- Space complexity: $$O(1)$$

# Code
```
class Solution {

    fun gameOfLife(board: Array<IntArray>) {
        val rowMax = board.size
        val columnMax = board[0].size

        // For in-place solution we use bit-manipulation.
        // First bit will represent current state
        // Second bit will represent next state
        // currentState  nextState    binary    integer
        //       0          0           00         0
        //       0          1           01         1
        //       1          0           10         2
        //       1          1           11         3


        // iterate board
        for (row in 0 until rowMax) {
            for (column in 0 until columnMax) {
                val lives = countAliveNeighbors(board, rowMax, columnMax, row, column)
                setNextState(lives, board, row, column)
            }
        }

        // Decode new board
        for (row in 0 until rowMax) {
            for (column in 0 until columnMax) {
                board[row][column] = board[row][column] shr 1 // Shift second bit to 1st bit
            }
        }
    }

    private fun setNextState(lives: Int, board: Array<IntArray>, row: Int, column: Int) {
        if (board[row][column] == 1 && (lives == 2 || lives == 3)) {
            // set next state as alive
            board[row][column] = board[row][column] or 2 // Set second bit to 1 (OR with 10)
        } else if (board[row][column] == 0 && lives == 3) {
            // set next state as alive
            board[row][column] = board[row][column] or 2 // Set second bit to 1 (OR with 10)
        } else {
            // set next state as dead
            board[row][column] = board[row][column] or 0 // set second bit to 0 (OR with 00)
        }
    }

    private fun countAliveNeighbors(
        board: Array<IntArray>,
        rowMax: Int,
        columnMax: Int,
        currentRow: Int,
        currentColumn: Int
    ): Int {
        var count = 0

        // creating row boundaries (either left or right from current row-index)
        for (row in Math.max(0, currentRow - 1)..Math.min(rowMax - 1, currentRow + 1)) {
            // creating column boundaries (either top or bottom from current column-index)
            for (column in Math.max(0, currentColumn - 1)..Math.min(
                columnMax - 1,
                currentColumn + 1
            )) {
                if (row == currentRow && column == currentColumn) continue  // skip current grid
                count += board[row][column] and 1 // Check first bit for alive status (AND with 01)
            }
        }
        return count
    }

}
```