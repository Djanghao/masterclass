# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/5338588/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/5338588/)

---

```scala
object Solution {
  def minSum(nums1: Array[Int], nums2: Array[Int]): Long =
    val x2918_0 = List(nums1, nums2).map{a =>
      a.foldLeft(List(0L,0L)){case (l,n) =>
        if(n==0) List(l.head,l.last+1) else List(l.head+n,l.last)
    }}.sortBy(_.sum)
    if(x2918_0.head.last==0 && x2918_0.head.sum < x2918_0.last.sum) -1
    else x2918_0.last.sum
}
```