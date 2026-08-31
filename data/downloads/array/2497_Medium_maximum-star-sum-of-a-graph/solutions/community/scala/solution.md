# scala immutable solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/3091415/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/3091415/)

---

# Code
```
object Solution {
  def maxStarSum(vals: Array[Int], edges: Array[Array[Int]], _k: Int): Int = {
    lazy val g = edges.toList.flatMap{e => List((e(0) -> e(1)), e(1) -> e(0))}.groupMap(_._1)(_._2)
    lazy val y0 = g.map{case (k,v) => 
      lazy val neighbours = v.map(vals(_)).sorted.dropWhile(_ <= 0).reverse.take(_k)
      (vals(k) +: neighbours).sum
    }
    if(edges.isEmpty) vals.max else (y0.max) max (vals.max)
  }
}
```