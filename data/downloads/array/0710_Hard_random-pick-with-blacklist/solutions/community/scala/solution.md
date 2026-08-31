# Scala Beats 100%

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/739486/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/739486/)

---

```
import scala.collection.{SortedMap, SortedSet}
import scala.util.Random
import scala.util.chaining._

class Solution(n: Int, blacklist: Array[Int]) {
  private case class Interval(start: Int, end: Int) {
    def length: Int = end - start
    def random: Int = start + Random.nextInt(length)
  }

  private val intervals = SortedSet((blacklist :+ n).toSeq: _*)
    .foldLeft(0 -> Seq[Interval]()) {
      case (start -> intervals, end) if start == end => end + 1 -> intervals
      case (start -> intervals, end) => end + 1 -> (intervals :+ Interval(start, end))
    }
    .pipe {
      case (_, intervals) =>
        val totalLength = intervals.map(_.length).sum
        SortedMap(intervals.map(_.length).scan(0)(_ + _).tail.map(_ / totalLength.toDouble).zip(intervals): _*)
    }

  def pick(): Int = intervals.rangeFrom(Random.nextDouble).head._2.random
}
```