# Scala Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/4374301/](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/4374301/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Using Binary Search

# Complexity
- Time complexity:
O(LogN)

- Space complexity:
O(1)

# Code
```
object Solution {
    def findMedianSortedArrays(nums1: Array[Int], nums2: Array[Int]): Double = {

    if (nums1.length > nums2.length)
      findMedianSortedArrays(nums2, nums1) else {
      val N = nums1.length + nums2.length
      val n1 = nums1.length
      val n2 = nums2.length

      def search(start: Int, end: Int): Double = {
        if (start > end) 0.0 else {
          val cut1 = start + (end - start) / 2
          val cut2 = N / 2 - cut1

          val l1 = if (cut1 == 0) Integer.MIN_VALUE else nums1(cut1 - 1)
          val l2 = if (cut2 == 0) Integer.MIN_VALUE else nums2(cut2 - 1)
          val r1 = if (cut1 == n1) Integer.MAX_VALUE else nums1(cut1)
          val r2 = if (cut2 == n2) Integer.MAX_VALUE else nums2(cut2)

          if (l1 <= r2 && l2 <= r1) {
            if (N % 2 == 0)
              (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0
            else Math.min(r1, r2)
          } else {
            if (l1 > r2) search(start, cut1 - 1)
            else search(cut1 + 1, end)
          }
        }
      }
      search(0, nums1.length)
    }
  }
}
```