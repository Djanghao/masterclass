# Scala 1 line

**Author:** keylou
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/4460551/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/4460551/)

---

# Code
```
object Solution {
  def pivotArray(nums: Array[Int], pivot: Int): Array[Int] = {
    nums.sortBy(_ == pivot).sortBy(_ > pivot)
  }
}
```