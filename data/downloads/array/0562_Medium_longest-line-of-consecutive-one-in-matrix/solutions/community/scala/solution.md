# Dynamic Programming Approach Using Matrix

**Author:** only_22
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3417761/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3417761/)

---

# Intuition
Use Dynamic Programming to continuously build the Maximum Entry in the matrix.

# Approach
At any point, build a new entry for each relevant axis and keep track of the maximum - if the entry in the matrix is 0, then the maxes are going to be 0. Otherwise, increment the value from the previous axis entry (whether it's vertical, horizontal, diagonal or antidiagonal).

# Complexity
- Time complexity: O(n * m)

- Space complexity: O(n * m) for the `maxims` matrix.

# Code
```
object Solution {
    def longestLine(mat: Array[Array[Int]]): Int = {
        val n = mat.length
        val m = mat.head.length

        case class MaximumLine(horizontal: Int, vertical: Int, diagonal: Int, antiDiagonal: Int)

        import scala.collection.mutable.ArrayBuffer
        val maxims: ArrayBuffer[ArrayBuffer[MaximumLine]] = ArrayBuffer.fill(n)(ArrayBuffer.fill(m)(MaximumLine(0, 0, 0, 0)))


        @scala.annotation.tailrec def go(i: Int, j: Int, maxEntry: Int): Int = {
            if(i == n) maxEntry
            else if(j == m) go(i + 1, 0, maxEntry)
            else {
                val currElem = mat(i)(j)

                if(currElem == 0) {
                    maxims(i)(j) = MaximumLine(0, 0, 0, 0)
                    go(i, j + 1, maxEntry)
                }
                else {
                    import scala.util.Try

                    val previousHorizontal = Try(maxims(i)(j - 1).horizontal).toOption.getOrElse(0) + 1
                    val previousVertical = Try(maxims(i - 1)(j).vertical).toOption.getOrElse(0) + 1
                    val previousDiagonal = Try(maxims(i - 1)(j - 1).diagonal).toOption.getOrElse(0) + 1
                    val previousAntidiagonal = Try(maxims(i - 1)(j + 1).antiDiagonal).toOption.getOrElse(0) + 1

                    val maxLine = MaximumLine(previousHorizontal, previousVertical, previousDiagonal, previousAntidiagonal)

                    maxims(i)(j) = maxLine

                    val updatedMax = Seq(maxEntry, maxLine.vertical, maxLine.horizontal, maxLine.diagonal, maxLine.antiDiagonal).max

                    go(i, j + 1, updatedMax)
                }
            }
        }

        go(0, 0, 0)
    }
}
```