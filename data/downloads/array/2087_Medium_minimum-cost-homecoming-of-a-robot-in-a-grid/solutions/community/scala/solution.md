# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/6075922/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/6075922/)

---

```scala []
object Solution {
    def minCost(startPos: Array[Int], homePos: Array[Int], rowCosts: Array[Int], colCosts: Array[Int]): Int =
    ((startPos zip homePos) zip List(rowCosts,colCosts)).map{
      case ((src,tgt),costs) =>
        if(src==tgt) 0 else Iterator.range(tgt, src, (src-tgt).sign).map(costs).sum
    }.sum
}
```