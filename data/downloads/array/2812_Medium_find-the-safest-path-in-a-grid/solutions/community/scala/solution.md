# Scala: 2 BFS + BS tailrecs

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5161613/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5161613/)

---

# Code
```
object Solution {
  def maximumSafenessFactor(grid: List[List[Int]]): Int = {
    val last = grid.length - 1
    if (grid(0)(0) == 1 || grid(last)(last) == 1) 0
    else {
      val ga = grid.map(_.toArray).toArray
      val factors = Array.ofDim[Int](last + 1, last + 1)
      val firstPairSet = Set((0, 0))
      val lastPair = (last, last)

      def collectNeighbours(i: Int, j: Int): Seq[(Int, Int)] = {
        val all = Seq((i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1))
        if (0 < i && i < last && 0 < j && j < last) all 
        else all.filter(p => 0 <= p._1 && p._1 <= last && 0 <= p._2 && p._2 <= last)
      }

//        (if (0 < i) Some(i - 1, j) else None) ++ (if (i < last) Some(i + 1, j) else None) ++
//          (if (0 < j) Some(i, j - 1) else None) ++ (if (j < last) Some(i, j + 1) else None)

      val neighbours = Array.tabulate(last + 1, last + 1)(collectNeighbours)

      @annotation.tailrec
      def markFactorsBFS(edge: Set[(Int, Int)], passed: Set[(Int, Int)] = Set.empty, nextFactor: Int = 1): Unit =
        if (edge.nonEmpty) {
          val nextPassed = passed ++ edge
          val nextEdge = edge.flatMap(p => neighbours(p._1)(p._2)) -- nextPassed
          nextEdge.foreach(p => factors(p._1)(p._2) = nextFactor)
          markFactorsBFS(nextEdge, nextPassed, nextFactor + 1)
        }

      @annotation.tailrec
      def safePathExistsBFS(safeness: Int, edge: Set[(Int, Int)] = firstPairSet, passed: Set[(Int, Int)] = Set.empty): Boolean =
        if (edge.isEmpty) false
        else if (edge.contains(lastPair)) true
        else {
          val nextPassed = passed ++ edge
          val nextEdge = edge.flatMap(p => neighbours(p._1)(p._2)) -- nextPassed
          safePathExistsBFS(safeness, nextEdge.filter(p => factors(p._1)(p._2) >= safeness), nextPassed)
        }

      @annotation.tailrec
      def maxSafenessBS(first: Int, end: Int): Int = {
        //println((first, end))
        val delta = end - first
        lazy val mid = first + delta / 2
        if (delta <= 1) first
        else if (safePathExistsBFS(mid))
          maxSafenessBS(mid, end)
        else
          maxSafenessBS(first, mid)
      }

      val thieves = (for(i <- 0 to last; j <- 0 to last if ga(i)(j) == 1) yield (i, j)).toSet
      markFactorsBFS(thieves)

      // def printArrayOfArrays[T](arr: Array[Array[T]]): Unit =
      //   println(arr.map(_.mkString("", ", ", "\
")).mkString)

      // printArrayOfArrays(factors)
      // printArrayOfArrays(neighbours)

      val maxSafeness = factors(0)(0).min(factors(last)(last))
      if (safePathExistsBFS(maxSafeness)) maxSafeness
      else maxSafenessBS(0, maxSafeness)
    }
  }
}

```