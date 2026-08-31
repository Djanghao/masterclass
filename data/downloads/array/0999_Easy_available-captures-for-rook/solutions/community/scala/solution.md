# Simple scala functional approach

**Author:** wytnecinerke
**Votes:** 0
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/6020993/](https://leetcode.com/problems/available-captures-for-rook/solutions/6020993/)

---

# Intuition
Find the rooks position, then find first blocking figure in each direction.

# Approach
First find the position by finding the first rook on the board. Then write a function for each direction. Then simplify

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```scala []
object Solution {

  def numRookCaptures(board: Array[Array[Char]]): Int = {
    
    def findRook(array: Array[Array[Char]]): Option[(Int, Int)] = {
      array.zipWithIndex.flatMap { case (row, i) =>
        row.zipWithIndex.collectFirst {
          case (char, j) if char == 'R' => (i, j)
        }
      }.headOption
    }

    def capture(array: Array[Array[Char]], tuple: (Int, Int), direction: String): Int = {
      val (i, j) = tuple

      direction match {
        case "up" =>
          (i - 1 to 0 by -1).collectFirst {
            case x if array(x)(j) == 'p' => 1
            case x if array(x)(j) == 'B' => 0
          }.getOrElse(0)

        case "down" =>
          (i + 1 until array.length).collectFirst {
            case x if array(x)(j) == 'p' => 1
            case x if array(x)(j) == 'B' => 0
          }.getOrElse(0)

        case "left" =>
          (j - 1 to 0 by -1).collectFirst {
            case x if array(i)(x) == 'p' => 1
            case x if array(i)(x) == 'B' => 0
          }.getOrElse(0)

        case "right" =>
          (j + 1 until array(i).length).collectFirst {
            case x if array(i)(x) == 'p' => 1
            case x if array(i)(x) == 'B' => 0
          }.getOrElse(0)

        case _ => 0
      }
    }

    val captures = for {
      rookPosition <- findRook(board)
      topCapture = capture(board, rookPosition, "up")
      bottomCapture = capture(board, rookPosition, "down")
      leftCapture = capture(board, rookPosition, "left")
      rightCapture = capture(board, rookPosition, "right")
    } yield topCapture + bottomCapture + leftCapture + rightCapture

    captures.getOrElse(0)
  }
}

```