# Scala TreeSet

**Author:** vcamarggo
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/2770704/](https://leetcode.com/problems/number-of-recent-calls/solutions/2770704/)

---

```
class RecentCounter() {

  val dataStore: mutable.TreeSet[Int] = mutable.TreeSet()

  def ping(t: Int): Int = {
    dataStore.add(t);
    dataStore.rangeFrom(t - 3000).size
  }

}