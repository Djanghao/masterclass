# Scala ( fold )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/2760998/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/2760998/)

---

```
object Solution {
    def minProductSum(nums1: Array[Int], nums2: Array[Int]): Int = {
        nums1.sorted
        .zip(nums2 sorted {Ordering.Int.reverse})
        .foldLeft(0)((sum, p) => sum + p._1 * p._2)
    }
}
```