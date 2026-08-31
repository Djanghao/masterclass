# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/4431101/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/4431101/)

---

# Code
```
import scala.collection.mutable.Map

object Solution {
    def isMajorityElement(nums: Array[Int], target: Int): Boolean = {
        val len = nums.length / 2
        val map = Map[Int, Int]()
        for (i <- nums) {
            map(i) = map.getOrElse(i, 0) + 1
            if (i == target && map(i) > len) return true
        }
        false
    }
}


```