# Simple iterative Scala solution

**Author:** meeshaw
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/3054816/](https://leetcode.com/problems/restore-ip-addresses/solutions/3054816/)

---

# Approach
Generate pointers where dots are supposed to be placed and cut substrings. For more dots, I presume, it is easy to write a more general generator. Working with substrings might be improved, too, but this won't matter in terms of complexity.

# Complexity
TBH, can't estimate, but should be within [this range](https://leetcode.com/problems/restore-ip-addresses/solutions/30972/who-can-beat-this-code/)


# Code
```
  object Solution {
    type STRING_IP = (String, String, String, String)
    type POSITIONS = (Int, Int, Int)

    def checkValid(s: STRING_IP): Boolean =
      s.productIterator.forall {
        case x: String if x.length == 1 => true
        case x: String if x.toIntOption.exists(_ < 256) => !x.headOption.contains('0')
        case _ => false
      }

    def restoreIpAddresses(s: String): List[String] = {
      val length = s.length

      def substrings(ps: POSITIONS): STRING_IP = {
        val (p1, p2, p3) = ps
        (s.substring(0, p1), s.substring(p1, p2), s.substring(p2, p3), s.substring(p3))
      }

      (for (p1 <- 1 to length;
            p2 <- 2 to length;
            p3 <- 3 to length
            if p1 > 0
            if p2 > p1
            if p3 > p2
            if length > p3;
            x = substrings(p1, p2, p3)
            if checkValid(x))
      yield x.productIterator.mkString(".")).toList
    }
  }

```