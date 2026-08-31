# [scala] - dropWhile, foldLeft

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/4306092/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/4306092/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  def minimumSteps(s: String): Long =
    s.dropWhile(_ == '0').foldLeft((0L, 0)) { case ((total, ones), c) =>
      if (c == '0') (total + ones, ones) else (total, ones + 1)
    }._1
}
```