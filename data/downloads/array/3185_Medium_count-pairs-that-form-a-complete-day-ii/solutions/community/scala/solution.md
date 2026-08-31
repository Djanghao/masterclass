# [scala] - Array of modulo

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5331477/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5331477/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.


# Code
```
object Solution {
  def countCompleteDayPairs(hours: Array[Int]): Long = {
    val mods = new Array[Long](24)
    hours.foreach(h => mods(h % 24) += 1)
    paired(mods(0)) + paired(mods(12)) + (1 to 11).map(h => mods(h) * mods(24 - h)).sum
  }

  private def paired(h: Long) = h * (h - 1) / 2
}
```