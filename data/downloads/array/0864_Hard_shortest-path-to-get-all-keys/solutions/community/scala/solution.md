# Scala

**Author:** eugene-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3696764/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3696764/)

---

```
object Solution {
  def shortestPathAllKeys(grid: Array[String]): Int = {
    val (m, n) = (grid.length, grid.head.length)

    def inGrid(i: Int, j: Int): Boolean = (0 <= i && i < m) && (0 <= j && j < n)
    def isWall(i: Int, j: Int): Boolean = grid(i)(j) == '#'
    def key(i: Int, j: Int): Option[Int] = Option.when(grid(i)(j).isLower)(grid(i)(j).asDigit)
    def lock(i: Int, j: Int): Option[Int] = Option.when(grid(i)(j).isUpper)(grid(i)(j).asDigit)

    val startI = grid.indexWhere(_.contains('@'))
    val startJ = grid(startI).indexOf('@')

    val bfs = LazyList.iterate((
      Set.empty[(Int, Int, Set[Int])],
      Set((startI, startJ, Set.empty[Int]))
    )) { case (visited, toVisit) =>
      val next = toVisit.flatMap { case (i, j, keys) =>
        for {
          (k, l) <- Seq((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1))
          if inGrid(k, l) && !visited(k, l, keys)
          if !isWall(k, l) && lock(i, j).forall(keys.contains)
        } yield (k, l, keys | key(k, l).toSet)
      }
      (visited | next, next)
    }

    val keyCount = grid.map(_.count(_.isLower)).sum
    bfs.zipWithIndex.collectFirst {
      case ((_, toVisit), idx) if toVisit.exists(_._3.size == keyCount) => idx
      case ((_, toVisit), _) if toVisit.isEmpty => -1
    }.get

  }
}

```