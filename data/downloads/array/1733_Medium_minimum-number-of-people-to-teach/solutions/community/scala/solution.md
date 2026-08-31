# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1912506/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1912506/)

---

```
import scala.collection.immutable.BitSet
import scala.util.chaining.scalaUtilChainingOps

object Solution {
  def minimumTeachings(n: Int, languages: Array[Array[Int]], friendships: Array[Array[Int]]): Int = {
    languages
      .map(_.to(BitSet))
      .pipe { languages =>
        friendships
          .filter { case Array(u, v) => (languages(u - 1) & languages(v - 1)).isEmpty }
          .pipe { friendships =>
            (1 to n)
              .view
              .map { language =>
                friendships
                  .view
                  .flatMap {
                    case Array(u, v) if languages(u - 1).contains(language) => Iterator(v)
                    case Array(u, v) if languages(v - 1).contains(language) => Iterator(u)
                    case Array(u, v) => Iterator(u, v)
                  }
                  .toSet
                  .size
              }
              .min
          }
      }
  }
}
```