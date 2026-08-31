# scala ArrayDeque

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/5317559/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/5317559/)

---

```scala
object Solution {
  var DEBUG = false
  //DEBUG = true
  import collection.mutable
  def minimumCoins(prices: Array[Int]): Int =
    if(DEBUG) println(s"minimumCoins(${prices.toSeq})")
    val dp = Array.fill(prices.length + 1)(0)
    val q = mutable.ArrayDeque.empty[Int]
    prices.indices.foreach{i =>
      if(DEBUG) println(s"  i=$i : q00=${q.toSeq} : dp0=${dp.toSeq.take(i)}")
      q.removeHeadWhile(x => (x + 1) * 2 < i + 1)
      q.removeLastWhile(x=> dp(x) + prices(x) >= dp(i) + prices(i))
      q.append(i)
      dp(i+1) = dp(q.head) + prices(q.head)
      if(DEBUG) println(s"    q11=${q.toSeq} : dp1=${dp.toSeq.take(i+1)}")
    }
    dp(prices.length)
}
```