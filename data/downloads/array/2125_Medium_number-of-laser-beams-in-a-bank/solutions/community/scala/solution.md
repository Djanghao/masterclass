# [scala] fp + counting + sliding_window + math

**Author:** leetcode08
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4495132/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4495132/)

---

# Complexity
- Time complexity: $$O(m\xB7n)$$
- Space complexity: $$O(m)$$

# Code
```scala
object Solution {
  def numberOfBeams(bank: Array[String]): Int =
    bank
      .map(_.count(_ == '1'))
      .filter(_ > 0)
      .appended(0)
      .sliding(2)
      .map(_.reduce(_ * _))
      .sum
}
```