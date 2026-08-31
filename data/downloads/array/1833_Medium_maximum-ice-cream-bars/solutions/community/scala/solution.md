# Scala ( scan ) functional

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3353572/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3353572/)

---

```
object Solution {
  val maxIceCream = (costs: Array[Int], coins: Int) =>
    costs.sorted
      .scanLeft(0L)(_ + _)
      .filter(_ <= coins)
      .length - 1
}
```