# [scala] - immutable, Dijkstra, recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6027926/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6027926/)

---

I am deeply concerned by the amount of attention given to Scala. Please upvote and submit your solutions.

# Code
```scala []
object Solution {
  import scala.collection.immutable.TreeSet

  def minTimeToReach(moveTime: Array[Array[Int]]): Int = {
    def inBorder(c: (Int, Int)) = c._1 >= 0 && c._1 < moveTime.length && c._2 >= 0 && c._2 < moveTime.head.length
    def go(visited: Set[(Int, Int)], toVisit: TreeSet[(Int, Int, Int)]): Int = {
      val (cost, i, j) = toVisit.head
      if (i == moveTime.length - 1 && j == moveTime.head.length - 1) cost
      else {
        val next = neighbour4(i, j).filter(!visited.contains(_)).filter(inBorder)
        go(visited + ((i, j)), toVisit.tail ++ next.map(c => (math.max(cost, moveTime(c._1)(c._2)) + 1, c._1, c._2)))
      }
    }

    go(Set((0, 0)), TreeSet((0, 0, 0)))
  }

  private def neighbour4(i: Int, j: Int): List[(Int, Int)] = List((i + 1, j), (i - 1, j), (i, j - 1), (i, j + 1))
}
```