# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-election/solutions/5328247/](https://leetcode.com/problems/online-election/solutions/5328247/)

---

```scala
class TopVotedCandidate(_persons: Array[Int], _times: Array[Int]) {
  import collection.immutable.SortedSet
  val xSet = (_persons zip _times).toList.foldLeft((
      SortedSet.empty[(Int,Int,Int)],
      SortedSet.empty[(Int,Int,Int)],
      Map.empty[Int,Int].withDefaultValue(0)
  )){case ((aSet,xSet,aMap),(p,t)) =>
    lazy val bSet = aSet + ((aMap(p)+1, t, p))                // sorted  by votes
    lazy val ySet = xSet + ((t, bSet.last._1, bSet.last._3))  // leaders by time
    (bSet, ySet, aMap + (p -> (aMap(p)+1)))
  }._2

    def q(t: Int): Int =
      xSet.maxBefore((t,Int.MaxValue,Int.MaxValue)).map(_._3).getOrElse(-1)
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * val obj = new TopVotedCandidate(persons, times)
 * val param_1 = obj.q(t)
 */
```