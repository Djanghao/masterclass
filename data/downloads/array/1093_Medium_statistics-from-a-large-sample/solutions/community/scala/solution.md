# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/2030365/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/2030365/)

---

```
import scala.annotation.tailrec

object Solution {
  def sampleStats(counts: Array[Int]): Array[Double] = {
    /**
     * @return The element of the sample at index k.
     */
    @tailrec
    def get(k: Int, i: Int = 0): Double = counts(i) match {
      case count if count > 0 && k < count => i.toDouble
      case count => get(k - count, i + 1)
    }

    val totalCount = counts.sum

    Array(counts.indexWhere(_ > 0),
          counts.lastIndexWhere(_ > 0),
          counts.indices.map(i => counts(i) * i.toDouble).sum / totalCount,
          totalCount % 2 match {
            case 0 =>
              val k = totalCount / 2
              (get(k - 1) + get(k)) / 2.0

            case _ => get(totalCount / 2)
          },
          counts.indices.maxBy(counts))
  }
}
```