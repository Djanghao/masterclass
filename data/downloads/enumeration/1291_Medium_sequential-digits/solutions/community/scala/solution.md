# [scala] fp + recursion + sliding_window

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/4668541/](https://leetcode.com/problems/sequential-digits/solutions/4668541/)

---

# Code
```scala
object Solution {
  def sequentialDigits(low: Int, high: Int): List[Int] = {
    val digits = "123456789"

    @annotation.tailrec
    def loop(windowSize: Int, result: List[Int]): List[Int] =
      if (windowSize > 9)
        result
      else {
        val candidates = digits
          .sliding(windowSize)
          .map(_.toInt)
          .filter(x => low <= x && x <= high)
        loop(windowSize + 1, result ++ candidates)
      }

    loop(windowSize = low.toString.size, result = Nil)
  }
}

```