# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087196/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6087196/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def shortestDistanceAfterQueries(n: Int, queries: Array[Array[Int]]): Array[Int] = {

    queries.iterator
      .scanLeft((List.range(0,n).sliding(2,1).to(Set).groupMap(_.head)(_.last))) {
        case (aMap, a) =>
          aMap + (a.head -> (aMap.getOrElse(a.head, Set()) + a.last) )
      }.drop(1).map{case aMap => 
      LazyList.unfold((collection.mutable.Queue[(Int, Int)]((0, 0)), Set.empty[Int])) {
            case (q, v) =>
              Option.when(q.nonEmpty) {
                val (node, dist) = q.head
                val nxt = aMap.getOrElse(node, Set()) -- v
                ((q.head), (q.tail ++ nxt.map(_ -> (dist + 1)), v ++ nxt))
              }
          }
            .dropWhile(_._1 != (n - 1)).head._2
      }.to(Array)
    }
}
```