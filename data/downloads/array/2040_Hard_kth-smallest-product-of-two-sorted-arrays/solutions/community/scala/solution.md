# 8 lines scala double binary search and virtual Array.reverse

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/6056104/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/6056104/)

---

```scala []
object Solution {
  def kthSmallestProduct(nums1: Array[Int], nums2: Array[Int], k: Long): Long =
    def bs(check: Long => Boolean, lo: Long, hi: Long):Long =
      lazy val mid = lo + (hi - lo) / 2
      if(hi-lo<=1) hi else if(check(mid)) bs(check,lo,mid) else bs(check,mid,hi)
    def count(mid:Long): Long = nums1.iterator.map(_.toLong).map(n1 =>
      if(n1>=0) bs(i=>n1*nums2(i.toInt)>mid ,-1, nums2.length)
      else nums2.length-bs(i => n1*nums2(i.toInt)<=mid,-1, nums2.length)
    ).sum
    bs(count(_)>=k, -10_000_000_001L, 10_000_000_000L)
}
```