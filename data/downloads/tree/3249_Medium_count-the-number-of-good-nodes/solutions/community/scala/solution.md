# [scala] - recursion

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5794004/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5794004/)

---

I am deeply concerned by the amount of attention given to Scala. Please upvote and submit your solutions.

# Code
```scala
object Solution {
  def countGoodNodes(edges: Array[Array[Int]]): Int =
    go(edges.foldLeft(Map.empty[Int, List[Int]])((m, e) => update(m, e(0), e(1))), 0, 0)._2

  private def update(m: Map[Int, List[Int]], v1: Int, v2: Int) =
    m.updated(v1, v2 :: m.getOrElse(v1, Nil)).updated(v2, v1 :: m.getOrElse(v2, Nil))

  private def go(map: Map[Int, List[Int]], verticle: Int, parent: Int): (Int, Int) = {
    val (sizes, goods) = map(verticle).filter(_ != parent).map(go(map, _, verticle)).unzip
    (sizes.sum + 1, if (sizes.toSet.size <= 1) goods.sum + 1 else goods.sum)
  }
}
```

Also, note that previously this answer was not allowed. I submitted the bug, and the Leetcode team adjusted their test servers. For details, see https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/23479