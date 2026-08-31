# ✅ Scala: using sets subtraction (beats 100%/100%)

**Author:** aaabramov
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3457122/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3457122/)

---

# Complexity
- Time complexity: $$O(m + n)$$
- Space complexity: $$O(m + n)$$

# Code
```scala
object Solution {

  def findDifference(nums1: Array[Int], nums2: Array[Int]): List[List[Int]] = {
    val n1 = nums1.toSet
    val n2 = nums2.toSet

    List(
      (n1 -- n2).toList,
      (n2 -- n1).toList
    )
  }

}
```