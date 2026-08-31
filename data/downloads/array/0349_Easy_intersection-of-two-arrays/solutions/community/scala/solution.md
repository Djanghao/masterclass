# Easy Scala Solution

**Author:** PritiMishra
**Votes:** 1
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/1382354/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/1382354/)

---

object Solution {
    def intersection(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
            nums1.intersect(nums2).distinct

    }
}