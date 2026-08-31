# Scala with tail recursion

**Author:** brahmcraft
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/3757161/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/3757161/)

---

# Code
```
import scala.annotation.tailrec

object Solution {
    def longestConsecutive(nums: Array[Int]): Int = 
        if (nums.isEmpty) 0
        else {
            val numSet: Set[Int] = nums.toSet

            numSet.foldLeft(1){(longestStreak, num) =>
                if (numSet.contains(num - 1)) longestStreak
                else scala.math.max(longestStreak, countStreak(numSet, num, 1))
            }
        }
    

    @tailrec
    def countStreak(numSet: Set[Int], lowest: Int, streak: Int): Int = 
        if (!numSet.contains(lowest + 1)) streak
        else countStreak(numSet, lowest + 1, streak + 1)
    
}
```