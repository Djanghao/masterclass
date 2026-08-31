# ✅ Scala: counting 1s (beats 100%/100%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3450259/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3450259/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
object Solution {

  /* Or go crazy if you would like to :)
      s
      .foldLeft((0, 0)) {
        case ((sum, ones), '1') =>
          ((sum + ones + 1) % (1e9.toInt + 7), ones + 1)
        case ((sum, _), _)   =>
          (sum, 0)
      }
      ._1
  */
  def numSub(s: String): Int = {
    var sum = 0
    
    var ones = 0
    s.foreach {
      case '1' =>
        ones += 1
        sum += ones
        sum %= (1e9.toInt + 7)
      case _   =>
        ones = 0
    }

    sum
  }

}
```