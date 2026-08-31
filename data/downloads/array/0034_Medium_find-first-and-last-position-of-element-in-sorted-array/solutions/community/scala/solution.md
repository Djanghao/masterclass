# Scala solution

**Author:** Fubuchi
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/2329850/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/2329850/)

---

The idea is to continue the binary search even when you find the target. Go left to find min index, and go right for the max

```
import scala.annotation.tailrec

object Solution {
    def searchRange(nums: Array[Int], target: Int): Array[Int] = {
        val goLeft: (Int, Int) => (Int, Int) = (left, right) => (left, (left + right) / 2 - 1)
        val goRight: (Int, Int) => (Int, Int) = (left, right) => ((left + right) / 2 + 1, right)
        val min = binary(nums, target, -1, (0, nums.length - 1), goLeft)
        val max = binary(nums, target, -1, (0, nums.length - 1), goRight)
        Array(min, max)
    }
  
    @tailrec
    def binary(nums: Array[Int], target: Int, found: Int, bound: (Int, Int), next: (Int, Int) => (Int, Int)): Int = {
        val (left, right) = bound
        if (right < left) {
            found
        } else {
            val mid = (left + right) / 2
            val value = nums(mid)
            if (value == target) {
                binary(nums, target, mid, next(left, right), next)
            } else if (value < target) {
                binary(nums, target, found, (mid + 1, right), next)
            } else {
                binary(nums, target, found, (left, mid - 1), next)
            }
        }
    }
}
```