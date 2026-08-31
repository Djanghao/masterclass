# Scala: sort + short foldLeft

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4730845/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4730845/)

---

# Code
```
object Solution {
  def largestPerimeter(nums: Array[Int]): Long = {
    nums.sortInPlace
    nums.foldLeft((0L, -1L)) {
      case ((sum, max), n) => (sum + n, if (sum > n) max.max(sum + n) else max)
    }._2      
  }
}
```