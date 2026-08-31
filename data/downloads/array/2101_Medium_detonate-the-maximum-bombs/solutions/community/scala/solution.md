# scala bfs recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3590607/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3590607/)

---

```
object Solution {
  import collection.immutable.Queue
  def maximumDetonation(bombs: Array[Array[Int]]): Int = {
    def checkRange(i: Int, j: Int): Boolean = {
      val (xi,yi,ri) = (bombs(i)(0),bombs(i)(1),bombs(i)(2))
      val (xj,yj) = (bombs(j)(0),bombs(j)(1))
      (i!=j) && ((ri.toLong * ri) >= ((xi.toLong-xj)*(xi-xj) + (yi.toLong-yj)*(yi-yj)))
    }
    lazy val graph1 = (for{ i <- bombs.indices; j <- bombs.indices } yield {(i,j)})
    .filter{case (i,j) => checkRange(i,j)}.groupMap(_._1)(_._2)
    def impl(q: Queue[Int], v: Set[Int]): Int = {
      lazy val (h,q1) = q.dequeue
      lazy val nexts = graph1.getOrElse(h,Seq()).filterNot(v.contains)
      if(q.isEmpty) v.size else  impl(q1 ++ nexts, v ++ nexts)
    }
    bombs.indices.map(i => impl(Queue(i), Set(i))).max
  }
}
```