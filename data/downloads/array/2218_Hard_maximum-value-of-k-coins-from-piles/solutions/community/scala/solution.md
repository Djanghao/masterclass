# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1892275/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1892275/)

---

```
import math.{max, min}

object Solution {
  def maxValueOfCoins(piles: List[List[Int]], k: Int): Int = piles
    .iterator
    .zip(piles.iterator.scanLeft(0)(_ + _.size))
    .foldLeft(IndexedSeq(0)) { case (dp, (pile, totalSizeOfPreviousPiles)) =>
      val cumulativeAmounts = pile.scanLeft(0)(_ + _)
      (0 to min(k, totalSizeOfPreviousPiles + pile.size)).map { k =>
        (max(0, k - totalSizeOfPreviousPiles) to min(k, pile.size))
            .iterator
            .map(i => cumulativeAmounts(i) + dp(k - i))
            .max
      }
    }
    .apply(k)
}
```