# Scala solution

**Author:** dustin10
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotting-oranges/solutions/382360/](https://leetcode.com/problems/rotting-oranges/solutions/382360/)

---

```
  object Solution {
    import scala.collection.immutable.HashSet
    def orangesRotting(grid: Array[Array[Int]]): Int = {
      def orangesRotting(freshHashSet: HashSet[(Int, Int)], returnValue: Int): Int = {
        if (freshHashSet.isEmpty) returnValue
        else {
          val newRotten: Set[(Int, Int)] = freshHashSet.filter(coordinates => hasRottenNeighbor(coordinates._1, coordinates._2))
          val updatedFresh: HashSet[(Int, Int)] = freshHashSet -- newRotten

          if (newRotten.isEmpty) -1
          else {
            newRotten.foreach(coordinates => grid(coordinates._1)(coordinates._2) = 2)
            orangesRotting(updatedFresh, returnValue + 1)
          }
        }
      }
      def hasRottenNeighbor(row: Int, column: Int): Boolean = {
        Seq(
          (row - 1, column),
          (row + 1, column),
          (row, column - 1),
          (row, column + 1)
        ).exists(coordinates => {
          val (row: Int, column: Int) = coordinates
          row >= 0 && column >= 0 && row < grid.length && column < grid(row).length && grid(row)(column) == 2
        })
      }

      if (grid.isEmpty) -1
      else {
        orangesRotting(
          freshHashSet = HashSet[(Int, Int)]((for {
            row <- grid.indices
            column <- grid(row).indices
            if grid(row)(column) == 1
          } yield (row, column)): _*),
          returnValue = 0
        )
      }
    }
  }
```