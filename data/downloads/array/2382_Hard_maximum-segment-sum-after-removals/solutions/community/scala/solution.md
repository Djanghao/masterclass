# scala reverse union-find

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/5628521/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/5628521/)

---

```scala
object Solution {
  import scala.collection.immutable.SortedSet
  import scala.util.chaining._
  import scala.util.control.TailCalls._
  def maximumSegmentSum(nums: Array[Int], removeQueries: Array[Int]): Array[Long] = {
    val djs = Array.fill(nums.length)(-1)
    def root0(i: Int): TailRec[Int] =
      if (i == djs(i)) done(i) else tailcall(root0(djs(i))).map{_.tap(djs(i) = _)}
    def root(i: Int): Int = root0(i).result
    def join(i: Int)(j: Int): Unit = root(i).tap(djs(root(j)) = _)
    removeQueries.reverse.to(LazyList).scanLeft((0L, SortedSet.empty[Long], Map.empty[Int, Long])) {
      case ((_, aSet, aMap), x) =>
        djs(x) = x
        val l = if (x < (nums.length - 1) && djs(x + 1) >= 0) {aMap(root(x+1)).tap(_ => join(x)(x+1))} else 0
        val r  = if(x>0 && djs(x-1)>=0) {aMap(root(x-1)).tap(_ => join(x-1)(x))} else 0
        val y3 = l + nums(x) + r
        val bSet = aSet + y3
        (bSet.last, bSet, aMap + (djs(x) -> y3))
    }.map(_._1).reverse.drop(1).to(Array)
  }
}
```