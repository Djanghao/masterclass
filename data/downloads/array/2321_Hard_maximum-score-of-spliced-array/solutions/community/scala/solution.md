# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2672689/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2672689/)

---

```
  def maximumsSplicedArray(nums1: Array[Int], nums2: Array[Int]): Int =
    nums1.sum + help(nums1, nums2) max nums2.sum + help(nums2, nums1)

  def help(nums1: Array[Int], nums2: Array[Int]):Int =
    nums1.indices.scanLeft(0)((sum, i) => (sum + nums2(i) - nums1(i)) max (nums2(i) - nums1(i))).max

```