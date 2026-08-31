# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-five/solutions/4382290/](https://leetcode.com/problems/high-five/solutions/4382290/)

---

# Code
```
import scala.collection.mutable.HashMap
import scala.collection.mutable.ListBuffer

object Solution {
  def highFive(items: Array[Array[Int]]): Array[Array[Int]] = {
    val map = HashMap[Int, ListBuffer[Int]]()
    for (i <- 0 until items.length) {
      if (!map.contains(items(i)(0))) {
        map(items(i)(0)) = ListBuffer()
      }
      map(items(i)(0)).append(items(i)(1))
    }
    var k = 0
    val result = Array.ofDim[Int](map.size, 2)
    for (i <- map.keys) {
      var average = 0
      val d = if (map(i).size < 5) map(i).size else 5
      map(i).sorted.reverse.take(5).foreach(average += _)
      result(k)(0) = i
      result(k)(1) = average / d
      k += 1
    }
    result
  }
}
```