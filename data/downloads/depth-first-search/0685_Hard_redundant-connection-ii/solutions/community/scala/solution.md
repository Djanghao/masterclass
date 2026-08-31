# 9 lines scala DisJointSet/UnionFind

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/5618775/](https://leetcode.com/problems/redundant-connection-ii/solutions/5618775/)

---

```scala
object Solution {
  import scala.util.chaining._
  def findRedundantDirectedConnection(edges: Array[Array[Int]]): Array[Int] =
    lazy val xMap = edges.toVector.zipWithIndex.groupMap(_._1.head){case (a,i) => (a.last,i)}
    lazy val n = edges.flatten.max
    (for {(v, b) <- xMap.iterator; (u, i) <- b} yield {
      val djs = (0 to n).to(Array)
      def root(i: Int): Int = if (i == djs(i)) i else root(djs(i)).tap(djs(i) = _)
      def join(i: Int)(j: Int): Unit = djs(j) = root(i)
      edges.filterNot(x => x.head==v && x.last==u).foreach{x => join(x.head)(x.last)}
      (i, Array(v, u), djs.indices.iterator.drop(1).map(root).distinct.toList)
    }).filter(_._3.size == 1).maxBy(_._1)._2
}
```