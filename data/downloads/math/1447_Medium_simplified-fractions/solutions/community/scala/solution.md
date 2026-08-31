# Scala solution with a mutable set

**Author:** dLuxHu
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/5375464/](https://leetcode.com/problems/simplified-fractions/solutions/5375464/)

---

Scala solution with a mutalbe set that collects the already emitted values. It's important that I started with the smallest denominators (2).

# Code
```
import scala.collection.mutable

object Solution {
  def simplifiedFractions(n: Int): List[String] = {
    val seen = mutable.Set.empty[Double]
    for {
      denominator <- 2 to n
      numerator <- 1 until denominator
      value = numerator.toDouble  / denominator.toDouble
      if seen.add(value)
    } yield s"$numerator/$denominator"
  }.toList
}
```