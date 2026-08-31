# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/4137551/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/4137551/)

---

``` scala
object Solution {
  var t = 0

  def numberOfBeautifulIntegers(low: Int, high: Int, k: Int): Int = {
    t = k
    val s1 = high.toString.toCharArray
    val s2 = (low - 1).toString.toCharArray
    val n1 = s1.length
    val n2 = s2.length
    val dp1 = Array.fill(n1, n1 * 2 + 1, k)(t)
    val dp2 = Array.fill(n2, n2 * 2 + 1, k)(t)
    s1.indices.foreach(i => (0 until n1 * 2).foreach(j => java.util.Arrays.fill(dp1(i)(j), -1)))
    s2.indices.foreach(i => (0 until n2 * 2).foreach(j => java.util.Arrays.fill(dp2(i)(j), -1)))
    f(0, n1, 0, isLimit = true, isNum = false, s1, dp1) - f(0, n2, 0, isLimit = true, isNum = false, s2, dp2)
  }

  private def f(i: Int, jo: Int, yu: Int, isLimit: Boolean, isNum: Boolean, s: Array[Char], dp: Array[Array[Array[Int]]]): Int = {
    if (i == s.length) return if (isNum && yu == 0 && jo == s.length) 1 else 0
    if (!isLimit && isNum && dp(i)(jo)(yu) >= 0) return dp(i)(jo)(yu)
    var res = 0
    if (!isNum) res = f(i + 1, jo, yu, isLimit = false, isNum = false, s, dp)
    var d = if (isNum) 0 else 1
    val up = if (isLimit) s(i) - '0' else 9
    while (d <= up) {
      res += f(i + 1, jo + d % 2 * 2 - 1, (yu * 10 + d) % t, isLimit && d == up, isNum = true, s, dp)
      d += 1
    }
    if (!isLimit && isNum) dp(i)(jo)(yu) = res
    res
  }
}
```