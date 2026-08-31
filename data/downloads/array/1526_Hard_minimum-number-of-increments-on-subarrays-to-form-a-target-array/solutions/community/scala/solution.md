# [scala] - foldLeft

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/3405259/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/3405259/)

---

# Code
```
object Solution {
  def minNumberOperations(target: Array[Int]): Int =
    target.foldLeft((0, 0)) { case ((acc, prev), el) => (acc + math.max(0, el - prev), el) }._1
}
```