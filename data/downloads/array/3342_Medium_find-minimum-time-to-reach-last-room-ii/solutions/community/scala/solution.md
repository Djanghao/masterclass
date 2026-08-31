# [scala] - Dijkstra, immutable, recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6027963/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6027963/)

---

I am deeply concerned by the amount of attention given to Scala. Please upvote and submit your solutions.

# Code
```scala []
object Solution {
  import scala.collection.immutable.TreeSet

  def minTimeToReach(moveTime: Array[Array[Int]]): Int = {
    def inBorder(c: (Int, Int)) = c._1 >= 0 && c._1 < moveTime.length && c._2 >= 0 && c._2 < moveTime.head.length
    def go(visited: Set[(Int, Int)], toVisit: TreeSet[(Int, Int, Int, Boolean)]): Int = {
      val (cost, i, j, one) = toVisit.head
      if (i == moveTime.length - 1 && j == moveTime.head.length - 1) cost
      else {
        val neighbours = neighbour4(i, j).filter(inBorder).filter(!visited.contains(_))
        val next = neighbours.map(c => (math.max(cost, moveTime(c._1)(c._2)) + (if(one) 1 else 2), c._1, c._2, !one))
        go(visited + ((i, j)), toVisit.tail ++ next)
      }
    }

    go(Set((0, 0)), TreeSet((0, 0, 0, true)))
  }

  private def neighbour4(i: Int, j: Int): List[(Int, Int)] = List((i + 1, j), (i - 1, j), (i, j - 1), (i, j + 1))
}
```