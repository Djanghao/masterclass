# Easy BFS solution with some explanation, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3095590/](https://leetcode.com/problems/snakes-and-ladders/solutions/3095590/)

---

# Approach
Easy BFS solution, beats 100% of submissions. Treat the array of as a graph, add explore it in a BFS manner. At each point try the 1-6 dice rolls, if we get a normal cell (-1) add the normal value to the neigbours queue, if we get a ladder or snake add the value where that points.

The worst part is the method to convert the position to the row/columns pair.


# Code
```
object Solution {
    def snakesAndLadders(board: Array[Array[Int]]): Int = {

    var diceRolls = 0
    val visited = Array.ofDim[Boolean](board.length, board.length)

    val neighbours: java.util.Queue[Int] = new java.util.LinkedList[Int]()
    neighbours.add(1)

    while (!neighbours.isEmpty) {

      var size = neighbours.size()

      while (size > 0) {

        size -= 1

        val current = neighbours.poll()

        if (current == board.length * board.length) {
          return diceRolls
        }

        for(roll <- 1 to 6) {

          if (current + roll <= board.length * board.length) {

            val (row, col) = findPosition(current + roll, board.length)

            if (!visited(row)(col)) {

              visited(row)(col) = true

              if (board(row)(col) == -1) {
                neighbours.add(current + roll)
              } else {
                neighbours.add(board(row)(col))
              }

            }

          }

        }
      }
      diceRolls += 1
    }

    -1
  }

  private def findPosition(current: Int, n: Int): (Int, Int) = {

    val row = n - ((current - 1)/n) - 1
    val col = (current - 1) % n

    if (row % 2 == n % 2) {
      return (row, n - 1 -col)
    }

    (row, col)
  }
}
```