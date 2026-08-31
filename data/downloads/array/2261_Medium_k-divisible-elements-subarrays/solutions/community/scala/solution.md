# Scala

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1999419/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/1999419/)

---

```
object Solution {
  def countDistinct(nums: Array[Int], k: Int, p: Int): Int = {
    val cumulativeDivisible = nums.scanLeft(0) {
      case (numDivisible, num) if num % p == 0 => numDivisible + 1
      case (numDivisible, _) => numDivisible
    }
    val view = nums.view
    (1 to nums.length)
      .iterator
      .map { length =>
        (0 to nums.length - length)
          .iterator
          .collect { case i if cumulativeDivisible(i + length) - cumulativeDivisible(i) <= k => (i, i + length) }
          .distinctBy { case (from, until) => view.slice(from, until).toSeq }
          .size
      }
      .sum
  }
}
```