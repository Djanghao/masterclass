# Scala fp solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/4412208/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/4412208/)

---

# Code
```
object Solution {
    def countLatticePoints(circles: Array[Array[Int]]): Int = {

        // distinct circles
        // and sort them by size
        // from largest to smallest
        def distinctedAndSorted(circles: Array[Array[Int]]) = 
            circles.toList.map(_.toList).distinct.sortBy(-_(2))

        // checker function for single circle
        def isWithinFn(x: Int, y: Int, r: Int): (Int,Int) => Boolean = 
            (x1: Int,y1: Int) => {
                val (x2,y2) = (x1 - x, y1 - y)
                r * r >= x2 * x2 + y2 * y2
            }

        // helper function for isWithinFn
        def checkerFromList(l: List[Int]): (Int,Int) => Boolean = 
            isWithinFn(l(0),l(1),l(2))

        // function combinator
        def or(fn1: (Int,Int) => Boolean, fn2: (Int,Int) => Boolean): (Int,Int) => Boolean = 
            (x,y) => if(fn1(x,y)) true else fn2(x,y)

        // functions to get most left, right, top and bottom points
        def leftMost(circle: List[Int]) = circle(0) - circle(2)
        def rightMost(circle: List[Int]) = circle(0) + circle(2)
        def bottomMost(circle: List[Int]) = circle(1) - circle(2)
        def topMost(circle: List[Int]) = circle(1) + circle(2)

        val sorted = distinctedAndSorted(circles)
        
        // check function for all circles
        val checker = 
            sorted.tail.foldLeft(checkerFromList(sorted.head))((acc, c) => or(acc, checkerFromList(c)))

        val (xMin, xMax) = (sorted.map(c => leftMost(c)).min, sorted.map(c => rightMost(c)).max)
        val (yMin, yMax) = (sorted.map(c => bottomMost(c)).min, sorted.map(c => topMost(c)).max)

        (for{
            x <- xMin to xMax
            y <- yMin to yMax
            if(checker(x,y))
        } yield (x,y)).size
    }
}
```