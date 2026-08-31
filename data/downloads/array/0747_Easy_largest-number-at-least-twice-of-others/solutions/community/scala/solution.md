# Functional solution time: O(n) space: O(1)

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/4140776/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/4140776/)

---

```
/*
- there's only one maximum
- max needs to be AT LEAST double of every other number
- -1 otherwise
*/

object Solution {
    def dominantIndex(nums: Array[Int]): Int = {
        @scala.annotation.tailrec
        def maxWithIndex(index: Int, maxIndex: Int, max: Int): (Int, Int) = {
            if(index == nums.length) return (maxIndex, max)
            val curr = nums(index)
            val (updatedMaxIndex, updatedMax) = if(curr > max) (index, curr) else (maxIndex, max)
            maxWithIndex(index + 1, updatedMaxIndex, updatedMax)
        }
        val (maxIndex, max) = maxWithIndex(0, 0, nums(0))
        if(nums.forall{num => if(num == max) true else max >= num * 2 }) maxIndex else -1
    }
}
```