# scala 3-liner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/5167428/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/5167428/)

---

```scala
object Solution {
  def displayTable(orders: List[List[String]]): List[List[String]] = {
    lazy val x0 = orders.groupMap(_(1))(_(2)).to(List)
      .map{case (k,v) => k -> v.groupMapReduce(identity)(_ => 1)(_ + _) }
    lazy val foods = x0.map(_._2).flatMap(_.keys).to(List).sorted.distinct
    ("Table" +: foods) +: 
      (x0.toList.sortBy(_.head.toInt).map{(k,v) => k +: foods.map(v.getOrElse(_,0).toString)})
  }
}
```