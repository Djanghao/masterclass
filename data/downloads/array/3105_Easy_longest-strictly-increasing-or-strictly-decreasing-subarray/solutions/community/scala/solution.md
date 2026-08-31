# [scala] - foldLeft and reverse

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4989114/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4989114/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {

  def longestMonotonicSubarray(nums: Array[Int]): Int =
    math.max(incr(nums), incr(nums.reverse))

  def incr(nums: Array[Int]): Int = 
    nums.tail.foldLeft((1, 1, nums.head)) { case ((len, max, prev), num) =>
      if (prev < num) (len + 1, math.max(max, len + 1), num) else (1, max, num)
    }._2
}
```