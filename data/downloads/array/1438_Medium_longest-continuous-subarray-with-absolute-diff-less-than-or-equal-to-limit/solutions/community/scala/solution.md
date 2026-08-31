# Scala FP: SortedSet 3 lines tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5356099/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5356099/)

---

# Code
```
object Solution {
  @annotation.tailrec
  def longestSubarray(nums: Array[Int], limit: Int, l: Int = 0, r: Int = 0, max: Int = 1)(implicit set: collection.immutable.SortedSet[(Int, Int)] = collection.immutable.SortedSet(nums.head -> 0)): Int =
    if (r == nums.length - 1) if (set.last._1 - set.head._1 <= limit) max max (r - l + 1) else max
    else if (set.last._1 - set.head._1 <= limit) longestSubarray(nums, limit, l, r + 1, max max (r - l + 1))(set.incl(nums(r + 1), r + 1))
    else longestSubarray(nums, limit, l + 1, r, max)(set.excl(nums(l), l))
}
```