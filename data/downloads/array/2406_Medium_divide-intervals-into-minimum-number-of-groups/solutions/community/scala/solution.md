# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5527721/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5527721/)

---

```scala
object Solution {
  def minGroups(intervals: Array[Array[Int]]): Int =
    intervals.flatMap(i => List(i.head, -i.last)).sortBy(x => (x.abs, -x))
      .foldLeft((0,0)){ case ((mx,depth), x) =>
        (mx max (depth + x.sign), depth + x.sign)
      }._1 max 1
}
```