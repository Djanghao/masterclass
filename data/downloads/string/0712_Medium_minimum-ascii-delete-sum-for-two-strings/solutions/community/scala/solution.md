# Scala: simple

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/4804412/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/4804412/)

---

# Code
```
object Solution {
  def minimumDeleteSum(s1: String, s2: String): Int = {
    val len1 = s1.length
    val len2 = s2.length
    val dp = Array.ofDim[Int](len1 + 1, len2 + 1)

    for(i1 <- 1 to len1; i2 <- 1 to len2)
      dp(i1)(i2) = if (s1(i1 - 1) == s2(i2 - 1)) dp(i1 - 1)(i2 - 1) + s1(i1 - 1).toInt else dp(i1 - 1)(i2) max dp(i1)(i2 - 1)

    s1.sum + s2.sum - 2 * dp(len1)(len2)
  }
}
```