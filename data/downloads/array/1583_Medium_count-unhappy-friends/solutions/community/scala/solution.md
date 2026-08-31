# scala solution

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unhappy-friends/solutions/955681/](https://leetcode.com/problems/count-unhappy-friends/solutions/955681/)

---

```scala
object Solution {
  private var preferences: Array[Array[Int]] = _
  private var pairs: Array[Array[Int]] = _

  def unhappyFriends(n: Int, preferences: Array[Array[Int]], pairs: Array[Array[Int]]): Int = {
    this.preferences = preferences
    this.pairs = pairs
    pairs.map(pair => pair.count(x => f(pair.indexOf(x), pair))).sum
  }

  private def f(i: Int, pair: Array[Int]): Boolean = {
    val x = pair(i)
    val y = pair((i + 1) % 2)
    val pref = preferences(x)
    val us = pref.slice(0, pref.indexWhere(_ == y))
    us.exists(u => {
      val v = pairs.find(pair => pair(0) == u || pair(1) == u).get.find(_ != u).get
      val pref = preferences(u)
      pref.indexOf(x) < pref.indexOf(v)
    })
  }
}
```