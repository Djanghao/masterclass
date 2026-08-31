# Scala solution

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5446895/](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/solutions/5446895/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)

# Code
```
object Solution {
  def countSubarrays(nums: Array[Int], k: Int): Long = {
    def toBinary(n: Int) = ("0"*30 + n.toBinaryString).takeRight(30)
    val kb = toBinary(k)
    val arr = Array.fill(30)(Option.empty[Int])
    nums.foldRight((0L, nums.size - 1)) {
      case (a, (sum, i)) => // f(a) \u0438 b
        val aa = toBinary(a)
        aa.zipWithIndex.collect {
          case ('0', ii) => arr(ii) = Some(i)
        }
        case class Range(a: Int, b: Int) {
          def before(v: Int) = Range(a, v.min(b))
          def after(v: Int) = Range(v.max(a), b)
          def len = 0.max(b - a)
          def empty = Range(0,0)
        }
        val init = Range(i, nums.size)
        val s = aa.zip(kb).zipWithIndex.foldRight(init) {
          case ((('0', '0'), ii), range) => range
          case ((('0', '1'), ii), range) => range.empty
          case ((('1', '0'), ii), range) => arr(ii).map(range.after).getOrElse(range.empty)
          case ((('1', '1'), ii), range) => arr(ii).map(range.before).getOrElse(range)
        }.len
        (sum + s, i - 1)
    }._1
  }
}
```