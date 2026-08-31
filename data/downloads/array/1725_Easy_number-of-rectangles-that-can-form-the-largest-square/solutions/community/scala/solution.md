# Easy to understand Scala Solution

**Author:** sangam92
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1326267/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1326267/)

---

```
import scala.collection.mutable.ArrayBuffer

object Solution {
    def countGoodRectangles(rectangles: Array[Array[Int]]): Int = {
          var out = ArrayBuffer[Int]()
    for (i <- 0 to rectangles.length-1)
    {
      out += rectangles(i).min
    }
    val MAX= out.max
    var count=0
    for (j <- 0 to out.length-1)
      {
        if(MAX==out(j))
        {
          count+=1
        }
      }
    count  
    }
}
```