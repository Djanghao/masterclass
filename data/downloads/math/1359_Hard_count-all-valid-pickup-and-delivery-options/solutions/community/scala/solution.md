# Scala Ranges + FoldLeft

**Author:** jkalmeij
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/1824637/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/1824637/)

---

```scala
object Solution {
  def countOrders(n: Int): Int = {
    // 00000101 11110101 11100001 00000111
    // This fits in a 32 bit integer. But m * m doesn't.
    val m: Long = 1_000_000_007
    // m * m does fit in a long value, so let's just use that.
    // (strictly speaking it is (m - 1) * (m - 1) has to fit. But let's ignore that)
    //         7        6        5        4        3        2       1
    // 001000111 00001101 11100101 10000110 01100110 10011100 0110001

    Range
      .inclusive(1, n)
      .map { i =>
        // you can use arithmetic series here, but scala already does that for us.
        // Range(0, 2 * 500).sum = 499500 fits in an Int, so no overflow issues there.
        Range(0, 2 * i).sum
      }
      // essentially the product, except that we use mod at every step to prevent overflows.
      .foldLeft(1L)((a, b) => (a * (b % m)) % m)
      // safe because the resulting expression < m, which fits in an int.
      .toInt
  }
}
```