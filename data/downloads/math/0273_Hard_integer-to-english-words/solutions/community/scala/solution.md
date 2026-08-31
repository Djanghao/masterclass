# Scala solution with tail rec and Long's, log1000(n) complexity

**Author:** andrii_romas
**Votes:** 1
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/4525161/](https://leetcode.com/problems/integer-to-english-words/solutions/4525161/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

Tail recursion. Long's are used just for fun to check if solution works with bigger numbers

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log1000(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```

  import scala.annotation.tailrec
  object Solution {

    val ones = Array("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
      "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen")
    val tens = Array("", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety")
    val rates = Array("", "Thousand", "Million", "Billion", "Trillion", "Quadrillion")

    def numberToWords(num: Long): String = {

      @tailrec
      def go(n: Long, rateIndex: Int, nextRate: Int, acc: List[String]): List[String] = {
        val newAcc = tensOfThousands(n % nextRate, rates(rateIndex), acc)
        val nextNumber = num / nextRate
        if (nextNumber > 0) go(nextNumber, rateIndex + 1, nextRate * 1_000, newAcc)
        else newAcc
      }

      if (num == 0) "Zero"
      else go(num, 0, 1_000, Nil).filterNot(_.isEmpty).mkString(" ")

    }

    def ones(n: Long, acc: List[String]): List[String] =
      ones(n.toInt) :: acc

    def tens(n: Long, acc: List[String]): List[String] =
      if (n >= 20) tens((n / 10).toInt) :: ones(n % 10, acc)
      else ones(n, acc)

    def hundreds(n: Long, acc: List[String]): List[String] =
      if (n >= 100) tens(n / 100, "Hundred" :: tens(n % 100, acc))
      else tens(n, acc)

    def tensOfThousands(n: Long, rateName: String, acc: List[String]): List[String] =
      if (n % 1_000 == 0) acc
      else hundreds(n % 1_000, rateName :: acc)
  }

```