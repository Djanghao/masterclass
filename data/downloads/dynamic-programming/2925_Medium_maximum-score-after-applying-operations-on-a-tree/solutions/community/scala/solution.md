# Scala solution. Ugly bfs to avoid dfs StackOverflow

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/5166653/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/5166653/)

---

```
object Solution {
  import collection.immutable.Queue
  def maximumScoreAfterOperations(edges: Array[Array[Int]], values: Array[Int]): Long = {
    lazy val es = edges.flatMap(e => Array(e, e.reverse) )
      .groupMap(_.head)(_.last).view.mapValues(_.to(List)).to(Map)
    def bfs(q:Queue[(Int,Int,Int)], acc: Seq[(Int,Int,Int)]): Seq[(Int,Int,Int)] =
      lazy val (node,parent,depth) = q.head
      lazy val children = es(node).iterator.filterNot(_ == parent)
      if(q.isEmpty) acc
      else bfs(q.tail ++ children.map((_, node, depth+1)), (node,parent,depth) +: acc)
    def g(seq: Seq[(Int,Int,Int)], acc: Map[Int,Seq[Long]]): Long =
      lazy val (node,parent,depth) = seq.head
      lazy val children = es(node).iterator.filterNot(_ == parent)
      lazy val list = children.map{acc}.reduce{case (a,b) => (a zip b).map(_ + _) }
      lazy val (l:Long,r:Long) = list.head -> list.tail.head
      lazy val l1 =
        if(l>values(node)) List(values(node).toLong, l+r)
        else List(l, values(node)+r)
      if(seq.isEmpty) acc(0).last
      else if(children.isEmpty) g(seq.tail, acc + (node -> List(values(node).toLong, 0L)))
      else g(seq.tail, acc + (node -> l1))
    g(bfs(Queue((0,-1,0)), Nil), Map())
  }
}
```

```
object SolutionDFSStackOverflow {
  import scala.util.chaining._
  import scala.language.implicitConversions
  def maximumScoreAfterOperations(edges: Array[Array[Int]], values: Array[Int]): Long = {
    lazy val es = edges
    .flatMap(e => Array(e, e.reverse) )
    .groupMap(_.head)(_.last)
    .view.mapValues(_.to(List)).to(Map)
    def f(parent: Int)(node: Int): List[Long] = {
      lazy val children = es(node).filterNot(_ == parent)
      if(children.isEmpty) List(values(node), 0)
      else {
        lazy val list = children
          .map{f(node)}
          .reduce{case (a,b) => (a zip b).map(_ + _) }
        lazy val (l,r) = list.head -> list.tail.head
        if(l>values(node)) List(values(node), l+r) else List(l, values(node)+r)
      }
    }
    f(-1)(0).tail.head
  }
}
```