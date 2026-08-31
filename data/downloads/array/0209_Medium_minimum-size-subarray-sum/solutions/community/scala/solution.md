# Scala

**Author:** eugene-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/3725977/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/3725977/)

---

```
object Solution {
  def minSubArrayLen(target: Int, nums: Array[Int]): Int = {

    @annotation.tailrec
    def slide(l: Int, r: Int, sum: Int, minLen: Int): Int = {
      if (sum < target) {
        if (r < nums.length) slide(l, r + 1, sum + nums(r), minLen)
        else minLen
      } else {
        slide(l + 1, r, sum - nums(l), Math.min(minLen, r - l))
      }
    }

    slide(0, 0, 0, Int.MaxValue) match {
      case Int.MaxValue => 0
      case i => i
    }
  }
}

```