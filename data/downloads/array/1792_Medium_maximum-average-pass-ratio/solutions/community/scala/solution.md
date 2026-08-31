# scala PriorityQueue

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/5964420/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/5964420/)

---

```scala []
object Solution {
  import scala.util.chaining._
  import collection.mutable.PriorityQueue
  def maxAverageRatio(classes: Array[Array[Int]], extraStudents: Int): Double = {
    def diff(p:Int, t:Int) = (p+1.0)/(t+1.0) - p.toDouble/t.toDouble
    val pq = PriorityQueue.from(classes.map(a => (diff(a.head,a.last), a.head,a.last)))
    Iterator.range(0, extraStudents)
      .foreach{_ => pq.dequeue().pipe((_,p,t) => pq.enqueue(((diff(p+1,t+1), p+1,t+1))))}
    pq.map(x => x._2.toDouble / x._3).sum / classes.length
  }
}
```