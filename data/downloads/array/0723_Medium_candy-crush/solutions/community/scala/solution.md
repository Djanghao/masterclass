# scala code with detailed comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy-crush/solutions/4529376/](https://leetcode.com/problems/candy-crush/solutions/4529376/)

---

# Time Complexity:

## Crash Function:
The function iterates over each cell in the matrix once to check for crushable candies.
For a matrix of size m x n, this results in a time complexity of O(m * n) for each call to crash.

## ApplyGravity Function:
This function also iterates over each cell once for moving the non-zero elements down.
It has a time complexity of O(m * n) for each call.

## Main Loop:
The number of times the main loop (which calls crash and applyGravity) runs depends on how the candies are arranged and how many cascading crushes occur after each move. In the worst case, it could be proportional to the number of rows m, as each crush could potentially cause a chain reaction affecting rows above.
Therefore, in the worst case, the main loop could add a factor of O(m) to the complexity.
Hence, the total worst-case time complexity becomes O(m^2 * n).

# Space Complexity:

The space complexity of the algorithm is primarily determined by the space used to store the board.
Since the board is a 2D array of size m x n, the space complexity is O(m * n).
There are no additional data structures used that grow with the size of the input, so the space complexity remains O(m * n).


In summary, the worst-case time complexity of the code is O(m^2 * n), and the space complexity is O(m * n). The time complexity could vary based on the specific input and how often candies need to be crushed and gravity applied.


# Code
```
// Import necessary Scala collections
import scala.collection.mutable.ArrayBuffer

object Solution {
  def candyCrush(board: Array[Array[Int]]): Array[Array[Int]] = {
    val m = board.length
    val n = board(0).length

    // Function to check and mark candies for crushing
    def crash(): Boolean = {
      var crush = false

      // Check rows for crushing
      for (i <- 0 until m) {
        for (j <- 0 until n - 2) {
          if (Math.abs(board(i)(j)) == Math.abs(board(i)(j + 1)) && 
              Math.abs(board(i)(j)) == Math.abs(board(i)(j + 2)) && 
              board(i)(j) != 0) {
            board(i)(j) = -Math.abs(board(i)(j))
            board(i)(j + 1) = -Math.abs(board(i)(j + 1))
            board(i)(j + 2) = -Math.abs(board(i)(j + 2))
            crush = true
          }
        }
      }

      // Check columns for crushing
      for (j <- 0 until n) {
        for (i <- 0 until m - 2) {
          if (Math.abs(board(i)(j)) == Math.abs(board(i + 1)(j)) && 
              Math.abs(board(i)(j)) == Math.abs(board(i + 2)(j)) && 
              board(i)(j) != 0) {
            board(i)(j) = -Math.abs(board(i)(j))
            board(i + 1)(j) = -Math.abs(board(i + 1)(j))
            board(i + 2)(j) = -Math.abs(board(i + 2)(j))
            crush = true
          }
        }
      }

      crush
    }

    // Function to apply gravity to the board
    def applyGravity(): Unit = {
      for (j <- 0 until n) {
        var idx = m - 1
        for (i <- m - 1 to 0 by -1) {
          if (board(i)(j) > 0) {
            board(idx)(j) = board(i)(j)
            idx -= 1
          }
        }
        for (i <- idx to 0 by -1) {
          board(i)(j) = 0
        }
      }
    }

    // Main loop to crush candies and apply gravity
    while (crash()) {
      applyGravity()
    }

    board
  }
}

```