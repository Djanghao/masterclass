# Scala foldLeft solution

**Author:** eugenykostarev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4850236/](https://leetcode.com/problems/minimum-common-value/solutions/4850236/)

---

# Code
```
object Solution {
    val empty = Array.empty[Int]
    
    def getCommon(nums1: Array[Int], nums2: Array[Int]): Int = {
        nums1.foldLeft((-1, nums2)) { case ((min, nums), current) =>
            val second = nums.dropWhile(_ < current)
            second.headOption match {
                case Some(head) if head == current =>
                    (head, empty)
                case Some(head) =>
                    (min, second)
                case None =>
                    (min, empty)
            }
        }
        ._1
    }
}
```