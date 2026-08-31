# [scala] - set and recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4237601/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4237601/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {

  def minOperations(nums: List[Int], k: Int): Int =
    goMin(nums.reverse, (1 to k).toSet, 0)

  def goMin(nums: List[Int], set: Set[Int], steps: Int): Int =
    if (set.isEmpty) steps
    else goMin(nums.tail, set - nums.head, steps + 1)
}
```