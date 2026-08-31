# Scala AC

**Author:** sparker123
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/2132898/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/2132898/)

---

```
import scala.collection.mutable

class SORTracker {

  case class Location(name: String, score: Int)

  object orderedPQ1 extends Ordering[Location] {
    override def compare(a: Location, b: Location): Int = {
      if (a.score == b.score) {
        b.name compare a.name // ("bc"), ("ab")
      } else {
        a.score compare b.score // 1, 2, 3, 4, 5
      }
    }
  }

  object orderedPQ2 extends Ordering[Location] {
    override def compare(a: Location, b: Location): Int = {
      if (a.score == b.score) {
        a.name compare b.name // ("ab"), ("bc")
      } else {
        b.score compare a.score // 5, 4, 3, 2, 1
      }
    }
  }

  // min heap
  val pq1 = mutable.PriorityQueue[Location]()(orderedPQ1)

  // max heap
  val pq2 = mutable.PriorityQueue[Location]()(orderedPQ2)

  var i = 0

  def add(name: String, score: Int): Unit = {
    pq2.addOne(Location(name, score))
    if (pq2.size > i) {
      pq1.addOne(pq2.dequeue())
    }
  }

  def get(): String = {
    pq2.addOne(pq1.dequeue())
    i += 1
    pq2.head.name
  }
}
```