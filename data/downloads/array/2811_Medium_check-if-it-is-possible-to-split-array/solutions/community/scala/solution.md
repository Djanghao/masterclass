# [scala] - sliding sum >= m

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3871091/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3871091/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  def canSplitArray(nums: List[Int], m: Int): Boolean =
    nums.size < 3 || nums.sliding(2).exists(_.sum >= m)
}
```