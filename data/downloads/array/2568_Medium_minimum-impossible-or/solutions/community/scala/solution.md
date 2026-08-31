# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/5270694/](https://leetcode.com/problems/minimum-impossible-or/solutions/5270694/)

---

```scala
object Solution {
  def minImpossibleOR(nums: Array[Int]): Int =
    val set = nums.to(Set)
    (0 to 30).map(1 << _).find(!set.contains(_)).getOrElse(-1)
}
```