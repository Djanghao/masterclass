# [scala] - partition & Set.contains

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2723214/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2723214/)

---

```scala
def findMaxK(nums: Array[Int]): Int = {
  val (negative, positive) = nums.partition(_ < 0)
  val negativeSet = negative.toSet
  positive.filter(i => negativeSet.contains(-i)).maxOption.getOrElse(-1)
}
```