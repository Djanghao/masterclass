# scala solution with SortedSet

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/5217580/](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/5217580/)

---

```scala
object Solution {
  import scala.collection.immutable.SortedSet
  def findMinimumTime(tasks: Array[Array[Int]]): Int =
    lazy val ts = tasks.sortBy(a => (a(1))).map(_.toList).toList
    def f(seq: Seq[Seq[Int]], acc: SortedSet[Int] = SortedSet()): Int =
      lazy val (start, end, dur) = (seq.head(0), seq.head(1), seq.head(2))
      lazy val scheduled = acc.iteratorFrom(start).to(Set)
      lazy val toBeScheduled = (end to 0 by -1)
        .filterNot(scheduled.contains).take(dur-scheduled.size)
      if(seq.isEmpty) acc.size else f(seq.tail, acc ++ toBeScheduled)
    f(ts)
}

```