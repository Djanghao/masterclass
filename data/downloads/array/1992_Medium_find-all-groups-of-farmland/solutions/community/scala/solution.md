# Easy solution, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5049975/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5049975/)

---

# Intuition
This is an array problem, not a graph problem. Attempting to solve it as a graph problemed resulted in an "Memory exceeded exception".

# Approach
We first cycle the aray with a nested loop and identify some land. As we know that the land groups/parcels are rectangular in shape we just need to go as much as we can down and as much as we can to the right. 

This will find the end of our parcel/group. Then we mark all our parcel with 2 in order to mark it as visited.


# Code
```
object Solution {
    
    import java.util
    import scala.collection.mutable.ListBuffer
    
      def findFarmland(land: Array[Array[Int]]): Array[Array[Int]] = {

    val result = new ListBuffer[Array[Int]]()

    for (i <- land.indices) {

      for (j <- land.head.indices) {

        if (land(i)(j) == 1) {

          val end =  findFarmlandBase((i, j), land)
          result += Array(i, j, end._1, end._2)
        }
      }
    }

    result.toArray
  }

    private def findFarmlandBase(start: (Int, Int), land: Array[Array[Int]]): (Int, Int) = {

    var down = start._1

    while (down < land.length && land(down)(start._2) == 1) {
      down += 1
    }

    var right = start._2

    while (right < land.head.length && land(start._1)(right) == 1) {
      right += 1
    }

    for (i <- start._1 until down) {
      for (j <- start._2 until right) {

        land(i)(j) = 2
      }
    }

    (down - 1, right - 1)
  }
}
```