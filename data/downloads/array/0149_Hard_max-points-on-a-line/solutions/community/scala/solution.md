# simple scala sollution

**Author:** slovic
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/3019252/](https://leetcode.com/problems/max-points-on-a-line/solutions/3019252/)

---

# Intuition
We iterate on all unique combinations of two points (`points.combinations(2)`) to find all possible lines. We use `mutable.Map[Line, Set[Point]]` to collect all lines, and assign points to them. Map has default empty Set `.withDefaultValue(Set.empty)` that simplifies adding new points (we don't need to distinct cases where our `acc` map already has given line, or not).

# Code
```
import scala.collection.mutable.Map
object Solution {
    type Point = Array[Int] //size is always 2.
    val Point = Array //just to allow us match Point(x, y)

    def maxPoints(points: Array[Point]): Int = {
        //(slope:Double, b:Double) - pair of numbers that distinct lines from each others. 
        val acc = Map.empty[(Double, Double), Set[Point]].withDefaultValue(Set.empty)
        //combinations(2) gives us exhaustive combinations 
        //of two points (without duplicates) so it is perfect for our case.
        //For every pair of points we will calculate line slope and offset.
        //and asign those points to this line.
        points.toSeq.combinations(2).foreach { 
            case pair @ Seq(Point(x1, y1), Point(x2, y2)) =>
            //`b` allows us to distinguish different parallel lines.
            //in default case it will be line value for `x = 0`
            //for vertical lines where x==0 could not be on the line
            //it will have simply x1
            var (slope, b) = (Double.PositiveInfinity, x1.toDouble) 

            if (x1 != x2) {
                slope = (y2-y1)/(x2-x1).toDouble
                b = y1-slope * x1     
            }

            //acc(slope -> b) is set and it treats arrays by reference
            //both points in `pair` will be treated in such way
            //so if we already have added EXACTLY this point it will not be duplicated!
            //Array(0, 0) != Array(0, 0) because they are in fact mutable
            acc(slope -> b) ++= pair 
        }

        acc.map(_._2.size).maxOption.getOrElse(1)
    }
}
```