# Clean Scala Solution

**Author:** bodotzhao
**Votes:** 1
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/1400496/](https://leetcode.com/problems/contains-duplicate-ii/solutions/1400496/)

---

```
import scala.collection.mutable.HashMap

object Solution {
    def containsNearbyDuplicate(nums: Array[Int], k: Int): Boolean = {
        val numToIndex = HashMap[Int, Int]()

        var result = false

        var i = 0
        while (i < nums.length && !result) {
            val num = nums(i)
            if (numToIndex.contains(num) && i - numToIndex(num) <= k) {
                result = true
            } else {
                numToIndex(num) = i
            }
            i += 1
        }

        return result
    }
}
```