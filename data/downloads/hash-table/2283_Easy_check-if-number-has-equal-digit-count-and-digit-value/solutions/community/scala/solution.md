# ✅ Scala: easy solution using groupMapReduce and withDefault

**Author:** aaabramov
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/3457086/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/3457086/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {

  def digitCount(num: String): Boolean = {
    val counts = num.groupMapReduce(_.asDigit)(_ => 1)(_ + _).withDefault(_ => 0)

    for (i <- num.indices if counts(i) != num(i).asDigit) {
      return false
    }

    true
  }

}
```