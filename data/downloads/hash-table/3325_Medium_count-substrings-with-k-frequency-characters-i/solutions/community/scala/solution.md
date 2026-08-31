# [scala] - sliding window, no index, foldLeft, recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5963287/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5963287/)

---

I am deeply concerned by the amount of attention given to Scala. Please upvote and submit your solutions.

# Code
```scala
object Solution {
  import scala.collection.immutable.Queue

  def numberOfSubstrings(s: String, k: Int): Int =
    s.foldLeft(Queue.empty[Char], Map.empty[Char, Int], 0) { case ((queue, map, acc), c) =>
      val (nQueue, nMap) = (queue :+ c, map.updated(c, map.getOrElse(c, 0) + 1))
      (nQueue, nMap, go(nQueue, nMap, k) + acc)
    }._3

  private def go(q: Queue[Char], map: Map[Char, Int], k: Int): Int =
    if (map.exists(_._2 >= k)) 1 + go(q.tail, map.updated(q.head, map(q.head) - 1), k) else 0
}
```