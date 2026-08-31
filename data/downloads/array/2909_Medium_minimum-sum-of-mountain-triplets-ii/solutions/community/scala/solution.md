# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4352016/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4352016/)

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
  def minimumSum(nums: Array[Int]): Int = {
    val right = nums.scanRight(nums.last)(_ min _)
    val left = nums.scan(nums.head)(_ min _)
    scala.util.Try((left zip nums zip right)
      .map(n => (n._1._1, n._1._2, n._2))
      .filter(n => (n._1 < n._2) && (n._2 > n._3))
      .map(n => n._3 + n._2 + n._1)
      .min)
      .getOrElse(-1)
  }
}
```