# [scala] - sliding, tails and startsWith

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/5015716/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/5015716/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```scala
object Solution {

  def countMatchingSubarrays(nums: Array[Int], pattern: Array[Int]): Int =
    nums.sliding(2).collect { case Array(n1, n2) => n2.compareTo(n1) }.toList.tails.count(_.startsWith(pattern))
}
```

The following code also succeeds.
```scala
object Solution {
  def countMatchingSubarrays(nums: Array[Int], pattern: Array[Int]): Int =
    nums.tail.zip(nums).map(_ compareTo _).toList.tails.count(_.startsWith(pattern))
}
```