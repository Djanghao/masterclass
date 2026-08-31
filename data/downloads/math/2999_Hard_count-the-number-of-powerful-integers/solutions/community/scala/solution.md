# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4541845/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4541845/)

---

```scala
object Solution {
  def numberOfPowerfulInt(start: Long, finish: Long, limit: Int, s: String): Long = {
    var low = start.toString
    val high = finish.toString
    val n = high.length
    var t = ""
    (0 until (n - low.length)).foreach(_ => t += "0")
    low = t + low
    val memo = Array.fill(n)(-1L)
    dfs(0, limitLow = true, limitHigh = true, low.toCharArray, high.toCharArray, limit, s.toCharArray, memo)
  }

  private def dfs(i: Int, limitLow: Boolean, limitHigh: Boolean, low: Array[Char], high: Array[Char], limit: Int, s: Array[Char], memo: Array[Long]): Long = {
    if (i == high.length) return 1
    if (!limitLow && !limitHigh && memo(i) != -1) return memo(i)

    val lo = if (limitLow) low(i) - '0' else 0
    val hi = if (limitHigh) high(i) - '0' else 9

    var res = 0L
    if (i < high.length - s.length)
      (lo to hi.min(limit)).foreach(d => res += dfs(i + 1, limitLow && d == lo, limitHigh && d == hi, low, high, limit, s, memo))
    else {
      val x = s(i - (high.length - s.length)) - '0'
      if (lo <= x && x <= hi.min(limit))
        res = dfs(i + 1, limitLow && x == lo, limitHigh && x == hi, low, high, limit, s, memo)
    }
    if (!limitLow && !limitHigh) memo(i) = res
    res
  }
}
```