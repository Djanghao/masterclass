# scala prefix sum

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/5958946/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/5958946/)

---

```scala []
object Solution {
  def maxSumTwoNoOverlap(nums: Array[Int], firstLen: Int, secondLen: Int): Int = {
    lazy val pfx = nums.toList.scanLeft(0){case (b,a) => b+a}
    lazy val x0 =List(firstLen, secondLen).map {len =>
      (pfx.drop(len) zip pfx).map{case (b,a) => b-a }
        .zipWithIndex.map{case (x,i) => (x,i,i+len) }
    }
    (for{(a0,i0,j0) <- x0.head; (a1,i1,j1) <- x0.last; if i0>=j1 || i1>=j0}
      yield {(a0+a1)}).max
  }
}
```