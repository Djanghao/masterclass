# [scala] - bottom up

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/3280619/](https://leetcode.com/problems/decode-ways-ii/solutions/3280619/)

---

# Code
```
object Solution {
  
  private val cost1 = ((7 to 9).map("*" + _) ++ (10 to 26).map(_.toString())).toSet

  private val cost2 = (0 to 6).map("*" + _).toSet

  def numDecodings(s: String): Int = {
    val dp = new Array[Long](s.length() + 1)
    dp(0) = 1
    dp(1) = one(s.head)
    s.indices.tail.foreach { i =>
      val single = dp(i) * one(s(i))
      val couple = dp(i - 1) * two(s.slice(i - 1, i + 1))
      dp(i + 1) = (single + couple) % 1000000007
    }
    dp.last.toInt
  }

  private def one(c: Char) =
    c match {
      case '0' => 0
      case '*' => 9
      case _ => 1
    }

  private def two(s: String) =
    if (s == "1*") 9
    else if (s == "2*") 6
    else if (s == "**") 15
    else if (cost1.contains(s)) 1
    else if (cost2.contains(s)) 2
    else 0
}
```