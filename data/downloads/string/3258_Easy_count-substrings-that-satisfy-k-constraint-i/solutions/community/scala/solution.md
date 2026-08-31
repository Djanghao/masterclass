# Sliding Window

**Author:** gatear
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5736781/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5736781/)

---

# Code
```scala []
object Solution {
  def countKConstraintSubstrings(s: String, k: Int): Int = {
    var left    = 0
    var right   = 0
    val counts  = Array(0, 0)
    var arrs    = 0

    while(right < s.length) {
      counts(s(right).asDigit) += 1

      while(counts.forall(_ > k)) {
        counts(s(left).asDigit) -= 1
        left += 1
      }

      arrs  += right - left + 1
      right += 1
    }
    arrs
  }
}
```