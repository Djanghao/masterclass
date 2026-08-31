# scala foldLeft

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4969399/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4969399/)

---

```
object Solution {
  import collection.immutable.TreeSet
  def unmarkedSumArray(nums: Array[Int], queries: Array[Array[Int]]): Array[Long] = {
    lazy val zipped = nums.iterator.zipWithIndex.to(TreeSet)
    lazy val rem = nums.iterator.foldLeft(0L)(_ + _)
    queries.iterator.foldLeft((zipped,List(rem))){case ((set,list),q) =>
      lazy val ith = nums(q.head) -> q.head
      lazy val set1 = set - ith
      lazy val newRem = list.head - (if(set.contains(ith)) nums(q.head) else 0) - set1.take(q.last).iterator.map(_._1).foldLeft(0L)(_ + _)
      (set1.drop(q.last), newRem +: list)
    }._2.reverse.tail.toArray

  }
}
```