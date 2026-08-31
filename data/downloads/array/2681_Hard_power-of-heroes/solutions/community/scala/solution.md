# [scala] - foldLeft

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3824668/](https://leetcode.com/problems/power-of-heroes/solutions/3824668/)

---

# Code
```
object Solution {
  def sumOfPower(nums: Array[Int]): Int =
    nums.sorted.foldLeft((0L, 0L)) { case ((acc, sum), n) => (m(acc + m((sum + n) * n) * n), m(sum * 2 + n)) }._1.toInt

  private def m(a: Long) = a % 1000000007
}
```