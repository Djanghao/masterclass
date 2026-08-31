# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/6130457/](https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/6130457/)

---

```scala []
object Solution {
  import scala.collection.immutable.Queue
  def minimumDiameterAfterMerge(edges1: Array[Array[Int]], edges2: Array[Array[Int]]): Int = {
    val List(t1,t2) = List(edges1,edges2)
      .map(_.toList.flatMap(a => List(a,a.reverse))
      .groupMap(_.head)(_.last))
    def bfs(q: Queue[(Int,Int)], v:Map[Int,Int], t: Map[Int,List[Int]]): Map[Int,Int] = {
      lazy val nxt = t.getOrElse(q.head._1,Nil).filterNot(v.contains)
      if(q.isEmpty) v
      else bfs(q.tail ++ nxt.map(x => (x,q.head._2+1)), v+q.head, t)
    }
    val l = List(t1,t2).map { case t =>
      val node = bfs(Queue((0, 0)), Map(), t).iterator.maxBy(_._2)._1
      bfs(Queue((node, 0)), Map(), t).values.max
    }
    l.max max (l.map(d => (d+1)/2).sum+1)
  }
}
```