# Scala FP: DP with precleaning

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/distinct-subsequences/solutions/4806279/](https://leetcode.com/problems/distinct-subsequences/solutions/4806279/)

---

# Code
```
object Solution {
  def numDistinct(s: String, t: String): Int = {
    val fs = s.filter(t.toSet)
    val fif = fs.indexOf(t.head)
    val lil = fs.lastIndexOf(t.last)
    if (fif < 0 || lil < fif) 0 else {
      val cs = fs.substring(fif, lil + 1)
      val sLen = cs.length
      val tLen = t.length
      val dp = Array.ofDim[Int](tLen + 1, sLen + 1)

      for(is <- 0 to sLen) dp(0)(is) = 1

      for(it <- 1 to tLen; is <- 1 to sLen)
        dp(it)(is) = if (t(it - 1) == cs(is - 1)) dp(it - 1)(is - 1) + dp(it)(is - 1) else dp(it)(is - 1)

      //println(dp.map(_.toList).mkString("\
"))
      dp(tLen)(sLen)
    }
  }
}
```