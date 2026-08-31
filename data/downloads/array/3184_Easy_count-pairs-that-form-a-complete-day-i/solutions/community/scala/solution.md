# [scala] - 1LoC, count good indices

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5329097/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5329097/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  def countCompleteDayPairs(hours: Array[Int]): Int =
    hours.indices.map(i => (i + 1 until hours.length).count(j => (hours(i) + hours(j)) % 24 == 0)).sum
}
```