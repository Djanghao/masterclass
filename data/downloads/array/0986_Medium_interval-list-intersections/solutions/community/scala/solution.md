# Easy to understand 10 liner in Scala

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/5223533/](https://leetcode.com/problems/interval-list-intersections/solutions/5223533/)

---

# Code
```
object Solution {
    type Interval = List[(Int, Int)]
    
    def intervalIntersection(first: Array[Array[Int]], second: Array[Array[Int]]) =
        intersect(toInterval(first), toInterval(second)).map((a, b) => Array(a, b)).toArray
    
    def toInterval(list: Array[Array[Int]]): Interval = list.map({case Array(a, b) => (a, b)}).toList
    
    def intersect(a: Interval, b: Interval): Interval = (a, b) match {
        case (_, Nil) | (Nil, _) => Nil
        case ((x1, y1) :: as, (x2, y2) :: bs) if y1 < x2 => intersect(as, b)
        case ((x1, y1) :: as, (x2, y2) :: bs) if y2 < x1 => intersect(a, bs)
        case ((x1, y1) :: as, (x2, y2) :: bs) if y1 < y2 => (x1 max x2, y1) :: intersect(as, b)
        case ((x1, y1) :: as, (x2, y2) :: bs) => (x1 max x2, y2) :: intersect(a, bs)
    }
}
```