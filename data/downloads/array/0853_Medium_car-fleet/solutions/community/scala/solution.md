# 100% runtime without stack

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-fleet/solutions/5579662/](https://leetcode.com/problems/car-fleet/solutions/5579662/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
import scala.collection.mutable
object Solution {
  def carFleet(target: Int, position: Array[Int], speed: Array[Int]): Int = {
    val positionWithSpeed = position.zip(speed).sortBy(_._1)
    positionWithSpeed.foldRight(Option.empty[Double],0) {
      case ((p, s), (lastTime,count)) =>
        val time = (target - p).toDouble / s.toDouble
        if (lastTime.isEmpty || lastTime.get < time)
          (Some(time),count+1)
        else (lastTime,count)
    }._2
  }
}
```