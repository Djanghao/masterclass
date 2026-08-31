# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/4359337/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/4359337/)

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
  def minSumOfLengths(arr: Array[Int], target: Int): Int = {
    val n = arr.size
    val dp = Array.fill(n)(Int.MaxValue / 2)
    val ans = scala.collection.mutable.ListBuffer.empty[Int]

    def f(left: Int, right: Int, cur: Int, flag: Boolean): List[Int] = {
      if(right == n) return ans.toList
      val sum = if(flag) cur + arr(right) else cur
      if (left <= right && sum > target) return f(left + 1, right, sum - arr(left), false)
      else if (sum == target) {
        dp(right) = right - left + 1
        if (left != 0) ans append (dp(left - 1) + dp(right))
      }
      if (right != 0) {
        dp(right) = dp(right - 1) min dp(right)
      }
      f(left, right + 1, sum, true)
    }

    f(0, 0, 0, true)
    if (ans.isEmpty || ans.min > n) -1 else ans.min
  }
}
```