# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/2005896/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/2005896/)

---

```
object Solution {
  private val Modulus = 1000000007

  def rearrangeSticks(n: Int, k: Int): Int = (1 to n)
    .foldLeft(IndexedSeq(1L)) {
      // dp(n, k) = dp(n - 1, k - 1) + (n - 1) * dp(n - 1, k)
      case (numArrangements, n) => IndexedSeq.tabulate(math.min(n, k) + 1) {
        case 0 => 0
        case k if k == n => 1
        case k => (numArrangements(k - 1) + (n - 1) * numArrangements(k)) % Modulus
      }
    }
    .apply(k)
    .toInt
}
```