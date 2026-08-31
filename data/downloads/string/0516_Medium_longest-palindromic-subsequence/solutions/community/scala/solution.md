# Scala: diagonal tabulation

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/4801601/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/4801601/)

---

# Code
```
object Solution {
  val dp = Array.ofDim[Int](1000, 1000)

  def longestPalindromeSubseq(s: String): Int = {
    val len = s.length

    for (d <- 1 to 2; l <- 0 to len - d)
      dp(l)(l + d - 1) = if (d == 1 || s(l) != s(l + 1)) 1 else 2
    
    for (d <- 3 to len; l <- 0 to len - d; r = l + d - 1) 
      dp(l)(r) = if (s(l) == s(r)) dp(l + 1)(r - 1) + 2 else dp(l)(r - 1) max dp(l + 1)(r)
      
    //println(dp.map(_.toList).mkString("\
"))
    dp(0)(len - 1) 
  }
}
```