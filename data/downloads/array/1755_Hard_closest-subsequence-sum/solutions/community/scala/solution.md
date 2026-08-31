# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/6066803/](https://leetcode.com/problems/closest-subsequence-sum/solutions/6066803/)

---

```scala []
object Solution {
  import collection.Searching._
  def minAbsDifference(nums: Array[Int], goal: Int): Int = {
    lazy val len = nums.length
    lazy val halfLen = nums.length/2
    lazy val x0 = List((0,halfLen),(halfLen,len)).map{case (lo,hi) =>
      Iterator.range(0, 1<<(hi-lo)).map{mask =>List.unfold((0,mask)){case (i,m) =>
        Option.when(m>0){((m&1)*nums(lo+i),(i+1,m>>1))}
      }.sum}.distinct
    }
    lazy val lst = x0.last.to(Vector).sorted
    x0.head.iterator.flatMap(a => lst.search(goal-a) match {
      case Found(i) => Iterator(0)
      case InsertionPoint(i) => Iterator(i-1,i)
          .collect{case i1 if i1>=0 && i1< lst.length => (goal-a-lst(i1)).abs }
    }).takeWhile(_ >= 0).min
  }
}
```