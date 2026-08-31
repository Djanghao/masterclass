# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/constrained-subsequence-sum/solutions/4194131/](https://leetcode.com/problems/constrained-subsequence-sum/solutions/4194131/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def constrainedSubsetSum(nums: Array[Int], k: Int): Int = {
        @scala.annotation.tailrec
        def loop(i: Int, ans: Vector[Int], ind: Vector[Int], temp: Int, result: Int): Int = {
          if (i + 1 > nums.length) return (ans :+ result).max
          val t = (if(!ind.isEmpty) nums(i) + ans.head else nums(i)) max temp
          if(ans.nonEmpty && ans.last <= t) loop(i, ans.init, ind.init, t, result)
          else if(ind.nonEmpty && i - ind.head >= k) loop(i, ans.tail, ind.tail, t, (ans :+ result).max)
          else loop(i + 1, ans :+ t, ind :+ i, Int.MinValue, (ans :+ result).max)
        }
        loop(0, Vector.empty[Int], Vector.empty[Int], Int.MinValue, Int.MinValue)
  }
}
```