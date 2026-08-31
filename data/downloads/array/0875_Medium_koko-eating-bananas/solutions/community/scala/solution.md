# Scala FP binary search tailrec

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/4727724/](https://leetcode.com/problems/koko-eating-bananas/solutions/4727724/)

---

# Code
```
object Solution {
  def minEatingSpeed(piles: Array[Int], h: Int): Int = {
    def hours(k: Int): Long = piles.foldLeft(0L)((sum, p) => sum + (p + k - 1) / k)

    @annotation.tailrec
    def findHours(first: Int, end: Int): Int = {
      val len = end - first
      if (len == 1)
        end
      else {
        val half = first + len / 2
        if (hours(half) <= h) findHours(first, half)
        else findHours(half, end)
      }  
    }

    findHours(0, piles.max)      
  }
}
```