# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5695033/](https://leetcode.com/problems/alternating-groups-ii/solutions/5695033/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def numberOfAlternatingGroups(colors: Array[Int], k: Int): Int = {
    (colors.iterator ++ colors.iterator.take(k-1)).sliding(2,1)
      .foldLeft((0,1)){case ((acc,len),l) =>
        (if((l.sum&1)==1) len + 1 else 1)
        .pipe {len1 => (acc + (len1>=k).compare(false), len1)}
      }._1
  }
}
```