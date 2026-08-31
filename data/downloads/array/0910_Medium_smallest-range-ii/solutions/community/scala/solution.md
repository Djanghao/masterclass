# scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-ii/solutions/5593525/](https://leetcode.com/problems/smallest-range-ii/solutions/5593525/)

---

```scala
object Solution {
  def smallestRangeII(nums: Array[Int], k: Int): Int =
    lazy val x0 = nums.toList.sorted
    lazy val (mnk,mxk) = (x0.head+k, x0.last-k)
    x0.sliding(2,1).foldLeft(x0.last-x0.head){case (acc,l) =>
      acc min ( (mxk max (l.head+k)) - (mnk min (l.last-k)))
    }
}
```