# Scala simple binary search beats 100%

**Author:** eugene-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3818111/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3818111/)

---

```
object Solution {
  def minSpeedOnTime(dist: Array[Int], hour: Double): Int = {

    def time(speed: Int): Double = {
      val ts = dist.map(_.toDouble / speed)
      ts.init.map(Math.ceil).sum + ts.last
    }

    val times = (1 to 10_000_000).view.map(time)
    val found = times.search(hour)(Ordering[Double].reverse)
    Some(found.insertionPoint).map(_ + 1).filter(_ <= 10_000_000).getOrElse(-1)
  }
}
```