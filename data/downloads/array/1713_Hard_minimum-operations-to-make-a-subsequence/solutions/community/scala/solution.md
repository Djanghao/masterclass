# scala two-liner for longest increasing subsequence

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5252512/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5252512/)

---

```scala
object Solution {
  import collection.immutable.SortedSet
  def minOperations(target: Array[Int], arr: Array[Int]): Int =
    lazy val tMap = target.iterator.zipWithIndex.to(Map)
    tMap.size - arr.iterator.flatMap(tMap.get)
      .foldLeft((SortedSet.empty[Int])){case (aSet,a) =>
        aSet.minAfter(a).map(b => aSet - b + a).getOrElse(aSet + a)
    }.size
}
```