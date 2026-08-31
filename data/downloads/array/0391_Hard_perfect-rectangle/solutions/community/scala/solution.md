# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/3464939/](https://leetcode.com/problems/perfect-rectangle/solutions/3464939/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def isRectangleCover(rectangles: Array[Array[Int]]): Boolean = {
      if(rectangles.map(_.mkString("",",","")).toSet.size != rectangles.size) return false
      val acc = rectangles.flatMap(r => Array((r(0), r(1)), (r(2), r(1)), (r(2), r(3)), (r(0), r(3)))).groupBy(identity).mapValues(_.size).filter(_._2 == 1)
      if(acc.size != 4) return false
      val x = acc.keySet.toList.map(_._1)
      val y = acc.keySet.toList.map(_._2)
      rectangles.foldLeft(0)((acc, cur) =>{
        (cur(2) - cur(0)) * (cur(3) - cur(1)) + acc
      }) == (x.max - x.min) * (y.max - y.min)
    }
}
```