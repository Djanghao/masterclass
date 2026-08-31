# Scala Functional

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/2243720/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/2243720/)

---

```
object Solution {
    case class Patterns(private val direct: Array[Int]) {
      private val patterns = Set(direct.mkString, direct.map(1 - _).mkString)
      def contains(line: Array[Int]): Boolean = {
        patterns.contains(line.mkString)
      }
    }
    def removeOnes(grid: Array[Array[Int]]): Boolean = {
      grid.foldLeft((true,Option.empty[Patterns])) {
        // return true if a line matches target pattern
        case ((result, Some(patterns)), line) if result && patterns.contains(line) => (true, Some(patterns))
        // if any line doesn't match return false
        case ((_, Some(patterns)), _) => (false, Some(patterns))
        // fill out initial target patterns
        case ((result, None), line) => (result, Some(Patterns(line)))
      }._1
    }
  }
  ```