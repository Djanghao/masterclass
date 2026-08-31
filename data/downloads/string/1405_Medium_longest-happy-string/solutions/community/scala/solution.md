# Scala solution "daily"

**Author:** egssor
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-happy-string/solutions/5919530/](https://leetcode.com/problems/longest-happy-string/solutions/5919530/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  def longestDiverseString(a: Int, b: Int, c: Int): String = {
    // \u0411\u0443\u0444\u0435\u0440 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u043A\u0438
    val sb = new StringBuilder()

    // \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u0431\u0443\u043A\u0432\u044B \u0438 \u0435\u0451 \u0441\u0438\u043C\u0432\u043E\u043B
    var counts = Array((a, 'a'), (b, 'b'), (c, 'c'))

    // \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u0430 \u0432 \u0441\u0442\u0440\u043E\u043A\u0443
    def appendChar(count: Int, ch: Char): Unit = {
      sb.append(ch)
      counts = counts.map { case (num, char) =>
        if (char == ch) (num - 1, char) else (num, char)
      }
    }

    while (true) {
      // \u0421\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C \u043F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0431\u0443\u043A\u0432
      counts = counts.sortBy(-_._1)

      // \u0415\u0441\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0431\u0443\u043A\u0432 \u0434\u043B\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0432\u044B\u0445\u043E\u0434\u0438\u043C \u0438\u0437 \u0446\u0438\u043A\u043B\u0430
      if (counts(0)._1 == 0) return sb.toString()

      // \u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u043F\u0435\u0440\u0432\u0443\u044E \u0431\u0443\u043A\u0432\u0443 \u0441 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C
      val (maxCount1, char1) = counts(0)
      val (maxCount2, char2) = counts(1)

      // \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C, \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u0445 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434 \u0443\u0441\u043B\u043E\u0432\u0438\u0435
      if (sb.length >= 2 && sb.charAt(sb.length - 1) == char1 && sb.charAt(sb.length - 2) == char1) {
        // \u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0442\u0430\u043A, \u043F\u044B\u0442\u0430\u0435\u043C\u0441\u044F \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0443\u044E \u0431\u0443\u043A\u0432\u0443
        if (maxCount2 == 0) return sb.toString() // \u0415\u0441\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u0443\u043A\u0432\u044B \u043D\u0435\u0442, \u0432\u044B\u0445\u043E\u0434\u0438\u043C
        appendChar(maxCount2, char2)
      } else {
        // \u0412 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0441\u0438\u043C\u0432\u043E\u043B \u0441 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C
        appendChar(maxCount1, char1)
      }
    }
    
    sb.toString()
  }

  def main(args: Array[String]): Unit = {
    println(longestDiverseString(1, 1, 7)) // Output: ccaccbcc
    println(longestDiverseString(7, 1, 0)) // Output: aabaa
  }
}

```