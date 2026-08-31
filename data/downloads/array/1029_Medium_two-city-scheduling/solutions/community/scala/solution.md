# Simple Scala solution

**Author:** tumakha
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/668328/](https://leetcode.com/problems/two-city-scheduling/solutions/668328/)

---

```
  def twoCitySchedCost(costs: Array[Array[Int]]): Int = {
    val half = costs.length / 2
    val a = costs.sortBy(_.reduceLeft(_ - _))
    (0 until half).map(i => a(i)(0) + a(half + i)(1)).sum
  }
```