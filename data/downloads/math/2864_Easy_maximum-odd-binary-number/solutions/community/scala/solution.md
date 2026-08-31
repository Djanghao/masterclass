# [scala] - count ones, create string. 2 LoC

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4083356/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4083356/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  def maximumOddBinaryNumber(s: String): String = {
    val ones = s.count(_ == '1')
    "1" * (ones - 1) + "0" * (s.length() - ones) + "1"
  }
}
```