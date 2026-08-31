# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3117164/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/3117164/)

---

# Code
```
object Solution {
  def countPoints(points: Array[Array[Int]], queries: Array[Array[Int]]): Array[Int] =
    queries.map{case Array(xj,yj,rj) => points.count{case Array(xi,yi) =>
        rj*rj >= (xi-xj)*(xi-xj)+(yi-yj)*(yi-yj)
    }}
}
```