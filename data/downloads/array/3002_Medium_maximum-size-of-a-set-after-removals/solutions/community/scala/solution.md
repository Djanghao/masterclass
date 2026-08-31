# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4854802/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4854802/)

---

```
object Solution {
  def maximumSetSize(nums1: Array[Int], nums2: Array[Int]): Int = {
    val (set1,set2,n) = (nums1.to(Set), nums2.to(Set),nums1.size)
    val both = set1.count(set2.contains(_))
    ((set1.size - both).min(n>>1) + (set2.size - both).min(n>>1) + both) min n
  }
}}```