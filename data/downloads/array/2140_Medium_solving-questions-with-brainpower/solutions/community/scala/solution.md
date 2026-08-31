# Scala: with forward DP updating

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/4902530/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/4902530/)

---

# Code
```
object Solution {
  def mostPoints(questions: Array[Array[Int]]): Long = {
    val len = questions.length
    val dp = Array.ofDim[Long](len + 1)
    (1 to len).foldLeft(0L) { (max, i) =>
      dp(i) = dp(i) max dp(i - 1)
      val nextDp = i + questions(i - 1)(1) + 1
      val whenTook = dp(i) + questions(i - 1)(0)
      if (nextDp <= len) dp(nextDp) = dp(nextDp) max whenTook
      max max whenTook
    }
  }
}
```