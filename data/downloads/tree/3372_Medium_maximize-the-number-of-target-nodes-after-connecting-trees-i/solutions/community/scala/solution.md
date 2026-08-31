# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6130354/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6130354/)

---

```scala []
object Solution {
  import scala.collection.immutable.Queue
  def maxTargetNodes(edges1: Array[Array[Int]], edges2: Array[Array[Int]], k: Int): Array[Int] = {
    lazy val List(t1,t2) = List(edges1,edges2)
      .map(_.toList.flatMap(a => List(a,a.reverse))
      .groupMap(_.head)(_.last))
    def bfs(q: Queue[(Int,Int)], v:Set[Int], t: Map[Int,List[Int]]): Int = {
      lazy val nxt = t.getOrElse(q.head._1,Nil).filterNot(v.contains)
      if(q.isEmpty || q.head._2 < 0) v.size
      else bfs(q.tail ++ nxt.map(x => (x,q.head._2-1)), v+q.head._1, t)
    }
    lazy val n2 = (0 to edges2.length).map(node => bfs(Queue((node,k-1)),Set(),t2)).max
    Iterator.range(0,edges1.length+1)
      .map(node => bfs(Queue((node,k)),Set(),t1) + n2)
      .to(Array)
  }
}
```