# scala bfs

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5539990/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5539990/)

---

```scala
object Solution {
  def secondMinimum(n: Int, edges: Array[Array[Int]], time: Int, change: Int): Int = {
    import collection.immutable.Queue
    val graph = edges.toList.flatMap{a => List(a, a.reverse)}
      .groupMap(_.head)(_.last)
    def bfs(q:Queue[(Int,Int)]=Queue((1,0)), v1:Map[Int,Int]=Map(), v2:Map[Int,Int]=Map()): Int = {
      lazy val ((h,tm),q1) = q.dequeue
      lazy val tm3 = tm + (if((tm/change)%2 == 0) 0 else change - tm%change) + time
      lazy val nxt = graph(h).filterNot(v2.contains).map(_ -> tm3)
      if(q.isEmpty) -1
      else if(v1.contains(h) && h == n && tm > v1(h)) tm
      else if(v1.contains(h) && v2.contains(h)) bfs(q1,v1,v2)
      else if(v1.contains(h) && v1(h) < tm) bfs(q1++nxt,v1,v2 + (h->tm))
      else  bfs(q1++nxt, v1 + (h->tm),v2)
    }
    bfs()
  }
}
```