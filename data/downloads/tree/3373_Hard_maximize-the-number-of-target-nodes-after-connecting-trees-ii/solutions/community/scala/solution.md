# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6130487/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6130487/)

---

```scala []
object Solution {
  import scala.collection.immutable.Queue
  def maxTargetNodes(edges1: Array[Array[Int]], edges2: Array[Array[Int]]): Array[Int] = {
    val List(t1,t2) = List(edges1,edges2)
      .map(_.toList.flatMap(a => List(a,a.reverse))
        .groupMap(_.head)(_.last))
    def bfs(q: Queue[(Int,Int)], v:Map[Int,Int], t: Map[Int,List[Int]]): Map[Int,Int] = {
      lazy val nxt = t.getOrElse(q.head._1,Nil).filterNot(v.contains)
      if(q.isEmpty) v
      else bfs(q.tail ++ nxt.map(x => (x,1-q.head._2)), v+q.head, t)
    }
    val List(map1,map2) = List(t1,t2).map { case t => bfs(Queue((0, 0)), Map(), t)}
    val l1 = List(0,1).map(x => map1.values.count(_ == x))
    val mx2 = List(0,1).map(x => map2.values.count(_ == x)).max
    Array.range(0,edges1.length+1)
      .map(node => l1(map1(node)) + mx2)
  }
}
```