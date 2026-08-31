# Beats 100% in time

**Author:** muskan3006
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5174408/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5174408/)

---

# Intuition
If we try to understand the question, then we will find that only one number will be repeated N times, so we just need to find a number that repeats even once, because all other numbes will be unique.

# Approach
Traverse the array and maintain a set to keep unique numbers. If you find any number existing in set then that is our answer.



# Code
```

import scala.annotation.tailrec
object Solution {
  def repeatedNTimes(nums: Array[Int]): Int = {
    @tailrec
    def helper(index: Int, set: Set[Int]): Int = {
      val currentElement = nums(index)
      if (set(currentElement)) {
        currentElement
      } else helper(index + 1, set + currentElement)
    }
    helper(0, Set.empty[Int])
  }
  }
```