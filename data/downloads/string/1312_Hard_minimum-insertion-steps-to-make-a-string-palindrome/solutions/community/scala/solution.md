# Scala: O(n^2) using Longest Common Subsequence

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/4865448/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/4865448/)

---

# Code
```
object Solution {
  def longestCommonSubsequence(text1: String, text2: String): Int = {
    val len1 = text1.length
    val len2 = text2.length
    val dp = Array.ofDim[Int](len1 + 1, len2 + 1)

    for(i1 <- 1 to len1; i2 <- 1 to len2)
      dp(i1)(i2) = if (text1(i1 - 1) == text2(i2 - 1)) dp(i1 - 1)(i2 - 1) + 1 else dp(i1 - 1)(i2) max dp(i1)(i2 - 1)

    dp(len1)(len2)
  }

  def minInsertions(s: String): Int =
    s.length - longestCommonSubsequence(s, s.reverse)
}
```