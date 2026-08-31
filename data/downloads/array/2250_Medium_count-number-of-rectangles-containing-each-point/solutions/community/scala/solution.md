# scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/4413103/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/4413103/)

---

# Code
```
object Solution {
    def countRectangles(rectangles: Array[Array[Int]], points: Array[Array[Int]]): Array[Int] = {
        
        val minW = rectangles.map(_(0)).min
        val maxW = rectangles.map(_(0)).max
        val minH = rectangles.map(_(1)).min
        val maxH = rectangles.map(_(1)).max

        points.map{p => 
            if(p(0) > maxW || p(1) > maxH) 0
            else if(p(0) <= minW && p(1) <= minH) rectangles.size
            else rectangles.count(r => p(0) <= r(0) && p(1) <= r(1))
        }
    }
}
```