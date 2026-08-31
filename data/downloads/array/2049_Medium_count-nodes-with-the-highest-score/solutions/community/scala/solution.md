# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/5333757/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/5333757/)

---

```scala
// we do bfs for this dfs problem
// because due to some ugly limitations
// scala dfs solutions used to produce SO
object Solution {
  import collection.immutable.Queue
  def countHighestScoreNodes(parents: Array[Int]): Int =
    lazy val x0 = parents.zipWithIndex.toList
    .groupMap(_._1)(_._2).withDefaultValue(Nil)
    def bfs(q:Queue[(Int,Int)], levels:Map[Int,Int]):Map[Int,Int] =
      if(q.isEmpty) levels
      else bfs(q.tail++x0(q.head._1).map((_, (q.head._2+1))), levels+(q.head))
    bfs(Queue(x0(-1).head -> 0), Map())
    .toList.sortBy(- _._2).foldLeft((
      Map.empty[Int,(Long,Long)].withDefaultValue((0L,0L))
    )){case (aMap,(node,level)) =>
      lazy val y0 = x0(node).map(ch => aMap(ch)._1)
      lazy val y1 = y0 ++ List(parents.length - 1L - y0.sum).filter(_ > 0)
      aMap + (node -> (y0.sum+1, y1.product))
    }.toList.map(_._2._2)
    .groupMapReduce(identity)(_ => 1)(_ + _).toList.maxBy(_._1)._2
}
```