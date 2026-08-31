# [Scala] Concise functional solution using scanLeft & scanRight

**Author:** cosminci
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-or/solutions/3523646/](https://leetcode.com/problems/maximum-or/solutions/3523646/)

---

# Code
```
object Solution {
  def maximumOr(nums: Array[Int], k: Int): Long = {
    val prefixOr = nums.scanLeft(0L)(_ | _)
    val suffixOr = nums.scanRight(0L)(_ | _)
    nums.indices.map(i => prefixOr(i) | (nums(i).toLong << k) | suffixOr(i + 1)).max
  }
}
```