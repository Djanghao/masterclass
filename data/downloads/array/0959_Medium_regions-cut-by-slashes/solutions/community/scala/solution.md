# Scala: just O(n^3) DP

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5616155/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5616155/)

---

# Code
```
object Solution {
  def regionsBySlashes(grid: Array[String]): Int = {
    val n = grid.length
    val topGroups = Array.tabulate[Int](n)(_ + 1)
    var maxGroup = n
    var replaced = 0

    def join(what: Int, to: Int): Unit = {
      (0 until n).foreach(i => if (topGroups(i) == what) topGroups(i) = to)
      replaced += 1
    }
    
    grid.foreach { row =>
      maxGroup += 1
      (0 until n).foldLeft(maxGroup) { 
        case (leftGroup, i) =>
          val topGroup = topGroups(i)
          row(i) match {
            case ' ' => 
              if (leftGroup != topGroup) join(topGroup, leftGroup)
              leftGroup
            case '/' => 
              if (leftGroup != topGroup) join(topGroup, leftGroup)
              maxGroup += 1
              topGroups(i) = maxGroup
              maxGroup
            case '\\\\' => 
              val rightGroup = topGroup
              topGroups(i) = leftGroup
              rightGroup
          }
      }
    }

    maxGroup - replaced
  }
}
```