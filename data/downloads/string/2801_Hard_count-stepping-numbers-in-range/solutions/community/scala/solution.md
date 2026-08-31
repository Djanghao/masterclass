# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/4137602/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/4137602/)

---

``` scala
object Solution {
  val M: Int = (1e9 + 7).toInt

  private var arr = Array.emptyCharArray
  private var memo = Array.empty[Array[Int]]

  def countSteppingNumbers(low: String, high: String): Int =
    (calc(high) - calc(low) + M + (if (valid(low)) 1 else 0)) % M

  private def calc(s: String): Int = {
    arr = s.toCharArray
    memo = Array.fill(s.length, 1 << 10)(0)
    s.indices.foreach(i => memo(i) = Array.fill(1 << 10)(-1))
    f(0, 0, isLimit = true, isNum = false)
  }

  private def f(i: Int, pre: Int, isLimit: Boolean, isNum: Boolean): Int = {
    if (i == arr.length) return if (isNum) 1 else 0
    if (!isLimit && isNum && memo(i)(pre) != -1) return memo(i)(pre)
    var res = 0
    if (!isNum) res = f(i + 1, pre, isLimit = false, isNum = false)
    val up = if (isLimit) arr(i) - '0' else 9
    ((if (isNum) 0 else 1) to up).foreach(d => if (!isNum || (d - pre).abs == 1) res = (res + f(i + 1, d, isLimit && d == up, isNum = true)) % M)
    if (!isLimit && isNum) memo(i)(pre) = res
    res
  }

  private def valid(s: String): Boolean = {
    s.indices.drop(1).foreach(i => if ((s.charAt(i) - s.charAt(i - 1)).abs != 1) return false)
    true
  }
}
scala