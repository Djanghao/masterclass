# scala two liner. and oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5280594/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5280594/)

---

```scala
object Solution {
  def numOfSubarrays1(arr: Array[Int], k: Int, threshold: Int): Int =
    arr.iterator.scanLeft(0)(_ + _).drop(k)
    .zip(arr.iterator.scanLeft(0)(_ + _))
    .count{case (a,b) => a-b >= k*threshold}
  def numOfSubarrays(arr: Array[Int], k: Int, threshold: Int): Int =
    lazy val pfx = arr.iterator.scanLeft(0)(_ + _).to(Vector)
    pfx.drop(k).zip(pfx).count{case (a,b) => a-b >= k*threshold}
}
```