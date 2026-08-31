# scala brute-force oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/5338689/](https://leetcode.com/problems/closest-dessert-cost/solutions/5338689/)

---

```scala
object Solution {
  def closestCost(baseCosts: Array[Int], toppingCosts: Array[Int], target: Int): Int =
    baseCosts.toList.flatMap { bc =>
      toppingCosts.toList.scanLeft(List.empty[Int]) { case (b, a) =>
        (bc +: b).flatMap(x => (0 to 2).map(x + a * _))
      }.flatten.distinct
    }.map{c => ((c-target).abs,c-target,c)}.min._3
}
```