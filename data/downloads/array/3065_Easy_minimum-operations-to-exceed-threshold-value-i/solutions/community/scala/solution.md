# [scala] - count

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4823730/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4823730/)

---

```
object Solution {
  def minOperations(nums: Array[Int], k: Int): Int =
    nums.count(_ < k)
}
```